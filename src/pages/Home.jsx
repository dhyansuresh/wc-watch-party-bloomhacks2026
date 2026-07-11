// Match schedule + entry point to find parties
import Header from "../components/common/Header.jsx";
import Footer from "../components/common/Footer";

export default function Home() {
    return (
        <>
            <div className="floodlight-glow" aria-hidden="true"></div>
            <Header />

            <main>
                <section className="matches-section">
                    <div className="section-head">
                        <p className="eyebrow">Matchday board</p>
                        <h1>What's on the pitch</h1>
                    </div>
                    <p className="match-empty">Home page coming soon.</p>
                </section>
            </main>

            <Footer />
        </>
    );
}