import React from 'react';
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";

const Footer = () =>{
  return (
  <div className="Footer">
      <div className="ButtonGroup">
        <a className="social-icon" href="https://etherscan.io/address/0xA808B22ffd2c472aD1278088F16D4010E6a54D5F#readContract"><FileCodeFill className="ButtonLink"/></a>
        <a className="social-icon" href="https://t.me/reimaginedfi"><Telegram className="ButtonLink"/></a>
        <a className="social-icon" href="https://twitter.com/ReimaginedFi"><Twitter className="ButtonLink"/></a>
        <a className="social-icon" href="https://medium.com"><Medium className="ButtonLink"/></a>
        <a className="social-icon" href="https://github.com"><Github className="ButtonLink"/></a>
      </div>
  </div>
  );
}

export default Footer;