import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <App
      source={{
        subscribe: () => console.log('subscribed!'),
        unsubscribe: () => console.log('unsubscribed!'),
      }}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
