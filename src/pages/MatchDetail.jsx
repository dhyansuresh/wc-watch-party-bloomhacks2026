import { useParams, Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function MatchDetail() {
    const { matchId } = useParams();

    return (
        <>
            <div className="floodlight-glow" aria-hidden="true"></div>
            <Header />

            <main>
                <Link to="/" className="back-link">← Back to matchday board</Link>
                <p className="match-empty">Match details for {matchId} coming soon.</p>
            </main>

            <Footer />
        </>
    );
}// Map + party list for one specific match
