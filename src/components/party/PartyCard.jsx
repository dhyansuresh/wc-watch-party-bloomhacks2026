export default function PartyCard({ party, match, onDelete }) {
    const isFull = party.maxAttendees != null && party.attendeeCount >= party.maxAttendees;

    function handleDelete() {
        if (window.confirm("Delete this party? This can't be undone.")) {
            onDelete?.(party.partyId);
        }
    }

    return (
        <div className="match-card party-card">
            <div className="match-tag-row">
        <span className="match-competition">
          {match ? `${match.homeTeam} vs ${match.awayTeam}` : "Match TBD"}
        </span>
                <span className={`party-count ${isFull ? "party-count--full" : ""}`}>
          {party.attendeeCount}
                    {party.maxAttendees != null ? ` / ${party.maxAttendees}` : ""} going
        </span>
            </div>
            <p className="match-venue">{party.location?.address}</p>
            {onDelete && (
                <button className="party-delete-btn" onClick={handleDelete}>
                    Delete party
                </button>
            )}
        </div>
    );
}