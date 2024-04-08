import './App.css';
import { NavBar } from './NavBar'
import "./App.css";
import YoutubeEmbed from "./YoutubeVideo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <YoutubeEmbed embedId="HQ8H5gqGA34" />
    </div>
  );
}

export default App;
