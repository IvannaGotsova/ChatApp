import './App.css'
import { Routes, Route } from "react-router-dom";
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import NewChat from './components/NewChat';
import AllUsers from './components/AllUsers';

function App() {

  return (
    <>
      <Header />
      <br /><br /><br />
      <Body />
      <br /><br /><br />
      <Footer />

              
      <Routes>
            <Route path="/" element={<App />} />
            <Route path="new-chat" element={<NewChat />} />
            <Route path="all-users" element={<AllUsers />} />
      </Routes>
    </>
  )
}

export default App
