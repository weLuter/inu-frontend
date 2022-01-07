import React from 'react';
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";
import logo16 from '../images/logo16.png'

const NavBar = (props) => {
  if (props.dashboard === true) {
    return (
      <div className="sticky top-0 w-full z-20 h-24 sm:px-20 px-10 bg-slate-500 flex justify-between items-center py-6 space-x-10">
        <div className="flex justify-start flex-grow">
          <a href="/"><img className="width-16" src={logo16} alt=""/></a>
        </div>
        <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
          <a
            href=""
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Connect Wallet
          </a>
        </div>
      </div>
    );
  }
  return (
    <div className="sticky top-0 w-full z-20 h-24 sm:px-20 px-10 bg-slate-500 flex justify-between items-center py-6 space-x-10">
      <div className="flex justify-start flex-grow">
        <a href="/"><img className="width-16" src={logo16} alt=""/></a>
      </div>
      <a className="md:block hidden" href="https://etherscan.io/"><FileCodeFill className="ButtonLink"/></a>
      <a className="md:block hidden" href="https://t.me/inucapitalentryportal"><Telegram className="ButtonLink"/></a>
      <a className="md:block hidden" href="https://twitter.com/InuCapital"><Twitter className="ButtonLink"/></a>
      <a className="md:block hidden" href="https://medium.com"><Medium className="ButtonLink"/></a>
      <a className="md:block hidden" href="https://github.com"><Github className="ButtonLink"/></a>
      <div className="md:flex items-center justify-end md:flex-1 lg:w-0">
        <a
          href="/dashboard"
          className="transition ease-in-out hover:scale-110 duration-300 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Dashboard
        </a>
      </div>
    </div>
  );
}

export default NavBar;