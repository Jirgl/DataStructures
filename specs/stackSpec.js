///<reference path="../jasmine/jasmine.js"/>
///<reference path="../models/stack.js"/>

describe("Stack - push", function () {
    var stack;

    beforeEach(function () {
        stack = new JirglStructures.Lists.Stack();
    });

    it("push", function () {
        stack.push("first");
        stack.push("second");
        stack.push("third");

        var iterator = stack.getIterator();
        expect(iterator.next()).toBe("third");
        expect(iterator.next()).toBe("second");
        expect(iterator.next()).toBe("first");
    });
});

describe("Stack - pop", function () {
    var stack;

    beforeEach(function () {
        stack = new JirglStructures.Lists.Stack();
        stack.push("first");
        stack.push("second");
        stack.push("third");
    });

    it("pop", function () {
        expect(stack.pop()).toBe("third");
        expect(stack.pop()).toBe("second");
        expect(stack.pop()).toBe("first");
    });
});

describe("Stack - other functions", function () {
    var stack;

    beforeEach(function () {
        stack = new JirglStructures.Lists.Stack();
    });

    it("clear queue", function () {
        stack.push("last");
        expect(stack.list.firstItem.data).toBe("last");

        stack.clear();
        expect(stack.list.firstItem).toEqual(undefined);
    });

    it("is empty doubly linked list", function () {
        expect(stack.isEmpty()).toBeTruthy();

        stack.push("last");
        expect(stack.isEmpty()).toBeFalsy();
    });
});