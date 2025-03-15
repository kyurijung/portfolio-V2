import "tailwindcss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "/src/components/Header";
import NavBar from "/src/components/NavBar";
import Home from "/src/pages/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Header></Header>
        <NavBar></NavBar>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
