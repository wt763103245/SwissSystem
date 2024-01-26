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
        cc.log("移除消息界面");
        //移除这个界面
        this.removeFromParent();
    },
    initUi: function (scene, str) {
        let main = scene.getChildByName("main");
        /**@type {ccui.Text} */
        let text = main.getChildByName("text");
        if (text.getString() !== str) text.setString(str);
        let size = cc.winSize;
        let width = size.width;
        let height = size.height;
        //先居中
        this.setPosition(width * 0.5, 0);
        this.runAction(
            cc.sequence(
                cc.moveBy(1.0, 0, height * 0.8),
                cc.delayTime(0.5),
                cc.callFunc(this.Exit, this),
            )
        );
    },
});