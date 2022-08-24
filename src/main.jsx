import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import theme from "./styles/theme.js"
import GlobalStyle from "./styles/global.js"

import { Movie } from './pages/Movie/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Movie />
    </ThemeProvider>
  </React.StrictMode>
)
