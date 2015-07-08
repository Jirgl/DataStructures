/// <reference path="../bobril/bobril.d.ts" />
/// <reference path="../bobril/bobril.mouse.d.ts" />
/// <reference path="../components/button.ts" />
/// <reference path="../components/canvas.ts" />
/// <reference path="../models/grid.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var JirglStructures;
(function (JirglStructures) {
    var GuiDoublyLinkedList = (function (_super) {
        __extends(GuiDoublyLinkedList, _super);
        function GuiDoublyLinkedList() {
            _super.call(this);
            this.iterator = new GuiDoublyLinkedListIterator(this);
        }
        GuiDoublyLinkedList.prototype.getPosition = function (maxWidth) {
            var itemsPerLine = Math.floor(maxWidth / (JirglStructures.itemWidth + (JirglStructures.itemMargin * 2)));
            return {
                x: ((this.iterator.orderOfItem - 1) % itemsPerLine) * (JirglStructures.itemWidth + (JirglStructures.itemMargin * 2)),
                y: Math.floor((this.iterator.orderOfItem - 1) / itemsPerLine) * (JirglStructures.itemHeight + (JirglStructures.itemMargin * 2))
            };
        };
        GuiDoublyLinkedList.prototype.getGuiIterator = function () {
            return this.iterator;
        };
        return GuiDoublyLinkedList;
    })(JirglStructures.Lists.DoublyLinkedList);
    JirglStructures.GuiDoublyLinkedList = GuiDoublyLinkedList;
    var GuiDoublyLinkedListIterator = (function (_super) {
        __extends(GuiDoublyLinkedListIterator, _super);
        function GuiDoublyLinkedListIterator(doublyLinkedList) {
            _super.call(this, doublyLinkedList);
        }
        GuiDoublyLinkedListIterator.prototype.nextGuiItem = function () {
            var item = new JirglStructures.GuiItem();
            item.isCurrent = this.doublyLinkedList.currentItem === this.iteratorCurrentItem;
            var next = _super.prototype.next.call(this);
            item.content = next;
            this.orderOfItem++;
            return item;
        };
        GuiDoublyLinkedListIterator.prototype.reset = function () {
            _super.prototype.reset.call(this);
            this.orderOfItem = 0;
        };
        return GuiDoublyLinkedListIterator;
    })(JirglStructures.Lists.DoublyLinkedListIterator);
    var doublyListComponent = {
        init: function (ctx, me) {
            ctx.doublyLinkedList = new GuiDoublyLinkedList();
            ctx.doublyLinkedList.addFirstItem("init item");
            ctx.option = "first";
            ctx.action = "add";
        },
        render: function (ctx, me) {
            var options = ["first", "predecessor"];
            if (ctx.action === "remove") {
                options.push("current");
            }
            options.push("successor");
            options.push("last");
            me.children = [
                JirglStructures.controlPanel({
                    actions: JirglStructures.combobox({
                        options: ["add", "remove"],
                        onChange: function (value) {
                            ctx.action = value;
                        }
                    }),
                    options: JirglStructures.combobox({
                        options: options,
                        onChange: function (value) {
                            ctx.option = value;
                        }
                    }),
                    valueBox: JirglStructures.textbox({
                        onChange: function (value) {
                            ctx.value = value;
                        },
                        isDisabled: ctx.action === "remove"
                    }),
                    submitButton: JirglStructures.button({
                        content: "Execute",
                        onClick: function () {
                            if (ctx.action === "add") {
                                if (ctx.option === "first") {
                                    ctx.doublyLinkedList.addFirstItem(ctx.value);
                                }
                                else if (ctx.option === "predecessor") {
                                    ctx.doublyLinkedList.addPreviousItem(ctx.value);
                                }
                                else if (ctx.option === "successor") {
                                    ctx.doublyLinkedList.addNextItem(ctx.value);
                                }
                                else if (ctx.option === "last") {
                                    ctx.doublyLinkedList.addLastItem(ctx.value);
                                }
                            }
                            else if (ctx.action === "remove") {
                                if (ctx.option === "first") {
                                    ctx.doublyLinkedList.removeFirstItem();
                                }
                                else if (ctx.option === "predecessor") {
                                    ctx.doublyLinkedList.removePreviousItem();
                                }
                                else if (ctx.option === "current") {
                                    ctx.doublyLinkedList.removeCurrentItem();
                                }
                                else if (ctx.option === "successor") {
                                    ctx.doublyLinkedList.removeNextItem();
                                }
                                else if (ctx.option === "last") {
                                    ctx.doublyLinkedList.removeLastItem();
                                }
                            }
                            b.invalidate(ctx);
                        }
                    })
                }),
                JirglStructures.canvas({
                    contentIterator: ctx.doublyLinkedList.getGuiIterator(),
                    grid: ctx.doublyLinkedList
                })
            ];
        }
    };
    function doublyList(data) {
        return { component: doublyListComponent, data: data };
    }
    JirglStructures.doublyList = doublyList;
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=doublyList.js.map