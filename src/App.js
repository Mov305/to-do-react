import './App.css';
import ToDo from './pages/ToDo.js';
import About from './pages/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App p-10">
      <Router>
        <Routes>
          <Route path="/todo" element={<ToDo/>}/>
          <Route path="/" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
