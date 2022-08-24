import { Home, Login, Profile, Register } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Test from "./pages/Test";

function App() {
  const user = false;

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
