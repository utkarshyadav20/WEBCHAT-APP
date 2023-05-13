import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <span className='logo'>WebChat</span>
      <div className="user">
        <img src="src/img/abc.jpg" alt="" />
        <span>Utkarsh</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar