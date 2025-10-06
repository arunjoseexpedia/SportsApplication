import React from 'react';
import { Container, Paper, Typography, Grid, Card, CardContent, Divider, Box } from '@mui/material';
import LiveMatches from './LiveMatches';

const Cricket = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            CRICKET
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <Card elevation={3} sx={{ height: 280 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Cricket Ball
                  </Typography>
                  <div style={{ 
                    width: '120px', 
                    height: '120px', 
                    margin: '20px auto', 
                   
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                  }}>
                    <img 
                      src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/054519/01/dt02/fnd/IND/fmt/png/Cricket-Ball" 
                      alt="Football Ball" 
                      style={{ 
                        width: '80px', 
                        height: '80px', 
                        objectFit: 'contain' 
                      }} 
                    />
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    Professional ICC approved cricket balls for matches and training.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6} lg={3}>
              <Card elevation={3} sx={{ height: 280 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Cricket Shoes
                  </Typography>
                  <div style={{ 
                    width: '120px', 
                    height: '120px', 
                    margin: '20px auto', 
                    
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                   
                  }}>
                    <img 
                      src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/107353/02/sv01/fnd/IND/fmt/png/Cricket-Square-Men's-Shoes" 
                      alt="Nike Football Boots" 
                      style={{ 
                        width: '90px', 
                        height: '90px', 
                        objectFit: 'contain' 
                      }} 
                    />
                  </div>
                  <Typography variant="body2" color="text.secondary">
                    High-quality cricket shoes for optimal performance on the pitch.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6} lg={3}>
              <Card elevation={3} sx={{ height: 280 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Cricket Jersey
                  </Typography>
                  <div style={{ 
                    width: '160px', 
                    height: '120px', 
                    margin: '20px auto', 
                     
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                    
                  }}>
                    <img 
                      src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/606140/01/bv/fnd/IND/fmt/png/Cricket-Teams-Youth-Regular-Fit-Tee" 
                      alt="Portugal '25 PUMA Jersey" 
                      style={{ 
                        width: '100px', 
                        height: '100px', 
                        objectFit: 'contain' 
                      }} 
                    />
                  </div>
                  <Typography variant="body2" color="text.secondary">
                   High quality ICC approved cricket Jersey for matches and training.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Card elevation={3} sx={{ height: 280 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Cricket Gloves
                  </Typography>
                  <div style={{ 
                    width: '160px', 
                    height: '120px', 
                    margin: '20px auto', 
                    
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                  }}>
                    <img 
                      src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/92bc03d4-8f25-44d0-b38e-11ef861a6a65/NIKE+Y+VAPOR+JET+8.0+FG.png" 
                      alt="Nike Vapor Jet Football Gloves" 
                      style={{ 
                        width: '100px', 
                        height: '100px', 
                        objectFit: 'contain' 
                      }} 
                    />
                  </div>
                  <Typography variant="body2" color="text.secondary">
                   High quality ICC approved cricket gloves for matches and training.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
          </Grid>
          
          {/* Live Sports Data Section */}
          <Box sx={{ mt: 6 }}>
            <Divider sx={{ mb: 4 }} />
            <LiveMatches />
          </Box>
          
        </Container>
  );
};

export default Cricket;
