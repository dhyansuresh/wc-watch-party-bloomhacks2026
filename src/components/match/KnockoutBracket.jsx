// Renders whichever knockout rounds exist in the match data as a bracket.
// Rounds with no matches yet (e.g. "Final" before it's scheduled) are
// simply skipped rather than shown as empty placeholder columns.

const STAGE_ORDER = [
    "Round of 32",
    "Round of 16",
    "Quarter-final",
    "Semi-final",
    "Third-place",
    "Final",
];

export default function KnockoutBracket({ matches }) {
    const rounds = STAGE_ORDER.map((stage) => ({
        stage,
        matches: matches.filter((match) => match.stage === stage),
    })).filter((round) => round.matches.length > 0);

    if (rounds.length === 0) {
        return (
            <div className="match-card">
                <p className="match-empty">The knockout stage hasn't been set yet.</p>
            </div>
        );
    }

    return (
        <div className="bracket">
            {rounds.map((round, i) => (
                <div key={round.stage} className="bracket-round">
                    <p className="bracket-round-label">{round.stage}</p>
                    <div
                        className={`bracket-round-matches ${
                            i === rounds.length - 1 ? "bracket-round-matches--last" : ""
                        }`}
                    >
                        {round.matches.map((match) => (
                            <div key={match.matchId} className="bracket-match">
                                <div className="bracket-team">
                                    <span className="bracket-team-name">{match.homeTeam}</span>
                                </div>
                                <div className="bracket-team">
                                    <span className="bracket-team-name">{match.awayTeam}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}