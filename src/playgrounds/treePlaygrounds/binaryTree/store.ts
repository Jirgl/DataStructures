import { action, observable } from 'mobx';
import { Structure } from './graphicalStructure';
import { TreeIterator } from '../base/treeIterator';

class StackStore {
    private structureFunctions: { [action: string]: { [parameter: string]: (content?: string) => void } };
    private structure: Structure;
    @observable iterator: TreeIterator;
    @observable selectedAction: string;
    @observable selectedParameter: string;

    constructor() {
        this.structure = new Structure();
        this.structure.addRoot('init');
        this.iterator = this.structure.getIterator();

        this.structureFunctions = {
            'add': {
                'root': (content: string) => this.structure.addRoot(content),
                'leftChild': (content: string) => this.structure.addLeftChild(content),
                'rightChild': (content: string) => this.structure.addRightChild(content)
            },
            'get': {
                'root': () => this.structure.getRoot(),
                'current': () => this.structure.getCurrentNode(),
                'parent': () => this.structure.getParent(),
                'leftChild': () => this.structure.getLeftChild(),
                'rightChild': () => this.structure.getRightChild()
            },
            'remove': {
                'root': () => this.structure.removeRoot(),
                'leftChild': () => this.structure.removeLeftChild(),
                'rightChild': () => this.structure.removeRightChild()
            }
        };
        this.setAction(Object.keys(this.structureFunctions)[0]);
    }

    get actions(): string[] {
        return Object.getOwnPropertyNames(this.structureFunctions);
    }

    get parameters(): string[] {
        return Object.getOwnPropertyNames(this.structureFunctions[this.selectedAction]);
    }

    @action.bound
    setAction(value: string) {
        this.selectedAction = value;
        this.setParameter(Object.keys(this.structureFunctions[this.selectedAction])[0]);
    }

    @action.bound
    setParameter(value: string) {
        this.selectedParameter = value;
    }

    @action.bound
    execute(content?: string) {
        this.structureFunctions[this.selectedAction][this.selectedParameter](content);
        this.iterator = this.structure.getIterator();
    }
}

export const store = new StackStore();