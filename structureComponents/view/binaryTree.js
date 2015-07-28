/// <reference path="../../bobril/bobril.d.ts" />
/// <reference path="../../bobril/bobril.mouse.d.ts" />
/// <reference path="../../components/button.ts" />
/// <reference path="../../components/canvas.ts" />
/// <reference path="../../structureComponents/grid.ts" />
var JirglStructures;
(function (JirglStructures) {
    var View;
    (function (View) {
        var binaryTreeComponent = {
            init: function (ctx, me) {
                ctx.binaryTree = new JirglStructures.GuiExtender.GuiBinaryTree();
                ctx.binaryTree.addRoot(new JirglStructures.GuiExtender.GuiNode("root node"));
                ctx.binaryTree.addLeftChild(new JirglStructures.GuiExtender.GuiNode("left node"));
                ctx.binaryTree.addRightChild(new JirglStructures.GuiExtender.GuiNode("right node"));
                ctx.binaryTree.getLeftChildNode();
                ctx.binaryTree.addLeftChild(new JirglStructures.GuiExtender.GuiNode("0"));
                ctx.binaryTree.addRightChild(new JirglStructures.GuiExtender.GuiNode("1"));
                ctx.binaryTree.getRootNode();
                ctx.binaryTree.getRightChildNode();
                ctx.binaryTree.addLeftChild(new JirglStructures.GuiExtender.GuiNode("2"));
                ctx.binaryTree.addRightChild(new JirglStructures.GuiExtender.GuiNode("3"));
                ctx.action = "add";
                ctx.option = "left child";
            },
            render: function (ctx, me) {
                var iterator = ctx.binaryTree.getIterator();
                var options = ["root", "left child", "right child"];
                if (ctx.action === "get") {
                    options.push("parent");
                    options.push("current");
                }
                me.children = [
                    JirglStructures.controlPanel({
                        actions: JirglStructures.combobox({
                            options: ["add", "get", "remove"],
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
                            isDisabled: ctx.action === "remove" || ctx.action === "get"
                        }),
                        submitButton: JirglStructures.button({
                            content: "Execute",
                            onClick: function () {
                                if (ctx.action === "add") {
                                    if (ctx.option === "root") {
                                        ctx.binaryTree.addRoot(new JirglStructures.GuiExtender.GuiNode(ctx.value));
                                    }
                                    else if (ctx.option === "left child") {
                                        ctx.binaryTree.addLeftChild(new JirglStructures.GuiExtender.GuiNode(ctx.value));
                                    }
                                    else if (ctx.option === "right child") {
                                        ctx.binaryTree.addRightChild(new JirglStructures.GuiExtender.GuiNode(ctx.value));
                                    }
                                }
                                else if (ctx.action === "get") {
                                    if (ctx.option === "root") {
                                        ctx.binaryTree.getRootNode();
                                    }
                                    else if (ctx.option === "left child") {
                                        ctx.binaryTree.getLeftChildNode();
                                    }
                                    else if (ctx.option === "right child") {
                                        ctx.binaryTree.getRightChildNode();
                                    }
                                    else if (ctx.option === "parent") {
                                        ctx.binaryTree.getParentNode();
                                    }
                                    else if (ctx.option === "current") {
                                        ctx.binaryTree.getCurrentNode();
                                    }
                                }
                                else if (ctx.action === "remove") {
                                    if (ctx.option === "root") {
                                        ctx.binaryTree.removeRootNode();
                                    }
                                    else if (ctx.option === "left child") {
                                        ctx.binaryTree.removeLeftChildNode();
                                    }
                                    else if (ctx.option === "right child") {
                                        ctx.binaryTree.removeRightChildNode();
                                    }
                                }
                                b.invalidate(ctx);
                            }
                        })
                    }),
                    JirglStructures.canvas({
                        contentIterator: iterator,
                        grid: new JirglStructures.GuiExtender.GuiGridTree(ctx.binaryTree.getDepth(), iterator)
                    })
                ];
            }
        };
        function binaryTree(data) {
            return { component: binaryTreeComponent, data: data };
        }
        View.binaryTree = binaryTree;
    })(View = JirglStructures.View || (JirglStructures.View = {}));
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=binaryTree.js.map