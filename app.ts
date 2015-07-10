/// <reference path="bobril/bobril.d.ts" />
/// <reference path="bobril/bobril.vg.d.ts" />
/// <reference path="models/doublylinkedlist.ts" />
/// <reference path="components/header.ts" />
/// <reference path="components/controlpanel.ts" />
/// <reference path="structureComponents/doublyList.ts" />

module JirglStructures {
    b.init(() => {
        return [
            header({ content: "Data structures", size: Size.H1 }),
            header({ content: "Lists", size: Size.H2 }),
            header({ content: "Doubly linked list", size: Size.H3 }),
            doublyList({}),
            header({ content: "Trees", size: Size.H2 }),
            header({ content: "Graphs", size: Size.H2 })
        ];
    });
}