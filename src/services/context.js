import React from '../containers/app/node_modules/react';

const DataServiceContext = React.createContext();

const { Provider: DataServiceProvider } = DataServiceContext;

export { DataServiceContext, DataServiceProvider };
