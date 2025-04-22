import "tailwindcss";

import Header from "/src/components/Header";
import NavBar from "/src/components/NavBar/NavBar";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <NavBar />
      <MainLayout />
    </div>
  );
}

export default App;
