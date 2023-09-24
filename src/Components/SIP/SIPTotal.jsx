import React from 'react'

const SIPTotal = ({total}) => {
  return (
    <div className='container '>
    <div className=' 2xl:ml-52 2xl:mr-40 lg:mr-16 xl:mr-20 sm:w-11/12 md:w-auto md:ml-12 md:mr-12 rounded-lg sm:m-10 ml-12 w-80 mt-6 bg-white flex flex-col h-40 text-black'>
      <h1 className='lg:text-3xl sm:text-xl mt-5 text-center text-sm font-bold leading-5 tracking-tight'>Total Amount: {total}</h1>
      <p className='lg:text-2xl sm:text-lg text-xs m-3 font-semibold sm:ml-8'>So You need to invest around 8400000 to become financially free after 15 years. So this fire number/amount will cover all your basic needs after that!</p>
    </div>
    </div>
  )
}

export default SIPTotal
