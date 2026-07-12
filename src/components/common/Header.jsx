import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/auth.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, isSignedIn, signIn, signOut, loading } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (err) {
            console.error("Sign-in failed:", err);
        }
    }

    function handleSignOut() {
        setMenuOpen(false);
        signOut();
    }

    return (
        <header className="site-header">
            <NavLink to="/" className="brand" onClick={() => setIsOpen(false)}>
                <span className="brand-mark" aria-hidden="true"></span>
                MATCHDAY
            </NavLink>

            <nav className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/my-parties"
                    className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
                    onClick={() => setIsOpen(false)}
                >
                    My Parties
                </NavLink>

                <div className="auth-slot">
                    {loading ? null : isSignedIn ? (
                        <div
                            className="auth-user-menu"
                            onMouseEnter={() => setMenuOpen(true)}
                            onMouseLeave={() => setMenuOpen(false)}
                        >
                            <button
                                className="auth-user"
                                onClick={() => setMenuOpen((open) => !open)}
                                aria-haspopup="true"
                                aria-expanded={menuOpen}
                            >
                                {user.photoURL && (
                                    <img
                                        src={user.photoURL}
                                        alt=""
                                        className="auth-avatar"
                                        referrerPolicy="no-referrer"
                                    />
                                )}
                                <span className="auth-name">{user.displayName?.split(" ")[0] ?? "Signed in"}</span>
                            </button>

                            {menuOpen && (
                                <div className="auth-dropdown" role="menu">
                                    <button className="auth-dropdown-item" role="menuitem" onClick={handleSignOut}>
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button className="auth-signin-btn" onClick={handleSignIn}>
                            Sign in with Google
                        </button>
                    )}
                </div>
            </nav>

            <button
                className="nav-toggle"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((open) => !open)}
            >
                <span></span><span></span><span></span>
            </button>
        </header>
    );
}