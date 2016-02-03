/// <reference path="../../bobril/bobril.d.ts" />
/// <reference path="../../components/button.ts" />
/// <reference path="../../components/canvas.ts" />
/// <reference path="../../components/combobox.ts" />
/// <reference path="../../components/controlPanel.ts" />
/// <reference path="../../components/textbox.ts" />
/// <reference path="../../models/trees/binaryTree.ts" />
/// <reference path="../guiExtender/guiNode.ts" />
/// <reference path="../guiExtender/guiGridTree.ts" />
/// <reference path="../guiExtender/guiBinaryTree.ts" />

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
        init(ctx: IBinaryTreeCtx): void {
            ctx.binaryTree = new GuiExtender.GuiBinaryTree();
            ctx.binaryTree.addRoot(new GuiExtender.GuiNode("root node"));
            ctx.binaryTree.addLeftChild(new GuiExtender.GuiNode("left node"));
            ctx.binaryTree.addRightChild(new GuiExtender.GuiNode("right node"));
            ctx.binaryTree.getLeftChildNode();
            ctx.binaryTree.addLeftChild(new GuiExtender.GuiNode("0"));
            ctx.binaryTree.addRightChild(new GuiExtender.GuiNode("1"));
            ctx.binaryTree.getRootNode();
            ctx.binaryTree.getRightChildNode();
            ctx.binaryTree.addLeftChild(new GuiExtender.GuiNode("2"));
            ctx.binaryTree.addRightChild(new GuiExtender.GuiNode("3"));
            ctx.action = "add";
            ctx.option = "left child";
        },
        render(ctx: IBinaryTreeCtx, me: IBobrilNode): void {
            const iterator = ctx.binaryTree.getIterator();
            const options = ["root", "left child", "right child"];

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
                        isDisabled: ctx.action === "remove" || ctx.action === "get"
                    }),
                    submitButton: button({
                        content: "Execute",
                        onClick: () => {
                            if (ctx.action === "add") {
                                if (ctx.option === "root") {
                                    ctx.binaryTree.addRoot(new GuiExtender.GuiNode(ctx.value));
                                } else if (ctx.option === "left child") {
                                    ctx.binaryTree.addLeftChild(new GuiExtender.GuiNode(ctx.value));
                                } else if (ctx.option === "right child") {
                                    ctx.binaryTree.addRightChild(new GuiExtender.GuiNode(ctx.value));
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
                            }

                            b.invalidate(ctx);
                        }
                    })
                }),
                canvas({
                    contentIterator: iterator,
                    grid: new GuiExtender.GuiGridTree(ctx.binaryTree.getDepth(), iterator)
                })
            ];
        }
    }

    export function binaryTree(data: IBinaryTreeData): IBobrilNode {
        return { component: binaryTreeComponent, data: data };
    }
}