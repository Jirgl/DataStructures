import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FlatButton, Paper } from 'material-ui';
import { Block } from './block';
import { Title, TitleType } from './title';

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
    paddingTop: 15
};

const tabsStyle = {
    flex: '0 1 40px'
};

class HeaderInner extends React.Component<IHeaderProps, {}> {
    render() {
        let currentRoute = (this.props as any).location.pathname.replace('/', '');
        if (currentRoute === '') currentRoute = this.props.navigationItems[0];
        return <Paper style={headerStyle} zDepth={1}>
            <Block style={headerInnerStyle}>
                <Block style={titleStyle}>
                    <Title type={TitleType.App}>{this.props.title}</Title>
                </Block>
                <Block style={tabsStyle}>
                    {this.props.navigationItems.map((item, idx) =>
                        <Link key={idx + item} to={'/' + item}>
                            <FlatButton label={item} primary={item === currentRoute} />
                        </Link>
                    )}
                </Block>
            </Block>
        </Paper>;
    }
}

export const Header = withRouter((props: IHeaderProps) => <HeaderInner {...props} />);
