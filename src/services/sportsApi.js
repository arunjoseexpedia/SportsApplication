// Sports API Service for live data integration
const API_BASE_URL = 'https://api.cricapi.com/v1'; // Free Cricket API
const API_KEY = 'YOUR_API_KEY_HERE'; // You'll need to get a free API key from cricapi.com

// Alternative: JSONPlaceholder for demo data (no API key needed)
const DEMO_API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Mock Women's World Cup data for demonstration
const mockWomensWorldCupData = {
  matches: [
    {
      id: 1,
      team1: 'Australia Women',
      team2: 'India Women',
      status: 'Live',
      score: 'AUS 245/4 (45.2 overs)',
      venue: 'Melbourne Cricket Ground',
      date: '2025-10-06',
      tournament: "Women's Cricket World Cup 2025"
    },
    {
      id: 2,
      team1: 'England Women',
      team2: 'South Africa Women',
      status: 'Upcoming',
      score: 'Match starts in 2 hours',
      venue: 'Lord\'s Cricket Ground',
      date: '2024-10-06',
      tournament: "Women's Cricket World Cup 2025"
    },
    {
      id: 3,
      team1: 'New Zealand Women',
      team2: 'Pakistan Women',
      status: 'Completed',
      score: 'NZ 278/6 beat PAK 245/8 by 33 runs',
      venue: 'Eden Gardens',
      date: '2024-10-05',
      tournament: "Women's Cricket World Cup 2024"
    },
    {
      id: 4,
      team1: 'West Indies Women',
      team2: 'Bangladesh Women',
      status: 'Live',
      score: 'WI 156/3 (32.4 overs)',
      venue: 'Wankhede Stadium',
      date: '2024-10-06',
      tournament: "Women's Cricket World Cup 2024"
    }
  ],
  standings: [
    { team: 'Australia Women', played: 4, won: 4, lost: 0, points: 8 },
    { team: 'India Women', played: 4, won: 3, lost: 1, points: 6 },
    { team: 'England Women', played: 3, won: 2, lost: 1, points: 4 },
    { team: 'New Zealand Women', played: 4, won: 2, lost: 2, points: 4 },
    { team: 'South Africa Women', played: 3, won: 1, lost: 2, points: 2 },
    { team: 'West Indies Women', played: 4, won: 1, lost: 3, points: 2 }
  ]
};

// Fetch live matches data
export const fetchLiveMatches = async () => {
  try {
    // For demo purposes, we'll use mock data
    // In production, you would uncomment the real API call below
    
    // const response = await fetch(`${API_BASE_URL}/matches?apikey=${API_KEY}&offset=0`);
    // if (!response.ok) throw new Error('Failed to fetch matches');
    // const data = await response.json();
    // return data.data;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockWomensWorldCupData.matches;
  } catch (error) {
    console.error('Error fetching live matches:', error);
    return mockWomensWorldCupData.matches; // Fallback to mock data
  }
};

// Fetch tournament standings
export const fetchTournamentStandings = async () => {
  try {
    // For demo purposes, we'll use mock data
    await new Promise(resolve => setTimeout(resolve, 800));
    return mockWomensWorldCupData.standings;
  } catch (error) {
    console.error('Error fetching standings:', error);
    return mockWomensWorldCupData.standings;
  }
};

// Fetch match details by ID
export const fetchMatchDetails = async (matchId) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockWomensWorldCupData.matches.find(match => match.id === matchId);
  } catch (error) {
    console.error('Error fetching match details:', error);
    return null;
  }
};

// Real-time updates simulation
export const subscribeToLiveUpdates = (callback) => {
  const interval = setInterval(() => {
    // Simulate live score updates
    const updatedMatches = mockWomensWorldCupData.matches.map(match => {
      if (match.status === 'Live') {
        // Simulate score changes
        const randomUpdate = Math.random() > 0.7;
        if (randomUpdate) {
          return {
            ...match,
            score: updateLiveScore(match.score)
          };
        }
      }
      return match;
    });
    callback(updatedMatches);
  }, 30000); // Update every 30 seconds

  return () => clearInterval(interval);
};

// Helper function to simulate live score updates
const updateLiveScore = (currentScore) => {
  // Simple simulation - in real app, this would come from API
  if (currentScore.includes('AUS')) {
    const runs = Math.floor(Math.random() * 10) + 245;
    return `AUS ${runs}/4 (${(Math.random() * 5 + 45).toFixed(1)} overs)`;
  }
  if (currentScore.includes('WI')) {
    const runs = Math.floor(Math.random() * 10) + 156;
    return `WI ${runs}/3 (${(Math.random() * 5 + 32).toFixed(1)} overs)`;
  }
  return currentScore;
};
