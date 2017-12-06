import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <App />
            </div>
        </BrowserRouter>
    </Provider>, 
    target
);
registerServiceWorker();
