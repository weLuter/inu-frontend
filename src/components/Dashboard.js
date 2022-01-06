import React from 'react';
import NavBar from './NavBar'

const Dashboard = () => {
  return(
    <>
      <NavBar dashboard={true}/>
      <div id="" class="flex flex-grow mx-auto my-auto bg-slate-300 text-center h-[calc(100%-14rem)]">
        <p class="mx-auto my-auto text-4xl text-blue-600">Dashboard Under Construction</p>
      </div>
    </>
  )
}

export default Dashboard;