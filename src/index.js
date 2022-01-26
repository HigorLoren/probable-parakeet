import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyleReset } from 'atomize';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import './index.css';

const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <StyleReset />
      <App />
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
