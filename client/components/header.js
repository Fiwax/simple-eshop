import React from 'react'
import { Link } from 'react-router-dom'
import BasketButton from './basketButton'

const Header = () => {
  return (
    <div>
      <nav className="flex bg-purple-700 justify-between p-2 text-white box-border h-16">
        <Link
          id="brand-name"
          to="/"
          className="p-1 hover:text-yellow-500 border-r-1 font-bold flex items-center "
        >
          REDUX Shop
        </Link>
        <BasketButton />
      </nav>
    </div>
  )
}

Header.propTypes = {}

export default Header