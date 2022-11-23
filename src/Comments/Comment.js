import React from 'react'
import Commment from '../Comment/Comment';
import compostyle from './compostyle.css';
const Allow=true;
function Comments() {
  return (
    <div className='Parent'>
      <p className='comment-num'>45 Comments</p>
      <div className='Parent-Comment'>
      <Commment/>
      <Commment data={Allow}/>
      </div>
    </div>

  )
}

export default Comments;