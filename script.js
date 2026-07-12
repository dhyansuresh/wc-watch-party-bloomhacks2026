/* ============================================================
   MATCHDAY — script.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initBoardTabs();
  initMatchDisplay();
});

/* ---------- mobile nav ---------- */

function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

/* ---------- live / up next tabs ---------- */

function initBoardTabs() {
  const tabs = document.querySelectorAll(".board-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      loadMatches(tab.dataset.filter);
    });
  });
}

/* ============================================================
   MATCH DISPLAY — API INTEGRATION POINT
   ------------------------------------------------------------
   Everything below is a stand-in for the live scores API.
   To wire up the real feed:

   1. Replace fetchMockMatches() with a real call, e.g.:

        async function fetchMatches(filter) {
          const res = await fetch(`https://your-api.example.com/matches?status=${filter}`);
          if (!res.ok) throw new Error("Failed to load matches");
          return res.json(); // expected shape: Match[] (see below)
        }

   2. Each match object should look like:

        {
          id: "m1",
          competition: "Group B",
          status: "live" | "upcoming" | "finished",
          clock: "62'",              // or kickoff time string for upcoming
          venue: "Estadio Azteca, Mexico City",
          home: { name: "Argentina", crestUrl: "" },
          away: { name: "Croatia",  crestUrl: "" },
          score: { home: 2, away: 1 } // omit or null for upcoming matches
        }

   3. Call loadMatches("live") / loadMatches("next") to refresh,
      or set up polling (setInterval) for a truly live board.
   ============================================================ */

function initMatchDisplay() {
  // Simulate initial network delay so the skeleton state is visible.
  loadMatches("live");
}

async function loadMatches(filter) {
  const container = document.getElementById("match-display");
  if (!container) return;

  showSkeleton(container);

  try {
    const matches = await fetchMockMatches(filter);
    renderMatches(container, matches, filter);
  } catch (err) {
    renderError(container);
  }
}

function showSkeleton(container) {
  container.innerHTML = `
    <div class="match-card match-card--skeleton" aria-hidden="true">
      <div class="skeleton-line skeleton-line--tag"></div>
      <div class="skeleton-row">
        <div class="skeleton-crest"></div>
        <div class="skeleton-score"></div>
        <div class="skeleton-crest"></div>
      </div>
      <div class="skeleton-line skeleton-line--venue"></div>
    </div>
  `;
}

function renderMatches(container, matches, filter) {
  if (!matches || matches.length === 0) {
    container.innerHTML = `
      <div class="match-card">
        <p class="match-empty">
          ${filter === "live" ? "No matches live right now. Check back soon." : "Nothing scheduled yet."}
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = matches.map(matchCardHTML).join("");
}

function renderError(container) {
  container.innerHTML = `
    <div class="match-card">
      <p class="match-empty">Couldn't load match data. Trying again shortly.</p>
    </div>
  `;
}

function matchCardHTML(match) {
  const isLive = match.status === "live";
  const statusLabel = isLive ? "Live" : match.status === "finished" ? "Full time" : "Kicks off";
  const scoreHome = match.score ? match.score.home : "–";
  const scoreAway = match.score ? match.score.away : "–";

  return `
    <div class="match-card">
      <div class="match-tag-row">
        <span class="match-competition">${escapeHTML(match.competition)}</span>
        <span class="match-status ${isLive ? "is-live" : "is-upcoming"}">
          ${isLive ? '<span class="live-dot" aria-hidden="true"></span>' : ""}
          ${statusLabel} ${match.clock ? `<span class="match-clock">${escapeHTML(match.clock)}</span>` : ""}
        </span>
      </div>
      <div class="match-teams">
        <div class="team team--home">
          <div class="team-crest">${crestHTML(match.home)}</div>
          <span class="team-name">${escapeHTML(match.home.name)}</span>
        </div>
        <div class="score-block">${scoreHome} — ${scoreAway}</div>
        <div class="team team--away">
          <div class="team-crest">${crestHTML(match.away)}</div>
          <span class="team-name">${escapeHTML(match.away.name)}</span>
        </div>
      </div>
      <p class="match-venue">${escapeHTML(match.venue)}</p>
    </div>
  `;
}

function crestHTML(team) {
  if (team.crestUrl) {
    return `<img src="${team.crestUrl}" alt="${escapeHTML(team.name)} crest">`;
  }
  return escapeHTML(team.name.slice(0, 3).toUpperCase());
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- mock data (delete once the real API is connected) ---------- */

function fetchMockMatches(filter) {
  const live = [
    {
      id: "m1",
      competition: "Group B",
      status: "live",
      clock: "62'",
      venue: "Estadio Azteca, Mexico City",
      home: { name: "Argentina", crestUrl: "" },
      away: { name: "Croatia", crestUrl: "" },
      score: { home: 2, away: 1 },
    },
  ];

  const next = [
    {
      id: "m2",
      competition: "Group D",
      status: "upcoming",
      clock: "Today, 3:00 PM",
      venue: "SoFi Stadium, Los Angeles",
      home: { name: "Brazil", crestUrl: "" },
      away: { name: "France", crestUrl: "" },
      score: null,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(filter === "live" ? live : next), 500);
  });
}
