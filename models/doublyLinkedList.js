/// <reference path="iterator.ts" />
var JirglStructures;
(function (JirglStructures) {
    var Lists;
    (function (Lists) {
        var Item = (function () {
            function Item() {
            }
            return Item;
        })();
        Lists.Item = Item;
        var DoublyLinkedList = (function () {
            function DoublyLinkedList() {
            }
            DoublyLinkedList.prototype.clear = function () {
                this.currentItem = undefined;
                this.firstItem = undefined;
                this.lastItem = undefined;
            };
            DoublyLinkedList.prototype.addFirstItem = function (t) {
                var item = new Item();
                item.data = t;
                if (this.firstItem === undefined) {
                    this.firstItem = this.lastItem = this.currentItem = item;
                }
                else {
                    item.next = this.firstItem;
                    this.firstItem.previous = item;
                    this.firstItem = item;
                    this.currentItem = this.firstItem;
                }
            };
            DoublyLinkedList.prototype.addLastItem = function (t) {
                var item = new Item();
                item.data = t;
                if (this.lastItem === undefined) {
                    this.firstItem = this.lastItem = this.currentItem = item;
                }
                else {
                    item.previous = this.lastItem;
                    this.lastItem.next = item;
                    this.lastItem = item;
                    this.currentItem = this.lastItem;
                }
            };
            DoublyLinkedList.prototype.addNextItem = function (t) {
                var item = new Item();
                item.data = t;
                if (this.currentItem === undefined) {
                    this.firstItem = this.lastItem = this.currentItem = item;
                }
                else if (this.currentItem === this.lastItem) {
                    this.addLastItem(t);
                }
                else {
                    item.next = this.currentItem.next;
                    item.previous = this.currentItem;
                    this.currentItem.next.previous = item;
                    this.currentItem.next = item;
                    this.currentItem = item;
                }
            };
            DoublyLinkedList.prototype.addPreviousItem = function (t) {
                var item = new Item();
                item.data = t;
                if (this.currentItem == null) {
                    this.firstItem = this.lastItem = this.currentItem = item;
                }
                else if (this.currentItem === this.firstItem) {
                    this.addFirstItem(t);
                }
                else {
                    item.next = this.currentItem;
                    item.previous = this.currentItem.previous;
                    this.currentItem.previous.next = item;
                    this.currentItem.previous = item;
                    this.currentItem = item;
                }
            };
            DoublyLinkedList.prototype.getCurrentItem = function () {
                return this.currentItem.data;
            };
            DoublyLinkedList.prototype.getFirstItem = function () {
                return this.firstItem.data;
            };
            DoublyLinkedList.prototype.getLastItem = function () {
                return this.lastItem.data;
            };
            DoublyLinkedList.prototype.getNextItem = function () {
                return this.currentItem.next.data;
            };
            DoublyLinkedList.prototype.getPreviousItem = function () {
                return this.currentItem.previous.data;
            };
            DoublyLinkedList.prototype.removeCurrentItem = function () {
                if (this.currentItem === undefined) {
                    return undefined;
                }
                if (this.currentItem === this.firstItem) {
                    return this.removeFirstItem();
                }
                else if (this.currentItem === this.lastItem) {
                    return this.removeLastItem();
                }
                else {
                    var itemData = this.currentItem.data;
                    this.currentItem.previous.next = this.currentItem.next;
                    this.currentItem.next.previous = this.currentItem.previous;
                    this.currentItem.previous = undefined;
                    this.currentItem.next = undefined;
                    this.currentItem = this.firstItem;
                    return itemData;
                }
            };
            DoublyLinkedList.prototype.removeFirstItem = function () {
                if (this.firstItem === undefined) {
                    return undefined;
                }
                var itemData = this.firstItem.data;
                if (this.firstItem === this.lastItem) {
                    this.firstItem = this.lastItem = this.currentItem = undefined;
                }
                else {
                    var newFirstItem = this.firstItem.next;
                    this.firstItem.next.previous = undefined;
                    this.firstItem.next = undefined;
                    if (this.firstItem === this.currentItem) {
                        this.currentItem = newFirstItem;
                    }
                    this.firstItem = newFirstItem;
                }
                return itemData;
            };
            DoublyLinkedList.prototype.removeLastItem = function () {
                if (this.lastItem === undefined) {
                    return undefined;
                }
                var itemData = this.lastItem.data;
                if (this.lastItem === this.firstItem) {
                    this.firstItem = this.lastItem = this.currentItem = undefined;
                }
                else {
                    var newLastItem = this.lastItem.previous;
                    this.lastItem.previous.next = undefined;
                    this.lastItem.previous = undefined;
                    if (this.lastItem === this.currentItem) {
                        this.currentItem = this.firstItem;
                    }
                    this.lastItem = newLastItem;
                }
                return itemData;
            };
            DoublyLinkedList.prototype.removeNextItem = function () {
                if (this.currentItem === undefined || this.currentItem.next === undefined) {
                    return undefined;
                }
                else if (this.currentItem.next === this.lastItem) {
                    return this.removeLastItem();
                }
                else {
                    var itemData = this.currentItem.next.data;
                    var newNextItem = this.currentItem.next.next;
                    this.currentItem.next.next.previous = this.currentItem;
                    this.currentItem.next.next = undefined;
                    this.currentItem.next.previous = undefined;
                    this.currentItem.next = newNextItem;
                    return itemData;
                }
            };
            DoublyLinkedList.prototype.removePreviousItem = function () {
                if (this.currentItem == undefined || this.currentItem.previous === undefined) {
                    return undefined;
                }
                else if (this.currentItem.previous === this.firstItem) {
                    return this.removeFirstItem();
                }
                else {
                    var itemData = this.currentItem.previous.data;
                    var newPreviousItem = this.currentItem.previous.previous;
                    this.currentItem.previous.previous.next = this.currentItem;
                    this.currentItem.previous.previous = undefined;
                    this.currentItem.previous.next = undefined;
                    this.currentItem.previous = newPreviousItem;
                    return itemData;
                }
            };
            DoublyLinkedList.prototype.getIterator = function () {
                return new DoublyLinkedListIterator(this.firstItem);
            };
            return DoublyLinkedList;
        })();
        Lists.DoublyLinkedList = DoublyLinkedList;
        var DoublyLinkedListIterator = (function () {
            function DoublyLinkedListIterator(firstItem) {
                this.firstItem = this.iteratorCurrentItem = firstItem;
            }
            DoublyLinkedListIterator.prototype.hasNext = function () {
                return this.iteratorCurrentItem != undefined;
            };
            DoublyLinkedListIterator.prototype.next = function () {
                var current = this.iteratorCurrentItem;
                this.iteratorCurrentItem = this.iteratorCurrentItem.next;
                return current.data;
            };
            DoublyLinkedListIterator.prototype.reset = function () {
                this.iteratorCurrentItem = this.firstItem;
            };
            return DoublyLinkedListIterator;
        })();
        Lists.DoublyLinkedListIterator = DoublyLinkedListIterator;
    })(Lists = JirglStructures.Lists || (JirglStructures.Lists = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=doublylinkedlist.js.map