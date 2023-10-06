import React from 'react'
import upstox from './upstox png.png'
import angel from './angel.png'
import zerodha from './Zerodha.png'
import fyers from './Fyers.jpg'

const Invest = () => {
  return (
    <div id='Invest'>
           <h1 className='2xl:ml-44 2xl:text-6xl 2xl:mt-16 xl:mt-12 lg:text-6xl text-3xl font-bold ml-5 mt-3 md:text-4xl'>Invest Now!</h1>
      <div className="container flex flex-row flex-wrap">

        <div className='2xl:6/12 md:w-6/12   '>
            <img className='2xl:w-9/12  2xl:ml-52 lg:w-10/12 md:w-80 sm:w-64 w-80 h-56 ml-5 rounded-lg mt-6 hover:opacity-20 img' src={upstox} alt="" />
           
        </div>
        <div className='2xl:6/12 lg:w-6/12 md:w-1/2  '>
            <img className='2xl:w-9/12 2xl:ml-8 lg:w-10/12 sm:w-64 sm:ml-10 lg:mr-20  md:w-80  md:ml-0  w-80 h-56   ml-5 rounded-lg mt-6 hover:opacity-20' src={angel} alt="" />
        </div>
        <div className='2xl:6/12 lg:w-6/12'>
            <img className='2xl:w-9/12  2xl:ml-52 lg:w-10/12 md:w-80 sm:w-64 w-80 h-56  ml-5 rounded-lg mt-6 hover:opacity-20' src={zerodha} alt="" />
        </div>
        <div className='2xl:6/12 lg:w-6/12'>
            <img className='2xl:w-9/12 2xl:ml-8 lg:w-10/12 lg:ml-0 md:w-80 sm:ml-10 md:ml-10 sm:w-64 w-80 h-56  ml-5 rounded-lg mt-6 hover:opacity-20' src={fyers} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Invest
 