import { action, observable } from 'mobx';

class StackStore {
    actions = [
        { title: 'push', disabled: false },
        { title: 'pop', disabled: false }
    ];

    @observable selectedAction: number = 0;

    @action.bound
    setAction(value: number) {
        this.selectedAction = value;
    }
}

export const store = new StackStore();