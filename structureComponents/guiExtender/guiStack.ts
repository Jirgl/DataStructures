module JirglStructures.GuiExtender {
    export class GuiStack<T> {
        private guiList: GuiDoublyLinkedList<T>;

        constructor() {
            this.guiList = new GuiDoublyLinkedList<T>();
        }

        getFirstGuiItem(): Lists.Item<GuiItem<T>> {
            return this.guiList.getFirstGuiItem();
        }

        push(item: GuiItem<T>): void {
            this.guiList.addFirstItem(item);
        }

        pop(): GuiItem<T> {
            return this.guiList.removeFirstItem();
        }

        getIterator(): GuiListIterator<T> {
            return new GuiListIterator<T>(this.getFirstGuiItem());
        }
    }
}