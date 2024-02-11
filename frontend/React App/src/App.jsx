import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LostHub from './pages/LostHub';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/losthub' element={<LostHub/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
