import { action, observable } from 'mobx';

class StackStore {
    actions = [
        { title: 'enqueue', disabled: false },
        { title: 'dequeue', disabled: false }
    ];

    @observable selectedAction: number = 0;

    @action.bound
    setAction(value: number) {
        this.selectedAction = value;
    }
}

export const store = new StackStore();