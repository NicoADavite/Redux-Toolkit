import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from './app/store';
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
 