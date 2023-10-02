import React from 'react'

const SIPTotal = ({total,fire}) => {
  return (
    <div className='container '>
    <div className='bg-gray-950 text-white 2xl:ml-52 2xl:mr-40 lg:mr-16 xl:mr-20 sm:w-11/12 md:w-auto md:ml-12 md:mr-12 rounded-lg sm:m-10 ml-12 w-80 mt-6  flex flex-col h-40 '>
      <h1 className='lg:text-3xl sm:text-xl mt-5 text-center text-sm font-bold leading-5 tracking-tight'>Total Amount: {total}</h1>
      <p className='2xl:ml-16 lg:text-2xl sm:text-lg text-xs m-3 font-semibold sm:ml-8'>{total>fire?'Yes,Now the total amount is greater than the fire number You can acheive your fire Number by investing like this And Now you can start investing by your favorite broker ':'OOPs!,Your total amount is less than your fire number so you need to adjust the above values but Time period should be same as the no years you used to calculate the fire number'}</p>
    </div>
    </div>
  )
}

export default SIPTotal
