import React from 'react';

const Tokenomics = () =>{
  return (
    <div className=" mx-auto shadow overflow-hidden sm:rounded-lg max-w-screen-sm mb-4">
      <div className="px-4 py-3 sm:px-6 bg-white">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">Tokenomics</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-slate-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Total Supply</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">10,000,000,000 (10B)</dd>
          </div>
          <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Purchase Tax</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">10%</dd>
          </div>
          <div className="bg-slate-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Sales Tax</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">20%</dd>
          </div>
          <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Network</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">Ethereum Mainnet (ERC-20)</dd>
          </div>
          <div className="bg-slate-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">Inu Capital</dd>
          </div>
          <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Symbol</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">INC</dd>
          </div>
          <div className="bg-slate-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Contract Address</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">TBD</dd>
          </div>
          <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Max Wallet Allowance</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">1%</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Tokenomics;