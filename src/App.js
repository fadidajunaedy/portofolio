import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({duration : 2000});
  }, [])
  return (
      <>
        <Header />
        <Routes>
          <Route path = '/' element={ <Home /> } exact />
          <Route path = '/about' element={ <About /> } />
          <Route path = '/skills' element={ <Skills /> } />
          <Route path = '/projects' element={ <Projects /> } />
          <Route path = '/contact' element={ <Contact/> } />
        </Routes>
      <Footer />
      </>

  );
}

export default App;
