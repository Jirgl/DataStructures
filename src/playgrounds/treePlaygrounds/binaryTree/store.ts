import { action, observable } from 'mobx';
import { Structure } from './graphicalStructure';
import { TreeIterator } from '../base/treeIterator';

class StackStore {
    actions = [
        { title: 'add', disabled: false },
        { title: 'get', disabled: false },
        { title: 'remove', disabled: false }
    ];
    settings = [
        { title: 'root', disabled: false },
        { title: 'leftChild', disabled: false },
        { title: 'rightChild', disabled: false },
        { title: 'parent', disabled: false },
        { title: 'current', disabled: false }
    ]

    private structureFunctions: { [action: string]: { [settings: string]: (content?: string) => void } };
    private structure: Structure;
    @observable iterator: TreeIterator;
    @observable selectedAction: number = 0;
    @observable selectedSettings: number = 0;

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
    }

    @action.bound
    setAction(value: number) {
        this.selectedAction = value;
    }

    @action.bound
    setSettings(value: number) {
        this.selectedSettings = value;
    }

    @action.bound
    execute(content?: string) {
        const action = this.actions[this.selectedAction].title;
        const settings = this.settings[this.selectedSettings].title;
        this.structureFunctions[action][settings](content);
        this.iterator = this.structure.getIterator();
    }
}

export const store = new StackStore();