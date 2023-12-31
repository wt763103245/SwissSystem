/**@type {cc.Layer} */
let MainSceneLayer = cc.Layer.extend({
    // sprite:null,
    /**@type {(cc.Node|ccui.Layout)[]} 主界面菜单选项 */
    menuList: [],
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

        this.initMenuList(Scene);

        return true;
    },
    /**初始化menuList相关控件
     * @param {cc.Node} Scene 主界面ui节点
     */
    initMenuList: function (Scene) {
        /**@type {cc.Node|ccui.Layout} 中间容器 */
        let center = Scene.getChildByName("main").getChildByName("Center");
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
            //todo:打开选择存档界面
            let newUi = new CreateLayer(data);
            this.addChild(newUi);
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
});

let MainScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        let layer = new MainSceneLayer();
        this.addChild(layer);
    }
});
