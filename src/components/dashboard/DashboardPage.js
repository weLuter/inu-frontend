import React from 'react';

const DashboardPage = () => {
  const cardStyle = "p-3 h-30 md:h-60 w-full min-h-24 flex flex-col flex-grow shadow bg-gray-800 rounded-lg text-slate-300"
  const gridStyle = "grid content-start gap-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 text-slate-300"

  return (
    <div class={gridStyle}>
      <div class={cardStyle + ' justify-between space-y-4'}>
        <p class="text-center text-xl text-slate-300">Assets Under Management</p>
        <div className="align-self-center"><p className="text-4xl text-center text-white">$0</p></div>
        <div className="align-self-end"><p className="align-self-end text-md text-slate-400">Development fund: $0</p></div>
      </div>
      <div class={cardStyle + ' px-4'}>
        <p class="text-center text-xl text-slate-300">$INC Metrics</p>
        <table class="table-auto mt-4">
          <thead class="border-b-2 border-sky-200">
            <tr className="text-gray-400">
              <th>METRIC</th>
              <th>VALUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Market Cap</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>All Time High</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>Uniswap Liquidity</td>
              <td>$0</td>
            </tr>
            <tr>
              <td>Holders</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;