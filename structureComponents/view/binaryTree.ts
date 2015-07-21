﻿/// <reference path="../../bobril/bobril.d.ts" />
/// <reference path="../../bobril/bobril.mouse.d.ts" />
/// <reference path="../../components/button.ts" />
/// <reference path="../../components/canvas.ts" />
/// <reference path="../../structureComponents/grid.ts" />

module JirglStructures.View {
    export interface IBinaryTreeData {

    }

    export interface IBinaryTreeCtx {
        binaryTree: GuiExtender.GuiBinaryTree;
        option: string;
        action: string;
        value: string;
        data: IBinaryTreeData;
    }

    var binaryTreeComponent: IBobrilComponent = {
        init(ctx: IBinaryTreeCtx, me: IBobrilNode): void {
            ctx.binaryTree = new GuiExtender.GuiBinaryTree();
            ctx.binaryTree.addRoot(new GuiExtender.GuiItem<string>("root node"));
            ctx.binaryTree.addLeftChild(new GuiExtender.GuiItem<string>("left node"));
            ctx.binaryTree.addRightChild(new GuiExtender.GuiItem<string>("right node"));
            ctx.action = "add";
            ctx.option = "left child";
        },
        render(ctx: IBinaryTreeCtx, me: IBobrilNode): void {
            var iterator = ctx.binaryTree.getGuiIterator();
            while (iterator.hasNext()) {
                var node = iterator.next().data;
                console.log(node.content + ": " + node.isCurrent);
            }

            var options = ["root", "left child", "right child"];

            if (ctx.action === "get") {
                options.push("parent");
                options.push("current");
            }

            me.children = [
                controlPanel({
                    actions: combobox({
                        options: ["add", "get", "remove"],
                        onChange: (value: string) => {
                            ctx.action = value;
                        }
                    }),
                    options: combobox({
                        options: options,
                        onChange: (value: string) => {
                            ctx.option = value;
                        }
                    }),
                    valueBox: textbox({
                        onChange: (value: string) => {
                            ctx.value = value;
                        },
                        isDisabled: ctx.action === "remove"
                    }),
                    submitButton: button({
                        content: "Execute",
                        onClick: () => {
                            /*if (ctx.action === "add") {
                                if (ctx.option === "root") {
                                    ctx.binaryTree.addRoot({ content: ctx.value, isCurrent: true });
                                } else if (ctx.option === "left child") {
                                    ctx.binaryTree.addLeftChild({ content: ctx.value, isCurrent: false });
                                } else if (ctx.option === "right child") {
                                    ctx.binaryTree.addRightChild({ content: ctx.value, isCurrent: false });
                                }
                            } else if (ctx.action === "get") {
                                if (ctx.option === "root") {
                                    ctx.binaryTree.getRootNode();
                                } else if (ctx.option === "left child") {
                                    ctx.binaryTree.getLeftChildNode();
                                } else if (ctx.option === "right child") {
                                    ctx.binaryTree.getRightChildNode();
                                } else if (ctx.option === "parent") {
                                    ctx.binaryTree.getParentNode();
                                } else if (ctx.option === "current") {
                                    ctx.binaryTree.getCurrentNode();
                                }
                            } else if (ctx.action === "remove") {
                                if (ctx.option === "root") {
                                    ctx.binaryTree.removeRootNode();
                                } else if (ctx.option === "left child") {
                                    ctx.binaryTree.removeLeftChildNode();
                                } else if (ctx.option === "right child") {
                                    ctx.binaryTree.removeRightChildNode();
                                }
                            }*/

                            ctx.binaryTree.getLeftChildNode();

                            b.invalidate(ctx);
                        }
                    })
                })/*,
                canvas({
                    contentIterator: iterator,
                    grid: new GuiExtender.GuiGridTree(ctx.binaryTree.getDepth(), iterator)
                })*/
            ];
        }
    }

    export function binaryTree(data: IBinaryTreeData): IBobrilNode {
        return { component: binaryTreeComponent, data: data };
    }
}