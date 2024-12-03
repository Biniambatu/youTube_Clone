import React from 'react'
import "./SideBar.css"
import SideBarRow from './SideBarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
const SideBar = () => {
  return (
    <div className='sidebar'>
      <SideBarRow Icon={HomeIcon} title='Home'/>
      <SideBarRow Icon={WhatshotIcon} title='Trending'/>
      <SideBarRow Icon={SubscriptionsIcon} title='Subscription'/>
    </div>
  )
}

export default SideBar
