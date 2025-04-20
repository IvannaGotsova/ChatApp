import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Footer'
import Header from './Header'
import NewChat from './NewChat';
import AllUsers from './AllUsers';
import UserLogin from './UserLogin';
import Body from './Body';

function Home() {
  
    return (
      <>
        <UserLogin />
      </>
    )
  }


export default Home