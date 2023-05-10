import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/auth/login";
import NewUser from "./pages/auth/newUser";
import Menu from "./pages/Menu";
import Kontakt from "./pages/Kontakt";

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
            <Route path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
