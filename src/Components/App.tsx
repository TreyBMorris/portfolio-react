import '../Styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header.tsx";
import Trey from "./Trey.tsx";
import About from "./About.tsx";
import MobileView from "./MobileView.tsx";
import { useMediaQuery } from 'react-responsive';
import Footer from "./Footer.tsx";
function App() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
      <Router>
          <Header />
          <Routes>
              <Route path = "/" element={isMobile ? <MobileView /> : <Trey />}/>
              <Route path="/about" element={<About />} />
              <Route path="/longscroll" element={<MobileView />} />
          </Routes>
          <Footer/>
      </Router>
  )
}

export default App;
