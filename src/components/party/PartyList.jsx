import PartyCard from "./PartyCard";
import { mockMatches } from "../../mockData";

export default function PartyList({ parties, onDelete }) {
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
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}