import React from 'react';

const SalesTax = () =>{
  return (
    <div className="hidden mx-auto shadow overflow-hidden rounded-lg bg-white max-w-screen-sm mb-4">
      <div className="px-4 py-3 sm:px-6">
        <h3 className="text-2xl leading-6 font-medium text-gray-900">Sales Tax</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-slate-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Total %</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">20%</dd>
          </div>
          <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Liquidity</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">7%</dd>
          </div>
          <div className="bg-slate-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Farming treasury</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">6%</dd>
          </div>
          <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Reflections</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">6%</dd>
          </div>
          <div className="bg-slate-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-md font-medium text-gray-500">Development Fund</dt>
            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">1%</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default SalesTax;