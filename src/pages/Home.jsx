import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import MatchList from "../components/match/MatchList";
import KnockoutBracket from "../components/match/KnockoutBracket";
import { mockMatches } from "../mockData";
import "../styles/bracket.css";
import SportBusyWidget from "/src/pages/Knockout.jsx";

export default function Home() {
    const [view, setView] = useState("matches"); // "matches" | "knockout"

    return (
        <>
            <div className="floodlight-glow" aria-hidden="true"></div>
            <Header />

            <main>
                <section className="matches-section" aria-labelledby="matches-heading">
                    <div className="section-head">
                        <p className="eyebrow">Matchday board</p>
                        <h1 id="matches-heading">What's on the pitch</h1>
                    </div>

                    <div className="board-tabs" role="tablist" aria-label="Board view">
                        <button
                            className={`board-tab ${view === "matches" ? "is-active" : ""}`}
                            role="tab"
                            aria-selected={view === "matches"}
                            onClick={() => setView("matches")}
                        >
                            Matches
                        </button>
                        <button
                            className={`board-tab ${view === "knockout" ? "is-active" : ""}`}
                            role="tab"
                            aria-selected={view === "knockout"}
                            onClick={() => setView("knockout")}
                        >
                            Knockout bracket
                        </button>
                    </div>

                    {view === "matches" ? (
                        <MatchList matches={mockMatches} />
                    ) : (
                        <div className="widget-container">
                            <SportBusyWidget />
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </>
    );
}