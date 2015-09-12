/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.style.d.ts"/>
var JirglStructures;
(function (JirglStructures) {
    var pageHeaderComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.children = [
                b.style({ tag: "div" }, b.sprite("assets/metal.jpg")),
                {
                    tag: "div",
                    style: { position: "relative", top: -200, left: 200 },
                    children: JirglStructures.header({ content: ctx.data.content, size: JirglStructures.HeaderSize.H1 })
                }
            ];
        }
    };
    function pageHeader(data) {
        return { component: pageHeaderComponent, data: data };
    }
    JirglStructures.pageHeader = pageHeader;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=pageHeader.js.map