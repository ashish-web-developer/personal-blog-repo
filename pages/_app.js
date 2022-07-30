import '../styles/globals.css'
import {ThemeProvider,useTheme,createTheme} from "@mui/material";
import {Provider} from "react-redux";
import store from "../store";



let theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette:{
    primary:{
      main:"#f2f2f2",
      dark:"#f8f8f8",
      light:"#ffffff"
    },
    secondary:{
      main:"#899ea6",
      light:"#c8c8c8",
      dark:"#313e4f"
    },
    info:{
      main:"#7c00f3",
      dark:"#ff2676",
      light:"#fd6a45"
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme = {theme}>
        <Provider store = {store}>
              <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
  )
}

export default MyApp
