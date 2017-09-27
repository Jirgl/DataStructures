import * as React from 'react';
import { Paper } from 'material-ui';
import * as Colors from 'material-ui/styles/colors';
import { Block } from '../block';

export const itemSettings = {
    size: 50,
    margin: {
        inner: 2,
        outer: 30
    }
};

export interface IItemProps {
    x: number;
    y: number;
    isActive: boolean;
    children: React.ReactChild;
}

const styles = {
    absolute: {
        position: 'absolute'
    },
    outerBox: {
        position: 'relative'
    },
    innerBox: {
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)'
    }
}

function createContent(children: React.ReactChild): React.ReactChild {
    return <Block style={Object.assign({}, styles.outerBox, { width: itemSettings.size, height: itemSettings.size })}>
        <Block style={Object.assign({}, styles.innerBox, styles.absolute)}>
            {children}
        </Block>
    </Block>
}

export const Item = (props: IItemProps) => {
    const itemStyle = {
        width: itemSettings.size,
        height: itemSettings.size,
        left: props.x,
        top: props.y,
        color: props.isActive ? Colors.white : Colors.black,
        background: props.isActive ? Colors.lightBlue500 : Colors.white,
        margin: itemSettings.margin.outer
    };
    return <Paper zDepth={2} circle={true} style={Object.assign({}, styles.absolute, itemStyle)}>
        {createContent(props.children)}
    </Paper>
}
