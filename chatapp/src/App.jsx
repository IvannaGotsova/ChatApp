import './App.css'
import { Routes, Route } from "react-router-dom";
import NewChat from './components/NewChat';
import AllUsers from './components/AllUsers';
import Body from './components/Body';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import UserLogin from './components/UserLogin';
import Error from './components/Error';
import Chat from './components/Chat';

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
              <Route path="all-users" element={<AllUsers />} />
              <Route path="chat" element={<Chat />} />
              <Route path="*" element={<Error />} />
      </Routes>

      <br /><br /><br /><br />
      <Footer /> 

      </>
    )
  }


export default App
