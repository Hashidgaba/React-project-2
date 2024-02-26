import './App.css';
import Header from './components/Header'
import Administration from './components/Administration'
import Admission from './components/Admission'
import Position from './components/Position'
import ContactForm from './components/Contact'
import Home from './components/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/position" element={<Position />} />
            <Route path="/contact" element={<ContactForm />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
