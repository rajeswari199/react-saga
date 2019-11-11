import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import Currency from './components/currency';

function App() {
  return (
    <Provider store={store}>
    <Currency />
  </Provider>
  );
}

export default App;
