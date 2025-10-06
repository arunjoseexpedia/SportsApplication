// Premier League API Service for live data integration
const API_BASE_URL = 'https://api.football-data.org/v4'; // Free Football API
const API_KEY = 'YOUR_API_KEY_HERE'; // You'll need to get a free API key from football-data.org

// Mock Premier League data for demonstration
const mockPremierLeagueData = {
  matches: [
    {
      id: 1,
      homeTeam: 'Manchester City',
      awayTeam: 'Arsenal',
      status: 'Live',
      score: 'MCI 2-1 ARS',
      minute: '78\'',
      venue: 'Etihad Stadium',
      date: '2024-10-06',
      competition: 'Premier League'
    },
    {
      id: 2,
      homeTeam: 'Liverpool',
      awayTeam: 'Chelsea',
      status: 'Live',
      score: 'LIV 1-0 CHE',
      minute: '45+2\'',
      venue: 'Anfield',
      date: '2024-10-06',
      competition: 'Premier League'
    },
    {
      id: 3,
      homeTeam: 'Manchester United',
      awayTeam: 'Tottenham',
      status: 'Upcoming',
      score: 'Kick-off in 2 hours',
      minute: '',
      venue: 'Old Trafford',
      date: '2024-10-06',
      competition: 'Premier League'
    },
    {
      id: 4,
      homeTeam: 'Newcastle',
      awayTeam: 'Brighton',
      status: 'Completed',
      score: 'NEW 3-1 BHA',
      minute: 'FT',
      venue: 'St. James\' Park',
      date: '2024-10-06',
      competition: 'Premier League'
    },
    {
      id: 5,
      homeTeam: 'Aston Villa',
      awayTeam: 'West Ham',
      status: 'Upcoming',
      score: 'Tomorrow 15:00',
      minute: '',
      venue: 'Villa Park',
      date: '2024-10-07',
      competition: 'Premier League'
    }
  ],
  standings: [
    { position: 1, team: 'Manchester City', played: 8, won: 7, drawn: 1, lost: 0, gf: 21, ga: 5, gd: 16, points: 22 },
    { position: 2, team: 'Arsenal', played: 8, won: 6, drawn: 2, lost: 0, gf: 18, ga: 6, gd: 12, points: 20 },
    { position: 3, team: 'Liverpool', played: 8, won: 6, drawn: 1, lost: 1, gf: 19, ga: 8, gd: 11, points: 19 },
    { position: 4, team: 'Chelsea', played: 8, won: 5, drawn: 2, lost: 1, gf: 16, ga: 7, gd: 9, points: 17 },
    { position: 5, team: 'Tottenham', played: 8, won: 5, drawn: 1, lost: 2, gf: 17, ga: 9, gd: 8, points: 16 },
    { position: 6, team: 'Newcastle', played: 8, won: 4, drawn: 3, lost: 1, gf: 14, ga: 8, gd: 6, points: 15 },
    { position: 7, team: 'Brighton', played: 8, won: 4, drawn: 2, lost: 2, gf: 12, ga: 10, gd: 2, points: 14 },
    { position: 8, team: 'Aston Villa', played: 8, won: 4, drawn: 1, lost: 3, gf: 13, ga: 12, gd: 1, points: 13 },
    { position: 9, team: 'West Ham', played: 8, won: 3, drawn: 3, lost: 2, gf: 11, ga: 10, gd: 1, points: 12 },
    { position: 10, team: 'Manchester United', played: 7, won: 3, drawn: 2, lost: 2, gf: 9, ga: 8, gd: 1, points: 11 }
  ],
  topScorers: [
    { player: 'Erling Haaland', team: 'Manchester City', goals: 12 },
    { player: 'Mohamed Salah', team: 'Liverpool', goals: 9 },
    { player: 'Harry Kane', team: 'Tottenham', goals: 8 },
    { player: 'Gabriel Jesus', team: 'Arsenal', goals: 7 },
    { player: 'Ivan Toney', team: 'Brighton', goals: 6 }
  ]
};

// Fetch live Premier League matches
export const fetchPremierLeagueMatches = async () => {
  try {
    // For demo purposes, we'll use mock data
    // In production, you would uncomment the real API call below
    
    // const response = await fetch(`${API_BASE_URL}/competitions/PL/matches`, {
    //   headers: {
    //     'X-Auth-Token': API_KEY
    //   }
    // });
    // if (!response.ok) throw new Error('Failed to fetch matches');
    // const data = await response.json();
    // return data.matches;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockPremierLeagueData.matches;
  } catch (error) {
    console.error('Error fetching Premier League matches:', error);
    return mockPremierLeagueData.matches;
  }
};

// Fetch Premier League standings
export const fetchPremierLeagueStandings = async () => {
  try {
    // For demo purposes, we'll use mock data
    await new Promise(resolve => setTimeout(resolve, 800));
    return mockPremierLeagueData.standings;
  } catch (error) {
    console.error('Error fetching standings:', error);
    return mockPremierLeagueData.standings;
  }
};

// Fetch top scorers
export const fetchTopScorers = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 600));
    return mockPremierLeagueData.topScorers;
  } catch (error) {
    console.error('Error fetching top scorers:', error);
    return mockPremierLeagueData.topScorers;
  }
};

// Real-time updates simulation for Premier League
export const subscribeToPremierLeagueUpdates = (callback) => {
  const interval = setInterval(() => {
    // Simulate live score updates
    const updatedMatches = mockPremierLeagueData.matches.map(match => {
      if (match.status === 'Live') {
        // Simulate score and minute changes
        const randomUpdate = Math.random() > 0.6;
        if (randomUpdate) {
          return {
            ...match,
            score: updateLiveFootballScore(match.score),
            minute: updateMatchMinute(match.minute)
          };
        }
      }
      return match;
    });
    callback(updatedMatches);
  }, 25000); // Update every 25 seconds

  return () => clearInterval(interval);
};

// Helper function to simulate live football score updates
const updateLiveFootballScore = (currentScore) => {
  if (currentScore.includes('MCI')) {
    const shouldScore = Math.random() > 0.8;
    if (shouldScore) {
      return Math.random() > 0.5 ? 'MCI 3-1 ARS' : 'MCI 2-2 ARS';
    }
  }
  if (currentScore.includes('LIV')) {
    const shouldScore = Math.random() > 0.8;
    if (shouldScore) {
      return Math.random() > 0.5 ? 'LIV 2-0 CHE' : 'LIV 1-1 CHE';
    }
  }
  return currentScore;
};

// Helper function to simulate match minute updates
const updateMatchMinute = (currentMinute) => {
  if (currentMinute.includes('78')) {
    const minutes = ['79\'', '80\'', '81\'', '82\'', '83\''];
    return minutes[Math.floor(Math.random() * minutes.length)];
  }
  if (currentMinute.includes('45+2')) {
    return 'HT'; // Half time
  }
  return currentMinute;
};
