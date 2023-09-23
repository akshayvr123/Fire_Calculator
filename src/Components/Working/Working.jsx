import React from 'react'
import './Working.css'

import firecalculator from'./fire Calculator.jpg'

const Working = ({workingData}) => {
     console.log(workingData);
     
  return (
    <div>
      <div className="container">
        <h1 className='2xl:ml-52 2xl:text-6xl 2xl:mt-16 xl:mt-12 lg:text-6xl text-3xl font-bold ml-12 mt-3 md:text-4xl'>How Does It Work?</h1>
        {workingData&& workingData.map((data)=>{
          return( <div className='First flex flex-wrap'> 
          <div className={` main_text 2xl:w-2/4 ${data.ml} ${data.margin} lg:w-3/5 ${data.order}`}>
               <h1 className={`  2xl:text-5xl xl:text-5xl lg:w-auto lg:text-4xl md:text-3xl mt-5 sm:mt-10  ml-12 leading-8 text-2xl font-bold tracking-tight`}>{data.Heading}</h1>
               <p className='w-80   2xl:text-3xl xl:ml-16 xl:w-4/5 lg:w-auto lg:text-3xl md:mt-5 md:w-96 sm:w-80 md:text-2xl ml-12 mt-2 text-base font-semibold'>{data.content}</p>
          </div>
          <div className={`${data.margin2xl} `} >
               <img className={` 2xl:mt-1 2xl:w-96 2xl:h-72 xl:w-96 xl:h-56 lg:mt-5 lg:w-72 lg:h-48 md:mt-12 sm:h-36 sm:w-56 w-80 h-56 rounded-lg ml-12 mt-5`} src={data.img} alt="" />
          </div>
      </div>)
        })}
        
        
      </div>
    </div>
  )
}

export default Working
