import React from 'react';

import configureStore from './src/store';
import Root from './src';

const {persistor, store} = configureStore();

export default function App() {
  return <Root store={store} persistor={persistor} />;
}
