"use client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../app/globals.css';  // Import global styles

// Create Material UI theme
const theme = createTheme();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Budget App</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div
            style={{
              minHeight: '100vh',  // Ensures full screen height
              backgroundColor: '#e6e2dd',  // Soft beige background
              padding: '20px',  // Adds padding around the content
            }}
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
