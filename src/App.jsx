import Navbar from "./components/Navbar";
import Home from "./pages/Home";
  import Footer from "./components/Footer";

function App() {
  return (
    <div data-theme="light" className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;