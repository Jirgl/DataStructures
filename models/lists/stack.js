/// <reference path="doublyLinkedList.ts" />
var JirglStructures;
(function (JirglStructures) {
    var Lists;
    (function (Lists) {
        var Stack = (function () {
            function Stack() {
                this.list = new Lists.DoublyLinkedList();
            }
            Stack.prototype.clear = function () {
                this.list.clear();
            };
            Stack.prototype.isEmpty = function () {
                return this.list.isEmpty();
            };
            Stack.prototype.push = function (t) {
                this.list.addFirstItem(t);
            };
            Stack.prototype.pop = function () {
                return this.list.removeFirstItem();
            };
            Stack.prototype.getIterator = function () {
                return this.list.getIterator();
            };
            return Stack;
        })();
        Lists.Stack = Stack;
    })(Lists = JirglStructures.Lists || (JirglStructures.Lists = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=stack.js.map