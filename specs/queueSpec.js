///<reference path="../jasmine/jasmine.js"/>
///<reference path="../models/queue.js"/>

describe("Queue - enqueue", function() {
    var que;

    beforeEach(function() {
        que = new JirglStructures.Lists.Queue();
    });

    it("enqueue", function () {
        que.enqueue("first");
        que.enqueue("second");
        que.enqueue("third");

        var iterator = que.getIterator();
        expect(iterator.next()).toBe("first");
        expect(iterator.next()).toBe("second");
        expect(iterator.next()).toBe("third");
    });
});

describe("Queue - dequeue", function () {
    var que;

    beforeEach(function () {
        que = new JirglStructures.Lists.Queue();
        que.enqueue("first");
        que.enqueue("second");
        que.enqueue("third");
    });

    it("dequeue", function () {
        expect(que.dequeue()).toBe("first");
        expect(que.dequeue()).toBe("second");
        expect(que.dequeue()).toBe("third");
    });
});

describe("Queue - other functions", function () {
    var que;

    beforeEach(function() {
        que = new JirglStructures.Lists.Queue();
    });

    it("clear queue", function() {
        que.enqueue("last");
        expect(que.list.firstItem.data).toBe("last");

        que.clear();
        expect(que.list.firstItem).toEqual(undefined);
    });

    it("is empty doubly linked list", function() {
        expect(que.isEmpty()).toBeTruthy();

        que.enqueue("last");
        expect(que.isEmpty()).toBeFalsy();
    });
});