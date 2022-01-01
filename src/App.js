import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login/Login';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">      
      <BrowserRouter>
                <Header/>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>            
            </Routes>
                
      </BrowserRouter>

    </div>
  );
}

export default App;
