var JirglStructures;
(function (JirglStructures) {
    var appHeaderComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.children = JirglStructures.header({
                content: ctx.data.content,
                type: JirglStructures.HeaderType.AppHeader
            });
        }
    };
    function appHeader(data) {
        return { component: appHeaderComponent, data: data };
    }
    JirglStructures.appHeader = appHeader;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=appHeader.js.map