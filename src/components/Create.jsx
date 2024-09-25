import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../redux/features/useDetailSlice';

const Create = () => {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();// to send data from UI to store
    const navigate = useNavigate();

    function getUserData(e){
        setUsers({
            ...users,//first will add the old obj data
            [e.target.name] : e.target.value//then add object with "name": value | erverytime change on input tag
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("users:",users);
        //we need to send this submitted data taken from input fields to our Global STORE(in our MOCK API)
        console.log("Form submited")
        dispatch(createUser(users));
        navigate("/read");
    };

  return (
    <div>
      <h2 className="my-2">Fill the data</h2>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getUserData}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={getUserData}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            onChange={getUserData}
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
              onChange={getUserData}
            />
            <label className="form-check-label">Male</label>
          </div>

          <div className="mb-3">
            <input
              className="form-check-input"
              name="gender"
              value="Female"
              type="radio"
              onChange={getUserData}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create