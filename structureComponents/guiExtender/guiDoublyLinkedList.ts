module JirglStructures.GuiExtender {
    export class GuiDoublyLinkedList<T> extends Lists.DoublyLinkedList<GuiItem<T>> {
        getCurrentGuiItem(): Lists.Item<GuiItem<T>> {
            return this.currentItem;
        }

        getFirstGuiItem(): Lists.Item<GuiItem<T>> {
            return this.firstItem;
        }

        getIterator(): GuiListIterator<T> {
            return new GuiListIterator<T>(this.firstItem, this.currentItem);
        }
    }
}