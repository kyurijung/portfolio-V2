// Import main components
import Header from "/src/components/Header";
import NavBar from "/src/components/NavBar/NavBar";
import MainLayout from "./components/MainLayout";

// Render main App structure
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
