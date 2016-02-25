/// <reference path="doublyLinkedList.ts" />
var JirglStructures;
(function (JirglStructures) {
    var Lists;
    (function (Lists) {
        var Stack;
        (function (Stack) {
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
                Structure.prototype.push = function (t) {
                    this.list.addFirstItem(t);
                };
                Structure.prototype.pop = function () {
                    return this.list.removeFirstItem();
                };
                Structure.prototype.getIterator = function () {
                    return this.list.getIterator();
                };
                return Structure;
            })();
            Stack.Structure = Structure;
        })(Stack = Lists.Stack || (Lists.Stack = {}));
    })(Lists = JirglStructures.Lists || (JirglStructures.Lists = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=stack.js.map