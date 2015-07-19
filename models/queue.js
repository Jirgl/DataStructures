var JirglStructures;
(function (JirglStructures) {
    var Lists;
    (function (Lists) {
        var Queue = (function () {
            function Queue() {
                this.list = new Lists.DoublyLinkedList();
            }
            Queue.prototype.enqueue = function (t) {
                this.list.addLastItem(t);
            };
            Queue.prototype.dequeue = function () {
                return this.list.removeFirstItem();
            };
            Queue.prototype.getIterator = function () {
                return this.list.getIterator();
            };
            return Queue;
        })();
        Lists.Queue = Queue;
    })(Lists = JirglStructures.Lists || (JirglStructures.Lists = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=queue.js.map