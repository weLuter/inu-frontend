import React from 'react';
import NavBar from './NavBar'
import Banner from './Banner'
import Tokenomics from './Tokenomics'
import PurchaseTax from './PurchaseTax'
import SalesTax from './SalesTax'
import ExternalLinks from './ExternalLinks'
import Charts from './Charts'
import Uniswap from './Uniswap'
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
      <div id="learnmore" class="bg-slate-300 dark:bg-slate-700 py-5">
        <Tokenomics/>
        <PurchaseTax />
        <SalesTax />
        <ExternalLinks />
        <Charts />
      </div>
      <Uniswap/>
      <Footer />
    </>
  )
}

export default Home;