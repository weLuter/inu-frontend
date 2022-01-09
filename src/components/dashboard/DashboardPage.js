import React from 'react';

const DashboardPage = (props) => {
  const { holders, treasury, marketCap, usdPrice } = props;
  const cardStyle = "p-3 h-30 md:h-60 w-full min-h-24 flex flex-col justify-between flex-grow shadow bg-gray-800 rounded-lg text-xl text-slate-300"
  const gridStyle = "grid content-start gap-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 text-slate-300 text-center"

  return (
    <div class={gridStyle}>
      <div class={cardStyle}>
        <p>Assets Under Management</p>
        <p className="text-4xl text-white">${treasury}</p>
        <div className="h-1"></div>
      </div>
      <div class={cardStyle}>
        <p>$INC Metrics</p>
        <table class="table-auto text-left text-md">
          <thead class="border-b-2 border-gray-400">
            <tr className="text-gray-400">
              <th>METRIC</th>
              <th>VALUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Market Cap</td>
              <td>${marketCap}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>${usdPrice}</td>
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
              <td>{holders}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;