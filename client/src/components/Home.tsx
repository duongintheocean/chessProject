import React from 'react'
import SideBar from "./SideBar"
import { Outlet } from 'react-router-dom'
import "./css/home.css"

export default function Home() {
  return (
    <div className='home_container'>
      <div className='side_bar'>
        <SideBar></SideBar>
      </div>
      <div className='main_content'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
