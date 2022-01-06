import React from 'react';
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";

const Footer = () =>{
  return (
    <div class="bg-slate-300 px-8">
      <div id="footer" className="mx-auto flex flex-col justify-between border-t-2 border-slate-400 py-4 px-4 bg-slate-300 dark:bg-slate-300">
        <div className="mx-auto flex flex-row sm:pt-0 pt-2 mb-1.5 pb-1">
          <a className="" href="https://etherscan.io/"><FileCodeFill className="ButtonLink"/></a>
          <a className="" href="https://t.me/InuCapitalEntryPortal"><Telegram className="ButtonLink"/></a>
          <a className="" href="https://twitter.com/InuCapital"><Twitter className="ButtonLink"/></a>
          <a className="" href="https://medium.com"><Medium className="ButtonLink"/></a>
          <a className="" href="https://github.com"><Github className="ButtonLink"/></a>
        </div>
        <div class="mx-auto">
          <p class="text-gray-400">© 2022 Inu Capital, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;