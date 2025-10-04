import React from 'react';
import { AppBar, Typography, Toolbar, IconButton, Button, Box, Switch } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';

const Dashboard = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: darkMode ? 'rgb(25 25 25)' : '#1976d2', top: 0, left: 0, right: 0, zIndex: 1100 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            ☰
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mr: 4 }}>
            Sports Application
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              {darkMode ? '🌙' : '☀️'}
            </Typography>
            <Switch
              checked={darkMode}
              onChange={toggleTheme}
              color="default"
              size="small"
            />
          </Box>
          <Button color="inherit" sx={{ mr: 1 }}>Home</Button>
          <Button color="inherit">Profile</Button>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* This creates space for the fixed AppBar */}
    </Box>
  );
};

export default Dashboard;
