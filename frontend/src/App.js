import logo from './logo.svg';
import './css/home.css';
import Home from './pages/home.js'
import Search from './pages/search';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
