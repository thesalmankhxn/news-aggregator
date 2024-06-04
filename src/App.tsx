import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NewsList from "./Components/NewsList";
import { SearchFilterProvider } from "./Components/Context";

function App() {
  return (
    <Router>
      <SearchFilterProvider>
        <main className="relative bg-gray-2 min-h-screen h-full flex flex-col">
          <div className="h-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<NewsList />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <div className="pt-[20px] mt-auto">
            <Footer />
          </div>
        </main>
      </SearchFilterProvider>
    </Router>
  );
}

export default App;
