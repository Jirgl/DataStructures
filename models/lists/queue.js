/// <reference path="doublyLinkedList.ts" />
var JirglStructures;
(function (JirglStructures) {
    var Lists;
    (function (Lists) {
        var Queue;
        (function (Queue) {
            var Structure = (function () {
                function Structure() {
                    this.list = new Lists.DoublyLinkedList.Structure();
                }
                Structure.prototype.clear = function () {
                    this.list.clear();
                };
                Structure.prototype.isEmpty = function () {
                    return this.list.isEmpty();
                };
                Structure.prototype.enqueue = function (t) {
                    this.list.addLastItem(t);
                };
                Structure.prototype.dequeue = function () {
                    return this.list.removeFirstItem();
                };
                Structure.prototype.getIterator = function () {
                    return this.list.getIterator();
                };
                return Structure;
            })();
            Queue.Structure = Structure;
        })(Queue = Lists.Queue || (Lists.Queue = {}));
    })(Lists = JirglStructures.Lists || (JirglStructures.Lists = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=queue.js.map