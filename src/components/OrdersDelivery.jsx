import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Divider,
  IconButton,
  Button
} from '@mui/material';

const OrdersDelivery = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock orders data
  const mockOrdersData = [
    {
      id: 'ORD-2024-001',
      date: '2024-10-05',
      items: ['Football Ball x2', 'Nike Football Boots'],
      total: '$189.99',
      status: 'Delivered',
      trackingNumber: 'TRK123456789',
      estimatedDelivery: '2024-10-06',
      progress: 100
    },
    {
      id: 'ORD-2024-002',
      date: '2024-10-06',
      items: ['Cricket Jersey', 'PUMA Cricket Gloves'],
      total: '$145.50',
      status: 'In Transit',
      trackingNumber: 'TRK987654321',
      estimatedDelivery: '2024-10-08',
      progress: 75
    },
    {
      id: 'ORD-2024-003',
      date: '2024-10-06',
      items: ['Portugal Jersey', 'Football Equipment'],
      total: '$225.00',
      status: 'Processing',
      trackingNumber: 'TRK456789123',
      estimatedDelivery: '2024-10-10',
      progress: 25
    },
    {
      id: 'ORD-2024-004',
      date: '2024-10-07',
      items: ['Cricket Ball x3', 'Cricket Shoes'],
      total: '$167.75',
      status: 'Pending',
      trackingNumber: 'TRK789123456',
      estimatedDelivery: '2024-10-12',
      progress: 10
    }
  ];

  const deliveryStats = {
    totalOrders: 47,
    delivered: 32,
    inTransit: 8,
    processing: 5,
    pending: 2
  };

  useEffect(() => {
    // Simulate API call
    const loadOrders = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOrders(mockOrdersData);
      setLoading(false);
    };

    loadOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'success';
      case 'In Transit':
        return 'primary';
      case 'Processing':
        return 'warning';
      case 'Pending':
        return 'default';
      default:
        return 'default';
    }
  };

  const getProgressColor = (progress) => {
    if (progress === 100) return 'success';
    if (progress >= 75) return 'primary';
    if (progress >= 25) return 'warning';
    return 'error';
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        📦 Orders & Delivery Management
      </Typography>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={2.4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                {deliveryStats.totalOrders}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Orders
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2.4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                {deliveryStats.delivered}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Delivered
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2.4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                {deliveryStats.inTransit}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In Transit
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2.4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'warning.main' }}>
                {deliveryStats.processing}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Processing
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2.4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
                {deliveryStats.pending}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pending
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 4 }} />

      {/* Orders Table */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Recent Orders
      </Typography>

      {loading ? (
        <Box sx={{ width: '100%', mb: 2 }}>
          <LinearProgress />
          <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
            Loading orders...
          </Typography>
        </Box>
      ) : (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Order ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Items</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Total</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Delivery Progress</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Est. Delivery</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}
                >
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontFamily: 'monospace' }}>
                      {order.id}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(order.date).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Box>
                      {order.items.map((item, index) => (
                        <Typography key={index} variant="body2" sx={{ fontSize: '0.85rem' }}>
                          • {item}
                        </Typography>
                      ))}
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {order.total}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Chip
                      label={order.status}
                      color={getStatusColor(order.status)}
                      size="small"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={order.progress}
                        color={getProgressColor(order.progress)}
                        sx={{ width: 80, height: 8, borderRadius: 4 }}
                      />
                      <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                        {order.progress}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(order.estimatedDelivery).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ fontSize: '0.75rem' }}
                    >
                      Track Order
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Quick Actions */}
      <Box sx={{ mt: 4, p: 3, backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          🚀 Quick Actions
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary">
              Create New Order
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Bulk Import Orders
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary">
              Export Report
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="info">
              Delivery Settings
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default OrdersDelivery;
