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
  Tab,
  List,
  ListItem,
  ListItemText,
  Avatar
} from '@mui/material';
import {
  fetchPremierLeagueMatches,
  fetchPremierLeagueStandings,
  fetchTopScorers,
  subscribeToPremierLeagueUpdates
} from '../services/premierLeagueApi';

const PremierLeagueLive = () => {
  const [matches, setMatches] = useState([]);
  const [standings, setStandings] = useState([]);
  const [topScorers, setTopScorers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [matchesData, standingsData, scorersData] = await Promise.all([
          fetchPremierLeagueMatches(),
          fetchPremierLeagueStandings(),
          fetchTopScorers()
        ]);
        setMatches(matchesData);
        setStandings(standingsData);
        setTopScorers(scorersData);
      } catch (error) {
        console.error('Error loading Premier League data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Subscribe to live updates
    const unsubscribe = subscribeToPremierLeagueUpdates((updatedMatches) => {
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

  const getTeamLogo = (teamName) => {
    // Simple team logos mapping (you can replace with actual logos)
    const logoMap = {
      'Manchester City': '🔵',
      'Arsenal': '🔴',
      'Liverpool': '🔴',
      'Chelsea': '🔵',
      'Tottenham': '⚪',
      'Newcastle': '⚫',
      'Brighton': '🔵',
      'Manchester United': '🔴',
      'Aston Villa': '🟣',
      'West Ham': '🟤'
    };
    return logoMap[teamName] || '⚽';
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
        <Typography variant="body2" sx={{ ml: 2 }}>
          Loading Premier League data...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        ⚽ English Premier League 2024/25
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tab label="Live Matches" />
        <Tab label="League Table" />
        <Tab label="Top Scorers" />
      </Tabs>

      {tabValue === 0 && (
        <Grid container spacing={3}>
          {matches.map((match) => (
            <Grid item xs={12} md={6} key={match.id}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        {getTeamLogo(match.homeTeam)} {match.homeTeam} vs {match.awayTeam} {getTeamLogo(match.awayTeam)}
                      </Typography>
                    </Box>
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

                  <Box display="flex" alignItems="center" gap={2} mb={1}>
                    <Typography variant="h5" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'primary.main' }}>
                      {match.score}
                    </Typography>
                    {match.minute && (
                      <Chip
                        label={match.minute}
                        color="primary"
                        variant="outlined"
                        size="small"
                        sx={{ fontWeight: 'bold' }}
                      />
                    )}
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      🏟️ {match.venue}
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
                      🏆 {match.competition}
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
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Pos</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Team</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>P</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>W</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>D</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>L</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>GF</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>GA</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>GD</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Pts</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {standings.map((team) => (
                <TableRow
                  key={team.team}
                  sx={{
                    '&:nth-of-type(odd)': { backgroundColor: 'action.hover' },
                    ...(team.position <= 4 && { borderLeft: '4px solid #4caf50' }),
                    ...(team.position === 5 && { borderLeft: '4px solid #ff9800' }),
                    ...(team.position >= standings.length - 2 && { borderLeft: '4px solid #f44336' })
                  }}
                >
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {team.position}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography variant="body2">{getTeamLogo(team.team)}</Typography>
                      <Typography variant="body1" sx={{ fontWeight: team.position <= 4 ? 'bold' : 'normal' }}>
                        {team.team}
                      </Typography>
                      {team.position <= 4 && (
                        <Chip label="CL" color="success" size="small" sx={{ fontSize: '0.6rem' }} />
                      )}
                      {team.position === 5 && (
                        <Chip label="EL" color="warning" size="small" sx={{ fontSize: '0.6rem' }} />
                      )}
                      {team.position >= standings.length - 2 && (
                        <Chip label="REL" color="error" size="small" sx={{ fontSize: '0.6rem' }} />
                      )}
                    </Box>
                  </TableCell>
                  <TableCell align="center">{team.played}</TableCell>
                  <TableCell align="center" sx={{ color: 'success.main', fontWeight: 'bold' }}>
                    {team.won}
                  </TableCell>
                  <TableCell align="center">{team.drawn}</TableCell>
                  <TableCell align="center" sx={{ color: 'error.main', fontWeight: 'bold' }}>
                    {team.lost}
                  </TableCell>
                  <TableCell align="center">{team.gf}</TableCell>
                  <TableCell align="center">{team.ga}</TableCell>
                  <TableCell align="center" sx={{ 
                    color: team.gd > 0 ? 'success.main' : team.gd < 0 ? 'error.main' : 'text.primary',
                    fontWeight: 'bold'
                  }}>
                    {team.gd > 0 ? `+${team.gd}` : team.gd}
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      label={team.points}
                      color={team.position <= 4 ? 'success' : team.position === 5 ? 'warning' : 'default'}
                      variant={team.position <= 5 ? 'filled' : 'outlined'}
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

      {tabValue === 2 && (
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            🥅 Premier League Top Scorers 2024/25
          </Typography>
          <List>
            {topScorers.map((scorer, index) => (
              <ListItem key={index} sx={{ py: 2, borderBottom: '1px solid #eee' }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 32, height: 32 }}>
                  {index + 1}
                </Avatar>
                <ListItemText
                  primary={
                    <Box display="flex" alignItems="center" gap={2}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        {scorer.player}
                      </Typography>
                      <Chip 
                        label={scorer.team} 
                        size="small" 
                        variant="outlined"
                        icon={<span>{getTeamLogo(scorer.team)}</span>}
                      />
                    </Box>
                  }
                />
                <Chip
                  label={`${scorer.goals} goals`}
                  color="primary"
                  sx={{ fontWeight: 'bold' }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
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

export default PremierLeagueLive;
