import React from 'react';

const PortfolioPage = () => {
  const cardStyle = "p-3 h-30 md:h-60 w-full min-h-24 flex flex-col flex-grow shadow bg-gray-800 rounded-lg text-slate-300"

  return (
    <div class="grid content-start gap-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1">
      <div class="flex flex-col p-3 h-30 mb-2 md:h-60 min-h-24 shadow bg-gray-800 text-slate-300 rounded-lg">
        <p class="text-left text-xl">Portfolio Overview</p>
        <table class="table-auto mt-4">
          <thead class="border-b-2 border-sky-200">
            <tr className="text-gray-400">
              <th>METRIC</th>
              <th>VALUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Balance ($INC)</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Balance ($USD)</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>Dividend Claimed (ETH)</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Dividend Claimed ($USD)</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>Pending Dividends (ETH)</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class={cardStyle + ' justify-between space-y-4'}>
        <p class="text-left text-xl">Pending Dividends</p>
        <p className="align-self-center text-4xl text-center text-white">0 ETH / 0 INC</p>
        <div class="flex flex-row justify-around mb-2">
          <button className="transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
            Claim as ETH
          </button>
          <button className="transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
            Claim as INC
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;