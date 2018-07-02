import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Views/Core/App';
import registerServiceWorker from './registerServiceWorker';
import './Assets/bootstrap/css/bootstrap.min.css';
import './Assets/css/new-age.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
