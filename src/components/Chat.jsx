import React from 'react'
import Cam from '../img/cam.png'
import More from '../img/more.png'

const Chat = () => {
  return (
    <div className='Chat'>
      <div className="chatInfo">
       <span>Utkarsh</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat