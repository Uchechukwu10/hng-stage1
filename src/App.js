import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="*" element={<Error />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
