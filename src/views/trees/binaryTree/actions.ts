import * as f from 'bobflux';
import * as s from './state';
import * as c from './cursor';

export let changeAction = f.createAction<s.IBinaryTreeState, number>(c.binaryTreeCursor, (state, action) =>
    f.shallowCopy(state, (newState) => {
        newState.selectedAction = action;
        if (action === s.Actions['get']) {
            let index = newState.parameters.indexOf('parent');
            if (index === -1) newState.parameters.splice(1, 0, 'parent');

            index = newState.parameters.indexOf('current');
            if (index === -1) newState.parameters.splice(2, 0, 'current');
        } else {
            let index = newState.parameters.indexOf('current');
            if (index > -1) newState.parameters.splice(index, 1);

            index = newState.parameters.indexOf('parent');
            if (index > -1) newState.parameters.splice(index, 1);

            if (newState.selectedParameter === s.Parameters['parent'] ||
                newState.selectedParameter === s.Parameters['current']) newState.selectedParameter = 0;
        }
    })
);

export let changeParameter = f.createAction<s.IBinaryTreeState, number>(c.binaryTreeCursor, (state, parameter) =>
    f.shallowCopy(state, (newState) => {
        newState.selectedParameter = parameter;
    })
);

export let setContent = f.createAction<s.IBinaryTreeState, string>(c.binaryTreeCursor, (state, content) =>
    f.shallowCopy(state, (newState) => {
        newState.content = content;
    })
);

export let execute = f.createAction<s.IBinaryTreeState, number>(c.binaryTreeCursor, (state) =>
    f.shallowCopy(state, (newState) => {
        if (state.selectedAction === s.Actions['add']) {
            if (state.selectedParameter === s.Parameters['root']) {
                state.binaryTree.addRoot(state.content);
            } else if (state.selectedParameter === s.Parameters['leftChild']) {
                state.binaryTree.addLeftChild(state.content);
            } else if (state.selectedParameter === s.Parameters['rightChild']) {
                state.binaryTree.addRightChild(state.content);
            }
        } else if (state.selectedAction === s.Actions['get']) {
            if (state.selectedParameter === s.Parameters['root']) {
                state.binaryTree.getRoot();
            } else if (state.selectedParameter === s.Parameters['leftChild']) {
                state.binaryTree.getLeftChild();
            } else if (state.selectedParameter === s.Parameters['rightChild']) {
                state.binaryTree.getRightChild();
            } else if (state.selectedParameter === s.Parameters['parent']) {
                state.binaryTree.getParent();
            } else if (state.selectedParameter === s.Parameters['current']) {
                state.binaryTree.getCurrentNode();
            }
        } else if (state.selectedAction === s.Actions['remove']) {
            if (state.selectedParameter === s.Parameters['root']) {
                state.binaryTree.removeRoot();
            } else if (state.selectedParameter === s.Parameters['leftChild']) {
                state.binaryTree.removeLeftChild();
            } else if (state.selectedParameter === s.Parameters['rightChild']) {
                state.binaryTree.removeRightChild();
            }
        }
    })
);
