import * as React from 'react';

export const Content = (props: any) =>
    <div>
        {props.match.params && props.match.params.structureId}
    </div>
