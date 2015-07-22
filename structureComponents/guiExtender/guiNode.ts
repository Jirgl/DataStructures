module JirglStructures.GuiExtender {
    export class GuiNode extends Trees.Node<string> implements IGuiContent {
        isCurrent: boolean;

        constructor(content: string) {
            super(content);
        }

        getContent(): string {
            return this.data;
        }
    }
}