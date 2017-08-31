import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FlatButton, Paper } from 'material-ui';
import { Block } from './block';
import { Title, TitleType } from './title';

export interface IHeaderProps {
    title: string;
    navigationItems: string[];
}

const styles = {
    header: {
        height: 100
    },
    headerInner: {
        width: '80%',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        flexFlow: 'column'
    },
    title: {
        flex: '1 1 auto',
        padding: 10,
        paddingTop: 15
    },
    tabs: {
        flex: '0 1 40px'
    }
}

class HeaderInner extends React.Component<IHeaderProps, {}> {
    render() {
        let currentRoute = (this.props as any).location.pathname.replace('/', '');
        if (currentRoute === '') currentRoute = this.props.navigationItems[0];
        return <Paper style={styles.header} zDepth={1}>
            <Block style={styles.headerInner}>
                <Block style={styles.title}>
                    <Title type={TitleType.App}>{this.props.title}</Title>
                </Block>
                <Block style={styles.tabs}>
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
