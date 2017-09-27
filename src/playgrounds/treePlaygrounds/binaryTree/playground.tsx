import * as React from 'react';
import { observer } from 'mobx-react';
import { Block } from '../../../components/block';
import { ArrowType } from '../../../components/canvas/arrow';
import { ControlBar } from '../../../components/controlBar';
import { TreeCanvas } from '../base/treeCanvas';
import { IPlaygroundData } from '../../base/playgroundData';
import { store } from './store';

const boxStyle = {
    paddingTop: 20
};

export const BinaryTreePlayground = observer((data: IPlaygroundData) =>
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
        <TreeCanvas
            arrowType={ArrowType.DirectOneWay}
            iterator={store.iterator}
            width={data.width}
        />
    </Block>
);
