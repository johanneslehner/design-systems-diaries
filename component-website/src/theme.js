import { createTheme } from '@mui/material/styles';

// Create MUI theme with CSS custom properties support
// MUI will use CSS variables defined in the theme files
export const createMuiTheme = () => {
  return createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: 'var(--background-default)',
            color: 'var(--text-primary)',
          },
        },
      },
      // Override MUI components to use CSS custom properties
      MuiButton: {
        styleOverrides: {
          root: {
            '&.MuiButton-containedPrimary': {
              backgroundColor: 'var(--primary-main)',
              color: 'var(--primary-contrast-text)',
              '&:hover': {
                backgroundColor: 'var(--primary-dark)',
              },
            },
            '&.MuiButton-containedSecondary': {
              backgroundColor: 'var(--secondary-main)',
              color: 'var(--secondary-contrast-text)',
              '&:hover': {
                backgroundColor: 'var(--secondary-dark)',
              },
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: 'var(--primary-main)',
            color: 'var(--primary-contrast-text)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: 'var(--background-paper)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: 'var(--background-paper)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: 'var(--primary-main)',
            color: 'var(--primary-contrast-text)',
          },
          colorSecondary: {
            backgroundColor: 'var(--secondary-main)',
            color: 'var(--secondary-contrast-text)',
          },
          colorError: {
            backgroundColor: 'var(--error-main)',
            color: 'var(--error-contrast-text)',
          },
          colorWarning: {
            backgroundColor: 'var(--warning-main)',
            color: 'var(--warning-contrast-text)',
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          standardInfo: {
            backgroundColor: 'var(--info-light)',
            color: 'var(--info-dark)',
          },
          standardSuccess: {
            backgroundColor: 'var(--success-light)',
            color: 'var(--success-dark)',
          },
        },
      },
    },
  });
};
