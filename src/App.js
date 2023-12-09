import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Create from './Components/Create';
import Read from './Components/Read';
import './App.css';

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
