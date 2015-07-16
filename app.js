/// <reference path="bobril/bobril.d.ts" />
/// <reference path="bobril/bobril.vg.d.ts" />
/// <reference path="models/doublylinkedlist.ts" />
/// <reference path="components/header.ts" />
/// <reference path="components/controlpanel.ts" />
/// <reference path="structureComponents/doublyList.ts" />
var JirglStructures;
(function (JirglStructures) {
    b.init(function () {
        return [
            JirglStructures.header({ content: "Data structures", size: 0 /* H1 */ }),
            JirglStructures.header({ content: "Lists", size: 1 /* H2 */ }),
            JirglStructures.header({ content: "Doubly linked list", size: 2 /* H3 */ }),
            JirglStructures.doublyList({}),
            JirglStructures.header({ content: "Trees", size: 1 /* H2 */ }),
            JirglStructures.header({ content: "Graphs", size: 1 /* H2 */ })
        ];
    });
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=app.js.map