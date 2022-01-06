import React, { useState } from 'react';
import logo16 from '../images/logo16.png'
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";

const Dashboard = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const cardStyle = "p-3 max-w-md h-60 min-h-24 flex flex-1 flex-col shrink m-2 shadow bg-gray-800 text-blue-200 rounded-lg"
  const tableRowStyle = "my-4"

  const title = (text) => {
    return(
      <p class="text-center text-xl text-slate-300">{text}</p>
    );
  }

  const highlight = (text, value, moneyFormat) => {
    return(
      <div class={cardStyle + ' justify-between space-y-4'}>
        <p class="text-center text-xl text-slate-300">{text}</p>
        <p className="align-self-center text-4xl text-center text-white">{moneyFormat === true ? '$' : ''}{value}</p>
        <div className="h-2"></div>
      </div>
    );
  }

  const table = () => {
    return (
      <table class="table-auto mt-4">
        <thead class="border-b-2 border-sky-200">
          <tr className="text-gray-400">
            <th>METRIC</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          <tr class={tableRowStyle}>
            <td>Market Cap</td>
            <td>$0</td>
          </tr>
          <tr class={tableRowStyle}>
            <td>Price</td>
            <td>$0</td>
          </tr>
          <tr class={tableRowStyle}>
            <td>All Time High</td>
            <td>$0</td>
          </tr>
          <tr class={tableRowStyle}>
            <td>Uniswap Liquidity</td>
            <td>$0</td>
          </tr>
          <tr class={tableRowStyle}>
            <td>Holders</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    );
  }

  const pageView = () => {
    var content = <div></div>
    if (pageIndex === 0) {
      content = (
        <div class="flex flex-grow flex-wrap flex-col lg:flex-row">
          <div class={cardStyle + ' justify-between space-y-4'}>
            {title("Assets Under Management")}
            <div className="align-self-center"><p className="text-4xl text-center text-white">$0</p></div>
            <div className="align-self-end"><p className="align-self-end text-md text-slate-400">Development fund: $0</p></div>
          </div>
          <div class={cardStyle + ' px-4'}>
            {title("$INC Metrics")}
            {table()}
          </div>
        </div>
      );
    } else if (pageIndex === 1) {
      content = (
        <div class="flex flex-grow flex-wrap flex-col lg:flex-row">
          {highlight("Number of Buybacks", 0, false)}
          {highlight("Average Buyback (USD)", 0, true)}
          {highlight("Total Amount (USD)", 0, true)}
        </div>
      );
    } else if (pageIndex === 2) {
      content = (
        <div class="flex flex-grow flex-wrap flex-col lg:flex-row">
          {highlight("Balance ($MCC)", 0, false)}
          {highlight("Balance Value ($USD)", 0, true)}
          {highlight("Reflections Earned ($MCC)", 0, false)}
          {highlight("Reflections Earned ($USD)", 0, true)}
        </div>
      );
    }
    return (
      <div className="flex flex-col flex-grow px-4 sm:px-24 py-10">
        <div className="align-self-end mb-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
          Connect Wallet
        </div>
        {content}
      </div>
    )
  }

  return(
    <div class="bg-slate-300 dark:bg-slate-700">
      <div className="flex flex-no-wrap">
        <div className="w-72 absolute sm:relative bg-gray-800 shadow h-screen flex-col justify-start hidden sm:flex">
          <div className="px-8 h-24 w-full flex items-center border-b-2 border-gray-600">
            <a href="/"><img class="mr-6 width-16" src={logo16} alt=""/></a>
            <a href="/"><p class="text-3xl text-blue-600">Inu Capital</p></a>
          </div>
          <ul className="px-8 mt-8">
            <li onClick={() => setPageIndex(0)} className={`flex w-full justify-between cursor-pointer items-center mb-6 ${pageIndex === 0 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-md  ml-2">Dashboard</span>
              </div>
            </li>
            <li onClick={() => setPageIndex(1)} className={`flex w-full justify-between cursor-pointer items-center mb-6 ${pageIndex === 1 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
                <span className="text-md  ml-2">Buybacks</span>
              </div>
            </li>
            <li onClick={() => setPageIndex(2)} className={`flex w-full justify-between cursor-pointer items-center mb-6 ${pageIndex === 2 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg"  width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-md  ml-2">Portfolio</span>
              </div>
            </li>
          </ul>
          <div class="flex-grow"/>
          <div id="footer" className="mx-auto flex flex-col border-t-2 border-gray-600 justify-between py-4 px-4">
            <div className="mx-auto flex flex-row sm:pt-0 pt-2 mb-1.5 pb-1">
              <a className="" href="https://etherscan.io/"><FileCodeFill className="ButtonLink"/></a>
              <a className="" href="https://t.me/InuCapitalEntryPortal"><Telegram className="ButtonLink"/></a>
              <a className="" href="https://twitter.com/InuCapital"><Twitter className="ButtonLink"/></a>
              <a className="" href="https://medium.com"><Medium className="ButtonLink"/></a>
              <a className="" href="https://github.com"><Github className="ButtonLink"/></a>
            </div>
            <div class="mx-auto">
              <p class="text-center text-sm text-gray-400">© 2022 Inu Capital, Inc. All rights reserved</p>
            </div>
          </div>
        </div>
        {pageView()}
      </div>
    </div>
  )
}

export default Dashboard;
