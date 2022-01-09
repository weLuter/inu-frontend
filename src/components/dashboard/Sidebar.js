import React from 'react';
import logo16 from '../../images/logo64.svg'
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";

const Sidebar = (props) => {
  const buttonStyle = "w-6 h-6 fill-gray-600 hover:fill-white";

  const { wrapperRef, sidebar, pageIndex, setPageIndex } = props;

  return (
    <div ref={wrapperRef} className={`
        absolute z-10 -left-72
        sm:relative sm:z-0 sm:left-0
        flex flex-col justify-between
        w-72 h-screen bg-gray-800 shadow
        transition ease-in-out duration-300
        ${sidebar ? "translate-x-full" : "transform-x-0"
      }`}>
          <div>
            <div className="px-8 h-24 w-full flex items-center border-b-2 border-gray-600 bg-white">
              <a href="/"><img className="mr-6 width-16" src={logo16} alt=""/></a>
              <a href="/"><p className="text-3xl text-blue-600">Inu Capital</p></a>
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
                  <svg xmlns="http://www.w3.org/2000/svg"  width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-md  ml-2">Portfolio</span>
                </div>
              </li>
              <li onClick={() => setPageIndex(2)} className={`flex w-full justify-between cursor-pointer items-center mb-6 ${pageIndex === 2 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                  <span className="text-md  ml-2">Buybacks</span>
                </div>
              </li>
            </ul>
          </div>
          <div id="footer" className="mx-auto flex flex-col border-t-2 border-gray-600 justify-between py-4 px-4">
            <div className="mx-auto flex flex-row space-x-4 sm:pt-0 pt-2 mb-4 pb-1">
              <a className="" href="https://etherscan.io/"><FileCodeFill className={buttonStyle}/></a>
              <a className="" href="https://t.me/InuCapitalEntryPortal"><Telegram className={buttonStyle}/></a>
              <a className="" href="https://twitter.com/InuCapitaI"><Twitter className={buttonStyle}/></a>
              <a className="" href="https://medium.com"><Medium className={buttonStyle}/></a>
              <a className="" href="https://github.com"><Github className={buttonStyle}/></a>
            </div>
            <div className="mx-auto">
              <p className="text-center text-sm text-gray-400">© 2022 Inu Capital, Inc. All rights reserved</p>
            </div>
          </div>
        </div>
  );
}

export default Sidebar;