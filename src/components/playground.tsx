import * as React from 'react';
import { Paper } from 'material-ui';
import { Title, TitleType } from './title';

export interface IPlaygroundProps {
    title: string;
    children: React.ReactChild;
}

const boxStyle = {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    marginBottom: 50,
    padding: 10
}

export const Playground = (props: IPlaygroundProps) =>
    <Paper zDepth={0} style={boxStyle}>
        <Title type={TitleType.Playground}>{props.title}</Title>
        {props.children}
    </Paper>;
