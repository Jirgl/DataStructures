import * as React from 'react';
import { Paper } from 'material-ui';
import { Block } from '../block';

export const itemSettings = {
    size: 80,
    margin: {
        inner: 2,
        outer: 30
    },
    scale: {
        active: 1.2,
        classic: 1
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

function createContent(children: React.ReactChild, scale: number): React.ReactChild {
    return <Block style={Object.assign({}, styles.outerBox, { width: itemSettings.size, height: itemSettings.size })}>
        <Block style={Object.assign({}, styles.innerBox, styles.absolute, { fontSize: 100 * scale + '%', })}>
            {children}
        </Block>
    </Block>
}

export const Item = (props: IItemProps) => {
    const scale = props.isActive ? itemSettings.scale.active : itemSettings.scale.classic;
    const size = itemSettings.size * scale;
    const diff = scale !== 1 ? Math.abs(itemSettings.size - size) / 2 : 0;

    const itemStyle = {
        width: size,
        height: size,
        left: props.x + (scale > 1 ? -diff : diff),
        top: props.y + (scale > 1 ? -diff : diff),
        //  color: props.isHighlighted ? m.white : m.grey600,
        //  background: props.isHighlighted ? m.primary1Color : m.white,
        margin: itemSettings.margin.outer
    };
    return <Paper zDepth={2} style={Object.assign({}, styles.absolute, itemStyle)}>
        {createContent(props.children, scale)}
    </Paper>
}
