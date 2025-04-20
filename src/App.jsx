import "tailwindcss";

import Header from "/src/components/Header";
import NavBar from "/src/components/NavBar/NavBar";
import Home from "/src/pages/Home";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
