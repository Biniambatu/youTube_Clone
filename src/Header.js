import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from "@mui/icons-material"
   import VideoCall from "@mui/icons-material/VideoCall"
// import logo from "../src/logo/Logo_of_YouTube_(2015-2017).svg"
const Header = () => {
  return (
    <div className='header'>
        <MenuIcon/>
        <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt='logo'/>
    <input type='text' />
    <SearchIcon/>
    <VideoCall/>
    </div>
  )
}

export default Header
