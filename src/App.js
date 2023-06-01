import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NSSA from "./pages/NSSA";
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
            <Route index element={<NSSA />} />
            <Route path="Signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route element={<PrivateRoute />}>
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
