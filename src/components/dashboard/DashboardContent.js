import React, { useEffect, useState} from 'react';
import DashboardPage from './DashboardPage';
import PortfolioPage from './PortfolioPage';
import BuybackPage from './BuybackPage';

const DashboardContent = (props) => {
  const {address, sidebar, setSidebar, setOpen, accountData, disconnect, dashboardRef, portfolioRef, buybackRef} = props;
  const dashboardHeader = "text-3xl font-bold mt-8 mb-2 border-b-2 border-gray-600";
  const [ balance, setBalance ] = useState(0);
  const [ usdBalance, setUSDBalance ] = useState(0);
  const [ usdPrice, setUSDPrice ] = useState(0);
  const [ holders, setHolders ] = useState(0);
  const [ treasury, setTreasury ] = useState(0);
  const [ marketCap, setMarketCap ] = useState(0);
  const [ liquidity, setLiquidity ] = useState(0);

  // portfolio balance/usd, price
  useEffect(() => {
    if (address) {
      fetch(`https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?key=ckey_67dd815cfb02407db132ea9be72`)
          .then(response => response.json())
          .then(data => {
            for(let i=0; i<data.data.items.length; i++) {
              if (data.data.items.at(i).contract_address === "0xc146b7cdbaff065090077151d391f4c96aa09e0c") {
                setBalance((data.data.items.at(i).balance / (10 ** data.data.items.at(i).contract_decimals)).toFixed(2))
                setUSDBalance(data.data.items.at(i).quote.toFixed(2))
                setUSDPrice(data.data.items.at(i).quote_rate.toFixed(8))
              }
            }
          });
    }
  }, [address]);

  // treasury AUM
  useEffect(() => {
    fetch('https://api.covalenthq.com/v1/1/address/0xFBf335f8224a102e22abE78D78CC52dc95e074Fa/balances_v2/?key=ckey_67dd815cfb02407db132ea9be72')
        .then(response => response.json())
        .then(data => {
          let total = 0;
          for(let i=0; i<data.data.items.length; i++) {
            total += data.data.items.at(i).quote
          }
          setTreasury(total.toFixed(2));
        });
  }, []);

  //holders
  useEffect(() => {
    fetch('https://api.covalenthq.com/v1/1/tokens/0xc146b7cdbaff065090077151d391f4c96aa09e0c/token_holders/?key=ckey_4ac5c350bd3f4c95b46dc7cbd9f&page-size=50000')
        .then(response => response.json())
        .then(data => {
          setHolders(data.data.items.length);
        });
  }, []);

   //uniswap liquidity
   useEffect(() => {
    fetch('https://api.covalenthq.com/v1/1/address/0x9c2B19dbDFad3f283C0B96C5546d91a275778D91/stacks/uniswap_v2/balances/?quote-currency=USD&format=JSON&key=ckey_docs')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const balances = data.data.uniswap_v2.balances.at(0);
          let total = balances.token_0.quote + balances.token_1.quote;
          setLiquidity(total);
        });
  }, []);

  // market cap
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/ethereum/contract/0xc146b7cdbaff065090077151d391f4c96aa09e0c/market_chart/?vs_currency=usd&days=1')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setMarketCap((data.market_caps.at(0).at(0)/10000).toFixed(2));
        });
  }, []);

  return (
    <div className="bg-slate-400 flex flex-col max-h-screen flex-grow px-0  sm:px-24">
      <div class="flex flex-row items-center bg-white h-24 p-4 justify-between border-b-0">
        <div class="">
          <svg onClick={() => setSidebar(!sidebar)} xmlns="http://www.w3.org/2000/svg" class="sm:hidden block h-10 w-10 border-0 border-gray-600 p-1 bg-gray-500 rounded-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        {accountData
        ?
          <div className="flex ml-2 sm:ml-0 justify-center flex-row bg-gray-600 items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 px-4 py-2 rounded-lg">
            <div className="flex flex-col mr-4 text-slate-300">
              <div className="text-lg sm:text-xl">{accountData.address.substring(0,5)}...{accountData.address.substring(accountData.address.length - 3)}</div>
              <div className="">{accountData.connector.name}</div>
            </div>
            <button onClick={disconnect} className="transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
              Disconnect
            </button>
          </div>
        :
          <div className="flex ml-2 sm:ml-0 justify-center flex-row bg-gray-600 items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 px-4 py-2 rounded-lg">
            <div className="flex flex-col mr-4 text-slate-300">
              <div className="text-lg sm:text-xl">0x000...000</div>
              <div className="">No Wallet</div>
            </div>
            <button onClick={() => setOpen(true)} className="transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
              Connect
            </button>
          </div>
        }
      </div>
      <div className="flex flex-col px-4 pb-10 max-h-screen no-scrollbar overflow-y-auto">
        <p ref={dashboardRef} className={dashboardHeader}>General</p>
        <DashboardPage liquidity={liquidity} holders={holders} treasury={treasury} marketCap={marketCap} usdPrice={usdPrice}/>
        <p ref={portfolioRef} className={dashboardHeader}>Portfolio</p>
        <PortfolioPage setOpen={setOpen} address={address} usdBalance={usdBalance} balance={balance} />
        <p ref={buybackRef} className={dashboardHeader}>Buybacks</p>
        <BuybackPage/>
      </div>
    </div>
  )
}

export default DashboardContent;