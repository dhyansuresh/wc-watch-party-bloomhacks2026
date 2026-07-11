import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/common/protectedRoute.jsx";
import Home from "./pages/Home";
import MatchDetail from "./pages/MatchDetail";
import MyParties from "./pages/MyParties";
import Knockout from "./pages/Knockout.jsx";
import SportBusyWidget from "./pages/Knockout.jsx"; 

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/match/:matchId" element={<MatchDetail />} />
                    
                    
                    <Route path="/widget" element={<SportBusyWidget />} />

                    <Route
                        path="/my-parties"
                        element={
                            <ProtectedRoute>
                                <MyParties />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/knockout"
                        element={
                            <ProtectedRoute>
                                <Knockout />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;