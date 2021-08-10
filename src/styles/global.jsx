import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    width: 1200px;
    margin: 0 auto;
    padding: 10px;
    align-items: center;
    background: #F5F5F5;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 16px Roboto, sans-serif;
}

button {
    cursor: pointer;
}

ul {
    list-style: none;
}
`;