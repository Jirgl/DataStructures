/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.style.d.ts"/>
var JirglStructures;
(function (JirglStructures) {
    var appHeaderComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.children = [
                b.style({ tag: "div" }, b.sprite("assets/metal.jpg")),
                {
                    tag: "div",
                    style: {
                        position: "relative",
                        left: ctx.data.leftPosition,
                        top: ctx.data.topPosition
                    },
                    children: JirglStructures.header({
                        content: ctx.data.content,
                        type: JirglStructures.HeaderType.AppHeader,
                        effect: JirglStructures.HeaderEffect.Dented
                    })
                }
            ];
        }
    };
    function appHeader(data) {
        return { component: appHeaderComponent, data: data };
    }
    JirglStructures.appHeader = appHeader;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=appHeader.js.map