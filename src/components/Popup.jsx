import React from 'react'
import './Popup.css';
import { useSelector } from 'react-redux'; 

const Popup = ({id , setShowPopup}) => {
    console.log("id we got from parent comp:", id)
    const allUsers = useSelector((state)=>state.app.users);
    console.log("allUsers:",allUsers);

    const singleUser = allUsers.filter((user)=>{
        return user.id === id;
    })
    console.log("singleUser",singleUser);

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button onClick={()=>setShowPopup(false)}>close</button>
            <h3>{singleUser[0].id}</h3>
            <h3>{singleUser[0].name}</h3>
            <h3>{singleUser[0].email}</h3>
            <h3>Age: {singleUser[0].age}</h3>
            <h3>{singleUser[0].gender}</h3>

        </div>
    </div>
  )
}

export default Popup