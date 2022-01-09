import React from 'react';

const BuybackPage = () => {
  const cardStyle = "p-3 h-30 md:h-60 w-full min-h-24 flex flex-col flex-grow shadow bg-gray-800 rounded-lg text-slate-300"
  const gridStyle = "grid content-start gap-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 text-slate-300"

  const highlight = (text, value, moneyFormat) => {
    return(
      <div class={cardStyle + ' justify-between space-y-4'}>
        <p class="text-center text-xl text-slate-300">{text}</p>
        <p className="align-self-center text-4xl text-center text-white">{moneyFormat === true ? '$' : ''}{value}</p>
        <div className="h-2"></div>
      </div>
    );
  }

  return (
    <div class={gridStyle}>
      {highlight("Number of Buybacks", 0, false)}
      {highlight("Average Buyback (USD)", 0, true)}
      {highlight("Total Amount (USD)", 0, true)}
    </div>
  );
}

export default BuybackPage;