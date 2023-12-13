import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import './App.css'
import BookingForm from './components/BookingForm';

function App() {
 return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<BookingForm/>} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;