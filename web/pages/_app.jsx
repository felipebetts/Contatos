import { ThemeProvider, createGlobalStyle } from "styled-components"

const theme = {
  colors: {
    background: {
      primary: '#612f74',
      secondary: '#eaeaea'
    },
    font: {
      primary: '#eaeaea',
      secondary: '#2a2a2a'
    }
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html body {
    margin: 0;
    padding: 0;

    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.font.primary};

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;;
  }
`


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
