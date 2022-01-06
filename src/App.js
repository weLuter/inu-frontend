import './App.css';
import 'tw-elements';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Tokenomics from './components/Tokenomics'
import PurchaseTax from './components/PurchaseTax'
import SalesTax from './components/SalesTax'
import ExternalLinks from './components/ExternalLinks'
import Charts from './components/Charts'
import Uniswap from './components/Uniswap'
import Footer from './components/Footer'

export default function App() {
  function scrollToBottom() {
    window.scroll({
      top: document.body.offsetHeight * 3,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="h-screen w-full bg-slate-300 dark:bg-slate-700">
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
    </div>
  )
}

/*
- All tokens will be airdropped to holders before trading opens.
- 1% max wallet allocation
- Able to earn reflections up to 1%
- No tax on transfers between wallets
- Able to turn off reflections/ change variables on reflections
- Able to remove reflections from specific wallets
- Able to adjust/ remove max wallet size per wallet
*/
