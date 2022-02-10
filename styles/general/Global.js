import { createGlobalStyle } from 'styled-components';
import globalVariables from './globalVariables';

const GlobalStyles = createGlobalStyle`
    html: {
    --bs: '0 10px 20px 0 ${globalVariables.colours.background}';
    --highlightColour: ${globalVariables.colours.colour1};
    }

    @font-face {
        font-family: 'Egyptian';
        src: url('./fonts/Egyptian.ttf');
    }
    @font-face {
        font-family: 'Adventure';
        src: url('./fonts/Adventure.ttf');
    }
}

    body{
        background: ${globalVariables.colours.background};
        font-family: ${globalVariables.text.bodyText1};
        color: ${globalVariables.text.textColour};
        padding: 0;
        margin: 0;
        font-size: 0.9rem;
        /* background: url('/Nbackground.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%; */
    }
    a {
        text-decoration: none;
        color: ${globalVariables.text.textColour};
        cursor: pointer;
    }

    a:hover {
        cursor: pointer;
    }
    button {
        margin: 0;
        font-family: ${globalVariables.text.bodyText1};
    }

    h1, h2, h3, p, a {
        margin: 10px;
    }

`;

export default GlobalStyles;
