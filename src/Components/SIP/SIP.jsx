import React from 'react'
import { useState } from 'react'
import SIPTotal from './SIPTotal'
const SIP = () => {
    const [inflation,setInflation]=useState(6)
    const [expense,setExpense]=useState(10000)
  return (
    <div>
      <div className="container">
        <h1 className='2xl:ml-52 2xl:text-6xl 2xl:mt-16 xl:mt-12 lg:text-6xl text-3xl font-bold ml-12 mt-3 md:text-4xl'>SIP Calculator</h1>
        <div>
            <div className='flex  flex-col sm:flex-row mt-6 2xl:ml-40 2xl:mr-36'>
            <div className=' 2xl:w-9/12 lg:w-5/12  lg:h-44 lg:mt-5 sm:w-64 md:w-80 bg-white w-80 h-42 ml-12 mr-5  rounded-md mt-7 p-5 '>
                     <h1 className='expected leading-7 opacity-80  text-xs font-bold text-black'>Current Monthly Expense</h1>
                     {/* <h1 className='text-black text-lg opacity-80 font-bold'>{expense}</h1> */}
                     <input type="number" min={1000} max={150000} className='bg-black font-bold  rounded-md mt-2 pl-2 w-56 text-white' onChange={(e)=>{setExpense(e.target.value)}} value={expense} />
                     <input value={expense} placeholder={expense} onChange={(e)=>setExpense(e.target.value)} className='lg:w-full mt-5 sm:w-52 w-72 md:w-72 range' type="range" min={1000} max={150000} />
                     <div className='number  text-black opacity-40 font-bold'>
                        <span>1000</span>
                        <span className=''>150000</span>
                     </div>
                    
                </div>
                <div className='2xl:ml-0 2xl:w-9/12 xl:ml-16 lg:w-5/12 lg:ml-8 lg:h-44 lg:mt-5 sm:w-64 md:ml-2 md:w-80 bg-white w-80 h-42 ml-12 mr-5  rounded-md mt-7 p-5 '>
                     <h1 className='expected leading-7   text-xs font-bold text-black'>Expected Inflation in %</h1>
                     {/* <h1 className='text-black text-lg opacity-80 font-bold'>{expense}</h1> */}
                     <input max={15} min={1} type="number" className='bg-black font-bold  rounded-md mt-2 pl-2 w-56 text-white' onChange={(e)=>{setInflation(e.target.value)}} value={inflation} />
                     <input value={inflation} placeholder={inflation} onChange={(e)=>setInflation(e.target.value)} className='lg:w-full mt-5 sm:w-52 w-72 md:w-72 range' type="range" min={1} max={15} />
                     <div className='number  text-black opacity-40 font-bold'>
                        <span>1</span>
                        <span className=''>15</span>
                     </div>
                    
                </div>
                
                <div>
                    
                    

                </div>
                
            </div>
            
        </div>
     
        <div>
            <div className='flex  flex-col sm:flex-row mt-0 2xl:ml-40 2xl:mr-36'>
            <div className=' 2xl:w-9/12 lg:w-5/12  lg:h-44 lg:mt-5 sm:w-64 md:w-80 bg-white w-80 h-42 ml-12 mr-5  rounded-md mt-7 p-5 '>
                     <h1 className='expected leading-7 opacity-80  text-xs font-bold text-black'>Current Monthly Expense</h1>
                     {/* <h1 className='text-black text-lg opacity-80 font-bold'>{expense}</h1> */}
                     <input type="number" min={1000} max={150000} className='bg-black font-bold  rounded-md mt-2 pl-2 w-56 text-white' onChange={(e)=>{setExpense(e.target.value)}} value={expense} />
                     <input value={expense} placeholder={expense} onChange={(e)=>setExpense(e.target.value)} className='lg:w-full mt-5 sm:w-52 w-72 md:w-72 range' type="range" min={1000} max={150000} />
                     <div className='number  text-black opacity-40 font-bold'>
                        <span>1000</span>
                        <span className=''>150000</span>
                     </div>
                    
                </div>
                <div className='2xl:ml-0 2xl:w-9/12 xl:ml-16 lg:w-5/12 lg:ml-8 lg:h-44 lg:mt-5 sm:w-64 md:ml-2 md:w-80 bg-white w-80 h-42 ml-12 mr-5  rounded-md mt-7 p-5 '>
                     <h1 className='expected leading-7   text-xs font-bold text-black'>Expected Inflation in %</h1>
                     {/* <h1 className='text-black text-lg opacity-80 font-bold'>{expense}</h1> */}
                     <input max={15} min={1} type="number" className='bg-black font-bold  rounded-md mt-2 pl-2 w-56 text-white' onChange={(e)=>{setInflation(e.target.value)}} value={inflation} />
                     <input value={inflation} placeholder={inflation} onChange={(e)=>setInflation(e.target.value)} className='lg:w-full mt-5 sm:w-52 w-72 md:w-72 range' type="range" min={1} max={15} />
                     <div className='number  text-black opacity-40 font-bold'>
                        <span>1</span>
                        <span className=''>15</span>
                     </div>
                    
                </div>
                
                <div>
                    
                    

                </div>
                
            </div>
            
        </div>
        
    
       <SIPTotal total={expense}></SIPTotal>
       
      </div>
    </div>
  )
}

export default SIP
