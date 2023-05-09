import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/auth/login";
import NewUser from "./pages/auth/newUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="new-user" element={<NewUser />} />
            <Route path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
