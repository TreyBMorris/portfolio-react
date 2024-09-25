import '../Styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header.tsx";
import About from "./About.tsx";
import MobileView from "./MobileView.tsx";
import Footer from "./Footer.tsx";
import Projects from "./Projects.tsx";
function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path = "/" element={<MobileView />}/>
              <Route path="/about" element={<About />} />
              <Route path="/longscroll" element={<MobileView />} />
              <Route path="/projects" element={<Projects/>} />
          </Routes>
          <Footer/>
      </Router>
  )
}

export default App;
