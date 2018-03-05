import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyComponent from './MyComponent';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';*/

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyComponent />, document.getElementById('example'));
registerServiceWorker();
