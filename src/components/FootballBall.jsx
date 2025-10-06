import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  Chip,
  Button,
  Paper,
  Divider,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';

const FootballBall = ({ onBack }) => {
  const [selectedBrand, setSelectedBrand] = useState('All');

  const footballBalls = [
   
    {
      id: 1,
      name: 'Premier League Strike Ball',
      brand: 'Nike',
      model: 'Flight',
      price: '$89.99',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/084678/01/fnd/IND/fmt/png/Neymar-Jr-Graphic-Football',
      features: ['Premier League Official', 'Machine Stitched'],
      description: 'Nike Flight ball with innovative groove design ',
      specifications: {
        circumference: '68-70 cm',
        weight: '410-450g',
        material: 'Synthetic Leather',
        panels: '12 Fused Panels'
      }
    },
    {
      id: 2,
      name: 'Champions League Final Ball',
      brand: 'Adidas',
      model: 'UCL Finale',
      price: '$134.99',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/084721/01/fnd/IND/fmt/png/Orbita-Mini-Premier-League-Licensed-Football',
      features: ['UEFA Champions League', 'Seamless Surface',],
      description: 'The official UEFA Champions League Final ball ',
      specifications: {
        circumference: '68-70 cm',
        weight: '410-450g',
        material: 'Polyurethane',
        panels: 'Star-shaped Panels'
      }
    },
    {
      id: 3,
      name: 'Training Pro Ball',
      brand: 'Puma',
      model: 'Orbita 1',
      price: '$49.99',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/083613/01/fnd/PNA/fmt/png/ORBITA-1-FIFA-Quality-Pro-ball',
      features: ['FIFA Quality Pro', 'Durable Construction'],
      description: 'High-quality training ball designed for professional',
      specifications: {
        circumference: '68-70 cm',
        weight: '410-450g',
        material: 'PVC Synthetic',
        panels: '32 Hand-Stitched'
      }
    },
    {
      id: 4,
      name: 'Youth Academy Ball',
      brand: 'Umbro',
      model: 'Neo Pro',
      price: '$29.99',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/084751/03/fnd/IND/fmt/png/25/26-AC-MILAN-THIRD-KIT-32-Panel-Fan-Ball',
      features: ['Youth Size 4', 'Soft Touch'],
      description: 'Perfect ball for young players learning game.',
      specifications: {
        circumference: '63-66 cm',
        weight: '350-390g',
        material: 'Synthetic Leather',
        panels: '32 Machine Stitched'
      }
    }
  ];

  // Get unique brands for filter
  const brands = ['All', ...new Set(footballBalls.map(ball => ball.brand))];

  // Filter balls based on selected brand
  const filteredBalls = selectedBrand === 'All' 
    ? footballBalls 
    : footballBalls.filter(ball => ball.brand === selectedBrand);

  const handleBrandChange = (event, newBrand) => {
    if (newBrand !== null) {
      setSelectedBrand(newBrand);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {/* Header with Back Button */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Button 
          variant="outlined" 
          onClick={onBack}
          sx={{ mr: 3 }}
        >
          ← Back to Football
        </Button>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
          ⚽ Football Balls Collection
        </Typography>
      </Box>

      {/* Introduction */}
      <Paper elevation={2} sx={{ p: 3, mb: 4, backgroundColor: 'primary.light', color: 'primary.contrastText' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Professional Football Balls
        </Typography>
        <Typography variant="body1">
          Discover our premium collection of football balls, from FIFA World Cup official balls to training equipment. 
          Each ball is crafted with precision for optimal performance on the pitch.
        </Typography>
      </Paper>

      {/* Brand Filter */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          🔍 Filter by Brand
        </Typography>
        <ToggleButtonGroup
          value={selectedBrand}
          exclusive
          onChange={handleBrandChange}
          aria-label="brand filter"
          sx={{ flexWrap: 'wrap', gap: 1 }}
        >
          {brands.map((brand) => (
            <ToggleButton 
              key={brand} 
              value={brand}
              sx={{
                px: 3,
                py: 1,
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: '20px',
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  }
                }
              }}
            >
              {brand}
              {brand !== 'All' && (
                <Chip 
                  label={footballBalls.filter(ball => ball.brand === brand).length}
                  size="small"
                  sx={{ ml: 1, height: '20px', fontSize: '0.7rem' }}
                  color={selectedBrand === brand ? 'secondary' : 'default'}
                />
              )}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Showing {filteredBalls.length} of {footballBalls.length} products
          </Typography>
          {selectedBrand !== 'All' && (
            <Chip 
              label={`Clear Filter`}
              size="small"
              variant="outlined"
              color="primary"
              onDelete={() => setSelectedBrand('All')}
              sx={{ fontSize: '0.75rem' }}
            />
          )}
        </Box>
      </Paper>

      {/* Football Balls Grid */}
      <Grid container spacing={4}>
        {filteredBalls.map((ball) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={ball.id}>
            <Card 
              elevation={4} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6
                }
              }}
            >
              {/* Product Image */}
              <CardMedia
                component="img"
                height="240"
                image={ball.image}
                alt={ball.name}
                sx={{ 
                  objectFit: 'contain',
                  backgroundColor: '#f5f5f5',
                  p: 2
                }}
              />
              
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                {/* Brand and Price */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Chip 
                    label={ball.brand} 
                    color="primary" 
                    variant="outlined"
                    sx={{ fontWeight: 'bold' }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                    {ball.price}
                  </Typography>
                </Box>

                {/* Product Name */}
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
                  {ball.name}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
                  Model: {ball.model}
                </Typography>

                {/* Features */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Key Features:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {ball.features.map((feature, index) => (
                      <Chip
                        key={index}
                        label={feature}
                        size="small"
                        color="secondary"
                        variant="outlined"
                        sx={{ fontSize: '0.7rem' }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Description */}
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.5 }}>
                  {ball.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                {/* Specifications */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Specifications:
                  </Typography>
                  <Box sx={{ pl: 1 }}>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                      📏 <strong>Size:</strong> {ball.specifications.circumference}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                      ⚖️ <strong>Weight:</strong> {ball.specifications.weight}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
                      🧵 <strong>Material:</strong> {ball.specifications.material}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                      🔧 <strong>Construction:</strong> {ball.specifications.panels}
                    </Typography>
                  </Box>
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    sx={{ fontWeight: 'bold' }}
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    sx={{ minWidth: '100px' }}
                  >
                    Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Info Section */}
      <Box sx={{ mt: 6 }}>
        <Divider sx={{ mb: 4 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                🚚 Free Shipping
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Free delivery on orders over $50. Fast and secure shipping worldwide.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                ✅ Quality Guarantee
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All balls are FIFA/UEFA approved with manufacturer warranty included.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                🔄 Easy Returns
              </Typography>
              <Typography variant="body2" color="text.secondary">
                30-day return policy. Not satisfied? Return for full refund or exchange.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FootballBall;
