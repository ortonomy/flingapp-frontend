import React from 'react'
import tag from './Tag.module.css'

const Tag = (props) => {
  return (
    <div className={tag.Tag}>
      {props.name}
    </div>
  )
}

export default Tag
