import { createGlobalStyle } from 'styled-components';
import './GlobalStyle.css';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

body {
  font-family: 'Open sans', sans-serif;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

input {
  border: none;
  font-family: 'Open Sans', sans-serif;
}

button:focus,
input:focus {
  outline: none;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.my-masonry-grid {
  display: -webkit-box; 
  display: -ms-flexbox; 
  display: flex;
  margin-left: -30px; 
  width: auto;
}
.my-masonry-grid_column {
  padding-left: 30px; 
  background-clip: padding-box;
}
`;

export default GlobalStyle;
