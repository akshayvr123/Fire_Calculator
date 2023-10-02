import React from 'react';

const FireNo = ({ total,year }) => {
  return (
    <div className='container '>
    <div className='bg-gray-950 text-white 2xl:ml-52 2xl:mr-40 lg:mr-16 xl:mr-20 sm:w-11/12 md:w-auto md:ml-12 md:mr-12 rounded-lg sm:m-10 ml-12 w-80 mt-6  flex flex-col h-40 '>
      <h1 className='lg:text-3xl sm:text-xl mt-5 text-center text-sm font-bold leading-5 tracking-tight'>Total Amount: {total}</h1>
      <p className='2xl:ml-16 lg:text-2xl sm:text-lg text-xs m-3 font-semibold sm:ml-8'>So You need to have around {total} to become Financially free after {year} years .So now you need to know how to acheive this fire number for that use the SIP calculator and adjust the values to match your fire number </p>
    </div>
    </div>
  );
};

export default FireNo;
