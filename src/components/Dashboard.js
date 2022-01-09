import React, { useRef, useState, useEffect } from 'react';
import { useConnect, useAccount } from 'wagmi'
import Sidebar from './dashboard/Sidebar';
import PageView from './dashboard/PageView';
import WalletModal from './dashboard/WalletModal';

const Dashboard = () => {
  const wrapperRef = useRef(null);
  const [pageIndex, setIndex] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const [{ data, error }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })

  const setPageIndex = (index) => {
    setIndex(index);
    setSidebar(false);
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
      <div className="flex flex-no-wrap min-h-screen">
        <Sidebar setPageIndex={setPageIndex} pageIndex={pageIndex} sidebar={sidebar} wrapperRef={wrapperRef} />
        <PageView pageIndex={pageIndex} sidebar={sidebar} setSidebar={setSidebar} setOpen={setOpen} accountData={accountData} disconnect={disconnect}/>
      </div>
    </div>
  )
}

export default Dashboard;
