import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App';
import reducer from './store/reducer'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(reducer)
  ReactDOM.render((
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
