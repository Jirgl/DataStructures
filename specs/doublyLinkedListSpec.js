///<reference path="../jasmine/jasmine.js"/>
///<reference path="../models/doublyLinkedList.js"/>

describe("Doubly Linked list - add methods", function() {
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
});

describe("Doubly Linked list - remove methods", function() {
    var doublyLinkedlist;

    beforeEach(function() {
        doublyLinkedlist = new JirglStructures.Lists.DoublyLinkedList();
        doublyLinkedlist.addLastItem("one");
        doublyLinkedlist.addLastItem("two");
        doublyLinkedlist.addLastItem("three");
    });

    it("remove first item", function () {
        var removedItem = doublyLinkedlist.removeFirstItem();
        expect(removedItem).toBe("one");
        expect(doublyLinkedlist.firstItem.data).toBe("two");
        expect(doublyLinkedlist.firstItem.previous).toEqual(undefined);
        expect(doublyLinkedlist.firstItem.next).toBe(doublyLinkedlist.lastItem);

        removedItem = doublyLinkedlist.removeFirstItem();
        expect(removedItem).toBe("two");
        expect(doublyLinkedlist.firstItem.data).toBe("three");
        expect(doublyLinkedlist.firstItem.previous).toEqual(undefined);
        expect(doublyLinkedlist.firstItem.next).toEqual(undefined);

        removedItem = doublyLinkedlist.removeFirstItem();
        expect(removedItem).toBe("three");
        expect(doublyLinkedlist.firstItem).toEqual(undefined);
        expect(doublyLinkedlist.lastItem).toEqual(undefined);
        expect(doublyLinkedlist.currentItem).toEqual(undefined);
    });

    it("remove last item", function () {
        var removedItem = doublyLinkedlist.removeLastItem();
        expect(removedItem).toBe("three");
        expect(doublyLinkedlist.lastItem.data).toBe("two");
        expect(doublyLinkedlist.lastItem.previous).toBe(doublyLinkedlist.firstItem);
        expect(doublyLinkedlist.lastItem.next).toEqual(undefined);

        removedItem = doublyLinkedlist.removeLastItem();
        expect(removedItem).toBe("two");
        expect(doublyLinkedlist.lastItem.data).toBe("one");
        expect(doublyLinkedlist.lastItem.previous).toEqual(undefined);
        expect(doublyLinkedlist.lastItem.next).toEqual(undefined);

        removedItem = doublyLinkedlist.removeLastItem();
        expect(removedItem).toBe("one");
        expect(doublyLinkedlist.firstItem).toEqual(undefined);
        expect(doublyLinkedlist.lastItem).toEqual(undefined);
        expect(doublyLinkedlist.currentItem).toEqual(undefined);
    });

    it("remove current item", function () {
        var removedItem = doublyLinkedlist.removeCurrentItem();
        expect(removedItem).toBe("three");
        expect(doublyLinkedlist.currentItem.data).toBe("one");
        expect(doublyLinkedlist.currentItem.previous).toEqual(undefined);
        expect(doublyLinkedlist.currentItem.next).toBe(doublyLinkedlist.lastItem);

        removedItem = doublyLinkedlist.removeCurrentItem();
        expect(removedItem).toBe("one");
        expect(doublyLinkedlist.currentItem.data).toBe("two");
        expect(doublyLinkedlist.currentItem.previous).toEqual(undefined);
        expect(doublyLinkedlist.currentItem.next).toEqual(undefined);

        removedItem = doublyLinkedlist.removeCurrentItem();
        expect(removedItem).toBe("two");
        expect(doublyLinkedlist.firstItem).toEqual(undefined);
        expect(doublyLinkedlist.lastItem).toEqual(undefined);
        expect(doublyLinkedlist.currentItem).toEqual(undefined);
    });

    it("remove next item", function () {
        doublyLinkedlist.addFirstItem("move current item to first");

        var removedItem = doublyLinkedlist.removeNextItem();
        expect(removedItem).toBe("one");

        removedItem = doublyLinkedlist.removeNextItem();
        expect(removedItem).toBe("two");

        removedItem = doublyLinkedlist.removeNextItem();
        expect(removedItem).toBe("three");
    });

    it("remove previous item", function () {
        doublyLinkedlist.addLastItem("move current item to last");

        var removedItem = doublyLinkedlist.removePreviousItem();
        expect(removedItem).toBe("three");

        removedItem = doublyLinkedlist.removePreviousItem();
        expect(removedItem).toBe("two");

        removedItem = doublyLinkedlist.removePreviousItem();
        expect(removedItem).toBe("one");
    });
});

describe("Doubly linked list - other functions", function () {
    var doublyLinkedlist;

    beforeEach(function () {
        doublyLinkedlist = new JirglStructures.Lists.DoublyLinkedList();
    });

    it("clear doubly linked list", function () {
        doublyLinkedlist.addLastItem("last");
        expect(doublyLinkedlist.firstItem.data).toBe("last");

        doublyLinkedlist.clear();
        expect(doublyLinkedlist.firstItem).toEqual(undefined);
    });

    it("is doubly linked list empty", function () {
        expect(doublyLinkedlist.isEmpty()).toBeTruthy();

        doublyLinkedlist.addLastItem("last");
        expect(doublyLinkedlist.isEmpty()).toBeFalsy();
    });
});

describe("Doubly Linked list - iterator", function() {
    var doublyLinkedlist;

    beforeEach(function() {
        doublyLinkedlist = new JirglStructures.Lists.DoublyLinkedList();
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