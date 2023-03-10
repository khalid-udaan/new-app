import React from "react";
import { Link } from "react-router-dom";
const SingUp = () => {
  return (
    <>
      <div className="m-auto bg-green-400 p-6 w-80 rounded-lg my-20">
        <form>
          <div>
            <input type="text" placeholder="full name" className="outline-none border-2 w-full border-red-200 rounded-md p-1" />
          </div>
          <div className="mt-4">
            <input type="text" placeholder="Mobile number" className="outline-none border-2 w-full border-red-200 rounded-md p-1"/>
          </div>
          <div className="mt-4">
            <input type="email" placeholder="Email Id" className="outline-none border-2 w-full border-red-200 rounded-md p-1" />
          </div>
          <div className="mt-4">
            <input type="password" placeholder="Password" className="outline-none border-2 w-full border-red-200 rounded-md p-1" />
          </div>
          <div className="mt-4">
            <input type="password" placeholder="Confirm Password" className="outline-none border-2 w-full border-red-200 rounded-md p-1" />
          </div>
          <div className="mt-4">
            <button className="w-20 bg-yellow-400 p-2 rounded-md m-auto">SignUp</button>
          </div>
          <Link to="/login" className="my-2">You have already acoount</Link>
        </form>
      </div>
    </>
  );
};

export default SingUp;
