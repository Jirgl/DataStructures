import * as f from 'bobflux';
import { Structure as Stack } from '../graphicalEnricher/stack';

export interface IStackState extends f.IState {
    stack: Stack;
    content: string;
    actions: string[];
    selectedAction: number;
}

export const Actions = {
    push: 0,
    pop: 1
}

export const createDefaultStackState = (): IStackState => {
    const stack = new Stack();
    stack.push('init item');
    return {
        stack: stack,
        content: '',
        actions: Object.keys(Actions),
        selectedAction: 0
    };
}
