/// <reference path="bobril/bobril.d.ts" />
/// <reference path="bobril/bobril.vg.d.ts" />
/// <reference path="models/doublylinkedlist.ts" />
/// <reference path="components/header.ts" />
/// <reference path="components/controlpanel.ts" />
/// <reference path="structureComponents/view/doublyList.ts" />
/// <reference path="structureComponents/view/queue.ts" />
/// <reference path="structureComponents/view/stack.ts" />
var JirglStructures;
(function (JirglStructures) {
    b.init(function () {
        return [
            JirglStructures.header({ content: "Data structures", size: JirglStructures.HeaderSize.H1 }),
            JirglStructures.header({ content: "Lists", size: JirglStructures.HeaderSize.H2 }),
            JirglStructures.header({ content: "Doubly linked list", size: JirglStructures.HeaderSize.H3 }),
            JirglStructures.View.doublyList({}),
            JirglStructures.header({ content: "Queue", size: JirglStructures.HeaderSize.H3 }),
            JirglStructures.View.queue({}),
            JirglStructures.header({ content: "Stack", size: JirglStructures.HeaderSize.H3 }),
            JirglStructures.View.stack({}),
            JirglStructures.header({ content: "Trees", size: JirglStructures.HeaderSize.H2 }),
            JirglStructures.header({ content: "Binary tree", size: JirglStructures.HeaderSize.H3 }),
            JirglStructures.View.binaryTree({}),
            JirglStructures.header({ content: "Binary search tree", size: JirglStructures.HeaderSize.H3 }),
            JirglStructures.header({ content: "Graphs", size: JirglStructures.HeaderSize.H2 })
        ];
    });
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=app.js.map