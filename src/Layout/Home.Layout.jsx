import React from 'react'
import NavBar from '../components/Navbar/NavBar';

const HomeLayout = (props) => {
  return (
    <>
      <NavBar />
      <div>
        {props.children}
      </div>
    </>
  )
}

export default HomeLayout;