import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --black: #000000;
  --white: #ffffff;
  --light-gray: #f0f0f0;
  --dark-gray: #BCBDBE;
  --dark-red: #6C0A11;
  --gree: #78B440;
  --blue: #388CC9;
  --yellow: #FFCC03;
  --orange: #E74C3C;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body, input, textarea, select, button {
 font-family: 'Roboto', Arial, sans-serif; 
 font-weight: 400;
 font-size: 16px;
}
`;

export default GlobalStyle;
