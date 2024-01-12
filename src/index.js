import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'


import App from './App';
import 'antd/dist/reset.css';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)