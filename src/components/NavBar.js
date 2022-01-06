import React from 'react';
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";
import logo16 from '../images/logo16.png'

const navbar= () =>{
  return (
    <div className="
      absolute top-0 h-32 z-10
      flex justify-between items-center md:justify-start
      border-b-2 border-gray-100
      py-6 md:space-x-10 px-4 m:px-6
    ">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href="https://inucapital.io">
          <img
            className="width-16"
            src={logo16}
            alt=""
          />
        </a>
      </div>
      <a className="fill-black" href="https://etherscan.io/"><FileCodeFill className="ButtonLink"/></a>
      <a className="social-icon" href="https://t.me/"><Telegram className="ButtonLink"/></a>
      <a className="social-icon" href="https://twitter.com/"><Twitter className="ButtonLink"/></a>
      <a className="social-icon" href="https://medium.com"><Medium className="ButtonLink"/></a>
      <a className="social-icon" href="https://github.com"><Github className="ButtonLink"/></a>
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a
          href="https://inucapital.io"
          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Launch App
        </a>
      </div>
    </div>
  );
}

export default navbar;