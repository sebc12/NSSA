import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Menu from "./pages/Menu";
import Kontakt from "./pages/Kontakt";
import Matchmaking from "./pages/Matchmaking";
import Indstillinger from "./pages/Indstillinger";
import Matches from "./pages/Matches";
import { useState } from "react";
import PrivateRoute from "../src/componment/PrivateRoute";

function App() {
  const [token, setToken] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route
              path="Signin"
              element={<Signin token={token} setToken={setToken} />}
            />
            <Route path="signup" element={<Signup />} />
            <Route element={<PrivateRoute token={token} />}>
              <Route path="menu" element={<Menu />} />
              <Route path="kontakt" element={<Kontakt />} />
              <Route path="matchmaking" element={<Matchmaking />} />
              <Route path="indstillinger" element={<Indstillinger />} />
              <Route path="matches" element={<Matches />} />
            </Route>

            <Route path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
