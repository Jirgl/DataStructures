import * as React from 'react';
import { observer } from 'mobx-react';
import { Block } from '../../../components/block';
import { ArrowType } from '../../../components/canvas/arrow';
import { ControlBar } from '../../../components/controlBar';
import { TreeCanvas } from '../base/treeCanvas';
import { store } from './store';

const boxStyle = {
    paddingTop: 20
};

export const BinaryTreePlayground = observer(() =>
    <Block style={boxStyle}>
        <ControlBar
            actions={store.actions}
            onActionChange={store.setAction}
            onSettingsChange={store.setSettings}
            onExecute={store.execute}
            selectedActionValue={store.selectedAction}
            selectedSettingsValue={store.selectedSettings}
        />
        <TreeCanvas
            arrowType={ArrowType.DirectOneWay}
            iterator={store.iterator}
            width={window.document.documentElement.clientWidth}
        />
    </Block>
);
