import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-color: #eee;
  margin: 0 auto;
  word-break: break-word;
  font-family: 'Lato', sans-serif;
  font-size:18px;
}

@media (max-width: 768px) {
    margin: 5%;
}
`;
