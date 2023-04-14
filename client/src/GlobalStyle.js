import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        --primary-bg-color: rgb(252,0,109);
        --primary-bg-color--hover: rgba(252,0,109, 0.6);
        --linear-bg-color: linear-gradient(to right, #ffdde1, #ee9ca7);
    }
    /* STYuanti-SC-Bold */
`;
 
export default GlobalStyle;