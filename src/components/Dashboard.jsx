import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, IconButton, Button, Box, Switch, Drawer, List, ListItem, ListItemText, Divider, Menu, MenuItem, ListItemIcon, Avatar, Paper, Grid, Container } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';

const Dashboard = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState({ role: 'user' }); // Default role

  const handleMenuClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleUserMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRoleChange = (newRole) => {
    setUser({ role: newRole });
    handleUserMenuClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: darkMode ? 'rgb(25 25 25)' : '#1976d2', top: 0, left: 0, right: 0, zIndex: 1100 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
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
          <Box sx={{ mr: 2 }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleUserMenuClick}
            >
              <Avatar sx={{ width: 32, height: 32 }}>AJ</Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleUserMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem disabled>
                <ListItemIcon>
                  <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              //onClick={handleMenu}
              color="inherit"
            >
              <div className="avatar">AJ</div>
            </IconButton>
                </ListItemIcon>
                <ListItemText>
                  <Typography variant='body2' sx={{ fontWeight: 500 }}>
                    Arun Jose Konkoth
                  </Typography>
                  <Typography variant='caption' color='text.secondary'>
                   k.arunjose@gmail.com
                  </Typography>
                </ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => handleRoleChange('admin')}
                disabled={user.role === 'admin'}
              >
                <ListItemIcon>
                 
                </ListItemIcon>
                <ListItemText>Switch to Admin</ListItemText>
              </MenuItem>
              <MenuItem
                onClick={() => handleRoleChange('user')}
                disabled={user.role === 'user'}
              >
                <ListItemIcon>
                 
                </ListItemIcon>
                <ListItemText>Switch to User</ListItemText>
              </MenuItem>
              <Divider />
              
            </Menu>
          </Box>
         
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
           <Box sx={{ p: 2 }}>
          <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
            Navigation
          </Typography>
        </Box>
        <Divider />
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            {user.role === 'admin' && (
              <ListItem button>
                <ListItemText primary="Profile" />
              </ListItem>
            )}
            <ListItem button>
              <ListItemText primary="Football" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Cricket" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Toolbar /> {/* This creates space for the fixed AppBar */}
      
      {/* Dashboard Content */}
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {/* First Row */}
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                height: 180, 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Orders and Delivery
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                Manage and track orders and delivery information. View status and schedules.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                height: 180, 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%'
              }}
            >
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Returns and Delivery
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                Handle returns and exchanges. Track return shipments and manage refunds.
              </Typography>
            </Paper>
          </Grid>
          
          {/* Second Row */}
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                height: 180, 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '106%', // Increase width slightly
                ml: -3 // Move card slightly to the left
              }}
            >
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                General Information
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                Access announcements, policy updates, and general application information.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                height: 180, 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '103%',
                ml: 1 // Move card slightly to the right
              }}
            >
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Technical
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.4 }}>
                Technical support, system maintenance, and troubleshooting resources.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
