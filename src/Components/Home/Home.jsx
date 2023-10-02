import React from 'react';
import './Home.css';
import financial_freedom from './Financial freedom.jpg';

const Home = () => {
  
  return (
    <div>
      <div className="container">
        <div className=" text-white  flex flex-row items-center 2xl:ml-40 ">
          <div className=" w-2/3 2xl:w-2/4 md:w-2/4 lg:w-8/12  ">
            <h1 className=" sm:mt-5 md:text-4xl xl:text-7xl 2xl:text-7xl lg:text-6xl xl:font-bold xl:mt-10 Home_text ml-12 mt-2 w-72 lg:w-auto xl:w-auto 2xl:w-auto md:w-auto">
              Calculator to Your <br /> Financial Freedom
            </h1>
            <p className="xl:text-3xl 2xl:text-3xl  lg:text-2xl lg:w-auto xl:w-auto mt-4 leading-7 font-semibold text-base w-80 h-24 ml-12">
              Calculate Your fire no and find How many <br />
              years it takes for you to completely become <br />
              financially free and enjoy your life
            </p>
          </div>
          <div className="w-1/3 md:ml-24 lg:w-5/12    2xl:ml-32">
            <img
              className=" md:w-56 md:h-50 sm:h-50  2xl:w-96 2xl:h-72 xl:w-96 xl:h-72 lg:w-72 lg:h-52  md:h-40 flex-shrink-0 rounded-lg hidden sm:block 2xl:mt-12 lg:mt-12"
              src={financial_freedom}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
