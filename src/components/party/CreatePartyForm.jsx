// Form for creating a new watch party
import { useState } from "react";
import { mockMatches } from "../../mockData";

const emptyForm = {
    matchId: mockMatches[0]?.matchId ?? "",
    location: "",
    maxAttendees: "",
};

export default function CreatePartyForm({ onSubmit, onCancel, submitting }) {
    const [form, setForm] = useState(emptyForm);

    function updateField(field) {
        return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!form.matchId || !form.location.trim()) return;

        await onSubmit({
            matchId: form.matchId,
            maxAttendees: form.maxAttendees ? Number(form.maxAttendees) : null,
            location: { address: form.location.trim() },
        });
    }

    return (
        <form className="create-party-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="matchId">Which game?</label>
                <select id="matchId" value={form.matchId} onChange={updateField("matchId")} required>
                    {mockMatches.map((match) => (
                        <option key={match.matchId} value={match.matchId}>
                            {match.homeTeam} vs {match.awayTeam} — {match.stage}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-row">
                <label htmlFor="location">Location</label>
                <input
                    id="location"
                    value={form.location}
                    onChange={updateField("location")}
                    placeholder="Address or venue name"
                    required
                />
            </div>

            <div className="form-row">
                <label htmlFor="maxAttendees">Max people</label>
                <input
                    id="maxAttendees"
                    type="number"
                    min="1"
                    value={form.maxAttendees}
                    onChange={updateField("maxAttendees")}
                    placeholder="No limit"
                />
            </div>

            <div className="form-actions">
                <button type="button" className="btn-secondary" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={submitting}>
                    {submitting ? "Creating…" : "Create party"}
                </button>
            </div>
        </form>
    );
}