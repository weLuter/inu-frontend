import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({children}) => {
  return(
    <div className="h-screen w-full bg-slate-300 dark:bg-slate-700">
      {children}
      <Footer />
    </div>
  )
}

export default Layout;