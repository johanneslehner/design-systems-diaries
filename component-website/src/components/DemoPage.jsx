import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Box,
  Chip,
  Alert,
  Paper,
} from '@mui/material';
import {
  Favorite,
  Share,
  Star,
  ShoppingCart,
} from '@mui/icons-material';
import ThemeSwitcher from './ThemeSwitcher';

const DemoPage = () => {
  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: 'var(--background-default)' }}>
      {/* AppBar with Theme Switcher */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Component Repository
          </Typography>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Hero Section with Tailwind */}
        <div className="mb-8 p-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Component Library</h1>
          <p className="text-xl">
            A showcase of React components using MUI and Tailwind CSS with dynamic theming
          </p>
        </div>

        {/* Alert Section */}
        <Box sx={{ mb: 4 }}>
          <Alert severity="info" sx={{ mb: 2 }}>
            This is an info alert using MUI components with CSS custom properties!
          </Alert>
          <Alert severity="success" sx={{ mb: 2 }}>
            Theme switching is working! Try the theme switcher in the top right corner.
          </Alert>
        </Box>

        {/* MUI Components Showcase */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          MUI Components
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  <Star color="primary" /> Featured Product
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This card demonstrates MUI components with theme integration.
                  Colors automatically adapt to the selected theme.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Chip label="Popular" color="primary" size="small" sx={{ mr: 1 }} />
                  <Chip label="New" color="secondary" size="small" />
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<Favorite />}>
                  Like
                </Button>
                <Button size="small" startIcon={<Share />}>
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  <ShoppingCart color="secondary" /> Shopping
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Experience seamless shopping with our themed components.
                  All colors are managed through CSS variables.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Chip label="Sale" color="error" size="small" sx={{ mr: 1 }} />
                  <Chip label="Limited" color="warning" size="small" />
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  Contact Form
                </Typography>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Submit
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Tailwind Components Showcase */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Tailwind CSS Components
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Tailwind Card 1</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This card is styled with Tailwind CSS utility classes.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Learn More
            </button>
          </div>

          <div className="p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Tailwind Card 2</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Tailwind and MUI coexist peacefully in this application.
            </p>
            <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
              Explore
            </button>
          </div>

          <div className="p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Tailwind Card 3</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Responsive design with Tailwind's grid system.
            </p>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Color Palette Display */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Theme Color Palette
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            All colors are managed through CSS custom properties and update dynamically when you switch themes.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={3}>
              <Box sx={{ p: 2, backgroundColor: 'var(--primary-main)', color: 'var(--primary-contrast-text)', borderRadius: 1, textAlign: 'center' }}>
                Primary
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box sx={{ p: 2, backgroundColor: 'var(--secondary-main)', color: 'var(--secondary-contrast-text)', borderRadius: 1, textAlign: 'center' }}>
                Secondary
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box sx={{ p: 2, backgroundColor: 'var(--error-main)', color: 'var(--error-contrast-text)', borderRadius: 1, textAlign: 'center' }}>
                Error
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box sx={{ p: 2, backgroundColor: 'var(--warning-main)', color: 'var(--warning-contrast-text)', borderRadius: 1, textAlign: 'center' }}>
                Warning
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box sx={{ p: 2, backgroundColor: 'var(--info-main)', color: 'var(--info-contrast-text)', borderRadius: 1, textAlign: 'center' }}>
                Info
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={3}>
              <Box sx={{ p: 2, backgroundColor: 'var(--success-main)', color: 'var(--success-contrast-text)', borderRadius: 1, textAlign: 'center' }}>
                Success
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Footer */}
        <Box sx={{ textAlign: 'center', py: 4, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary">
            Component Repository © 2025 - Built with React, MUI, and Tailwind CSS
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default DemoPage;
