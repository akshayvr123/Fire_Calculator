import React from 'react'
import { useState ,useEffect} from 'react'
import SIPTotal from './SIPTotal'
import './SIP.css'
const SIP = () => {
   const [investment,setInvestment]=useState(10000)
   const [returns,setReturns]=useState(12)
   const [year,setYear]=useState(10)
   const [fire,setFire]=useState(5000000)
   const [state,setState]=useState(false)
   const [total, setTotal] = useState(0);
   useEffect(() => {
    //M = P × ({[1 + i]^n – 1} / i) × (1 + i).
     let i=returns/100/12;
     let n=year*12;
     let M=investment*(((1+i)**n -1)/i)*(1+i)
     setTotal(Math.round(M))
  
    }, [investment, returns, year, fire]);
    
  return (
    <div id="Sip">
      <div className="container">
        <h1 className='2xl:ml-44 2xl:text-6xl 2xl:mt-16 xl:mt-12 lg:text-6xl text-3xl font-bold ml-5 mt-3 md:text-4xl'>SIP Calculator</h1>
        <div>
            <div className='flex  flex-col sm:flex-row mt-6 2xl:ml-40 2xl:mr-36'>
            <div className=' 2xl:w-9/12 lg:w-5/12  lg:h-44 lg:mt-5 sm:w-64 md:w-80 bg-white w-80 h-42 ml-5 mr-5  rounded-md mt-7 p-5 '>
                     <h1 className='expected leading-7 opacity-80  text-xs font-bold text-black'>Monthly investment</h1>
                     {/* <h1 className='text-black text-lg opacity-80 font-bold'>{expense}</h1> */}
                     <input type="number" min={1000} max={150000} className='bg-black font-bold  rounded-md mt-2 pl-2 w-56 text-white' onChange={(e)=>{setInvestment(e.target.value)}} value={investment} />
                     <input value={investment} placeholder={investment} onChange={(e)=>setInvestment(e.target.value)} className='lg:w-full mt-5 sm:w-52 w-72 md:w-72 range' type="range" min={1000} max={150000} />
                     <div className='number  text-black opacity-40 font-bold'>
                        <span>1000</span>
                        <span className=''>150000</span>
                     </div>
                    
                </div>
                <div className='2xl:ml-0 2xl:w-9/12 xl:ml-16 lg:w-5/12 lg:ml-8 lg:h-44 lg:mt-5 sm:w-64 md:ml-2 md:w-80 bg-white w-80 h-42 ml-5 mr-5  rounded-md mt-7 p-5 '>
                     <h1 className='expected leading-7   text-xs font-bold text-black'>Expected Returns in %</h1>
                     {/* <h1 className='text-black text-lg opacity-80 font-bold'>{expense}</h1> */}
                     <input max={30} min={1} type="number" className='bg-black font-bold  rounded-md mt-2 pl-2 w-56 text-white' onChange={(e)=>{setReturns(e.target.value)}} value={returns} />
                     <input value={returns} placeholder={returns} onChange={(e)=>setReturns(e.target.value)} className='lg:w-full mt-5 sm:w-52 w-72 md:w-72 range' type="range" min={1} max={30} />
                     <div className='number  text-black opacity-40 font-bold'>
                        <span>1</span>
                        <span className=''>30</span>
                     </div>
                    
                </div>
                
                <div>
                    
                    

                </div>
                
            </div>
            
        </div>
     
        <div>
            <div className='flex  flex-col sm:flex-row mt-0 2xl:ml-40 2xl:mr-36'>
            <div className=' 2xl:w-9/12 lg:w-5/12  lg:h-44 lg:mt-5 sm:w-64 md:w-80 bg-white w-80 h-42 ml-5 mr-5  rounded-md mt-7 p-5 '>
                     <h1 className='expected leading-7 opacity-80  text-xs font-bold text-black'>Time Period in Years</h1>
                     {/* <h1 className='text-black text-lg opacity-80 font-bold'>{expense}</h1> */}
                     <input type="number" min={1} max={50} className='bg-black font-bold  rounded-md mt-2 pl-2 w-56 text-white' onChange={(e)=>{setYear(e.target.value)}} value={year} />
                     <input value={year} placeholder={year} onChange={(e)=>setYear(e.target.value)} className='lg:w-full mt-5 sm:w-52 w-72 md:w-72 range' type="range" min={1} max={50} />
                     <div className='number  text-black opacity-40 font-bold'>
                        <span>1</span>
                        <span className=''>50</span>
                     </div>
                    
                </div>
                <div className='2xl:ml-0 2xl:w-9/12 xl:ml-16 lg:w-5/12 lg:ml-8 lg:h-44 lg:mt-5 sm:w-64 md:ml-2 md:w-80 bg-white w-80 h-42 ml-5 mr-5  rounded-md mt-7 p-5 '>
                     <h1 className='expected leading-7   text-xs font-bold text-black'>Enter Your Fire Number</h1>
                     {/* <h1 className='text-black text-lg opacity-80 font-bold'>{expense}</h1> */}
                     <input max={100000} min={500000000} type="number" className='bg-black font-bold  rounded-md mt-2 pl-2 w-56 text-white' onChange={(e)=>{setFire(e.target.value)}} value={fire} />
                     <input value={fire} placeholder={fire} onChange={(e)=>setFire(e.target.value)} className='lg:w-full mt-5 sm:w-52 w-72 md:w-72 range' type="range" min={1000000} max={500000000} />
                     <div className='number  text-black opacity-40 font-bold'>
                        <span>1000000</span>
                        <span className=''>500000000</span>
                     </div>
                    
                </div>
                
                <div>
                    
                    

                </div>
                
            </div>
            
        </div>
        
        <div className='flex sm:justify-center'>
        <button onClick={()=>setState(true)} className='generate_button ml-5 font-bold w-80 mt-7 ' >Calculate Fire</button>
        </div>
     { state &&<SIPTotal fire={fire} total={total}></SIPTotal>} 
       
      </div>
    </div>
  )
}

export default SIP
