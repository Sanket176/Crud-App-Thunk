import React from 'react'

const Create = () => {
  return (
    <div>
      <form className="w-50 mx-auto my-5">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            {" "}
            Name
          </label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input type="text" className="form-control" />
        </div>

        <div>
          <div className="mb-3">
            <input className="form-check-input" type="radio"/>
            <label className="form-check-label">Male</label>
          </div>
          <div className="mb-3">
            <input className="form-check-input" type="radio"/>
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