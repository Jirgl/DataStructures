import * as f from 'bobflux';
import { IListState, createDefaultListState } from './views/lists/state';
import { ITreeState, createDefaultTreeState } from './views/trees/state';

export interface IAppState extends f.IState {
    list: IListState;
    tree: ITreeState;
}

export const createDefaultAppState = (): IAppState => {
    return {
        list: createDefaultListState(),
        tree: createDefaultTreeState()
    };
}
