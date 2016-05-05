/// <reference path="../iterator.ts" />
var JirglStructures;
(function (JirglStructures) {
    var Lists;
    (function (Lists) {
        var DoublyLinkedList;
        (function (DoublyLinkedList) {
            var Item = (function () {
                function Item(key, data) {
                    this.key = key;
                    this.data = data;
                }
                return Item;
            })();
            DoublyLinkedList.Item = Item;
            var Structure = (function () {
                function Structure() {
                }
                Structure.prototype.clear = function () {
                    this.currentItem = this.firstItem = this.lastItem = undefined;
                };
                Structure.prototype.isEmpty = function () {
                    return this.firstItem === undefined;
                };
                Structure.prototype.addFirstItem = function (key, data) {
                    var item = new Item(key, data);
                    if (this.firstItem) {
                        item.next = this.firstItem;
                        this.firstItem.previous = item;
                        this.firstItem = item;
                        this.currentItem = this.firstItem;
                    }
                    else {
                        this.firstItem = this.lastItem = this.currentItem = item;
                    }
                };
                Structure.prototype.addLastItem = function (key, data) {
                    var item = new Item(key, data);
                    if (this.lastItem) {
                        item.previous = this.lastItem;
                        this.lastItem.next = item;
                        this.lastItem = item;
                        this.currentItem = this.lastItem;
                    }
                    else {
                        this.firstItem = this.lastItem = this.currentItem = item;
                    }
                };
                Structure.prototype.addNextItem = function (key, data) {
                    var item = new Item(key, data);
                    if (!this.currentItem) {
                        this.firstItem = this.lastItem = this.currentItem = item;
                    }
                    else if (this.currentItem === this.lastItem) {
                        this.addLastItem(key, data);
                    }
                    else {
                        item.next = this.currentItem.next;
                        item.previous = this.currentItem;
                        this.currentItem.next.previous = item;
                        this.currentItem.next = item;
                        this.currentItem = item;
                    }
                };
                Structure.prototype.addPreviousItem = function (key, data) {
                    var item = new Item(key, data);
                    if (!this.currentItem) {
                        this.firstItem = this.lastItem = this.currentItem = item;
                    }
                    else if (this.currentItem === this.firstItem) {
                        this.addFirstItem(key, data);
                    }
                    else {
                        item.next = this.currentItem;
                        item.previous = this.currentItem.previous;
                        this.currentItem.previous.next = item;
                        this.currentItem.previous = item;
                        this.currentItem = item;
                    }
                };
                Structure.prototype.getCurrentItem = function () {
                    return this.currentItem.data;
                };
                Structure.prototype.getFirstItem = function () {
                    return this.firstItem.data;
                };
                Structure.prototype.getLastItem = function () {
                    return this.lastItem.data;
                };
                Structure.prototype.getNextItem = function () {
                    return this.currentItem.next.data;
                };
                Structure.prototype.getPreviousItem = function () {
                    return this.currentItem.previous.data;
                };
                Structure.prototype.removeKey = function (key) {
                    if (!this.firstItem)
                        return undefined;
                    var previousItem = undefined;
                    var currentItem = this.firstItem;
                    while (currentItem) {
                        if (currentItem.key === key) {
                            if (previousItem) {
                                previousItem.next = currentItem.next;
                                currentItem.next.previous = previousItem;
                                currentItem.previous = currentItem.previous = undefined;
                            }
                            else {
                                //current item is first item
                                if (this.currentItem === this.firstItem) {
                                    this.currentItem = this.firstItem = currentItem.next;
                                }
                                else {
                                    this.firstItem = currentItem.next;
                                }
                            }
                            return currentItem.data;
                        }
                        previousItem = currentItem;
                        currentItem = currentItem.next;
                    }
                    return undefined;
                };
                Structure.prototype.removeCurrentItem = function () {
                    if (!this.currentItem)
                        return undefined;
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
                Structure.prototype.removeFirstItem = function () {
                    if (!this.firstItem)
                        return undefined;
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
                Structure.prototype.removeLastItem = function () {
                    if (!this.lastItem)
                        return undefined;
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
                Structure.prototype.removeNextItem = function () {
                    if (!this.currentItem || !this.currentItem.next) {
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
                Structure.prototype.removePreviousItem = function () {
                    if (!this.currentItem || !this.currentItem.previous) {
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
                Structure.prototype.getIterator = function () {
                    return new Iterator(this.firstItem);
                };
                return Structure;
            })();
            DoublyLinkedList.Structure = Structure;
            var Iterator = (function () {
                function Iterator(firstItem) {
                    this.firstItem = this.currentItem = firstItem;
                }
                Iterator.prototype.hasNext = function () {
                    return this.currentItem !== undefined;
                };
                Iterator.prototype.next = function () {
                    var current = this.currentItem;
                    this.currentItem = this.currentItem.next;
                    return current.data;
                };
                Iterator.prototype.reset = function () {
                    this.currentItem = this.firstItem;
                };
                return Iterator;
            })();
            DoublyLinkedList.Iterator = Iterator;
        })(DoublyLinkedList = Lists.DoublyLinkedList || (Lists.DoublyLinkedList = {}));
    })(Lists = JirglStructures.Lists || (JirglStructures.Lists = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=doublyLinkedList.js.map