import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page-component/home'
import Login from './page-component/login';
import MainApp from './MainApp';
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/main-app" element={<MainApp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
