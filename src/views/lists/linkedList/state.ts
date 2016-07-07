import * as f from 'bobflux';
import { Structure as LinkedList } from '../graphicalEnricher/linkedList';

export const Actions = {
    add: 0,
    remove: 1
}

export const Parameters = {
    first: 0,
    predecessor: 1,
    successor: 2,
    last: 3,
    current: 4
}

export interface ILinkedListState extends f.IState {
    linkedList: LinkedList;
    content: string;
    actions: string[];
    selectedAction: number;
    parameters: string[];
    selectedParameter: number;
}

export const createDefaultLinkedListState = (): ILinkedListState => {
    const linkedList = new LinkedList();
    let params = Object.keys(Parameters);
    params.splice(4, 1);
    linkedList.addFirstItem('init item');
    return {
        linkedList: linkedList,
        content: '',
        actions: Object.keys(Actions),
        selectedAction: 0,
        parameters: params,
        selectedParameter: 0
    };
}
