import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CreatePartyForm from "../components/party/CreatePartyForm";
import PartyList from "../components/party/PartyList";
import { useAuth } from "../hooks/useAuth";
import { useMyParties, useCreateParty } from "../hooks/useParties";
import "../styles/party.css";

export default function MyParties() {
    const { user } = useAuth();
    const { parties, loading, removeParty } = useMyParties(user?.uid);
    const { createParty, submitting } = useCreateParty();
    const [isCreating, setIsCreating] = useState(false);

    async function handleCreate(partyData) {
        await createParty({
            ...partyData,
            hostId: user.uid,
            hostName: user.displayName ?? "Anonymous host",
        });
        setIsCreating(false);
    }

    return (
        <>
            <div className="floodlight-glow" aria-hidden="true"></div>
            <Header />

            <main>
                <section className="matches-section">
                    <div className="section-head">
                        <p className="eyebrow">My parties</p>
                        <h1>{user?.displayName ? `${user.displayName}'s parties` : "My parties"}</h1>
                    </div>

                    <button className="cta-button" onClick={() => setIsCreating(true)}>
                        <span className="cta-bolt" aria-hidden="true">⚡</span>
                        Create a party
                    </button>

                    {loading ? (
                        <p className="match-empty">Loading your parties…</p>
                    ) : (
                        <PartyList parties={parties} onDelete={removeParty} />
                    )}
                </section>
            </main>

            <Footer />

            {isCreating && (
                <div
                    className="modal-backdrop"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="create-party-heading"
                >
                    <div className="modal-panel">
                        <div className="section-head">
                            <p className="eyebrow">New party</p>
                            <h2 id="create-party-heading">Create a party</h2>
                        </div>
                        <CreatePartyForm
                            onSubmit={handleCreate}
                            onCancel={() => setIsCreating(false)}
                            submitting={submitting}
                        />
                    </div>
                </div>
            )}
        </>
    );
}