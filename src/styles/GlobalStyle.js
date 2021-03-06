import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
html,
body {
  margin: 0;
  padding: 0;
  /* color: white; */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	user-select: none;
	outline: none;
}

html {
	min-height: 100vh;
  /* background-color: #050525; */
	/* background-image: linear-gradient(to bottom, #050525, #07082e, #060b38, #080d41, #0d0d4a); */
	overflow-y: scroll;
}

html, 
body, 
#root,
#root>div, 
#app
/* , #app>div */
 {
  height: 100%
}

li {
	list-style: none;
}

@media (min-width: 320px) and (max-width: 480px) {
}

button:disabled,
button[disabled]{
  opacity: 0.5;
}

.carousel .slide {
	display: flex;
  justify-content: center;
}
`;

export default GlobalStyle;
