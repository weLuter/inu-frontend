import './App.css';
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";
import logo16 from './images/logo16.png'

export default function App() {
  return (
      <div className="h-screen w-full bg-slate-200">
        <div className="sticky top-0 w-full z-20 h-24 md:px-28 px-20 bg-white flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img
                className="width-16"
                src={logo16}
                alt=""
              />
            </a>
          </div>
          <a className="sm:block hidden" href="https://etherscan.io/"><FileCodeFill className="ButtonLink"/></a>
          <a className="sm:block hidden" href="https://t.me/inucapitalentryportal"><Telegram className="ButtonLink"/></a>
          <a className="sm:block hidden" href="https://twitter.com/InuCapital"><Twitter className="ButtonLink"/></a>
          <a className="sm:block hidden" href="https://medium.com"><Medium className="ButtonLink"/></a>
          <a className="sm:block hidden" href="https://github.com"><Github className="ButtonLink"/></a>
          <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Dashboard
            </a>
          </div>
        </div>
        <div class="flex lg:flex-row flex-col lg:justify-between justify-center items-center w-full h-[calc(100%-6rem)] bg-slate-200 bg-slate-200 px-6 md:px-32">
          <div>
            <p class="text-center md:text-left font-extrabold text-gray-900 sm:text-8xl text-7xl">Inu Capital</p>
            <p class="text-center md:text-left pt-2 text-3xl sm:text-4xl text-blue-600 mb-8 lg:mb-0">defi is hard. we make it easy and farm for you</p>
          </div>
          <div className="h-12 flex flex-row">
            <div className="flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Buy on Uniswap
              </a>
            </div>
            <div className="ml-3 flex rounded-md shadow">
              <a
                href="#learnmore"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white "
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div id="learnmore" class="scroll-margin-top-5 bg-slate-200 py-5">
        <div className=" mx-auto shadow overflow-hidden sm:rounded-lg max-w-screen-sm mb-4">
          <div className="px-4 py-3 sm:px-6 bg-white">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Details</h3>
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
        <div className="mx-auto shadow overflow-hidden sm:rounded-lg bg-white max-w-screen-sm mb-4">
          <div className="px-4 py-3 sm:px-6">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Purchase Tax</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-slate-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Total %</dt>
                <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">10%</dd>
              </div>
              <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Reflections</dt>
                <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">5%</dd>
              </div>
              <div className="bg-slate-100 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-md font-medium text-gray-500">Liquidity</dt>
                <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">5%</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="mx-auto shadow overflow-hidden sm:rounded-lg bg-white max-w-screen-sm mb-4">
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
        <div className="mx-auto shadow overflow-hidden sm:rounded-lg bg-white max-w-screen-sm mb-4">
          <div className="px-4 py-3 sm:px-6">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Relevant Links</h3>
          </div>
          <div className="bg-slate-100 px-4 py-3 text-md font-medium text-gray-500">
            <div className="flex rounded-md shadow mb-2">
              <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Buy on Uniswap
              </a>
            </div>
            <div className="flex rounded-md shadow">
              <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Contract
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto shadow overflow-hidden sm:rounded-lg bg-white max-w-screen-sm mb-4">
          <div className="px-4 py-3 sm:px-6">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Charts</h3>
          </div>
          <div className="bg-slate-100 px-4 py-3 text-md font-medium text-gray-500">
            <div className="flex rounded-md shadow mb-2">
              <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                CoinMarketCap
              </a>
            </div>
            <div className="flex rounded-md shadow mb-2">
              <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                CoinGecko
              </a>
            </div>
            <div className="flex rounded-md shadow mb-2">
              <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                DexScreener
              </a>
            </div>
            <div className="flex rounded-md shadow mb-2">
              <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                DexTools
              </a>
            </div>
          </div>
        </div>
        </div>

        <div className="mx-auto flex sm:flex-row flex-col justify-between border-t-2 border-gray-300 py-4 px-4 bg-slate-200">
          <div>
            <p class="text-gray-400">© 2022 Inu Capital, Inc. All rights reserved</p>
          </div>
          <div className="flex flex-row sm:pt-0 pt-2">
            <a className="" href="https://etherscan.io/"><FileCodeFill className="ButtonLink"/></a>
            <a className="" href="https://t.me/InuCapitalEntryPortal"><Telegram className="ButtonLink"/></a>
            <a className="" href="https://twitter.com/InuCapital"><Twitter className="ButtonLink"/></a>
            <a className="" href="https://medium.com"><Medium className="ButtonLink"/></a>
            <a className="" href="https://github.com"><Github className="ButtonLink"/></a>
          </div>
        </div>
      </div>
  )
}

/*
Tokenomics:
- 10,000,000,000 total tokens. 10B
10% buy tax:
- 5% token reflections
- 5% liquidity

20% sales tax:
- 7% for liquidity
- 6% for farming/treasury
- 6% for ETH reflections
- 1% for Dev Fee


- All tokens will be airdropped to holders before trading opens.
- 1% max wallet allocation
- Able to earn reflections up to 1%
- No tax on transfers between wallets
- Able to turn off reflections/ change variables on reflections
- Able to remove reflections from specific wallets
- Able to adjust/ remove max wallet size per wallet
*/