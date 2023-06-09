import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </>
);

export default App;
