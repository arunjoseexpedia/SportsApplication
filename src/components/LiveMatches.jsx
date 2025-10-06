import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Box,
  CircularProgress,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab
} from '@mui/material';
import { fetchLiveMatches, fetchTournamentStandings, subscribeToLiveUpdates } from '../services/sportsApi';

const LiveMatches = () => {
  const [matches, setMatches] = useState([]);
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [matchesData, standingsData] = await Promise.all([
          fetchLiveMatches(),
          fetchTournamentStandings()
        ]);
        setMatches(matchesData);
        setStandings(standingsData);
      } catch (error) {
        console.error('Error loading sports data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Subscribe to live updates
    const unsubscribe = subscribeToLiveUpdates((updatedMatches) => {
      setMatches(updatedMatches);
    });

    return unsubscribe;
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'error';
      case 'Upcoming':
        return 'warning';
      case 'Completed':
        return 'success';
      default:
        return 'default';
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
        <Typography variant="body2" sx={{ ml: 2 }}>
          Loading Women's World Cup data...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        🏏 Women's Cricket World Cup 2024
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tab label="Live Matches" />
        <Tab label="Tournament Table" />
      </Tabs>

      {tabValue === 0 && (
        <Grid container spacing={3}>
          {matches.map((match) => (
            <Grid item xs={12} md={6} key={match.id}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                      {match.team1} vs {match.team2}
                    </Typography>
                    <Chip
                      label={match.status}
                      color={getStatusColor(match.status)}
                      size="small"
                      sx={{
                        fontWeight: 'bold',
                        ...(match.status === 'Live' && {
                          animation: 'pulse 2s infinite'
                        })
                      }}
                    />
                  </Box>

                  <Typography variant="body1" sx={{ mb: 1, fontFamily: 'monospace', fontWeight: 500 }}>
                    {match.score}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      📍 {match.venue}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      📅 {new Date(match.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      🏆 {match.tournament}
                    </Typography>
                  </Box>

                  {match.status === 'Live' && (
                    <Box mt={2}>
                      <Chip
                        label="🔴 LIVE NOW"
                        color="error"
                        variant="outlined"
                        size="small"
                        sx={{
                          fontWeight: 'bold',
                          animation: 'pulse 1.5s infinite'
                        }}
                      />
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {tabValue === 1 && (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Team</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Played</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Won</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Lost</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {standings.map((team, index) => (
                <TableRow
                  key={team.team}
                  sx={{
                    '&:nth-of-type(odd)': { backgroundColor: 'action.hover' },
                    ...(index < 4 && { borderLeft: '4px solid #4caf50' })
                  }}
                >
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Typography variant="body2" sx={{ mr: 1, fontWeight: 'bold', color: 'text.secondary' }}>
                        {index + 1}.
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: index < 4 ? 'bold' : 'normal' }}>
                        {team.team}
                      </Typography>
                      {index < 4 && (
                        <Chip label="Q" color="success" size="small" sx={{ ml: 1, fontSize: '0.7rem' }} />
                      )}
                    </Box>
                  </TableCell>
                  <TableCell align="center">{team.played}</TableCell>
                  <TableCell align="center" sx={{ color: 'success.main', fontWeight: 'bold' }}>
                    {team.won}
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'error.main', fontWeight: 'bold' }}>
                    {team.lost}
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={team.points}
                      color={index < 4 ? 'success' : 'default'}
                      variant={index < 4 ? 'filled' : 'outlined'}
                      size="small"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.7; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default LiveMatches;
