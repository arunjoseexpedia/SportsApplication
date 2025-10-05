import React from 'react';
import { Container, Paper, Typography, Grid, Card, CardContent, Divider, List, ListItem, ListItemText } from '@mui/material';

const Profile = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Profile
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Personal Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Full Name" 
                    secondary="Arun Jose Konkoth" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Email" 
                    secondary="k.arunjose@gmail.com" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Role" 
                    secondary="Administrator" 
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Account Settings
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Account Type" 
                    secondary="Premium Account" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Member Since" 
                    secondary="January 2023" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Last Login" 
                    secondary="October 6, 2025" 
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Sports Preferences
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Customize your sports interests and notification preferences.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Football
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Subscribed
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Cricket
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Subscribed
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
