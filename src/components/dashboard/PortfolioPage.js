import React from 'react';

const PortfolioPage = (props) => {
  const { balance, usdBalance } = props;
  const cardStyle = "p-3 h-30 md:h-60 w-full min-h-24 flex flex-col justify-between flex-grow shadow bg-gray-800 rounded-lg text-xl text-slate-300"

  return (
    <div class="grid content-start gap-2 text-center text-white xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1">
      <div class={cardStyle}>
        <p class="text-xl">Portfolio Overview</p>
        <table class="table-auto text-left text-md">
          <thead class="border-b-2 border-gray-400">
            <tr className="text-gray-400">
              <th>METRIC</th>
              <th>VALUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Balance ($INC)</td>
              <td>{balance}</td>
            </tr>
            <tr>
              <td>Balance ($USD)</td>
              <td>${usdBalance}</td>
            </tr>
            <tr>
              <td>Dividends (ETH)</td>
              <td>NA</td>
            </tr>
            <tr>
              <td>Dividends ($USD)</td>
              <td>NA</td>
            </tr>
            <tr>
              <td>Pending Dividends (ETH)</td>
              <td>NA</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class={cardStyle + ' space-y-4'}>
        <p class="text-xl">Pending Dividends</p>
        <p className="text-4xl">0 ETH</p>
        <button className="align-self-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap inline-flex justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
          Claim as ETH
        </button>
      </div>
    </div>
  );
}

export default PortfolioPage;