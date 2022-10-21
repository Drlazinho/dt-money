import {ThemeProvider} from "styled-components";
import { Transaction } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transaction/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
