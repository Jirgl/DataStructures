import * as React from 'react';
import { AppContainer } from 'react-hot-loader';
import * as ReactDOM from 'react-dom';
import { App } from './app';

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./app', () => { render(App) })
}
