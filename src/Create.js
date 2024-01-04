/**@type {cc.Layer} 创建界面 */
let CreateLayer = cc.Layer.extend({
    /**当前保存的相关数据 */
    data: {
        /**@type {String} 比赛名称 */
        name: "比赛名称",
        /**@type {{String: Number}} 玩家名称对应分数 */
        player: {
            "玩家1名称": 0,
            "玩家2名称": 1,
        },
        /**@type {[String, String, Number, Boolean][]} 对局数据，
         * 外面大列表表示全部，里面表示每轮，第三位表示对局类型，
         * 最后一位表示第1位玩家是否胜出，如果没有则表示该局未结束 */
        game: [
            [
                ["玩家1名称", "玩家2名称", 0, true],
                ["玩家2名称", "玩家1名称", 1],
            ],
        ],
        /**@type {Number[3]} 对局规则得分，
         * 各位置，0表示胜场得分，1表示平场，2表示败场 */
        type: [
            [3, 1, 0],
            [1, 0, -1],
        ],
    },
    /**@type {(cc.Node|ccui.Layout)[]} 主界面左侧菜单选项 */
    leftList: [],
    /**@type {(cc.Node|ccui.Layout)[]} 中部显示内容选项 */
    centerList: [],
    /**@type {{name: String, score: Number}} 当前修改玩家的数据，临时数据 */
    playerData: {
        /**@type {String} 名称 */
        name: "玩家1名称",
        /**@type {Number} 分数 */
        score: 0,
    },
    /**创建方法
     * @param {Object} data 保存数据，如果没有则表示是创建
     * @returns {boolean}
     */
    ctor: function (data = {}) {
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        // var size = cc.winSize;

        let mainScene = ccs.load(res.Main1Scene_json);
        let Scene = mainScene.node;
        this.addChild(Scene);

        /* you can create scene with following comment code instead of using csb file.
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
        */

        //保存到缓存中
        this.initData(data);
        this.initUi(Scene);

        return true;
    },
    initData: function (data) {
        this.data = data ? data : {
            /**@type {String} 比赛名称 */
            name: "比赛名称",
            /**@type {{String: Number}} 玩家名称对应分数 */
            player: {},
            /**@type {[String, String, Number, Boolean][]} 对局数据，
             * 外面大列表表示全部，里面表示每轮，第三位表示对局类型，
             * 最后一位表示第1位玩家是否胜出，如果没有则表示该局未结束 */
            game: [],
            /**@type {Number[3]} 对局规则得分，
             * 各位置，0表示胜场得分，1表示平场，2表示败场 */
            type: [],
        };
        this.playerData = {};
    },
    /**初始化ui
     * @param {cc.Node} Scene 主界面ui节点
     */
    initUi: function (Scene) {
        let main = Scene.getChildByName("main");
        /**@type {ccui.Button} */
        let exit = main.getChildByName("exit");
        exit.addTouchEventListener(this.Exit, this);

        this.initUi_Center(main);
        this.initUi_Left(main);
    },
    Exit: function (sender, type = 2) {
        if (type !== 2) return;
        //移除这个界面
        this.removeFromParent();
    },
    /**初始化中部ui
     * @param {ccui.Layout|cc.Node} main 主界面基础容器
     */
    initUi_Center: function (main) {
        /**@type {ccui.Layout|cc.Node} 中部容器 */
        let center = main.getChildByName("Center");
        /**@type {Function[]} 各面板初始化方法 */
        let funcList = [
            /**比赛名称面板
             * @param pan 比赛名称面板
             */
            function (pan) {
                /**相关数据 */
                let data = this.data;
                if (!pan._init) {
                    /**@type {ccui.TextField|cc.Node} 比赛名称文本输入框 */
                    pan._gameName = pan.getChildByName("pan_textField").getChildByName("gameName");

                    /**@type {ccui.Button|cc.Node} 创建按钮 */
                    let but = pan.getChildByName("but");
                    pan._but = but;
                    but.addTouchEventListener(function (sender, type) {
                        if (type !== 2) return;
                        let gameNameText = gameName.getString();
                        if (gameNameText) {
                            let oldGameName = data.name;
                            if (oldGameName !== gameNameText) {
                                this.data.name = gameNameText;
                            }
                        }
                    }, this);

                    /**@type {Boolean} 是否已经初始化 */
                    pan._init = true;
                }
                /**@type {ccui.TextField} 比赛名称 */
                let gameName = pan._gameName;
                /**@type {String} 获得当前比赛的名称 */
                let gameNameText = data.name;
                //初始化清空
                if (gameName.getString() !== gameNameText) gameName.setString(gameNameText);

                /**@type {ccui.Button} 创建按钮 */
                let but = pan._but;
                /**@type {String} 按钮文本 */
                let butText = !gameNameText ? "创建" : "修改";
                //设置对应文本
                if (but.getTitleText() !== butText) but.setTitleText(butText);
            },
            /**玩家信息面板
             * @param {ccui.Layout|cc.Node} pan 玩家信息面板
             */
            function (pan) {
                if (!pan._init) {
                    //右侧ui
                    /**@type {ccui.Layout|cc.Node} 右侧面板 */
                    let right = pan.getChildByName("right");
                    pan._text0 = right.getChildByName("text0");
                    pan._id = right.getChildByName("id");

                    //玩家名称
                    /**@type {ccui.TextField} 玩家姓名文本输入框 */
                    let name = right.getChildByName("name");
                    pan._name = name;

                    //分数
                    /**@type {ccui.TextField} 分数文本输入框 */
                    let score = right.getChildByName("score");
                    pan._score = score;

                    //保存ui
                    /**添加按钮 */
                    right.getChildByName("set").addTouchEventListener(function (sender, type) {
                        if (type !== 2) return;
                        let nameStr = name.getString();
                        if (!nameStr) {
                            this.addChild(new MsgLayer("!请输入玩家名称"));
                            return;
                        }
                        let scoreStr = Number(score.getString());
                        if (!scoreStr) {
                            this.addChild(new MsgLayer("!请输入正确的分数"));
                            return;
                        }
                        this.playerData = {
                            name: nameStr,
                            score: scoreStr,
                        };
                        if ("player" in this.data) this.data["player"] = {};
                        this.data.player[nameStr] = scoreStr;
                    }, this);

                    //添加
                    /**添加新玩家按钮 */
                    right.getChildByName("add").addTouchEventListener(function (sender, type) {
                        if (type !== 2) return;
                        if (name.getString() !== "") name.setString("");
                        if (score.getString() !== "0") score.setString("0");
                        this.playerData = {
                            "name": "",
                            "score": 0,
                        }
                    }, this);

                    //左侧
                    /**@type {ccui.Layout|cc.Node} 左侧面板 */
                    let left = pan.getChildByName("left");
                    /**@type {ccui.ListView|cc.Node} 玩家列表容器 */
                    let list = left.getChildByName("playerList");
                    /**@type {ccui.Layout|cc.Node} 玩家信息容器示例 */
                    list._item = left.getChildByName("item");
                    pan._list = list;

                    /**@type {Boolean} 初始化完毕 */
                    pan._init = true;
                }

                //编号
                // let text0 = pan._text0;
                let id = pan._id;
                // //test显示看看
                // for (let _node of [text0, id]) _node.setVisible(false);
                let _tempNum = "";
                if (id.getString() !== _tempNum) id.setString(_tempNum);

                let tempData = this.playerData;

                //玩家名称
                /**@type {String} 玩家名称 */
                let nameStr = tempData.name;
                nameStr = nameStr ? nameStr : "";
                /**@type {ccui.TextField} 玩家名称输入框 */
                let name = pan._name;
                if (name.getString() !== nameStr) name.setString(nameStr);

                //分数
                /**@type {ccui.TextField} */
                let score = pan._score;
                /**@type {String|Number} */
                let scoreStr = tempData.score;
                scoreStr = scoreStr ? scoreStr.toString() : "0";
                if (score.getString() !== scoreStr) score.setString(scoreStr);

                //左侧
                /**@type {ccui.ListView|cc.Node} 玩家列表容器 */
                let playerList = pan._list;
                //清空之前的item
                if (playerList._list) playerList.removeAllChildren();
                /**@type {ccui.Layout|cc.Node} 玩家信息容器示例 */
                let item = playerList._item;
                /**@type {(ccui.Layout|cc.Node)[]} 玩家列表内容 */
                let playerListData = [];
                /**@type {{String: Number}} 玩家名称对应分数 */
                let playerData = this.data.player;
                /**@type {Number} 添加的玩家总数 */
                let playerCount = playerData ? Object.keys(playerData).length : 0;
                //判空
                if (playerCount) {
                    //开始显示这个示例
                    item.setVisible(true);
                    let _index = 0;
                    //创建全部数据
                    for (let [playerName, playerScore] of Object.entries(playerData)) {
                        /**@type {String} 分数 */
                        playerScore = playerScore.toString();
                        /**@type {String} 编号 */
                        let _indexStr = _index.toString();

                        /**@type {ccui.Layout|cc.Node} 玩家信息容器 */
                        let _item = item.clone();

                        //编号 按钮左侧
                        /**@type {ccui.Text} 玩家编号 */
                        let _id = _item.getChildByName("id");
                        // //test暂时隐藏
                        // _id.setVisible(false);
                        _id.setString(_indexStr);
                        _item._id = _id;

                        //按钮
                        /**@type {ccui.Button} 玩家信息交互按钮 */
                        let but = _item.getChildByName("but");
                        /**点击玩家按钮显示的相关数据 */
                        but._data = {
                            /**@type {String} 编号 */
                            num: _indexStr,
                            /**@type {String} 名称 */
                            name: playerName,
                            /**@type {String} 分数 */
                            score: playerScore,
                        };
                        but.addTouchEventListener(function (sender, type) {
                            if (type !== 2) return;

                            /**@type {but._data|{num: String, name: String, score: String}} */
                            let data = sender._data;

                            //编号
                            if (id.isVisible()) {
                                let _num = data.num;
                                if (id.getString() !== _num) id.setString(_num);
                            }

                            //姓名
                            let _nameStr = data.name;
                            if (name.getString() !== _nameStr) name.setString(_nameStr);

                            //分数
                            let _scoreStr = data.score;
                            if (score.getString() !== _scoreStr) score.setString(_scoreStr);
                        }, this);
                        //按钮文本
                        if (but.getTitleText() !== playerName) but.setTitleText(playerName);
                        _item._but = but;

                        //分数 按钮右侧
                        let _score = _item.getChildByName("score")
                        _score.setString(playerScore);
                        _item._score = _score;

                        //保存到缓存中
                        playerListData.push(_item);
                        _index++;
                    }
                }
                //隐藏示例
                item.setVisible(false);
                playerList._list = playerListData;
            },
            //todo: 面板2/3/4
            /**规则添加面板
             * @param pan 规则添加面板
             */
            function (pan) {
                //初始化
                if (!pan._init) {
                    //todo: 规则内容设置右侧
                    // score
                }
                //刷新
            },
        ];
        //循环所有的内容面板
        for (let i = 0; i < center.getChildrenCount(); i++) {
            /**@type {ccui.Layout|cc.Node} 显示的内容选项基础容器 */
            let child = center.getChildByName("pan" + i);
            //初始化显示第一个
            child.setVisible(i === 0);
            let _func = funcList[i];
            if (_func) (_func.bind(this))(child);
            //添加到内容
            this.centerList.push(child);
        }
    },
    /**初始化左侧ui
     * @param {ccui.Layout|cc.Node} main 主界面基础容器
     */
    initUi_Left: function (main) {
        /**@type {ccui.Layout|cc.Node} 左侧容器 */
        let left = main.getChildByName("Left");
        /**@type {ccui.ListView|cc.Node} 左侧选项列表 */
        let menuList = left.getChildByName("menuList");
        let butList = [
            //todo: 左侧面板ui按钮点击逻辑
            function () {

            },
        ];
        //循环所有的选项
        for (let i = 0; i < menuList.getChildrenCount(); i++) {
            /**@type {ccui.Layout|cc.Node} 对应菜单选项基础容器 */
            let child = menuList.getChildByName("item" + i);
            /**@type {ccui.Button|cc.Node} 对应按钮 */
            let but = child.getChildByName("but");
            /**@type {Number} 保存下标位置到按钮中 */
            but._ind = i;
            child._but = but;
            this.leftList.push(child);
        }
    },
});
