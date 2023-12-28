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
    /**@type {{name: String, score: Number}} 当前修改玩家的数据 */
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
    initData: function(data) {
        this.data = data ? data : {};
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
        let funcList = [
            function (pan) {
                /**@type {ccui.TextField|cc.Node} 比赛名称 */
                let gameName = pan.getChildByName("gameName");
                /**@type {String} 获得当前比赛的名称 */
                let gameNameText = this.data.name;
                gameNameText = gameNameText ? gameNameText : "";
                //初始化清空
                if (gameName.getString() !== gameNameText) gameName.setString(gameNameText);
                pan._gameName = gameName;

                /**@type {ccui.Button|cc.Node} 创建按钮 */
                let but = pan.getChildByName("but");
                /**@type {String} 按钮文本 */
                let butText = !gameNameText ? "创建" : "修改";
                //设置对应文本
                if (but.getTitleText() !== butText) but.setTitleText(butText);
                pan._but = but;
            },
            /**玩家信息面板
             * @param {ccui.Layout|cc.Node} pan 玩家信息面板
             * @param {{String: Number}} data 玩家数据
             */
            function (pan, data=null) {
                //右侧ui
                /**@type {ccui.Layout|cc.Node} 右侧面板 */
                let right = pan.getChildByName("right");
                let text0 = right.getChildByName("text0");
                let id = right.getChildByName("id");
                for (let _node of [text0, id]) _node.setVisible(false);

                let tempData = this.playerData;
                tempData = tempData ? tempData : {};

                //玩家名称
                /**@type {ccui.TextField} 玩家姓名ui */
                let name = right.getChildByName("name");
                /**@type {String} 玩家名称 */
                let nameStr = tempData.name;
                nameStr = nameStr ? nameStr : "";
                if (name.getString() !== nameStr) name.setString(nameStr);

                //分数
                /**@type {ccui.TextField} */
                let score = right.getChildByName("score");
                /**@type {String|Number} */
                let scoreStr = tempData.score;
                scoreStr = scoreStr ? scoreStr.toString() : "0";
                if (score.getString() !== scoreStr) score.setString(scoreStr);

                //保存ui
                /**@type {ccui.Button} 添加按钮 */
                let set = right.getChildByName("set");
                set.addTouchEventListener(function (sender, type) {
                    if (type !== 2) return;
                    let nameStr = name.getString();
                    if (!nameStr) return;
                    let scoreStr = score.getString();
                    if (!scoreStr) return;
                    let data = {
                        name: nameStr,
                        score: scoreStr,
                    }
                    this.playerData = data;
                    if (!this.data || "player" in this.data) this.data["player"] = {};
                    this.data.player[nameStr] = scoreStr;
                }, this);

                //添加
                /**@type {ccui.Button} 添加新玩家按钮 */
                let add = right.getChildByName("add");
                add.addTouchEventListener(function (sender, type) {
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
                let playerList = left.getChildByName("playerList");
                pan._list = playerList;
                /**@type {ccui.Layout|cc.Node} 玩家信息容器示例 */
                let item = left.getChildByName("item");
                playerList._item = item;
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
                    //创建全部数据
                    for (let [playerName, playerScore] of Object.entries(playerData)) {
                        /**@type {ccui.Layout|cc.Node} 玩家信息容器 */
                        let _item = item.clone();

                        /**@type {ccui.Text|cc.Node} 玩家编号 */
                        let _id = _item.getChildByName("id");
                        _item._id = _id;
                        //test暂时隐藏
                        _id.setVisible(false);

                        /**@type {ccui.Button} 玩家信息交互按钮 */
                        let but = _item.getChildByName("but");
                        _item._but = but;
                        but.addTouchEventListener(function (sender, type) {
                            if (type !== 2) return;
                            //todo 改变右侧面板ui显示内容
                        }, this);
                        if (but.getTitleText() !== playerName) but.setTitleText(playerName);

                        /**@type {ccui.Text} 玩家分数显示文本 */
                        let score = _item.getChildByName("score");
                        playerScore = playerScore.toString();
                        if (score.getString() !== playerScore) score.setString(playerScore);

                        //保存到缓存中
                        playerListData.push(_item);
                    }
                }
                //隐藏示例
                item.setVisible(false);
                playerList._list = playerListData;
            },
            //todo: 面板2/3/4
        ];
        //循环所有的内容面板
        for (let i = 0; i < center.getChildrenCount(); i++) {
            /**@type {ccui.Layout|cc.Node} 显示的内容选项基础容器 */
            let child = center.getChildByName("pan" + i);
            //初始化显示第一个
            child.setVisible(i === 0);
            let _func = funcList[i];
            if (_func) _func(child);
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
