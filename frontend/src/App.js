import Header from './components/Header'

import Home from './pages/Home';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Router >
      <Header />

      <Routes>
        <Route exact path='/' element = {
            <>
              <Home />
            </>
          } />
      </Routes>
    </Router>
    
  );
}

export default App;
