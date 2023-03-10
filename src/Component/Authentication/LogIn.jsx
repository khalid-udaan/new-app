import React from 'react'

const LogIn = () => {
  return (
    <>
    <div className="m-auto bg-green-400 p-6 w-80 rounded-lg my-20">
      <form>
        <div className="mt-4">
          <input type="email" placeholder="Email Id" className="outline-none border-2 w-full border-red-200 rounded-md p-1" />
        </div>
        <div className="mt-4">
          <input type="password" placeholder="Password" className="outline-none border-2 w-full border-red-200 rounded-md p-1" />
        </div>
        <div className="mt-4">
          <button className="w-20 bg-yellow-400 p-2 rounded-md m-auto">Submit</button>
        </div>
      </form>
    </div>
  </>
  )
}

export default LogIn