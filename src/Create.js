/**@type {cc.Layer} 创建界面 */
let CreateLayer = cc.Layer.extend({
    /**当前保存的相关数据 */
    data: {
        /**@type {String} 比赛名称 */
        name: "比赛名称",
        /**@type {String: Number} 玩家名称对应分数 */
        player: {
            "玩家1名称": 0,
            "玩家2名称": 1,
        },
        /**@type {([String, String, Number, Number])[]} 对局数据，
         * 外面大列表表示全部，里面表示每轮，第三位表示对局类型，
         * 最后一位表示第1位对局情况，如果没有则表示该局未结束
         * 0表示玩家1胜利，1表示玩家2胜利，2表示平局*/
        game: [
            [
                //玩家1胜利，以第0个规则
                ["玩家1名称", "玩家2名称", 0, 0],
                //未结束，以第1个规则
                ["玩家2名称", "玩家1名称", 1],
            ],
        ],
        /**@type {Number[][]} 对局规则得分，
         * 各位置，0表示胜场得分，1表示平场，2表示败场 */
        type: [
            //胜得3分，平各得1分，败不扣分。显示胜3平1
            [3, 1, 0],
            //赢1分，败扣1分。显示胜1负-1
            [1, 0, -1],
        ],
        /**@type {String: String[]} 玩家对战过的玩家，不会再遇见 */
        against: {
            //玩家1跟玩家2对战过
            "玩家1名称": ["玩家2名称"],
            //玩家2跟玩家1和玩家3对战过
            "玩家2名称": ["玩家1名称", "玩家3名称"],
        },
        /**@type {Number: String[]} 分段。只会跟自己分数相近的人对局 */
        level: {
            //玩家1和玩家2的分段是3
            3: ["玩家1名称", "玩家2名称"],
            //玩家3的分段是1
            1: ["玩家3名称"],
        },
    },
    /**@type {(cc.Node|ccui.Layout)[]} 主界面左侧菜单选项 */
    leftList: [],
    leftListFunc: function () {
    },
    /**@type {(cc.Node|ccui.Layout)[]} 中部显示内容选项 */
    centerList: [],
    centerListFunc: [],
    /**@type {{name: String, score: Number}} 当前修改玩家的数据，临时数据 */
    playerData: {
        /**@type {String} 名称 */
        name: "玩家1名称",
        /**@type {Number} 分数 */
        score: 0,
    },
    /**@type {Number[]} 对局规则 */
    gameDate: [1, 0, -1],
    /**@type {Number} 当前对局序号。当前this.data.game[第几场][currentGame] */
    currentGame: -1,
    saveGameNameFileName: "SwissSystem_wt_saveName",
    /**创建方法
     * @param {Object} data 保存数据，如果没有则表示是创建
     * @returns {boolean}
     */
    ctor: function (data = null) {
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
        if (type !== 2 || this.data?.name === this.saveGameNameFileName) return;
        //保存功能
        this.Save();

        //移除这个界面
        this.removeFromParent();
    },
    /**保存数据 */
    Save: function () {
        this.addChild(new MsgLayer("开始保存中"));
        /**关键数据 */
        let data = this.data;
        /**游戏名称 */
        let name = this.data?.name;
        //判空，然后保存数据
        if (name) {
            cc.sys.localStorage.setItem(name, JSON.stringify(data))
            let saveName = this.saveGameNameFileName
            let gameList = UtilWt.cc.sys.localStorage.getList(saveName);
            if (!(name in gameList)) {
                gameList.push(name);
                UtilWt.cc.sys.localStorage.setList(saveName, gameList);
            }
        }

        this.addChild(new MsgLayer("保存结束"));
    },
    /**初始化中部ui
     * @param {ccui.Layout|cc.Node} main 主界面基础容器
     */
    initUi_Center: function (main) {
        /**@type {ccui.Layout|cc.Node} 中部容器 */
        let center = main.getChildByName("Center");
        /**胜利方法
         * @param type {Number}
         */
        let winFunc = function (type) {
            let data = this.data.game;
            data[data.length - 1][this.currentGame][3] = type;
        };
        /**@type {Function[]} 各面板初始化方法 */
        let funcList = this.centerListFunc = [
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
                        if (!scoreStr || scoreStr !== 0) {
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
                playerList.removeAllChildren();
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
                        playerList.addChild(_item);
                        _index++;
                    }
                }
                //隐藏示例
                item.setVisible(false);
                playerList._list = playerListData;
            },
            /**规则添加面板
             * @param pan 规则添加面板
             */
            function (pan) {
                //初始化
                if (!pan._init) {
                    //规则内容设置右侧
                    let right = pan.getChildByName("right");
                    let score0 = right.getChildByName("score0");
                    let score1 = right.getChildByName("score1");
                    let score2 = right.getChildByName("score2");
                    let _scoreList = pan._scoreList = [score0, score1, score2]

                    let add = right.getChildByName("add");
                    add.addTouchEventListener(function (sender, type) {
                        if (type !== 2) return;
                        //添加到缓存数据中
                        let scoreList = [];
                        let isOut = {};
                        for (let i = 0; i < _scoreList.length; i++) {
                            let _node = _scoreList[i];
                            let _str = _node.getString();
                            if (_str !== "") {
                                _str = Number(_str);
                                if (isNaN(_str)) {
                                    isOut[i] = _node.getString();
                                    continue;
                                }
                            } else {
                                isOut[i] = _str;
                                continue;
                            }
                            if (isOut.length === 0) scoreList.push(_str);
                        }
                        if (isOut.length > 0) {
                            let _showStr = "输入分数有误，当前：";
                            for (let [index, _outStr] of Object.entries(isOut)) {
                                _showStr += "第" + index.toString() +
                                    "个输入框输入的数字有误，内容为：" +
                                    (_outStr ? ("（" + _outStr + "）") : "（未输入）")
                                    + "; "
                            }
                            this.addChild(new MsgLayer(_showStr))
                            return;
                        }
                        this.gameDate = scoreList;
                        // if (!this.data.type) this.data.type = [];
                        this.data.type.push(scoreList);

                        //刷新
                        funcList[2](pan);
                        //移动滚动容器中的内容到最上方
                        typeList.scrollToTop(0.01, true);
                    }, this);
                    pan._add = add;

                    //左侧
                    let left = pan.getChildByName("left");
                    /**@type {ccui.ListView|cc.Node} */
                    let typeList = left.getChildByName("typeList");
                    typeList._item = left.getChildByName("item");
                    pan._list = typeList;
                }
                //刷新
                /**@type {Number[]} 对局规则 */
                let typeData = this.gameDate;
                /**@type {String[]} 显示文本，胜平负的分数 */
                let listData = typeData ?
                    typeData.map(item => item.toString()) :
                    new Array(typeData.length).fill("");

                /**胜平负的分数 文本输入框控件 列表 */
                let scoreList = pan._scoreList;
                /**刷新分数文本框
                 * @param {listData|String[]} listData 刷新的数据
                 */
                let resultScore = function (listData) {
                    for (let i = 0; i < scoreList.length; i++) {
                        let _node = scoreList[i];
                        let _str = listData[i];
                        cc.log(_node);
                        cc.log(typeof _node);
                        if (_node.getString() !== _str) _node.setString(_str);
                    }
                }
                //刷新一次，按照传入数据
                resultScore(listData);

                //左侧
                /**@type {String[]|listData} 当前载入的数据 */
                let typeDataList = this.data.type;
                /**@type {cc.Node|ccui.ListView} 左侧 滚动列表容器中 */
                let typeList = pan._list;
                //先清空滚动列表容器中的所有子控件
                typeList.removeAllChildren();
                //判断当前是否有载入数据
                if (typeDataList) {
                    /**@type {cc.Node|ccui.Layout} 列表容器的子控件 示例 */
                    let item = typeList._item;
                    /**@type {(item)[]} 列表容器的所有子控件 列表 */
                    typeList._list = [];
                    //根据数据创建所有的子控件
                    for (let i = 0; i < typeDataList.length; i++) {
                        /**@type {item|cc.Node|ccui.Layout} 克隆一个示例 */
                        let _item = item.clone();
                        /**@type {Number[]} 对应的数据，胜平负的分数 */
                        let _data = typeDataList[i];
                        /**@type {ccui.Button} 点击按钮 */
                        let but = _item.getChildByName("but");
                        /**@type {String} 按钮上的文本 */
                        let _showStr = "";
                        //理论上循环3次
                        for (let i = 0; i < _data.length; i++) {
                            /**@type {Number} 当前胜负对应的分数 */
                            let _score = _data[i];
                            //设定为如果不为0，则显示对应的文本。胜1平-1负-2，如果平为0（胜1负-2）
                            if (_score) _showStr += "胜平负"[i] + _score.toString();
                        }
                        //如果所有的分数都为0，则显示这个
                        _showStr = _showStr ? _showStr : "无分";
                        /**@type {{index: Number, score: Number[]}} 按钮需要绑定的相关参数 */
                        but._data = {
                            /**@type {Number} 当前按钮对应的数据序号 */
                            index: i,
                            /**@type {Number[]} 当前按钮对应的规则 胜平负分数 */
                            score: _data,
                        };
                        //点击对应规则
                        but.addTouchEventListener(function (sender, type) {
                            if (type !== 2) return;
                            //右侧面板显示对应规则分数
                            resultScore(sender._data.score);
                        }, this);
                        _item._but = but;

                        /**@type {ccui.Button} 按钮上的删除按钮 */
                        let del = but.getChildByName("del");
                        /**@type {Number} 保存对应数据的序号，用来删除 */
                        del._index = i;
                        //删除对应规则数据
                        del.addTouchEventListener(function (sender, type) {
                            if (type !== 2) return;
                            //删除当前规则
                            this.data.type.splice(sender._index);
                            //刷新页面
                            funcList[2](pan);
                            //移动滚动容器中的内容到最上方
                            typeList.scrollToTop(0.01, true);
                        }, this);
                        _item._del = del;

                        //添加这个规则到左侧面板上
                        typeList.addChild(_item);
                        //保存到缓存中方便调用
                        typeList._list.push(_item);
                    }
                }
            },
            /**对局面板
             * @param pan 对局面板
             */
            function (pan) {
                //初始化
                if (!pan._init) {
                    //左侧
                    /**@type {cc.Node|ccui.Layout} 左侧面板 */
                    let left = pan.getChildByName("left");
                    /**@type {cc.Node|ccui.ListView} 滚动列表容器 */
                    let gameList = left.getChildByName("gameList");
                    /**@type {cc.Node|ccui.Layout} 列表容器示例 */
                    gameList._item = left.getChildByName("item");
                    pan._list = gameList;

                    //右侧
                    /**@type {cc.Node|ccui.Layout} 右侧面板 */
                    let right = pan.getChildByName("right");
                    //先隐藏
                    right.setVisible(false);
                    /**@type {cc.Node|ccui.Button} 玩家1胜利 */
                    let win1p = right.getChildByName("1pWin");
                    /**@type {cc.Node|ccui.Button} 玩家2胜利 */
                    let win2p = right.getChildByName("2pWin");
                    /**@type {(ccui.Button|cc.Node)[]} 玩家名称按钮列表 */
                    let _playerList = pan._playerList = [win1p, win2p];
                    // //循环清空玩家名称
                    // for (let _node of _playerList) if (_node.getTitleText() !== "") _node.setTitleText("");
                    let newList = _playerList.slice(); // 创建一个新数组，它是_playerList的浅复制
                    /**@type {cc.Node|ccui.Button} 平局 */
                    let winNo = pan._winNo = right.getChildByName("noWin");
                    newList.push(winNo); // 在新数组后面添加一个元素
                    //玩家胜利按钮
                    for (let i = 0; i < newList.length; i++) {
                        /**@type {ccui.Button} 对应玩家按钮或者平局按钮 */
                        let _but = newList[i];
                        /**@type {Number} 当前点击的按钮序号 */
                        _but._index = i;
                        //点击对应按钮的逻辑，谁胜利
                        _but.addTouchEventListener(function (sender, type) {
                            if (type !== 2) return;
                            //使用通用胜利方法，会改变缓存中的数据
                            winFunc(sender._index);

                            //隐藏右边面板
                            right.setVisible(false);
                            //刷新页面
                            funcList[3](pan);
                        }, this);
                    }
                    pan._right = right;

                    /**@type {cc.Node|ccui.Button} 开始新一场的按钮 */
                    let start = pan.getChildByName("start");
                    start.addTouchEventListener(function (sender, type) {
                        if (type !== 2) return;

                        /**@type {([String, String, Number, Boolean])[]} 玩家对局 */
                        let _gameList = [];

                        /**@type {String[]} 已经配队的玩家 */
                        let outPlayer = [];
                        /**@type {[Number, String[]]} 水平等级，按照分数高到低 [分数, [玩家名称,...]] */
                        let levelData = Object.entries(this.data.level).sort(
                            (a, b) =>
                                b[0] - a[0]);
                        //循环所有的水平等级
                        for (let [score, playerList] of levelData) {
                            //循环当前等级的所有玩家
                            for (let player of playerList) {
                                //已经匹配过
                                if (player in outPlayer) continue;

                                //判断当前玩家是否在当前这个水平上可以匹配到玩家
                                /**@type {String[]} 获得当前玩家之前对战过的数据 */
                                let data = this.data.against[player];
                                data = data ? data : [];

                                //开始匹配
                                /**获得列表中一个随机的玩家
                                 * @param {String[]} playerList 玩家列表
                                 * @returns {String[]|*|null} 玩家名称，或者没有玩家返回null
                                 */
                                let randomPlayer = function (playerList) {
                                    /**@type {Number} 当前列表中的玩家数量 */
                                    let playerCount = playerList.length;
                                    //判断当前列表中是否没有存在玩家了
                                    if (!playerCount) return null;

                                    /**@type {String} 获得一个当前列表中的随机玩家 */
                                    let randomElement = playerList[Math.floor(Math.random() * playerCount)];

                                    //之前没有对战过，返回这个玩家
                                    if (!(randomElement in data) && !(randomElement in outPlayer)) return randomElement;

                                    //对战过
                                    //移除这个玩家
                                    playerList.filter(item => item !== randomElement);
                                    //然后递归这个方法
                                    return randomPlayer(playerList);
                                }
                                //先匹配同水平玩家
                                let vsPlayer = "";
                                for (let [_score, _playerList] of levelData) {
                                    if (_score <= score) {
                                        if (_score === score) {
                                            /**@type {String[]} 移除当前玩家 */
                                            _playerList = _playerList.filter(item => item !== player);
                                        }
                                        vsPlayer = randomPlayer(_playerList);
                                        if (vsPlayer) break;
                                    }
                                }
                                if (vsPlayer) {
                                    //添加到匹配过
                                    outPlayer.push(vsPlayer);
                                    //添加到对战过
                                    for (let [p1, p2] of [
                                        [player, vsPlayer], [vsPlayer, player]
                                    ]) {
                                        if (!this.data.against[p1]) this.data.against[p1] = [];
                                        this.data.against[p1].push(p2);
                                    }
                                    // if (!this.data.against[player]) this.data.against[player] = [];
                                    // this.data.against[player].push(vsPlayer);
                                    // if (!this.data.against[vsPlayer]) this.data.against[vsPlayer] = [];
                                    // this.data.against[vsPlayer].push(player);

                                    //添加玩家对局
                                    _gameList.push([player, vsPlayer]);
                                } else {
                                    //test理论上应该不会到这里
                                    let errorText = "玩家：" + player + " 没有获得对战对手";
                                    try {
                                        throw new Error(errorText);
                                    } catch (error) {
                                        console.error(error);
                                    }
                                    this.addChild(new MsgLayer(errorText));
                                }
                                outPlayer.push(player);
                            }
                        }

                        //保存全部玩家对局到缓存中
                        this.data.game.push(_gameList);

                        //刷新
                        funcList[3](pan);
                        //移动滚动容器中的内容到最上方
                        gameList.scrollToTop(0.01, true);
                    }, this);
                    pan._start = start;
                }

                //刷新
                //左侧列表容器
                let gameList = pan._list;
                //清除之前的内容
                gameList.removeAllChildren();
                //左侧列表容器 的内容示例
                let item = gameList._item;
                //先显示示例
                item.setVisible(true);
                /**@type {[String, String, Number, Boolean][]} 对局数据 */
                let dataList = this.data.game;
                /**右侧面板*/
                let right = pan._right;
                //循环所有的对局
                for (let i = 0; i < dataList.length; i++) {
                    let data = dataList[i];
                    //未结束对局，test暂时改为只添加了对战双方玩家数据时，没有添加规则
                    if (data.length <= 2) {
                        //克隆一个示例
                        /**@type {cc.Node|ccui.Layout} */
                        let _item = item.clone();

                        /**@type {ccui.Text} */
                        let name1 = _item.getChildByName("1p");
                        let player1 = data[0];
                        if (name1.getString() !== player1) name1.setString(player1);

                        /**@type {ccui.Text} */
                        let name2 = _item.getChildByName("2p");
                        let player2 = data[1];
                        if (name2.getString() !== player2) name2.setString(player2);

                        /**@type {ccui.Button} */
                        let but = _item.getChildByName("but");
                        // but._data = data;
                        /**@typedef {{player1: String, player2: String, index: Number}} butData 保存按钮相关数据到缓存中 */
                        but._data = {
                            /**@type {String} 玩家1名称 */
                            player1: player1,
                            player2: player2,
                            /**@type {Number} 当前对局序号 */
                            index: i,
                        };
                        but.addTouchEventListener(function (sender, type) {
                            if (type !== 2) return;
                            //将点击的数据显示到右边面板
                            /**@type {butData} */
                            let data = sender._data;
                            /**@type {String} 玩家1名称 */
                            let player1 = data.player1;
                            /**@type {String} 玩家2名称 */
                            let player2 = data.player2;
                            /**@type {ccui.Button} 对应玩家的按钮 */
                            let [win1p, win2p] = pan._playerList;
                            for (let [_player, _node] of
                                [[player1, win1p], [player2, win2p]]) {
                                //对应按钮显示对应数据
                                if (_node.getTitleText() !== _player) _node.setTitleText(_player);
                            }

                            //保存当前对局相关参数到缓存中
                            this.currentGame = data.index;

                            //显示右侧
                            right.setVisible(true);
                        }, this);

                        //添加到列表容器中
                        gameList.addChild(_item);
                    }
                }
                //隐藏示例
                item.setVisible(false);
                //移动滚动容器中的内容到最上方
                gameList.scrollToTop(0.01, true);
            },
            /**结束面板
             * @param pan
             */
            function (pan) {
                //初始化
                if (!pan._init) {
                    //右侧
                    /**@type {ccui.Layout|cc.Node} 右侧面板 */
                    let right = pan.getChildByName("right");
                    /**@type {ccui.Layout|cc.Node} 玩家分数列表面板 */
                    let pan0 = right.getChildByName("pan0");
                    //初始显示这个面板
                    pan0.setVisible(true);
                    //之前可能被隐藏
                    pan.setVisible(true);
                    /**@type {ccui.ListView|cc.Node} 玩家分数列表容器 */
                    let _playerList = pan0.getChildByName("playerList");
                    /**@type {ccui.Layout|cc.Node} 玩家分数面板 */
                    _playerList._item = pan0.getChildByName("item");
                    pan._playerList = _playerList;

                    /**@type {ccui.Layout|cc.Node} 对局更改界面 */
                    let pan1 = right.getChildByName("pan1");
                    //初始隐藏这个面板，当点击左侧数据后显示这个
                    pan1.setVisible(false);
                    /**@type {cc.Node|ccui.Button} 玩家1胜利 */
                    let win1p = pan1.getChildByName("1pWin");
                    /**@type {cc.Node|ccui.Button} 玩家2胜利 */
                    let win2p = pan1.getChildByName("2pWin");
                    /**@type {(ccui.Button|cc.Node)[]} 玩家名称按钮列表 */
                    let _list = pan._butplayerList = [win1p, win2p];
                    // //循环清空玩家名称
                    // for (let _node of _list) if (_node.getTitleText() !== "") _node.setTitleText("");
                    /**@type {cc.Node|ccui.Button} 平局 */
                    let winNo = pan._winNo = pan1.getChildByName("noWin");

                    let newList = _list.slice(); // 创建一个新数组，它是_playerList的浅复制
                    newList.push(winNo); // 在新数组后面添加一个元素
                    //玩家胜利按钮
                    for (let i = 0; i < newList.length; i++) {
                        /**@type {ccui.Button} 对应玩家按钮或者平局按钮 */
                        let _but = newList[i];
                        /**@type {Number} 当前点击的按钮序号 */
                        _but._index = i;
                        //点击对应按钮的逻辑，谁胜利
                        _but.addTouchEventListener(function (sender, type) {
                            if (type !== 2) return;
                            //使用通用胜利方法，会改变缓存中的数据
                            winFunc(sender._index);

                            //隐藏胜负面板
                            pan0.setVisible(true);
                            //显示玩家分数面板
                            pan1.setVisible(false);
                            //刷新页面
                            funcList[4](pan);
                        }, this);
                    }

                    //结束按钮
                    /**@type {ccui.Button} 结束本局按钮 */
                    let over = pan._over = pan0.getChildByName("over");
                    over.addTouchEventListener(function (sender, type) {
                        if (type !== 2) return;
                        //开始一局
                        // 隐藏当前界面，显示第3界面，执行第3界面的开始一局按钮的点击逻辑
                        this.leftListFunc(3);
                    }, this);

                    //左侧
                    let left = pan.getChildByName("left");
                    let gameList = left.getChildByName("gameList");
                    gameList._item = left.getChildByName("item");
                    pan._gameList = gameList;
                }

                //刷新
                //右侧0
                let data = this.data;
                /**@type {[String, Number][]} 各玩家分数 */
                let playerScore = Object.entries(data.player);
                let playerList = pan._playerList;
                //先清除之前的所有玩家数据
                playerList.removeAllChildren();
                //判空
                if (playerScore.length) {
                    let item = playerList._item;
                    item.setVisible(true);
                    //循环所有的玩家分数
                    for (let [name, score] of playerScore) {
                        /**@type {cc.Node|ccui.Layout} 玩家分数面板 */
                        let _item = item.clone();
                        // /**@type {ccui.Text} 玩家名称 */
                        // let nameNode = _item.getChildByName("name");
                        // /**@type {ccui.Text} 玩家分数 */
                        // let scoreNode = _item.getChildByName("score");
                        for (let [_node, _data] of [
                            [_item.getChildByName("name"), name],
                            [_item.getChildByName("score"), score],
                        ]) {
                            if (_node.getString() !== _data) _node.setString(_data);
                        }
                        playerList.addChild(_item);
                    }
                    //隐藏示例
                    item.setVisible(false);
                }
                //移动滚动容器中的内容到最上方
                playerList.scrollToTop(0.01, true);

                //左侧
                let gameList = pan._gameList;
                gameList.removeAllChildren();
                let game = data.game;
                if (game.length) {
                    let item = gameList._item;
                    item.setVisible(true);
                    /**@type {(ccui.Button|cc.Node)[]} 玩家名称按钮列表 */
                    let _playerList = pan._butplayerList
                    //循环最后一场的所有对局
                    for (let i = 0; i < game.length; i++) {
                        let _item = item.clone();
                        let gameData = game[i];

                        //玩家名称
                        let player1 = _item.getChildByName("1p");
                        let player2 = _item.getChildByName("2p");
                        let player1Name = gameData[0];
                        let player2Name = gameData[1];
                        for (let [_node, _name] of [
                            [player1, player1Name],
                            [player2, player2Name],
                        ]) if (_node.getTitleText() !== _name) _node.setTitleText(_name);

                        //胜负
                        for (let _node of [player1, player2]) _node._win = _node.get("win");

                        //按钮
                        let but = _item.getChildByName("but");

                        //判错
                        if (gameData.length >= 4) {
                            if (!but.isEnabled()) but.setEnabled(true);
                            but._data = {
                                player1Name: player1Name,
                                player2Name: player2Name,
                                currentGame: i,
                            };
                            but.addTouchEventListener(function (sender, type) {
                                if (type !== 2) return;
                                //显示到右边 玩家分数面板
                                let _data = sender._data;
                                let player1 = _playerList[0];
                                let player2 = _playerList[1];
                                for (let [_node, _name] of [
                                    [player1, _data.player1Name],
                                    [player2, _data.player2Name],
                                ]) if (_node.getTitleText() !== _name) _node.setTitleText(_name);

                                //准备修改对应对局参数
                                this.currentGame = sender.currentGame;
                            }, this);
                        } else {
                            //test理论上不会到这里
                            but.setEnabled(false);
                            let errorText = "错误对局" + i + JSON.stringify(gameData);
                            try {
                                throw new Error(errorText);
                            } catch (error) {
                                console.error(error);
                            }
                            this.addChild(new MsgLayer(errorText));
                        }
                        gameList.addChild(_item);
                    }
                    item.setVisible(false);
                    //移动滚动容器中的内容到最上方
                    gameList.scrollToTop(0.01, true);
                }
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
        //左侧面板ui按钮点击逻辑
        /**@type {(cc.Node|ccui.Layout)[]} 全部中间面板 */
        let centerList = this.centerList;
        let butFunc = this.leftListFunc = function (type) {
            for (let i = 0; i < centerList.length; i++) {
                let _node = centerList[i];
                let isShow = i !== type;
                _node.setVisible(isShow);
                if (isShow) this.centerListFunc[i](_node);
            }
        };
        //循环所有的选项
        for (let i = 0; i < menuList.getChildrenCount(); i++) {
            /**@type {ccui.Layout|cc.Node} 对应菜单选项基础容器 */
            let child = menuList.getChildByName("item" + i);
            /**@type {ccui.Button} 对应按钮 */
            let but = child.getChildByName("but");
            /**@type {Number} 保存下标位置到按钮中 */
            but._index = i;
            but.addTouchEventListener(function (sender, type) {
                if (type !== 2) return;
                //左侧按钮打开显示右侧对应面板
                butFunc(sender._index);
            }, this);
            child._but = but;
            this.leftList.push(child);
        }
    },
});
