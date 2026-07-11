import { Link } from "react-router-dom";

export default function MatchCard({ match }) {
    return (
        <Link to={`/match/${match.matchId}`} className="match-card match-card-link">
            <div className="match-tag-row">
                <span className="match-competition">{match.stage}</span>
                <span className="match-status is-upcoming">
          {new Date(match.kickoffTime).toLocaleString(undefined, {
              weekday: "short",
              hour: "numeric",
              minute: "2-digit",
          })}
        </span>
            </div>
            <div className="match-teams">
                <div className="team team--home">
                    <span className="team-name">{match.homeTeam}</span>
                </div>
                <div className="score-block">vs</div>
                <div className="team team--away">
                    <span className="team-name">{match.awayTeam}</span>
                </div>
            </div>
            <p className="match-venue">{match.venue}</p>
        </Link>
    );
}