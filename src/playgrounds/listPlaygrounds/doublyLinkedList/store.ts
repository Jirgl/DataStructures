import { action, observable } from 'mobx';

class DoublyLinkedListStore {
    actions = [
        { title: 'add', disabled: false },
        { title: 'remove', disabled: false }
    ];
    settings = [
        { title: 'first', disabled: false },
        { title: 'predecessor', disabled: false },
        { title: 'current', disabled: true },
        { title: 'successor', disabled: false },
        { title: 'last', disabled: false }
    ];

    @observable selectedAction: number = 0;
    @observable selectedSettings: number = 0;

    @action.bound
    setAction(value: number) {
        this.selectedAction = value;
        if (value === 1) {
            this.settings[2].disabled = false;
        } else {
            this.settings[2].disabled = true;
            if (this.selectedSettings === 2) this.selectedSettings = 0;
        }
    }

    @action.bound
    setSettings(value: number) {
        this.selectedSettings = value;
    }
}

export const store = new DoublyLinkedListStore();