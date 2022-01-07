import React from 'react';
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";

const Footer = () => {
  const buttonStyle = "w-6 h-6 fill-gray-600 hover:fill-black";

  return (
    <div class="bg-slate-400 px-8">
      <div id="footer" className="mx-auto flex flex-col justify-between border-t-2 border-slate-500 py-4 px-4">
        <div className="mx-auto flex flex-row space-x-5 sm:pt-0 pt-2 mb-1.5 pb-1">
          <a className="" href="https://etherscan.io/"><FileCodeFill className={buttonStyle}/></a>
          <a className="" href="https://t.me/InuCapitalEntryPortal"><Telegram className={buttonStyle}/></a>
          <a className="" href="https://twitter.com/InuCapitaI"><Twitter className={buttonStyle}/></a>
          <a className="" href="https://medium.com"><Medium className={buttonStyle}/></a>
          <a className="" href="https://github.com"><Github className={buttonStyle}/></a>
        </div>
        <div class="mx-auto">
          <p class="text-gray-500">© 2022 Inu Capital, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;