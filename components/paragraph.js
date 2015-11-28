/// <reference path="../bobril/bobril.d.ts" />
var JirglStructures;
(function (JirglStructures) {
    var paragraphComponent = {
        render: function (ctx, me) {
            me.tag = "div";
            me.children = ctx.data.content;
        }
    };
    function paragraph(data) {
        return { component: paragraphComponent, data: data };
    }
    JirglStructures.paragraph = paragraph;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=paragraph.js.map