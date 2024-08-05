import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import '../components/Header/header.css'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
