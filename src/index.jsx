import React from './containers/app/node_modules/react';
import ReactDOM from 'react-dom';
import { Provider } from './containers/app/node_modules/react-redux';

import { App } from './containers/app';
import { ErrorBoundary } from './components/error-boundary';
import { DataService, DataServiceProvider } from './services';

import store from './store';

const dataService = new DataService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <DataServiceProvider value={dataService}>
        <App />
      </DataServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
