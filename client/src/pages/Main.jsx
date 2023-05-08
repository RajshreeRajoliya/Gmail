import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import {useState} from 'react';

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const toggleDrawer = () => {
    setOpenDrawer(prevState => !prevState);
}
  return (
    <div>
      <Header toggleDrawer={toggleDrawer}/>
      <Sidebar  openDrawer={openDrawer}/>
      <div>Display All</div>
    </div>
  )
}

export default Main
