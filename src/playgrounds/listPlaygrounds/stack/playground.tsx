import * as React from 'react';
import { observer } from 'mobx-react';
import { Block } from '../../../components/block';
import { ArrowType } from '../../../components/canvas/arrow';
import { ControlBar } from '../../../components/controlBar';
import { ListCanvas } from '../base/listCanvas';
import { IPlaygroundData } from '../../base/playgroundData';
import { store } from './store';

const boxStyle = {
    paddingTop: 20
};

export const StackPlayground = observer((data: IPlaygroundData) =>
    <Block style={boxStyle}>
        <ControlBar
            actions={store.actions}
            onActionChange={store.setAction}
            onExecute={store.execute}
            selectedActionValue={store.selectedAction}
        />
        <ListCanvas
            arrowType={ArrowType.SchemaTwoWay}
            iterator={store.iterator}
            width={data.width}
        />
    </Block>
);
