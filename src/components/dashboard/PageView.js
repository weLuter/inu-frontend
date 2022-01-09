import React from 'react';
import DashboardPage from './DashboardPage';
import PortfolioPage from './PortfolioPage';
import BuybackPage from './BuybackPage';

const PageView = (props) => {
  const {pageIndex, sidebar, setSidebar, setOpen, accountData, disconnect} = props;

  var content = <div></div>;
  if (pageIndex === 0) {
    content = <DashboardPage/>
  } else if (pageIndex === 1) {
    content = <PortfolioPage/>
  } else if (pageIndex === 2) {
    content = <BuybackPage/>
  }

  return (
    <div className="h-full bg-slate-400 flex flex-col flex-grow px-4 sm:px-24 py-10">
      <div class="flex flex-row justify-between">
        <div class="">
          <svg onClick={() => setSidebar(!sidebar)} xmlns="http://www.w3.org/2000/svg" class="sm:hidden block h-10 w-10 border-0 border-gray-600 p-1 bg-gray-500 rounded-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        {accountData
        ?
          <div className="flex flex-col sm:flex-row bg-gray-600 items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 mb-4 px-4 py-2 rounded-lg">
            <div className="flex flex-col mr-4 text-slate-300">
              <div className="text-xl">{accountData.address.substring(0,5)}...{accountData.address.substring(accountData.address.length - 3)}</div>
              <div className="">{accountData.connector.name}</div>
            </div>
            <button onClick={disconnect} className="transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
              Disconnect
            </button>
          </div>
        :
          <div className="flex flex-col sm:flex-row bg-gray-600 items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 mb-4 px-4 py-2 rounded-lg">
            <div className="flex flex-col mr-4 text-slate-300">
              <div className="text-xl">0x000...000</div>
              <div className="">No Wallet</div>
            </div>
            <button onClick={() => setOpen(true)} className="transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
              Connect
            </button>
          </div>
        }
      </div>
      {content}
    </div>
  )
}

export default PageView;