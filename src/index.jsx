const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
const App = require('./App');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
