import React from 'react'
import Buttons from './currency_buttons'
import SortButtons from './sortButtons'



const SecondHeader = () => {
  return (
    <div>
      <div className="flex bg-gray-900 justify-between p-2 text-white box-border">
        <Buttons />
        <SortButtons />
      </div>
    </div>
  )
}

SecondHeader.propTypes = {}

export default SecondHeader