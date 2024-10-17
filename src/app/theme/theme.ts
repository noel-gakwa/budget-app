// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#3f51b5' }, // Indigo
    secondary: { main: '#f50057' }, // Pink
    background: { default: '#f4f6f8' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: { fontWeight: 600 },
    h6: { fontWeight: 500 },
    button: { textTransform: 'none' },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '16px',
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;
