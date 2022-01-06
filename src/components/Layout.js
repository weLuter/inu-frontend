import React from 'react';

const Layout = ({children}) => {
  return(
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="root-app">
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Layout;