import * as f from 'bobflux';
import { IBinaryTreeState, createDefaultBinaryTreeState } from './binaryTree/state';

export interface ITreeState extends f.IState {
    binaryTree: IBinaryTreeState;
}

export const createDefaultTreeState = (): ITreeState => {
    return {
        binaryTree: createDefaultBinaryTreeState()
    };
}
