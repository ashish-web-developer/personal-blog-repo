import '../styles/globals.css'
import {ThemeProvider,useTheme} from "@mui/material";
import {Provider} from "react-redux";
import store from "../store";


function MyApp({ Component, pageProps }) {
  const theme  = useTheme();
  return (
      <Provider store = {store}>
        <ThemeProvider theme = {theme}>
            <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
  )
}

export default MyApp
