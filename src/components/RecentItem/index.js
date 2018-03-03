import React from 'react'
import recent from './RecentItem.module.css'

const RecentItem = (props) => {
  const icon = `fa fa-${props.icon}`
  return (
    <div className={recent.RecentItem}>
      <i className={icon} aria-hidden="true"></i>
      <span><a href={props.linkTarget}>{props.displayText}</a></span>
    </div>
  )
}

export default RecentItem;
