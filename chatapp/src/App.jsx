import './App.css'
import { Routes, Route } from "react-router-dom";
import NewChat from './components/NewChat';
import AllUsers from './components/AllUsers';
import Body from './components/Body';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import UserLogin from './components/UserLogin';

function App() {
  
    return (
      <>

      <Header /> 
      <br /><br /><br />

      <Routes>
        <Route path="/" element={<UserLogin />} />
              <Route path="index" element={<Body />} />
              <Route path="new-chat" element={<NewChat />} />
              <Route path="all-users" element={<AllUsers />} />
      </Routes>

      <br /><br /><br /><br />
      <Footer /> 

      </>
    )
  }


export default App
