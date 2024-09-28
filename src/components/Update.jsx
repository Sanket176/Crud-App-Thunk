import React,{useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/features/useDetailSlice';

const Update = () => {

    const [userTobeUpdated, setUserTobeUpdated] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {id} = useParams();
    console.log("id in update jsx:",id)
    const {users} = useSelector((state)=> state.app);
    // setUserTobeUpdated()// this logic should run when page loads, i.e. in useEffect

    useEffect(()=>{
        if(id){
            const singleUser = users.filter((user)=> user.id ===id);
            console.log("singleUser:",singleUser[0]);
            setUserTobeUpdated(singleUser[0]);// bcoz singleUser=[{name:sanket, email:sanket@test.com, age:23}] 
        }
    },[])

    function handleNewData(e){
        //will set the old data, and if "name" will come new "value" will change in existing place.
        //hence our single user will be updated.
        setUserTobeUpdated({...userTobeUpdated, [e.target.name]: e.target.value});
    }

    console.log("Updated user data:",userTobeUpdated);

    function handleSubmit(e){
        e.preventDefault();
        console.log("in Edit submit btn clicked")
        dispatch(updateUser(userTobeUpdated));
        navigate("/read");
    }

  return (
    <div>
      <h2 className="my-2">Edit the data</h2>

      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={ userTobeUpdated && userTobeUpdated.name}
            className="form-control"
            onChange={handleNewData}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={userTobeUpdated && userTobeUpdated.email}
            className="form-control"
            onChange={handleNewData}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            value={userTobeUpdated && userTobeUpdated.age}
            className="form-control"
            onChange={handleNewData}
            required
          />
        </div>

        <div>
          <div className="mb-3">
            <input
              className="form-check-input"
              name="gender"
              value="Male"
              type="radio"
              checked={userTobeUpdated && userTobeUpdated.gender == "Male"}//tick this if gender in derived user is also "Male"
              onChange={handleNewData}
            />
            <label className="form-check-label">Male</label>
          </div>

          <div className="mb-3">
            <input
              className="form-check-input"
              name="gender"
              value="Female"
              type="radio"
              checked={userTobeUpdated && userTobeUpdated.gender == "Female"}
              onChange={handleNewData}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>{" "}
        <button className="btn btn-primary" onClick={()=>navigate("/read")}>Back</button>
      </form>
    </div>
  )
}

export default Update