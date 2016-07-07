import * as f from 'bobflux';
import * as s from './state';
import * as c from './cursor';

export let changeAction = f.createAction<s.IDoublyLinkedListState, number>(c.doublyLinkedListCursor, (state, action) =>
    f.shallowCopy(state, (newState) => {
        newState.selectedAction = action;
        if (action === s.Actions['add']) {
            let index = newState.parameters.indexOf('current');
            if (index > -1) newState.parameters.splice(index, 1);
            if (newState.selectedParameter === s.Parameters['current']) newState.selectedParameter = 0;
        } else if (action === s.Actions['remove']) {
            let index = newState.parameters.indexOf('current');
            if (index === -1) newState.parameters.splice(2, 0, 'current');
        }
    })
);

export let changeParameter = f.createAction<s.IDoublyLinkedListState, number>(c.doublyLinkedListCursor, (state, parameter) =>
    f.shallowCopy(state, (newState) => {
        newState.selectedParameter = parameter;
    })
);

export let setContent = f.createAction<s.IDoublyLinkedListState, string>(c.doublyLinkedListCursor, (state, content) =>
    f.shallowCopy(state, (newState) => {
        newState.content = content;
    })
);

export let execute = f.createAction<s.IDoublyLinkedListState, number>(c.doublyLinkedListCursor, (state) =>
    f.shallowCopy(state, (newState) => {
        if (newState.selectedAction === s.Actions['add']) {
            if (newState.selectedParameter === s.Parameters['first']) {
                newState.doublyLinkedList.addFirstItem(newState.content);
            } else if (newState.selectedParameter === s.Parameters['predecessor']) {
                newState.doublyLinkedList.addPreviousItem(newState.content);
            } else if (newState.selectedParameter === s.Parameters['successor']) {
                newState.doublyLinkedList.addNextItem(newState.content);
            } else if (newState.selectedParameter === s.Parameters['last']) {
                newState.doublyLinkedList.addLastItem(newState.content);
            }
        } else if (newState.selectedAction === s.Actions['remove']) {
            if (newState.selectedParameter === s.Parameters['first']) {
                newState.doublyLinkedList.removeFirstItem();
            } else if (newState.selectedParameter === s.Parameters['predecessor']) {
                newState.doublyLinkedList.removePreviousItem();
            } else if (newState.selectedParameter === s.Parameters['current']) {
                newState.doublyLinkedList.removeCurrentItem();
            } else if (newState.selectedParameter === s.Parameters['successor']) {
                newState.doublyLinkedList.removeNextItem();
            } else if (newState.selectedParameter === s.Parameters['last']) {
                newState.doublyLinkedList.removeLastItem();
            }
        }
    })
);
