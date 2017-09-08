import { action, observable } from 'mobx';
import { Structure } from './graphicalStructure';
import { ListIterator } from '../base/listIterator';

class StackStore {
    private structureFunctions: { [action: string]: (content?: string) => void };
    private structure: Structure;
    @observable iterator: ListIterator;
    @observable selectedAction: string;

    constructor() {
        this.structure = new Structure();
        this.structure.push('init');
        this.iterator = this.structure.getIterator();

        this.structureFunctions = {
            'push': (content: string) => this.structure.push(content),
            'pop': () => this.structure.pop()
        };
        this.selectedAction = Object.keys(this.structureFunctions)[0];
    }

    get actions(): string[] {
        return Object.getOwnPropertyNames(this.structureFunctions);
    }

    @action.bound
    setAction(value: string) {
        this.selectedAction = value;
    }

    @action.bound
    execute(content?: string) {
        this.structureFunctions[this.selectedAction](content);
        this.iterator = this.structure.getIterator();
    }
}

export const store = new StackStore();