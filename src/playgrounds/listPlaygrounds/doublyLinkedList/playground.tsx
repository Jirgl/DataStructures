import * as React from 'react';
import { observer } from 'mobx-react';
import { Block } from '../../../components/block';
import { ArrowType } from '../../../components/canvas/arrow';
import { ControlBar } from '../../../components/controlBar';
import { ListCanvas } from '../base/listCanvas';
import { store } from './store';

const boxStyle = {
    paddingTop: 20
};

export const DoublyLinkedListPlayground = observer(() =>
    <Block style={boxStyle}>
        <ControlBar
            actions={store.actions}
            parameters={store.parameters}
            onActionChange={store.setAction}
            onParameterChange={store.setParameter}
            onExecute={store.execute}
            selectedActionValue={store.selectedAction}
            selectedParameterValue={store.selectedParameter}
        />
        <ListCanvas
            arrowType={ArrowType.DirectOneWay}
            iterator={store.iterator}
            width={window.document.documentElement.clientWidth}
        />
    </Block>
);
