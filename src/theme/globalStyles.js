import { createGlobalStyle } from "styled-components";
import { gray, backgroundColor, fontFamily, } from './index'

export const GlobalStyles = createGlobalStyle`

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

body {
    margin: 0;
    padding: 0;
    background-color: ${backgroundColor};
    font-family: ${fontFamily};
    color: ${gray}

}

a {
    text-decoration: none;
    color: inherit;
}

`;
