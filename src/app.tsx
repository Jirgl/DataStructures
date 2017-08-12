import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header } from './components/header';
import { Content } from './components/content';

export interface AppProps { }

export class App extends React.Component<AppProps, undefined> {
    render() {
        return <MuiThemeProvider>
            <BrowserRouter>
                <div>
                    <Header navigationItems={[
                        'arrays',
                        'lists',
                        'trees',
                        'graphs'
                    ]}>Data Structures Playground</Header>
                    <Route path='/:structureId' component={Content} />
                </div>
            </BrowserRouter>
        </MuiThemeProvider>;
    }
}
