import React from 'react';
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";

const Footer = () =>{
  return (
  <div className="Footer">
      <div className="ButtonGroup">
        <a className="social-icon" href="https://etherscan.io/"><FileCodeFill className="ButtonLink"/></a>
        <a className="social-icon" href="https://t.me/"><Telegram className="ButtonLink"/></a>
        <a className="social-icon" href="https://twitter.com/"><Twitter className="ButtonLink"/></a>
        <a className="social-icon" href="https://medium.com"><Medium className="ButtonLink"/></a>
        <a className="social-icon" href="https://github.com"><Github className="ButtonLink"/></a>
      </div>
  </div>
  );
}

export default Footer;