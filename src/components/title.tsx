import * as React from 'react';

export enum TitleType {
    App = 'app',
    Playground = 'playground'
}

export interface ITitleProps {
    type?: TitleType;
    children: React.ReactChild;
}

function getStyle(type: TitleType | undefined): Object {
    let fontSize = 18
    if (type) {
        if (type === TitleType.App) fontSize = 32;
        if (type === TitleType.Playground) fontSize = 24;
    }

    return { fontSize };
}

export const Title = (props: ITitleProps) =>
    <div style={getStyle(props.type)}>
        {props.children}
    </div>;
