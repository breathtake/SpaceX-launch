import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
html,
body {
  margin: 0;
  padding: 0;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  background-color: #333399;
}

#app {
  height: 200vh;
}

#nextlaunchCard {
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    #333399,
    #6836ae,
    #9a33be,
    #cd27c8,
    #ff00cc
  );
}

.content {
  padding: 1rem;
}

.content h1 {
  text-align: center;
}

@media (min-width: 320px) and (max-width: 480px) {
  #nextlaunchCard * {
  }
}

button:disabled,
button[disabled]{
  opacity: 0.5;
}

.carousel .slide {
	display: flex;
  justify-content: center;
	background: transparent;
}
`;

export default GlobalStyle;
