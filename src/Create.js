/**@type {cc.Layer} 创建界面 */
let Main1Layer = cc.Layer.extend({
    // sprite:null,
    /**@type {(cc.Node|ccui.Layout)[]} 主界面菜单选项 */
    menuList: [],
    ctor: function () {
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

        this.initUi(Scene);

        return true;
    },
    /**初始化ui
     * @param {cc.Node} Scene 主界面ui节点
     */
    initUi: function (Scene) {
        let main = Scene.getChildByName("main");
        /**@type {cc.Node|ccui.Button} */
        let exit = main.getChildByName("exit");
        exit.addTouchEventListener(this.Exit, this);
    },
    Exit: function (sender, type = 2) {
        if (type != 2) return;
        cc.log("执行退出逻辑");
        this.removeFromParent();
    },
});
