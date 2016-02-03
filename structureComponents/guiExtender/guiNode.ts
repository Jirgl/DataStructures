/// <reference path="../../components/canvas.ts" />

module JirglStructures.GuiExtender {
    export class GuiNode extends Trees.Node<string> implements IGuiContent {
        isCurrent: boolean;
        indexOfNode: number;

        constructor(content: string) {
            super(content);
        }

        getContent(): string {
            return this.data;
        }
    }
}