import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    /* html, body {
        width: 100vw;
        max-width: 100vw;
        overflow-x: hidden;
    }

    html {
        width: 100vw;
        max-width: 100vw;
        height: fit-content;
        font-family: Poppins, sans-serif;
    } */
    
    html, body {
        width: 100%;
        color: #594f4f;
        max-width: 100%;
        overflow-x: hidden;
        font-family: Poppins, sans-serif;
    }
`;