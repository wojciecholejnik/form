import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Form } from './components/Form';
// eslint-disable-next-line no-unused-vars
import styles from './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Form/>
    </Provider>
  );
}

export default App;
