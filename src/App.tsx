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

{
  /* <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            We sell soap worldwide
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            This globe is interactive and customizable. Have fun with it, and
            don&apos;t forget to share it. :)
          </p>
        </motion.div> */
}

export default App;
