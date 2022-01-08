import React, { useRef, useState, useEffect, Fragment } from 'react';
import logo16 from '../images/logo64.svg'
import { FileCodeFill, Telegram, Twitter, Medium, Github } from "react-bootstrap-icons";
import {
  useConnect, useAccount, useBalance,
} from 'wagmi'
import { Dialog, Transition } from '@headlessui/react'

const Dashboard = () => {
  const wrapperRef = useRef(null);
  const [pageIndex, setIndex] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const buttonStyle = "w-6 h-6 fill-gray-600 hover:fill-black";
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const cardStyle = "p-3 h-30 md:h-60 w-full min-h-24 flex flex-col flex-grow shadow bg-gray-800 text-blue-200 rounded-lg"
  const gridStyle = "grid content-start gap-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1"
  const tableRowStyle = "my-4"
  const [{ data, error }, connect] = useConnect()
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })
  const [{ data: balanceData, error: balanceError, loading }, getBalance] = useBalance({
    addressOrName: '0x79C690290F799ee644907a526aFae9Cf7d5cB05c',
    // token: '0xC146B7CdBaff065090077151d391f4c96Aa09e0C',
  })

  // if (loading) return <div>Fetching balance…</div>
  // if (error) return <div>Error fetching balance</div>
  // return (
  //   <div>
  //     {data?.formatted} {data?.symbol}
  //   </div>
  // )

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

  const setPageIndex = (index) => {
    setIndex(index);
    setSidebar(false);
  }

  const title = (text) => {
    return(
      <p class="text-center text-xl text-slate-300">{text}</p>
    );
  }

  const highlight = (text, value, moneyFormat) => {
    return(
      <div class={cardStyle + ' justify-between space-y-4'}>
        <p class="text-center text-xl text-slate-300">{text}</p>
        <p className="align-self-center text-4xl text-center text-white">{moneyFormat === true ? '$' : ''}{value}</p>
        <div className="h-2"></div>
      </div>
    );
  }

  const table = () => {
    return (
      <table class="table-auto mt-4">
        <thead class="border-b-2 border-sky-200">
          <tr className="text-gray-400">
            <th>METRIC</th>
            <th>VALUE</th>
          </tr>
        </thead>
        <tbody>
          <tr class={tableRowStyle}>
            <td>Market Cap</td>
            <td>$0</td>
          </tr>
          <tr class={tableRowStyle}>
            <td>Price</td>
            <td>$0</td>
          </tr>
          <tr class={tableRowStyle}>
            <td>All Time High</td>
            <td>$0</td>
          </tr>
          <tr class={tableRowStyle}>
            <td>Uniswap Liquidity</td>
            <td>$0</td>
          </tr>
          <tr class={tableRowStyle}>
            <td>Holders</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    );
  }

  const pageView = () => {
    var content = <div></div>
    if (pageIndex === 0) {
      content = (
        <div class={gridStyle}>
          <div class={cardStyle + ' justify-between space-y-4'}>
            {title("Assets Under Management")}
            <div className="align-self-center"><p className="text-4xl text-center text-white">$0</p></div>
            <div className="align-self-end"><p className="align-self-end text-md text-slate-400">Development fund: $0</p></div>
          </div>
          <div class={cardStyle + ' px-4'}>
            {title("$INC Metrics")}
            {table()}
          </div>
        </div>
      );
    } else if (pageIndex === 1) {
      content = (
        <div class={gridStyle}>
          {highlight("Number of Buybacks", 0, false)}
          {highlight("Average Buyback (USD)", 0, true)}
          {highlight("Total Amount (USD)", 0, true)}
        </div>
      );
    } else if (pageIndex === 2) {
      var balance = 0;
      if (balanceData) {
        balance = parseInt(balanceData.value) / 1000000000000000000;
      } else {
        balance = 0;
      }
      console.log(balance);
      content = (
        <>
        <div class={gridStyle}>
          {highlight("Balance ($INC)", balance, false)}
          {highlight("Balance Value ($USD)", 0, true)}
          {highlight("Reflections Earned ($INC)", 0, false)}
          {highlight("Reflections Earned ($USD)", 0, true)}
        </div>
        </>
      );
    }
    return (
      <div className="h-full bg-slate-400 flex flex-col flex-grow px-4 sm:px-24 py-10">
        <div class="flex flex-row justify-between">
          <div class="">
            <svg onClick={() => setSidebar(!sidebar)} xmlns="http://www.w3.org/2000/svg" class="sm:hidden block h-10 w-10 border-0 border-gray-600 p-1 bg-gray-500 rounded-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          {accountData
          ?
            <div className="flex flex-col sm:flex-row bg-gray-600 items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 mb-4 px-4 py-2 rounded-lg">
              <div className="flex flex-col mr-4 text-slate-300">
                <div className="text-xl">{accountData.address.substring(0,5)}...{accountData.address.substring(accountData.address.length - 3)}</div>
                <div className="">{accountData.connector.name}</div>
              </div>
              <button onClick={disconnect} className="transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                Disconnect
              </button>
            </div>
          :
            <div className="flex flex-col sm:flex-row bg-gray-600 items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 mb-4 px-4 py-2 rounded-lg">
              <div className="flex flex-col mr-4 text-slate-300">
                <div className="text-xl">0x000...000</div>
                <div className="">No Wallet</div>
              </div>
              <button onClick={() => setOpen(true)} className="transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                Connect
              </button>
            </div>
            // <button onClick={() => setOpen(true)} className="transition ease-in-out hover:scale-110 duration-300 justify-end align-self-end mb-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border-0 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
            //   Connect Wallet
            // </button>
          }
        </div>
        {content}
      </div>
    )
  }

  const walletLogo = (name) => {
    if (name === 'MetaMask') {
      return (<img width="32" class="mr-2" alt="MetaMask Fox" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png"/>);
    } else if (name === 'WalletConnect') {
      return (<img width="32" class="mr-2" alt="WalletConnect Logo" src="https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/492d95c038bbcde1517cab5fb90ed4514690e919/svg/original/walletconnect-logo.svg"/>);
    } else if (name === 'Coinbase Wallet') {
      return (<svg height="18" viewBox="0 0 1101.64 196.79" width="90" xmlns="http://www.w3.org/2000/svg"><path d="m222.34 54.94c-40.02 0-71.29 30.38-71.29 71.05s30.48 70.79 71.29 70.79 71.82-30.64 71.82-71.05c0-40.15-30.48-70.79-71.82-70.79zm.27 112.53c-22.79 0-39.49-17.7-39.49-41.47 0-24.04 16.43-41.73 39.22-41.73 23.06 0 39.75 17.96 39.75 41.73s-16.69 41.47-39.48 41.47zm80.29-81.62h19.88v108.3h31.8v-136.57h-51.68zm-231.88-1.59c16.7 0 29.95 10.3 34.98 25.62h33.66c-6.1-32.75-33.13-54.94-68.37-54.94-40.02 0-71.29 30.38-71.29 71.06s30.48 70.79 71.29 70.79c34.45 0 62.01-22.19 68.11-55.21h-33.4c-4.77 15.32-18.02 25.89-34.72 25.89-23.06 0-39.22-17.7-39.22-41.47.01-24.04 15.91-41.74 38.96-41.74zm836.1 28.53-23.32-3.43c-11.13-1.58-19.08-5.28-19.08-14 0-9.51 10.34-14.26 24.38-14.26 15.37 0 25.18 6.6 27.3 17.43h30.74c-3.45-27.47-24.65-43.58-57.24-43.58-33.66 0-55.92 17.17-55.92 41.47 0 23.24 14.58 36.72 43.99 40.94l23.32 3.43c11.4 1.58 17.76 6.08 17.76 14.53 0 10.83-11.13 15.32-26.5 15.32-18.82 0-29.42-7.66-31.01-19.28h-31.27c2.92 26.68 23.85 45.43 62.01 45.43 34.72 0 57.77-15.85 57.77-43.06 0-24.3-16.69-36.98-42.93-40.94zm-568.44-111.47c-11.66 0-20.41 8.45-20.41 20.07s8.74 20.07 20.41 20.07c11.66 0 20.41-8.45 20.41-20.07s-8.75-20.07-20.41-20.07zm466.68 103.02c0-29.58-18.02-49.39-56.18-49.39-36.04 0-56.18 18.23-60.16 46.23h31.54c1.59-10.83 10.07-19.81 28.09-19.81 16.17 0 24.12 7.13 24.12 15.85 0 11.36-14.58 14.26-32.6 16.11-24.38 2.64-54.59 11.09-54.59 42.79 0 24.57 18.29 40.41 47.44 40.41 22.79 0 37.1-9.51 44.26-24.57 1.06 13.47 11.13 22.19 25.18 22.19h18.55v-28.26h-15.64v-61.55zm-31.27 34.34c0 18.23-15.9 31.7-35.25 31.7-11.93 0-22-5.02-22-15.58 0-13.47 16.17-17.17 31.01-18.75 14.31-1.32 22.26-4.49 26.24-10.57zm-168.81-83.74c-17.76 0-32.6 7.4-43.2 19.81v-74.75h-31.8v194.15h31.27v-17.96c10.6 12.94 25.71 20.6 43.73 20.6 38.16 0 67.05-30.11 67.05-70.79s-29.42-71.06-67.05-71.06zm-4.77 112.53c-22.79 0-39.49-17.7-39.49-41.47s16.96-41.73 39.75-41.73c23.06 0 39.22 17.7 39.22 41.73 0 23.77-16.69 41.47-39.48 41.47zm-146.29-112.53c-20.67 0-34.19 8.45-42.14 20.34v-17.7h-31.54v136.56h31.8v-74.22c0-20.87 13.25-35.66 32.86-35.66 18.29 0 29.68 12.94 29.68 31.7v78.19h31.8v-80.56c.01-34.35-17.74-58.65-52.46-58.65zm647.42 66.57c0-39.09-28.62-66.56-67.05-66.56-40.81 0-70.76 30.64-70.76 71.05 0 42.53 32.07 70.79 71.29 70.79 33.13 0 59.1-19.55 65.72-47.28h-33.13c-4.77 12.15-16.43 19.02-32.07 19.02-20.41 0-35.78-12.68-39.22-34.87h105.21v-12.15zm-103.36-10.57c5.04-19.02 19.35-28.26 35.78-28.26 18.02 0 31.8 10.3 34.98 28.26z" fill="#0052ff"/></svg>);
    } else if (name === 'Trust Wallet') {
      return (<img width="32" class="mr-2" alt="WalletConnect Logo" src="https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/492d95c038bbcde1517cab5fb90ed4514690e919/svg/original/walletconnect-logo.svg"/>);
    }
  }

  const walletConnectModal = () => {
    return (
      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-1/2" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="flex flex-col align-center mx-auto p-4 inline-block bg-white rounded-lg text-center shadow-xl transform transition-all max-w-lg w-full">
              <div className="flex flex-row justify-between align-center pb-2 border-b-2 border-gray-400 mb-4">
                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                  Connect Wallet
                </Dialog.Title>
                <div
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col ">
                {data.connectors.map((x) => (
                  <button className="flex flex-row justify-between items-center text-left self-start w-full rounded-lg border-2 border-gray-400 text-lg px-4 py-2 mb-2" disabled={!x.ready} key={x.id} onClick={() => {connect(x); setOpen(false);}}>
                    {x.name}
                    {!x.ready && ' (unsupported)'}
                    {walletLogo(x.name)}
                  </button>
                ))}
              </div>
              <div className="flex flex-row justify-end text-red-400 items-end">
                {error && <div>{error?.message ?? 'Failed to connect'}</div>}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    );
  }

  return(
    <div class="bg-slate-400 dark:bg-slate-700">
      {walletConnectModal()}
      <div ref={wrapperRef} class={`absolute z-10 -left-72 w-72 bg-gray-800 shadow h-screen flex flex-col justify-between transition ease-in-out duration-300 ${sidebar ? "translate-x-full" : "transform-x-0"}`}>
          <div>
            <div className="px-8 h-24 w-full flex items-center border-b-2 border-gray-600 bg-white">
              <a href="/"><img class="mr-6 width-16" src={logo16} alt=""/></a>
              <a href="/"><p class="text-3xl text-blue-600">Inu Capital</p></a>
            </div>
            <ul className="px-8 mt-8">
              <li onClick={() => setPageIndex(0)} className={`flex w-full justify-between cursor-pointer items-center mb-6 ${pageIndex === 0 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={4} width={6} height={6} rx={1} />
                    <rect x={14} y={4} width={6} height={6} rx={1} />
                    <rect x={4} y={14} width={6} height={6} rx={1} />
                    <rect x={14} y={14} width={6} height={6} rx={1} />
                  </svg>
                  <span className="text-md  ml-2">Dashboard</span>
                </div>
              </li>
              <li onClick={() => setPageIndex(1)} className={`flex w-full justify-between cursor-pointer items-center mb-6 ${pageIndex === 1 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                  <span className="text-md  ml-2">Buybacks</span>
                </div>
              </li>
              <li onClick={() => setPageIndex(2)} className={`flex w-full justify-between cursor-pointer items-center mb-6 ${pageIndex === 2 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg"  width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-md  ml-2">Portfolio</span>
                </div>
              </li>
            </ul>
          </div>
          <div id="footer" className="mx-auto flex flex-col border-t-2 border-gray-600 justify-between py-4 px-4">
            <div className="mx-auto flex flex-row space-x-4 sm:pt-0 pt-2 mb-4 pb-1">
              <a className="" href="https://etherscan.io/"><FileCodeFill className={buttonStyle}/></a>
              <a className="" href="https://t.me/InuCapitalEntryPortal"><Telegram className={buttonStyle}/></a>
              <a className="" href="https://twitter.com/InuCapitaI"><Twitter className={buttonStyle}/></a>
              <a className="" href="https://medium.com"><Medium className={buttonStyle}/></a>
              <a className="" href="https://github.com"><Github className={buttonStyle}/></a>
            </div>
            <div class="mx-auto">
              <p class="text-center text-sm text-gray-400">© 2022 Inu Capital, Inc. All rights reserved</p>
            </div>
          </div>
      </div>
      <div className="flex flex-no-wrap min-h-screen">
        <div className="w-72 absolute sm:relative bg-gray-800 shadow min-h-screen flex-col justify-start hidden sm:flex">
          <div className="px-8 h-24 w-full flex items-center border-b-2 border-gray-600 bg-white">
            <a href="/"><img class="mr-6 width-12" src={logo16} alt=""/></a>
            <a href="/"><p class="text-2xl text-blue-600">Inu Capital</p></a>
          </div>
          <ul className="px-8 mt-8">
            <li onClick={() => setPageIndex(0)} className={`flex w-full justify-between cursor-pointer items-center mb-6 ${pageIndex === 0 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-md  ml-2">Dashboard</span>
              </div>
            </li>
            <li onClick={() => setPageIndex(1)} className={`flex w-full justify-between cursor-pointer items-center mb-6 ${pageIndex === 1 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
                <span className="text-md  ml-2">Buybacks</span>
              </div>
            </li>
            <li onClick={() => setPageIndex(2)} className={`flex w-full justify-between cursor-pointer items-center mb-6 ${pageIndex === 2 ? 'text-gray-300' : 'text-gray-600 hover:text-gray-500'}`}>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg"  width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-md  ml-2">Portfolio</span>
              </div>
            </li>
          </ul>
          <div class="flex-grow"/>
          <div id="footer" className="mx-auto flex flex-col border-t-2 border-gray-600 justify-between py-4 px-4">
            <div className="mx-auto flex flex-row space-x-4 sm:pt-0 pt-2 mb-4 pb-1">
              <a className="" href="https://etherscan.io/"><FileCodeFill className={buttonStyle}/></a>
              <a className="" href="https://t.me/InuCapitalEntryPortal"><Telegram className={buttonStyle}/></a>
              <a className="" href="https://twitter.com/InuCapitaI"><Twitter className={buttonStyle}/></a>
              <a className="" href="https://medium.com"><Medium className={buttonStyle}/></a>
              <a className="" href="https://github.com"><Github className={buttonStyle}/></a>
            </div>
            <div class="mx-auto">
              <p class="text-center text-sm text-gray-400">© 2022 Inu Capital, Inc. All rights reserved</p>
            </div>
          </div>
        </div>
        {pageView()}
      </div>
    </div>
  )
}

export default Dashboard;
