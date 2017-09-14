import * as React from 'react';
import { Paper } from 'material-ui';
import { Title, TitleType } from './title';
import { settings } from '../appSettings';

export interface IPlaygroundProps {
    title: string;
    children: React.ReactChild;
}

const styles = {
    box: {
        width: settings.contentWidth * 100 + '%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
        marginBottom: 50,
        padding: 10
    }
}

export const Playground = (props: IPlaygroundProps) =>
    <Paper zDepth={0} style={styles.box}>
        <Title type={TitleType.Playground}>{props.title}</Title>
        {props.children}
    </Paper>;
