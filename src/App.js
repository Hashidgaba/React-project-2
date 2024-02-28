import './App.css';
import Administration from './components/Administration'
import Admission from './components/Admission'
import ContactForm from './components/Contact'
import Home from './components/Home'
import Layout from './components/Layout'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/administration" element={<Layout><Administration /></Layout>} />
          <Route path="/admission" element={<Layout><Admission /></Layout>} />
          <Route path="/contact" element={<Layout><ContactForm /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
