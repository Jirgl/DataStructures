import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header } from './components/header';

export interface AppProps { }

export class App extends React.Component<AppProps, undefined> {
    render() {
        return <MuiThemeProvider>
            <Header navigationItems={[
                'arrays',
                'lists',
                'trees',
                'graphs'
            ]}>Data Structures Playground</Header>
        </MuiThemeProvider>;
    }
}
