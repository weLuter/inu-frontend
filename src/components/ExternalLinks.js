import React from 'react';

const ExternalLinks = () =>{
  return (
    <div className="mx-auto shadow overflow-hidden rounded-lg bg-white max-w-screen-sm mb-4 mx-2">
      <div className="px-4 py-3 sm:px-6">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">Relevant Links</h3>
      </div>
      <div className="bg-slate-100 px-4 py-3 text-md font-medium text-gray-500">
        <div className="flex rounded-md shadow mb-2">
          <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-0 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Uniswap
          </a>
        </div>
        <div className="flex rounded-md shadow">
          <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-0 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Contract
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExternalLinks;