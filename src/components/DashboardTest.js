import React, { useRef, useState, useEffect } from 'react';
import { useConnect, useAccount, useBalance } from 'wagmi'
import Sidebar from './dashboard/Sidebar';
import PageView from './dashboard/PageView';
import DashboardContent from './dashboard/DashboardContent';
import WalletModal from './dashboard/WalletModal';

const DashboardTest = () => {
  const wrapperRef = useRef(null);
  const [pageIndex, setIndex] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const [{ data, error }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })
  const [{ data: balanceData, error: balanceError, loading }, getBalance] = useBalance({
    addressOrName: '0x79C690290F799ee644907a526aFae9Cf7d5cB05c',
    // token: '0xC146B7CdBaff065090077151d391f4c96Aa09e0C',
  })
  const dashboardRef = React.createRef();
  const portfolioRef = React.createRef();
  const buybackRef = React.createRef();
  const refs = [dashboardRef, portfolioRef, buybackRef];

  const handleNavigate = ref => {

    /*
    Access the "current element" of this sections ref.
    Treat this as the element of the div for this section.
    */
    let el = ref.current;
    console.log(el);
    console.log(el.offsetTop);
    console.log('handleNavigate Function')

    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: el.offsetTop
    });
  };

  const setPageIndex = (index) => {
    setIndex(index);
    setSidebar(false);
    handleNavigate(refs.at(index));
    console.log(refs);
    console.log(refs[index]);
    console.log('handleNavigate', index, refs.at(index))
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setSidebar(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  return(
    <div class="bg-slate-400 dark:bg-slate-700">
      <WalletModal open={open} cancelButtonRef={cancelButtonRef} setOpen={setOpen} data={data} error={error} connect={connect}/>
      <div className="flex flex-no-wrap">
        <Sidebar test={true} handleNavigate={handleNavigate} dashboardRef={dashboardRef} portfolioRef={portfolioRef} buybackRef={buybackRef} setPageIndex={setPageIndex} pageIndex={pageIndex} sidebar={sidebar} wrapperRef={wrapperRef} />
        <DashboardContent dashboardRef={dashboardRef} portfolioRef={portfolioRef} buybackRef={buybackRef} pageIndex={pageIndex} sidebar={sidebar} setSidebar={setSidebar} setOpen={setOpen} accountData={accountData} disconnect={disconnect}/>
      </div>
    </div>
  )
}

export default DashboardTest;
