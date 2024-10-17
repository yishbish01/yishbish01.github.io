import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import MiscPage from "./pages/misc";
import AboutPage from "./pages/about";
import BasePage from "./pages/base";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BasePage>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/misc" element={<MiscPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BasePage>
    </div>
  );
}

export default App;
