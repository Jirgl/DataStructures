///<reference path="../jasmine/jasmine.js"/>
///<reference path="../models/lists/linkedList.js"/>

describe("Linked list", function () {
    describe("Add methods", function () {
        var linkedList;

        beforeEach(function () {
            linkedList = new JirglStructures.Lists.LinkedList.Structure();
        });

        it("add first item", function () {
            linkedList.addFirstItem("first", "dataOfFirst");
            expect(linkedList.currentItem.key).toBe("first");
            expect(linkedList.currentItem.data).toBe("dataOfFirst");
            expect(linkedList.currentItem.next).toEqual(undefined);
            expect(linkedList.currentItem).toBe(linkedList.firstItem);
            expect(linkedList.currentItem).toBe(linkedList.lastItem);

            linkedList.addFirstItem("new first", "dataOfNewFirst");
            expect(linkedList.currentItem.key).toBe("new first");
            expect(linkedList.currentItem.data).toBe("dataOfNewFirst");
            expect(linkedList.currentItem.next.key).toBe("first");
            expect(linkedList.currentItem.next.data).toBe("dataOfFirst");
            expect(linkedList.currentItem.next.next).toEqual(undefined);
            expect(linkedList.currentItem).toBe(linkedList.firstItem);
            expect(linkedList.currentItem.next).toBe(linkedList.lastItem);
        });

        it("add last item", function () {
            linkedList.addLastItem("last", "dataOfLast");
            expect(linkedList.currentItem.key).toBe("last");
            expect(linkedList.currentItem.data).toBe("dataOfLast");
            expect(linkedList.currentItem.next).toEqual(undefined);
            expect(linkedList.currentItem).toBe(linkedList.firstItem);
            expect(linkedList.currentItem).toBe(linkedList.lastItem);

            linkedList.addLastItem("new last", "dataOfNewLast");
            expect(linkedList.currentItem.key).toBe("new last");
            expect(linkedList.currentItem.data).toBe("dataOfNewLast");
            expect(linkedList.currentItem.next).toEqual(undefined);
            expect(linkedList.currentItem).toBe(linkedList.lastItem);
        });

        it("add next item", function () {
            linkedList.addNextItem("next", "dataOfNext");
            expect(linkedList.currentItem.key).toBe("next");
            expect(linkedList.currentItem.data).toBe("dataOfNext");
            expect(linkedList.currentItem.next).toEqual(undefined);
            expect(linkedList.currentItem).toBe(linkedList.firstItem);
            expect(linkedList.currentItem).toBe(linkedList.lastItem);

            linkedList.addNextItem("new next", "dataOfNewNext");
            expect(linkedList.currentItem.key).toBe("new next");
            expect(linkedList.currentItem.data).toBe("dataOfNewNext");
            expect(linkedList.currentItem.next).toEqual(undefined);
            expect(linkedList.currentItem).toBe(linkedList.lastItem);

            linkedList.addFirstItem("first", "dataOfFirst");
            linkedList.addNextItem("next after first", "dataOfNextAfterFirst");
            expect(linkedList.currentItem.key).toBe("next after first");
            expect(linkedList.currentItem.data).toBe("dataOfNextAfterFirst");
            expect(linkedList.currentItem.next.key).toBe("next");
            expect(linkedList.currentItem.next.data).toBe("dataOfNext");
        });

        it("add previous item", function () {
            linkedList.addPreviousItem("previous", "dataOfPrevious");
            expect(linkedList.currentItem.key).toBe("previous");
            expect(linkedList.currentItem.data).toBe("dataOfPrevious");
            expect(linkedList.currentItem.next).toEqual(undefined);
            expect(linkedList.currentItem).toBe(linkedList.firstItem);
            expect(linkedList.currentItem).toBe(linkedList.lastItem);

            linkedList.addPreviousItem("new previous", "dataOfNewPrevious");
            expect(linkedList.currentItem.key).toBe("new previous");
            expect(linkedList.currentItem.data).toBe("dataOfNewPrevious");
            expect(linkedList.currentItem.next.key).toBe("previous");
            expect(linkedList.currentItem.next.next).toEqual(undefined);
            expect(linkedList.currentItem).toBe(linkedList.firstItem);
            expect(linkedList.currentItem.next).toBe(linkedList.lastItem);

            linkedList.addLastItem("last", "dataOfLast");
            linkedList.addPreviousItem("previous before last", "dataOfPreviousBeforeLast");
            expect(linkedList.currentItem.key).toBe("previous before last");
            expect(linkedList.currentItem.data).toBe("dataOfPreviousBeforeLast");
            expect(linkedList.currentItem.next).toBe(linkedList.lastItem);
        });
    });

    describe("Find method", function () {
        var linkedList;

        beforeEach(function () {
            linkedList = new JirglStructures.Lists.LinkedList.Structure();
        });

        it("find unique item", function () {
            linkedList.addNextItem("1", "data1");
            linkedList.addNextItem("2", "data2");
            linkedList.addNextItem("3", "data3");

            expect(linkedList.find("1")).toBe("data1");
            expect(linkedList.find("2")).toBe("data2");
            expect(linkedList.find("3")).toBe("data3");
        });

        it("find first item", function () {
            linkedList.addNextItem("1", "data1");
            linkedList.addNextItem("1", "data2");

            expect(linkedList.find("1")).toBe("data1");
        });

        it("find no item", function () {
            linkedList.addNextItem("1", "data1");
            linkedList.addNextItem("2", "data2");

            expect(linkedList.find("3")).toBe(undefined);
        });

        it("find no item", function () {
            expect(linkedList.find("1")).toBe(undefined);
        });
    });

    describe("Remove methods", function () {
        var linkedList;

        beforeEach(function () {
            linkedList = new JirglStructures.Lists.LinkedList.Structure();
            linkedList.addLastItem("one", "dataOfOne");
            linkedList.addLastItem("two", "dataOfTwo");
            linkedList.addLastItem("three", "dataOfThree");
        });

        it("remove first item", function () {
            var removedItem = linkedList.removeFirstItem();
            expect(removedItem).toBe("dataOfOne");
            expect(linkedList.firstItem.key).toBe("two");
            expect(linkedList.firstItem.data).toBe("dataOfTwo");
            expect(linkedList.firstItem.next).toBe(linkedList.lastItem);

            removedItem = linkedList.removeFirstItem();
            expect(removedItem).toBe("dataOfTwo");
            expect(linkedList.firstItem.key).toBe("three");
            expect(linkedList.firstItem.data).toBe("dataOfThree");
            expect(linkedList.firstItem.next).toEqual(undefined);

            removedItem = linkedList.removeFirstItem();
            expect(removedItem).toBe("dataOfThree");
            expect(linkedList.firstItem).toEqual(undefined);
            expect(linkedList.lastItem).toEqual(undefined);
            expect(linkedList.currentItem).toEqual(undefined);
        });

        it("remove last item", function () {
            var removedItem = linkedList.removeLastItem();
            expect(removedItem).toBe("dataOfThree");
            expect(linkedList.lastItem.key).toBe("two");
            expect(linkedList.lastItem.data).toBe("dataOfTwo");
            expect(linkedList.lastItem.next).toEqual(undefined);

            removedItem = linkedList.removeLastItem();
            expect(removedItem).toBe("dataOfTwo");
            expect(linkedList.lastItem.key).toBe("one");
            expect(linkedList.lastItem.data).toBe("dataOfOne");
            expect(linkedList.lastItem.next).toEqual(undefined);

            removedItem = linkedList.removeLastItem();
            expect(removedItem).toBe("dataOfOne");
            expect(linkedList.firstItem).toEqual(undefined);
            expect(linkedList.lastItem).toEqual(undefined);
            expect(linkedList.currentItem).toEqual(undefined);
        });

        it("remove current item", function () {
            var removedItem = linkedList.removeCurrentItem();
            expect(removedItem).toBe("dataOfThree");
            expect(linkedList.currentItem.key).toBe("one");
            expect(linkedList.currentItem.data).toBe("dataOfOne");
            expect(linkedList.currentItem.next).toBe(linkedList.lastItem);

            removedItem = linkedList.removeCurrentItem();
            expect(removedItem).toBe("dataOfOne");
            expect(linkedList.currentItem.key).toBe("two");
            expect(linkedList.currentItem.data).toBe("dataOfTwo");
            expect(linkedList.currentItem.next).toEqual(undefined);

            removedItem = linkedList.removeCurrentItem();
            expect(removedItem).toBe("dataOfTwo");
            expect(linkedList.firstItem).toEqual(undefined);
            expect(linkedList.lastItem).toEqual(undefined);
            expect(linkedList.currentItem).toEqual(undefined);
        });

        it("remove next item", function () {
            linkedList.addFirstItem("move current item to first");

            var removedItem = linkedList.removeNextItem();
            expect(removedItem).toBe("dataOfOne");

            removedItem = linkedList.removeNextItem();
            expect(removedItem).toBe("dataOfTwo");

            removedItem = linkedList.removeNextItem();
            expect(removedItem).toBe("dataOfThree");
        });
    });

    describe("Other functions", function () {
        var linkedList;

        beforeEach(function () {
            linkedList = new JirglStructures.Lists.LinkedList.Structure();
        });

        it("clear linked list", function () {
            linkedList.addLastItem("last", "dataOfLast");
            expect(linkedList.firstItem.key).toBe("last");
            expect(linkedList.firstItem.data).toBe("dataOfLast");

            linkedList.clear();
            expect(linkedList.firstItem).toEqual(undefined);
        });

        it("is linked list empty", function () {
            expect(linkedList.isEmpty()).toBeTruthy();

            linkedList.addLastItem("last", "dataOfLast");
            expect(linkedList.isEmpty()).toBeFalsy();
        });
    });

    describe("Iterator", function () {
        var linkedList;

        beforeEach(function () {
            linkedList = new JirglStructures.Lists.LinkedList.Structure();
        });

        it("iterate by iterator", function () {
            linkedList.addFirstItem("1", "data1");
            linkedList.addNextItem("2", "data2");
            linkedList.addNextItem("3", "data3");

            var iterator = linkedList.getIterator();
            expect(iterator.next()).toBe("data1");
            expect(iterator.next()).toBe("data2");
            expect(iterator.next()).toBe("data3");

            iterator.reset();
            expect(iterator.next()).toBe("data1");
        });
    });
});