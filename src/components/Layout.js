import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout =({children}) =>{
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <NavBar/>
          <div className="root-app">
            <div>{children}</div>
          </div>
          <Footer/>
        </div>
    )
}

export default Layout;