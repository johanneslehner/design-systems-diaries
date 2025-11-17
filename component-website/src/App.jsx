import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createMuiTheme } from './theme';
import DemoPage from './components/DemoPage';
import './themes/light-theme.css';
import './themes/dark-theme.css';

function App() {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DemoPage />
    </ThemeProvider>
  );
}

export default App;
