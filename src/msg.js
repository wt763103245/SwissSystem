/**弹出消息 */
let MsgLayer = cc.Layer.extend({
    /**创建
     * @param {String} text 显示文本
     * @returns {boolean}
     */
    ctor: function (text = "") {
        this._super();
        if (!text) {
            this.Exit();
            return false
        }
        let mainScene = ccs.load(res.Msg_json);
        let Scene = mainScene.node;
        this.addChild(Scene);

        this.initUi(Scene, text);

        return true;
    },
    Exit: function () {
        //移除这个界面
        this.removeFromParent();
    },
    initUi: function (scene, str) {
        let main = scene.getChildByName("main");
        /**@type {ccui.Text} */
        let text = main.getChildByName("text");
        if (text.getString() !== str) text.setString(str);
        let size = cc.winSize;
        this.runAction(
            cc.moveBy(1.0,
                size.width * 0.5, size.height * 0.2),
            cc.callFunc(this.Exit, this),
        )
    },
});