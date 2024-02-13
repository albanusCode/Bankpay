import React, {useState} from 'react'
import { close, menu } from '../assets'
import {navLinks} from '../constants'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex w-full justify-between items-center navbar'>
      <img src={logo} alt="bank logo" className='w-[100px] h-[px]' />
      <ul className='hidden list-none sm:flex justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}  font-poppins text-[16px]`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu icon" 
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex justify-end items-center flex-1 flex-col'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}  font-poppins text-[16px]`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar