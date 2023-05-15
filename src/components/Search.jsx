import React, { useContext, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase"
import { AuthContext } from '../context/AuthContext';
const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);


  const handleSearch = async () => {
    const q = query(collection(db, "users"),
      where("displayName", "==", username))
      try{
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
         setUser(doc.data())
        });
      }
      catch(err){
        setErr(true);
      }
   
  };
 




  const handleKey = e => {
    e.code === "Enter" && handleSearch()
  }


  return (
    <div className='search'>
      <div className="searchform">
        <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} />
      </div>
      {err && <span>User not found</span>}
      {user &&<div className="userChat">
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search