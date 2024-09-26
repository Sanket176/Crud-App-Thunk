import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showUser } from '../redux/features/useDetailSlice';

const Read = () => {
  // const state = useSelector(state);
  const dispatch = useDispatch();


  //Store->state->app has the data(i.e.  user, loading, error)
  //We are taking users and loading here
  const {users, loading} = useSelector((state)=> state.app);



  //to hit the API on page reload. Need dispatch to trigger the API to show data
  useEffect(() => {
    dispatch(showUser());
  }, []);

  if(loading){
    return (<h2>Loading...</h2>)
  }

  return (
    <div>
      <h2>All data</h2>
      {
        users  && users.map((ele)=>{

          return <div key={ele.id} className="card mx-auto mt-4" style={{ width: "18rem" }}>
          <div  className="card-body my-3">
            <h5 className="card-title">{ele.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ele.gender}</h6>
            <a href="#" className="card-link">
              View
            </a>
            <a href="#" className="card-link">
              Edit
            </a>
            <a href="#" className="card-link">
              Delete
            </a>
          </div>
        </div>

        })
      }
 </div>
  );
}

export default Read