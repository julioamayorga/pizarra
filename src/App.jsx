import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./routes";
import { CssBaseline, createMuiTheme } from '@material-ui/core';
import "./App.css";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  primary: {
      main: '#5C73F2'
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes/>
        </CssBaseline>
      </ThemeProvider>
      
  )
}

export default App