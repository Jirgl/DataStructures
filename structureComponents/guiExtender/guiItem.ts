/// <reference path="../../components/canvas.ts" />

module JirglStructures.GuiExtender {
    export class GuiItem extends Lists.Item<string> implements IGuiContent {
        isCurrent: boolean;

        constructor(content: string) {
            super(content);
        }

        getContent(): string {
            return this.data;
        }
    }
}