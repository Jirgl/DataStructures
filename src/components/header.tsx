import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FlatButton, Paper } from 'material-ui';

export interface IHeaderProps {
    title: string;
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

class HeaderInner extends React.Component<IHeaderProps, {}> {
    render() {
        let currentRoute = (this.props as any).location.pathname.replace('/', '');
        if (currentRoute === '') currentRoute = this.props.navigationItems[0];
        return <Paper style={headerStyle} zDepth={1}>
            <div style={headerInnerStyle}>
                <div style={titleStyle}>{this.props.title}</div>
                <div style={tabsStyle}>
                    {this.props.navigationItems.map((item, idx) =>
                        <Link key={idx + item} to={'/' + item}>
                            <FlatButton label={item} primary={item === currentRoute} />
                        </Link>
                    )}
                </div>
            </div>
        </Paper>;
    }
}

export const Header = withRouter((props: IHeaderProps) => <HeaderInner {...props} />);
