describe("Doubly Linked list", function() {
    var doublyLinkedlist;

    beforeEach(function() {
        doublyLinkedlist = new JirglStructures.Lists.DoublyLinkedList();
    });

    it("add first item", function() {
        doublyLinkedlist.addFirstItem("first");
        expect(doublyLinkedlist.currentItem.data).toBe("first");
        expect(doublyLinkedlist.currentItem.previous).toEqual(undefined);
        expect(doublyLinkedlist.currentItem.next).toEqual(undefined);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.firstItem);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.lastItem);

        doublyLinkedlist.addFirstItem("new first");
        expect(doublyLinkedlist.currentItem.data).toBe("new first");
        expect(doublyLinkedlist.currentItem.next.data).toBe("first");
        expect(doublyLinkedlist.currentItem.previous).toEqual(undefined);
        expect(doublyLinkedlist.currentItem.next.next).toEqual(undefined);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.firstItem);
        expect(doublyLinkedlist.currentItem.next).toBe(doublyLinkedlist.lastItem);
        expect(doublyLinkedlist.currentItem.next.previous).toBe(doublyLinkedlist.firstItem);
    });

    it("add last item", function() {
        doublyLinkedlist.addLastItem("last");
        expect(doublyLinkedlist.currentItem.data).toBe("last");
        expect(doublyLinkedlist.currentItem.previous).toEqual(undefined);
        expect(doublyLinkedlist.currentItem.next).toEqual(undefined);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.firstItem);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.lastItem);

        doublyLinkedlist.addLastItem("new last");
        expect(doublyLinkedlist.currentItem.data).toBe("new last");
        expect(doublyLinkedlist.currentItem.previous.data).toBe("last");
        expect(doublyLinkedlist.currentItem.next).toEqual(undefined);
        expect(doublyLinkedlist.currentItem.previous.previous).toEqual(undefined);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.lastItem);
        expect(doublyLinkedlist.currentItem.previous).toBe(doublyLinkedlist.firstItem);
        expect(doublyLinkedlist.currentItem.previous.next).toBe(doublyLinkedlist.lastItem);
    });

    it("add next item", function() {
        doublyLinkedlist.addNextItem("next");
        expect(doublyLinkedlist.currentItem.data).toBe("next");
        expect(doublyLinkedlist.currentItem.previous).toEqual(undefined);
        expect(doublyLinkedlist.currentItem.next).toEqual(undefined);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.firstItem);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.lastItem);

        doublyLinkedlist.addNextItem("new next");
        expect(doublyLinkedlist.currentItem.data).toBe("new next");
        expect(doublyLinkedlist.currentItem.previous.data).toBe("next");
        expect(doublyLinkedlist.currentItem.next).toEqual(undefined);
        expect(doublyLinkedlist.currentItem.previous.previous).toEqual(undefined);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.lastItem);
        expect(doublyLinkedlist.currentItem.previous).toBe(doublyLinkedlist.firstItem);
        expect(doublyLinkedlist.currentItem.previous.next).toBe(doublyLinkedlist.lastItem);

        doublyLinkedlist.addFirstItem("first");
        doublyLinkedlist.addNextItem("next after first");
        expect(doublyLinkedlist.currentItem.data).toBe("next after first");
        expect(doublyLinkedlist.currentItem.previous).toBe(doublyLinkedlist.firstItem);
        expect(doublyLinkedlist.currentItem.previous.next).toBe(doublyLinkedlist.currentItem);
        expect(doublyLinkedlist.currentItem.next.data).toBe("next");
        expect(doublyLinkedlist.currentItem.next.previous).toBe(doublyLinkedlist.currentItem);
    });

    it("add previous item", function () {
        doublyLinkedlist.addPreviousItem("previous");
        expect(doublyLinkedlist.currentItem.data).toBe("previous");
        expect(doublyLinkedlist.currentItem.previous).toEqual(undefined);
        expect(doublyLinkedlist.currentItem.next).toEqual(undefined);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.firstItem);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.lastItem);

        doublyLinkedlist.addPreviousItem("new previous");
        expect(doublyLinkedlist.currentItem.data).toBe("new previous");
        expect(doublyLinkedlist.currentItem.next.data).toBe("previous");
        expect(doublyLinkedlist.currentItem.previous).toEqual(undefined);
        expect(doublyLinkedlist.currentItem.next.next).toEqual(undefined);
        expect(doublyLinkedlist.currentItem).toBe(doublyLinkedlist.firstItem);
        expect(doublyLinkedlist.currentItem.next).toBe(doublyLinkedlist.lastItem);
        expect(doublyLinkedlist.currentItem.next.previous).toBe(doublyLinkedlist.firstItem);

        doublyLinkedlist.addLastItem("last");
        doublyLinkedlist.addPreviousItem("previous before last");
        expect(doublyLinkedlist.currentItem.data).toBe("previous before last");
        expect(doublyLinkedlist.currentItem.next).toBe(doublyLinkedlist.lastItem);
        expect(doublyLinkedlist.currentItem.next.previous).toBe(doublyLinkedlist.currentItem);
        expect(doublyLinkedlist.currentItem.previous.data).toBe("previous");
        expect(doublyLinkedlist.currentItem.previous.next).toBe(doublyLinkedlist.currentItem);
    });

    it("iterate by iterator", function() {
        doublyLinkedlist.addFirstItem("1");
        doublyLinkedlist.addNextItem("2");
        doublyLinkedlist.addNextItem("3");

        var iterator = doublyLinkedlist.getIterator();
        expect(iterator.next()).toBe("1");
        expect(iterator.next()).toBe("2");
        expect(iterator.next()).toBe("3");

        iterator.reset();
        expect(iterator.next()).toBe("1");
    });
});