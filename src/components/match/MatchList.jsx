import MatchCard from "./MatchCard";

export default function MatchList({ matches }) {
    if (!matches || matches.length === 0) {
        return (
            <div className="match-card">
                <p className="match-empty">No matches scheduled yet.</p>
            </div>
        );
    }

    return (
        <div className="match-display">
            {matches.map((match) => (
                <MatchCard key={match.matchId} match={match} />
            ))}
        </div>
    );
}