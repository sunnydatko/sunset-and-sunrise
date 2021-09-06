// providers
import { QueryClient, QueryClientProvider } from "react-query";
import { MuiThemeProvider } from "@material-ui/core/styles";

// components
import Main from "./Main";

// helpers
import theme from "helpers/theme";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
