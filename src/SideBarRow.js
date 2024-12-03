import React from 'react'
import "./SideBarRow.css"
const SideBarRow = ({title,Icon}) => {
  return (
    <div className='SideBarRow'>
      <Icon className='sidebarrow__icon'/>
      <h2 className='sidebarrow__title'>{title}</h2>
    </div>
   
  )
}

export default SideBarRow