// Parties the current user created or joined
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useAuth } from "../hooks/useAuth";

export default function MyParties() {
    const { user } = useAuth();

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
                    <p className="match-empty">Coming soon.</p>
                </section>
            </main>

            <Footer />
        </>
    );
}
