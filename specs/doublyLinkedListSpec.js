describe("Doubly Linked list", function () {
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

    it("iterate by iterator", function () {
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