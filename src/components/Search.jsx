import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchform">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src="src/img/abc.jpg" alt="" />
        <div className="userChatInfo">
          <span>Utkarsh</span>
        </div>
      </div>
    </div>
  )
}

export default Search