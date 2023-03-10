import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BiUserCircle} from "react-icons/bi"
import SingUp from './Authentication/SingUp'
const Navbar = () => {
const [isOpen, setIsOpen]=useState(false)

const AuthenticationHandler=()=>{
  return(
    <>
      <div className="absolute top-6, left-6">
        <SingUp/>
      </div>
    </>
  )
}

  return (
    <>
      <div className='flex items-center, justify-between my-4 ml-16 mr-16'>
        <div>
            <h3 className='text-2xl text-yellow-500'>Education<span className='text-green-500'>Hub</span></h3>
        </div>
        <div>
            <ul className='flex items-center'>
                <li className='mx-3 text-green-500 text-lg hover:text-yellow-500'><Link to="/">Courses</Link></li>
                <li className='mx-3 text-green-500 text-lg hover:text-yellow-500'><Link to="/faq">FAQ</Link></li>
                <li className='mx-3 text-green-500 text-lg hover:text-yellow-500'><Link to="/blog">Blog</Link></li>
                <li className='mx-3 text-green-500 text-lg hover:text-yellow-500'><Link to="/about">About</Link></li>
                <li className='mx-3 text-green-500 text-lg hover:text-yellow-500'><Link to="/contact">Contact</Link></li>
                <li className='mx-3 text-green-500 text-lg hover:text-yellow-500'><Link to="/user">
                    <BiUserCircle size={30}
                      onClick={()=>AuthenticationHandler}
                    />
                    </Link></li>
            </ul>
        </div>
       
      </div>
      <hr/>
    </>
  )
}

export default Navbar