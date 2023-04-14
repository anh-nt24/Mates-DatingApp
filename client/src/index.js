import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './GlobalStyle';
import Styles from './components/Styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalStyle>
        </GlobalStyle>
            <Styles>
                <App />
            </Styles>
    </>
);

