import * as React from 'react';
import { Link } from 'react-router-dom';
import { FlatButton, Paper } from 'material-ui';

export interface INavigationItem {
    title: string;
}

export interface IHeaderProps {
    children: string;
    navigationItems: string[];
}

const headerStyle = {
    height: 100
};

const headerInnerStyle = {
    width: '80%',
    height: '100%',
    margin: 'auto',
    display: 'flex',
    flexFlow: 'column'
};

const titleStyle = {
    flex: '1 1 auto',
    padding: 10,
    paddingTop: 15,
    fontSize: 32
};

const tabsStyle = {
    flex: '0 1 40px'
};

export const Header = (props: IHeaderProps) =>
    <Paper style={headerStyle} zDepth={1}>
        <div style={headerInnerStyle}>
            <div style={titleStyle}>{props.children}</div>
            <div style={tabsStyle}>
                {props.navigationItems.map((item, idx) =>
                    <Link key={idx + item} to={'/' + item}>
                        <FlatButton label={item} />
                    </Link>
                )}
            </div>
        </div>
    </Paper>;
