import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './Provider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider>
        <App/>
    </Provider>
);
