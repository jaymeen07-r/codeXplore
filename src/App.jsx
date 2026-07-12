import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Team from "./Team";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
