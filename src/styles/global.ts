import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --black: #000000;
  --white: #ffffff;
  --light-gray: #f0f0f0;
  --dark-gray: #E9E9E9;
  --dark-gray-font: #616161;  
  --dark-blue: #223656;
  --green: #78B440;
  --blue: #388CC9;  
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

body {
  background: var(--dark-gray);
}

body, input, textarea, select, button {
 font-family: 'Roboto', Arial, sans-serif; 
 font-weight: 400;
 font-size: 16px;
}
`;

export default GlobalStyle;
