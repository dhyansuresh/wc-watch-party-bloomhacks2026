// List of upcoming matches
import SportBusyWidget from "./Knockout.jsx";

<div className="widget-container" style={{ width: "100%", maxWidth: "380px" }}>
    <SportBusyWidget />
</div>
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
