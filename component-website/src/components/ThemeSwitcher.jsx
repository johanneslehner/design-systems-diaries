import { useState, useEffect } from 'react';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { Brightness4, Brightness7, BrightnessAuto } from '@mui/icons-material';

const themes = [
  { name: 'light', label: 'Light Theme', icon: <Brightness7 /> },
  { name: 'dark', label: 'Dark Theme', icon: <Brightness4 /> },
];

const ThemeSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Get theme from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Apply theme to root element
    document.documentElement.setAttribute('data-theme', currentTheme);
    // Save to localStorage
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    handleClose();
  };

  const getCurrentIcon = () => {
    const theme = themes.find((t) => t.name === currentTheme);
    return theme ? theme.icon : <BrightnessAuto />;
  };

  return (
    <>
      <Tooltip title="Change Theme">
        <IconButton
          onClick={handleClick}
          color="inherit"
          aria-label="theme switcher"
          aria-controls="theme-menu"
          aria-haspopup="true"
        >
          {getCurrentIcon()}
        </IconButton>
      </Tooltip>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {themes.map((theme) => (
          <MenuItem
            key={theme.name}
            onClick={() => handleThemeChange(theme.name)}
            selected={currentTheme === theme.name}
          >
            {theme.icon}
            <span style={{ marginLeft: '8px' }}>{theme.label}</span>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ThemeSwitcher;
