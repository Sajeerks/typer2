import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';


const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <ThemeProvider theme={outerTheme}>
        <CssBaseline/>
        <Provider store={store}>
        <App />
        </Provider>
 

       </ThemeProvider>

  </React.StrictMode>,
)
