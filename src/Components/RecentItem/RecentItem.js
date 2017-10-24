import React from 'react'
import './RecentItem.css'

const RecentItem = (props) => {
  const icon = `fa fa-${props.icon}`
  return (
    <div className='RecentItem'>
      <i className={icon} aria-hidden="true"></i>
      <span><a href={props.linkTarget}>{props.displayText}</a></span>
    </div>
  )
}

export default RecentItem;
