import React from 'react'
import "./SideBarRow.css"
const SideBarRow = ({title,Icon,selected}) => {
  return (
    <div className={`SideBarRow ${selected && "selected"}`}>
      <Icon className='sidebarrow__icon'/>
      <h2 className='sidebarrow__title'>{title}</h2>
    </div>
   
  )
}

export default SideBarRow