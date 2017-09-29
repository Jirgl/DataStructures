import * as React from 'react';
import { observer } from 'mobx-react';
import { Block } from '../../../components/block';
import { ArrowType } from '../../../components/canvas/arrow';
import { ControlBar } from '../../../components/controlBar';
import { ListCanvas } from '../base/listCanvas';
import { IPlaygroundData } from '../../base/types';
import { store } from './store';

const boxStyle = {
    paddingTop: 20
};

export const DoublyLinkedListPlayground = observer((data: IPlaygroundData) =>
    <Block style={boxStyle}>
        <ControlBar
            actions={store.actions}
            parameters={store.parameters}
            disableContent={store.isContentDisabled}
            onActionChange={store.setAction}
            onParameterChange={store.setParameter}
            onExecute={store.execute}
            selectedActionValue={store.selectedAction}
            selectedParameterValue={store.selectedParameter}
        />
        <ListCanvas
            arrowType={ArrowType.SchemaTwoWay}
            iterator={store.iterator}
            width={data.width}
        />
    </Block>
);
