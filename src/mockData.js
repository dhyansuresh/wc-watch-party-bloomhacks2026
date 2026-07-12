
export const mockMatches = 
    [
    {
        "matchId": "m_2026_qf1",
        "date": "2026-07-09",
        "kickoffTime": "2026-07-09T20:00:00Z",
        "homeTeam": "France",
        "awayTeam": "Morocco",
        "stage": "Quarter-final",
        "venue": "Gillette Stadium (Boston Stadium)",
        "result": "France 2 - 0 Morocco"
    },
    {
        "matchId": "m_2026_qf2",
        "date": "2026-07-10",
        "kickoffTime": "2026-07-10T19:00:00Z",
        "homeTeam": "Spain",
        "awayTeam": "Belgium ",
        "stage": "Quarter-final",
        "venue": "SoFi Stadium (Los Angeles Stadium)",
        "result": "Spain 2 - 1 Belgium"
    },
    {
        "matchId": "m_2026_qf3",
        "date": "2026-07-11",
        "kickoffTime": "2026-07-11T21:00:00Z",
        "homeTeam": "Norway",
        "awayTeam": "England",
        "stage": "Quarter-final",
        "venue": "Hard Rock Stadium (Miami Stadium)",
        "result": "Norway 1 - 2 England (AET)"
    },
    {
        "matchId": "m_2026_qf4",
        "date": "2026-07-11",
        "kickoffTime": "2026-07-11T21:00:00Z",
        "homeTeam": "Argentina",
        "awayTeam": "Switzerland",
        "stage": "Quarter-final",
        "venue": "Arrowhead Stadium (Kansas City Stadium)",
        "result": "TBD"
    },
    {
        "matchId": "m_2026_sf1",
        "date": "2026-07-14",
        "kickoffTime": "2026-07-14T19:00:00Z",
        "homeTeam": "France",
        "awayTeam": "Spain",
        "stage": "Semi-final",
        "venue": "AT&T Stadium (Dallas Stadium)"
    },    
    {
        "matchId": "m_2026_sf2",
        "date": "2026-07-15",
        "kickoffTime": "2026-07-15T19:00:00Z",
        "homeTeam": "England",
        "awayTeam": "TBD",
        "stage": "Semi-final",
        "venue": "Mercedes-Benz Stadium (Atlanta Stadium)"
    },
    {
        "matchId": "m_2026_3rd",
        "date": "2026-07-18",
        "kickoffTime": "2026-07-18T21:00:00Z",
        "homeTeam": "TBD",
        "awayTeam": "TBD",
        "stage": "Third place play-off",
        "venue": "Hard Rock Stadium (Miami Stadium)"
    },
    {
        "matchId": "m_2026_final",
        "date": "2026-07-19",
        "kickoffTime": "2026-07-19T19:00:00Z",
        "homeTeam": "TBD",
        "awayTeam": "TBD",
        "stage": "Final",
        "venue": "MetLife Stadium (New York New Jersey Stadium)"
    }
];

export const mockParties = [
    {
        partyId: "p1",
        matchId: "m_2026_qf1",
        hostId: "uid_demo1",
        hostName: "Dhyan",
        venueName: "Buffalo Wild Wings - UCF",
        location: {
            lat: 28.6024,
            lng: -81.2001,
            address: "12345 University Blvd, Orlando, FL",
        },
        description: "BYOB, watching on the big screen",
        attendeeCount: 4,
        maxAttendees: 20,
        createdAt: "2026-07-10T14:22:00Z",
    },
    {
        partyId: "p2",
        matchId: "m_2026_qf1",
        hostId: "uid_demo2",
        hostName: "Jake",
        venueName: "Jake's Apartment",
        location: {
            lat: 28.5951,
            lng: -81.1965,
            address: "456 College Ave, Orlando, FL",
        },
        description: "Small group, bring snacks",
        attendeeCount: 8,
        maxAttendees: 10,
        createdAt: "2026-07-10T16:05:00Z",
    },
    {
        partyId: "p3",
        matchId: "m_2026_qf2",
        hostId: "uid_demo3",
        hostName: "Maria",
        venueName: "The Social Sports Bar",
        location: {
            lat: 28.5383,
            lng: -81.3792,
            address: "789 Orange Ave, Orlando, FL",
        },
        description: "Public viewing party, all welcome",
        attendeeCount: 25,
        maxAttendees: null,
        createdAt: "2026-07-10T09:40:00Z",
    },
];