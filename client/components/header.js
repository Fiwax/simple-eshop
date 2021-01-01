import React from 'react'
import { Link } from 'react-router-dom'

// import wave from '../assets/images/wave.jpg'

const Header = () => {
  return (
    <div>
      <nav className="flex bg-purple-700 justify-between p-2 text-white box-border">
        <Link id="brand-name" to="/" className="p-1 hover:text-yellow-500 border-r-2 font-bold ">
          REDUX Shop
        </Link>
        <BasketButton />
      </nav>
    </div>
  )
}


const BasketButton = () => {
  return (
    <div>
      <Link to="/basket" className="border border-indigo-800 pb-2 px-6 py-1 rounded-full">
        555 $ |
      </Link>
    </div>
  )
}

Header.propTypes = {}

export default Header
