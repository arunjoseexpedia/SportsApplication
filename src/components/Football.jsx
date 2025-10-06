import React from 'react';
import { Container, Paper, Typography, Grid, Card, CardContent, Divider, Box } from '@mui/material';
import PremierLeagueLive from './PremierLeagueLive';

const Football = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb:3 }}>
        Football
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <Card elevation={3} sx={{ height: 280 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Football Ball
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
                  src="https://images.openai.com/thumbnails/url/X8W_f3icu5meUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw7O8rLwCHTMiUjPS3MuSQ1zDPDI9quoTPEzMvUOyzPKdU0OMXA0TTNO9nQsVyu2NTQAAAjGJJU" 
                  alt="Football Ball" 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    objectFit: 'contain' 
                  }} 
                />
              </div>
              <Typography variant="body2" color="text.secondary">
                Professional FIFA approved football balls for matches and training.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card elevation={3} sx={{ height: 280 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Football Boots
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
                  src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/107683/01/sv01/fnd/IND/fmt/png/ULTRA-5-ULTIMATE-FG-Football-Boots" 
                  alt="Nike Football Boots" 
                  style={{ 
                    width: '90px', 
                    height: '90px', 
                    objectFit: 'contain' 
                  }} 
                />
              </div>
              <Typography variant="body2" color="text.secondary">
                High-quality football boots for optimal performance on the pitch.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <Card elevation={3} sx={{ height: 280 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Football Jersey
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
                  src="https://images.openai.com/thumbnails/url/7EAxM3icu5mSUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw4KK82vNEh0ckqPDw_3dM4yyHd3CzD0T7cMy8_XNXYLcooI183MrCwxLwoOVCsGAJV8I_c" 
                  alt="Portugal '25 PUMA Jersey" 
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    objectFit: 'contain' 
                  }} 
                />
              </div>
              <Typography variant="body2" color="text.secondary">
               High quality FIFA approved soccer Jersey for matches and training.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card elevation={3} sx={{ height: 280 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Football Gloves
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
               High quality FIFA approved soccer Jersey for matches and training.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
      </Grid>
      
      {/* Premier League Live Data Section */}
      <Box sx={{ mt: 6 }}>
        <Divider sx={{ mb: 4 }} />
        <PremierLeagueLive />
      </Box>
      
    </Container>
  );
};

export default Football;
