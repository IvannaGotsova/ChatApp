import './App.css'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header'
import NewChat from './components/NewChat';
import AllUsers from './components/AllUsers';
import UserLogin from './components/UserLogin';
import Body from './components/Body';

function App() {

  return (
    <>
      <Header />
      <br /><br /><br />
      <UserLogin />
      <br /><br /><br />
      <Footer />

              
      <Routes>
            <Route path="/" element={<Body />} />
            <Route path="new-chat" element={<NewChat />} />
            <Route path="all-users" element={<AllUsers />} />
      </Routes>
    </>
  )
}

export default App
