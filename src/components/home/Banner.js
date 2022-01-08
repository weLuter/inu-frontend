import React from 'react';

const Banner = (props) => {
  return (
    <div class="flex flex-col justify-center items-center w-full h-[calc(100%-6rem)] bg-gray-800 dark:bg-slate-700 px-6 md:px-32">
      <p class="text-center md:text-left font-bold text-white sm:text-8xl text-6xl">Inu Capital</p>
      <p class="text-center md:text-left pt-2 text-3xl sm:text-4xl text-blue-600 mb-8">defi is hard. we make it easy and farm for you</p>
      <div class="h-12 sm:h-20 sm:hidden block"/>
        <div className="mt-2 h-12 flex sm:space-x-2 sm:space-y-0 space-y-2 sm:flex-row flex-col justify-center">
          <div className="flex rounded-md shadow" onClick={props.scroll}>
            <a
              href="#buynow"
              className="flex items-center justify-center px-5 py-3 border border-0 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Buy on Uniswap
            </a>
          </div>
        <div class="sm:hidden block h-16"/>
        <div className="sm:ml-3  ml-0 flex rounded-md shadow">
          <a
            href="#learnmore"
            className="flex items-center w-full justify-center mt-0 sm:mt-5 px-5 py-3 border border-0 text-base font-medium rounded-md text-blue-600 bg-white "
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;