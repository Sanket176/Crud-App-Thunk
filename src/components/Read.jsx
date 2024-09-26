import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showUser } from '../redux/features/useDetailSlice';
import { deleteUser } from '../redux/features/useDetailSlice';
import Popup from './Popup';

const Read = () => {

  const dispatch = useDispatch();
  const [id, setId] = useState(null)
  const [showPopup, setShowPopup] = useState(false);
  //STORE->state->app has the data(i.e.  user, loading, error)
  //We are taking users and loading here
  const {users, loading} = useSelector((state)=> state.app);

  //to hit the API on page reload. Need dispatch to trigger the API to show data
  useEffect(() => {
    dispatch(showUser());
  }, []);

  function handleViewClick(userId){
    console.log("id of clicked post users", userId);
    setId(userId);
    setShowPopup(!showPopup);
  }

  function handleDeleteClick(userId){
    console.log("id of clicked delete users", userId);
    dispatch(deleteUser(userId));
  }

  function handleEditClick(){}

  if(loading){
    return (<h2>Loading...</h2>)
  }

  return (
    <div>
      {showPopup && <Popup id={id} setShowPopup={setShowPopup} />}
      <h2>All data</h2>
      {users  && users.map((ele)=>{
          return <div key={ele.id} className="card mx-auto mt-4" style={{ width: "18rem" }}>
          <div  className="card-body my-3">
            <h5 className="card-title">{ele.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ele.gender}</h6>
            <button className="card-link" onClick={()=>handleViewClick(ele.id)}>
              View
            </button>
            <button className="card-link" onClick={handleEditClick} >
              Edit
            </button>
            <button className="card-link" onClick={()=>handleDeleteClick(ele.id)}>
              Delete
            </button>
          </div>
        </div>

        })
      }
 </div>
  );
}

export default Read