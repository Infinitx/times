import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import router from './Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
