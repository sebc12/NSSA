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

import PrivateRoute from "../src/componment/PrivateRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index path="NSSA" element={<Home />} />
            <Route path="NSSA/Signin" element={<Signin />} />
            <Route path="NSSA/signup" element={<Signup />} />
            <Route element={<PrivateRoute />}>
              <Route path="NSSA/menu" element={<Menu />} />
              <Route path="NSSA/kontakt" element={<Kontakt />} />
              <Route path="NSSA/matchmaking" element={<Matchmaking />} />
              <Route path="NSSA/indstillinger" element={<Indstillinger />} />
              <Route path="NSSA/matches" element={<Matches />} />
            </Route>

            <Route path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
