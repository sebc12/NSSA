import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/auth/login";
import NewUser from "./pages/auth/newUser";
import Menu from "./pages/Menu";
import Kontakt from "./pages/Kontakt";
import Matchmaking from "./pages/Matchmaking";
import Indstillinger from "./pages/Indstillinger";
import Matches from "./pages/Matches";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="new-user" element={<NewUser />} />
            <Route path="menu" element={<Menu />} />
            <Route path="kontakt" element={<Kontakt />} />
            <Route path="matchmaking" element={<Matchmaking />} />
            <Route path="indstillinger" element={<Indstillinger />} />
            <Route path="matches" element={<Matches />} />
            <Route path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
