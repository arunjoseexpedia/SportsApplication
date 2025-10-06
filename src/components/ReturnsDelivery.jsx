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
  Button,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';

const ReturnsDelivery = () => {
  const [returns, setReturns] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock returns data
  const mockReturnsData = [
    {
      id: 'RET-2024-001',
      orderNumber: 'ORD-2024-002',
      date: '2024-10-04',
      items: ['Cricket Jersey (Size L)', 'Defective item'],
      refundAmount: '$75.00',
      status: 'Approved',
      reason: 'Defective Product',
      trackingNumber: 'RTN123456789',
      estimatedRefund: '2024-10-08',
      progress: 75,
      returnMethod: 'Pickup Scheduled'
    },
    {
      id: 'RET-2024-002',
      orderNumber: 'ORD-2024-001',
      date: '2024-10-05',
      items: ['Football Boots (Size 10)', 'Wrong size'],
      refundAmount: '$89.99',
      status: 'In Transit',
      reason: 'Wrong Size',
      trackingNumber: 'RTN987654321',
      estimatedRefund: '2024-10-10',
      progress: 50,
      returnMethod: 'Customer Drop-off'
    },
    {
      id: 'RET-2024-003',
      orderNumber: 'ORD-2024-003',
      date: '2024-10-06',
      items: ['Football Gloves', 'Not as described'],
      refundAmount: '$45.50',
      status: 'Pending Review',
      reason: 'Not as Described',
      trackingNumber: 'RTN456789123',
      estimatedRefund: '2024-10-12',
      progress: 25,
      returnMethod: 'Mail Return'
    },
    {
      id: 'RET-2024-004',
      orderNumber: 'ORD-2024-004',
      date: '2024-10-06',
      items: ['Cricket Ball x2', 'Customer changed mind'],
      refundAmount: '$67.98',
      status: 'Refunded',
      reason: 'Changed Mind',
      trackingNumber: 'RTN789123456',
      estimatedRefund: 'Completed',
      progress: 100,
      returnMethod: 'Store Return'
    }
  ];

  const returnStats = {
    totalReturns: 28,
    pendingReview: 5,
    approved: 8,
    inTransit: 6,
    refunded: 9
  };

  useEffect(() => {
    // Simulate API call
    const loadReturns = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setReturns(mockReturnsData);
      setLoading(false);
    };

    loadReturns();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Refunded':
        return 'success';
      case 'Approved':
        return 'primary';
      case 'In Transit':
        return 'info';
      case 'Pending Review':
        return 'warning';
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

  const getReturnSteps = () => {
    return [
      'Return Request Submitted',
      'Review & Approval',
      'Item Pickup/Received',
      'Quality Check',
      'Refund Processed'
    ];
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        🔄 Returns & Delivery Management
      </Typography>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={2.4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                {returnStats.totalReturns}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Returns
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2.4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'warning.main' }}>
                {returnStats.pendingReview}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pending Review
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2.4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                {returnStats.approved}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Approved
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2.4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'info.main' }}>
                {returnStats.inTransit}
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
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                {returnStats.refunded}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Refunded
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 4 }} />

      {/* Return Process Stepper */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          📋 Return Process Flow
        </Typography>
        <Stepper activeStep={2} alternativeLabel>
          {getReturnSteps().map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      {/* Returns Table */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Recent Returns
      </Typography>

      {loading ? (
        <Box sx={{ width: '100%', mb: 2 }}>
          <LinearProgress />
          <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
            Loading returns...
          </Typography>
        </Box>
      ) : (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'error.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Return ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Order #</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Date</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Items</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Reason</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Refund Amount</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Progress</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {returns.map((returnItem) => (
                <TableRow
                  key={returnItem.id}
                  sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}
                >
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontFamily: 'monospace' }}>
                      {returnItem.id}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                      {returnItem.orderNumber}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(returnItem.date).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Box>
                      {returnItem.items.map((item, index) => (
                        <Typography key={index} variant="body2" sx={{ fontSize: '0.85rem' }}>
                          • {item}
                        </Typography>
                      ))}
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={returnItem.reason}
                      size="small"
                      color="secondary"
                      variant="outlined"
                      sx={{ fontSize: '0.75rem' }}
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'error.main' }}>
                      {returnItem.refundAmount}
                    </Typography>
                  </TableCell>
                  
                  <TableCell>
                    <Chip
                      label={returnItem.status}
                      color={getStatusColor(returnItem.status)}
                      size="small"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={returnItem.progress}
                        color={getProgressColor(returnItem.progress)}
                        sx={{ width: 80, height: 8, borderRadius: 4 }}
                      />
                      <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                        {returnItem.progress}%
                      </Typography>
                    </Box>
                  </TableCell>
                  
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      color="error"
                      sx={{ fontSize: '0.75rem' }}
                    >
                      Track Return
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Return Policy & Quick Actions */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              📋 Return Policy
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              • Returns accepted within <strong>30 days</strong> of purchase
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              • Items must be in original condition with tags attached
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              • Free return shipping for defective or wrong items
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              • Refund processing takes 5-7 business days
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              • Exchange option available for size/color changes
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              🚀 Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button variant="contained" color="error" fullWidth>
                Process New Return
              </Button>
              <Button variant="outlined" color="error" fullWidth>
                Bulk Return Processing
              </Button>
              <Button variant="outlined" color="secondary" fullWidth>
                Return Analytics
              </Button>
              <Button variant="outlined" color="info" fullWidth>
                Return Settings
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReturnsDelivery;
