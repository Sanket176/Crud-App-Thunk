import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchUser } from '../redux/features/useDetailSlice';

const Navbar = () => {
    const users = useSelector((state)=>state.app.users);
    const dispatch = useDispatch();
    const [searchData, setSearchData] = useState("");

    //as page mount or searchData changes, dispatch this data into the store.
    useEffect(()=>{
      dispatch(searchUser(searchData));
    },[searchData])

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link" >
                  All Posts ({users.length})
                </Link>
              </li>
            </ul>
            <form className="d-flex w-50" role="search">
              <input
                className="form-control me-2 w-100"
                type="search"
                value={searchData}
                placeholder="Search..."
                aria-label="Search"
                onChange={(e)=>setSearchData(e.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar