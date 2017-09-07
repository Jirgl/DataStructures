import { action, observable } from 'mobx';
import { Structure } from './graphicalStructure';
import { ListIterator } from '../listIterator';

class StackStore {
    actions = [
        { title: 'push', disabled: false },
        { title: 'pop', disabled: false }
    ];

    private structureFunctions: { [action: string]: (content?: string) => void };
    private structure: Structure;
    @observable iterator: ListIterator;
    @observable selectedAction: number = 0;

    constructor() {
        this.structure = new Structure();
        this.structure.push('init');
        this.iterator = this.structure.getIterator();

        this.structureFunctions = {
            'push': (content: string) => this.structure.push(content),
            'pop': () => this.structure.pop()
        };
    }

    @action.bound
    setAction(value: number) {
        this.selectedAction = value;
    }

    @action.bound
    execute(content?: string) {
        const action = this.actions[this.selectedAction].title;
        this.structureFunctions[action](content);
        this.iterator = this.structure.getIterator();
    }
}

export const store = new StackStore();