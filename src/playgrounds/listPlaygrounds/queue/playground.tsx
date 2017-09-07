import * as React from 'react';
import { observer } from 'mobx-react';
import { Block } from '../../../components/block';
import { ArrowType } from '../../../components/canvas/arrow';
import { Canvas } from '../../../components/canvas/canvas';
import { ControlBar } from '../../../components/controlBar';
import { ListGrid } from '../listGrid';
import { store } from './store';

const boxStyle = {
    paddingTop: 20
};

export const QueuePlayground = observer(() =>
    <Block style={boxStyle}>
        <ControlBar
            actions={store.actions}
            onActionChange={store.setAction}
            selectedActionValue={store.selectedAction}
            onExecute={store.execute}
        />
        <Canvas
            arrowType={ArrowType.DirectOneWay}
            grid={new ListGrid(window.document.documentElement.clientWidth)}
            iterator={store.iterator}
            width={window.document.documentElement.clientWidth}
        />
    </Block>
);
