import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        color: #594f4f;
        width: 100vw;
        max-width: 100vw;
        height: fit-content;
        font-family: Poppins, sans-serif;
    }

    html, body {
        max-width: 100vw;
        overflow-x: hidden;
    }
`;