import React from 'react';
import NavBar from './home/NavBar'
import Banner from './home/Banner'
import Tokenomics from './home/Tokenomics'
import PurchaseTax from './home/PurchaseTax'
import SalesTax from './home/SalesTax'
import ExternalLinks from './home/ExternalLinks'
import Charts from './home/Charts'
import Uniswap from './home/Uniswap'
import Footer from './Footer'

const Home = () => {
  function scrollToBottom() {
    window.scroll({
      top: document.body.offsetHeight * 3,
      left: 0,
      behavior: 'smooth',
    });
  }

  return(
    <>
      <NavBar />
      <Banner scroll={scrollToBottom} />
      <div id="learnmore" class="bg-gray-800 dark:bg-slate-700 py-5">
        <Tokenomics/>
        <PurchaseTax />
        <SalesTax />
        <ExternalLinks />
        <Charts />
        <Uniswap/>
      </div>
      <Footer />
    </>
  )
}

export default Home;