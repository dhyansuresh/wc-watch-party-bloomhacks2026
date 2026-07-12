// List of parties (e.g. for a given match)
import PartyCard from "./PartyCard";
import { mockMatches } from "../../mockData";

export default function PartyList({ parties }) {
    if (!parties || parties.length === 0) {
        return (
            <div className="match-card">
                <p className="match-empty">You haven't created any parties yet.</p>
            </div>
        );
    }

    return (
        <div className="match-display">
            {parties.map((party) => (
                <PartyCard
                    key={party.partyId}
                    party={party}
                    match={mockMatches.find((m) => m.matchId === party.matchId)}
                />
            ))}
        </div>
    );
}