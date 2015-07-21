module JirglStructures.GuiExtender {
    export class GuiItem<T> {
        content: T;
        isCurrent: boolean;

        constructor(content: T) {
            this.content = content;
        }
    }
}