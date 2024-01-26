/**@type {cc.Layer} */
let MainSceneLayer = cc.Layer.extend({
    // sprite:null,
    /**@type {(cc.Node|ccui.Layout)[]} 主界面菜单选项 */
    menuList: [],
    /**@type {cc.Node|ccui.Layout} */
    load: null,
    /**@type {cc.Node|ccui.ListView} */
    loadList: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        // var size = cc.winSize;

        let mainScene = ccs.load(res.MainScene_json);
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

        let center = Scene.getChildByName("main").getChildByName("Center");
        this.initMenuList(center);
        this.initLoad(center);

        return true;
    },
    /**初始化menuList相关控件
     * @param {cc.Node} center 主界面ui面板
     */
    initMenuList: function (center) {
        /**@type {cc.Node|ccui.ListView} 中间的列表容器 */
        let menuListNode = center.getChildByName("menuList");
        /**@type {Number} 最大菜单数 */
        let menuListLength = menuListNode.getChildrenCount();
        for (let i = 0; i < menuListLength; i++) {
            let menu = menuListNode.getChildByName("item" + i);
            menu._but = menu.getChildByName("but");
            this.menuList.push(menu);
        }
        let menuList = this.menuList;
        let menu0 = menuList[0];
        /**@type {ccui.Button|cc.Node} */
        let menu0But = menu0._but;
        menu0But.addTouchEventListener(function (sender, type) {
            if (type != 2) return;
            cc.log("点击创建按钮")
            let newUi = new CreateLayer();
            this.addChild(newUi);
        }, this);

        let menu1 = menuList[1];
        /**@type {ccui.Button|cc.Node} */
        let menu1But = menu1._but;
        menu1But.addTouchEventListener(function (sender, type) {
            if (type != 2) return;
            cc.log("点击读取按钮")
            //打开选择存档界面
            this.openLoad();
        }, this);

        if (menuListLength > 2) {
            for (let i = 2; i < menuListLength - 1; i++) {
                let otherMenu = menuList[i];
                otherMenu._but.addTouchEventListener(function (sender, type) {
                    if (type != 2) return;
                    cc.log("点击未定义按钮")
                    //todo: 未设定
                }, this);
                //test暂时隐藏
                otherMenu.setVisible(false);
            }
            let menuExit = menuList[menuListLength - 1];
            menuExit._but.addTouchEventListener(this.Exit, this);
        }
    },
    Exit: function (sender, type = 2) {
        if (type != 2) return;
        cc.log("执行退出逻辑");
        this.onExit();
    },
    /**初始化load面板
     * @param {cc.Node} center 主界面ui面板
     */
    initLoad: function (center) {
        /**@type {cc.Node|ccui.Layout} */
        let load = center.getChildByName("load");
        this.load = load;
        //初始隐藏
        load.setVisible(false);

        /**@type {ccui.Button} */
        let exit = load.getChildByName("exit");
        exit.addTouchEventListener(function (sender, type) {
            if (type !== 2) return;
            load.setVisible(false);
        }, this)

        let list = load.getChildByName("list");
        list._item = load.getChildByName("item");
        this.loadList = list;
    },
    openLoad: function () {
        let load = this.load;
        let list = this.loadList;
        let item = list._item;
        let dataList = UtilWt.cc.sys.localStorage.getList("SwissSystem_wt_saveName");
        if (dataList && dataList.length > 0) {
            load.setVisible(true);
            item.setVisible(true);
            for (let gameName of dataList) {
                let _item = item.clone();
                let but = _item.getChildByName("but");
                but._data = gameName;
                but.addTouchEventListener(function (sender, type) {
                    if (type !== 2) return;
                    //点击载入对应存档
                    this.addChild(
                        new CreateLayer(
                            UtilWt.cc.sys.localStorage.getObject(
                                sender._data)));
                    //隐藏当前界面
                    load.setVisible(true);
                }, this);

                let del = _item.getChildByName("del");
                del._data = gameName;
                del.addTouchEventListener(function (sender, type) {
                    if (type !== 2) return;
                    //点击删除对应存档
                    cc.sys.localStorage.removeItem(sender._data);
                    //刷新页面
                    this.openLoad();
                }, this);
            }
        }
        item.setVisible(false);
    },
});

let MainScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let layer = new MainSceneLayer();
        this.addChild(layer);
    }
});
