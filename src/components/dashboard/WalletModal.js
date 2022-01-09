import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

const WalletModal = (props) => {
  const {open, cancelButtonRef, setOpen, data, error, connect} = props;

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

  return (
    <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
      <div className="flex items-center justify-center min-h-screen px-0 text-center">
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

export default WalletModal;