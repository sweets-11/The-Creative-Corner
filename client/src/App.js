import React from 'react'
import {ThemeProvider} from "@mui/material/styles"
import theme from "./theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>App</div>
    </ThemeProvider>
  )
}

export default App