import React from 'react'
import "./SideBar.css"
import SideBarRow from './SideBarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { ExpandMoreOutlined, History, OndemandVideo, ThumbDownOffAltOutlined, VideoLibrary, WatchLater } from '@mui/icons-material';
const SideBar = () => {
  return (
    <div className='sidebar'>
      <SideBarRow selected Icon={HomeIcon} title='Home'/>
      <SideBarRow Icon={WhatshotIcon} title='Trending'/>
      <SideBarRow Icon={SubscriptionsIcon} title='Subscription'/>
      <hr/>
      <SideBarRow Icon={VideoLibrary} title='Library'/>
      <SideBarRow Icon={History} title='History'/>
      <SideBarRow Icon={OndemandVideo} title='Your Videos'/>
      <SideBarRow Icon={WatchLater} title='Watch Videos'/>
      <SideBarRow Icon={ThumbDownOffAltOutlined} title='Liked Videos'/>
      <SideBarRow Icon={ExpandMoreOutlined} title='Show more'/>
      <hr/>
    </div>
  )
}

export default SideBar
