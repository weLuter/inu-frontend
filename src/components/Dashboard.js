import React, { useRef, useState, useEffect } from 'react';
import logo16 from '../images/logo16.png'
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";

const Dashboard = () => {
  const wrapperRef = useRef(null);
  const [pageIndex, setIndex] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setSidebar(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
  useOutsideAlerter(wrapperRef);

  const setPageIndex = (index) => {
    setIndex(index);
    setSidebar(false);
  }

  const cardStyle = "p-3 h-60 w-full min-h-24 flex flex-col flex-grow shadow bg-gray-800 text-blue-200 rounded-lg"
  const gridStyle = "grid content-start gap-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1"
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
        <div class={gridStyle}>
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
        <div class={gridStyle}>
          {highlight("Number of Buybacks", 0, false)}
          {highlight("Average Buyback (USD)", 0, true)}
          {highlight("Total Amount (USD)", 0, true)}
        </div>
      );
    } else if (pageIndex === 2) {
      content = (
        <>
        <div class={gridStyle}>
          {highlight("Balance ($INC)", 0, false)}
          {highlight("Balance Value ($USD)", 0, true)}
          {highlight("Reflections Earned ($INC)", 0, false)}
          {highlight("Reflections Earned ($USD)", 0, true)}
        </div>
        </>
      );
    }
    return (
      <div className="h-full bg-slate-400 flex flex-col flex-grow px-4 sm:px-24 py-10">
        <div class="flex flex-row justify-between">
          <div class="">
            <svg onClick={() => setSidebar(!sidebar)} xmlns="http://www.w3.org/2000/svg" class="sm:hidden block h-10 w-10 border-0 border-gray-600 p-1 bg-gray-500 rounded-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <div className="transition ease-in-out hover:scale-110 duration-300 justify-end align-self-end mb-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
            Connect Wallet
          </div>
        </div>
        {content}
      </div>
    )
  }

  return(
    <div class="bg-slate-400 dark:bg-slate-700">
      <div ref={wrapperRef} class={`absolute z-10 -left-72 w-72 bg-gray-800 shadow h-screen flex flex-col justify-between transition ease-in-out duration-300 ${sidebar ? "translate-x-full" : "transform-x-0"}`}>
          <div>
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
          </div>
          <div id="footer" className="mx-auto flex flex-col border-t-2 border-gray-600 justify-between py-4 px-4">
            <div className="mx-auto flex flex-row sm:pt-0 pt-2 mb-4 pb-1">
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
      <div className="flex flex-no-wrap min-h-screen">
        <div className="w-72 absolute sm:relative bg-gray-800 shadow min-h-screen flex-col justify-start hidden sm:flex">
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
            <div className="mx-auto flex flex-row sm:pt-0 pt-2 mb-4 pb-1">
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
