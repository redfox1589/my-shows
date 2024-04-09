import './App.css';
import { NavBar } from './NavBar'
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages";
import Comedy from "../pages/comedy";
import Fantasy from "../pages/fantasy";
import Other from "../pages/other";
import Thrillers from "../pages/thrillers";

function App() {
  return (
    <Router>
    <NavBar />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/thrillers"element={<Thrillers />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/other"element={<Other />} />
    </Routes>
  </Router>
  );
}

export default App;
