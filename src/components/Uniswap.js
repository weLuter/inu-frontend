
import React from 'react';

const Uniswap = () =>{
  return (
    <div class="bg-slate-300 dark:bg-slate-700 pb-3">
      <div class="bg-loading bg-slate-300 dark:bg-slate-700 bg-center bg-no-repeat min-h-96 min-w-96">
        <iframe
          title="a"
          src="https://app.uniswap.org/#/swap"
          height="660px"
          width="100%"
          class="max-w-screen-sm min-h-90 mx-auto rounded-lg pb-4"
        />
      </div>
    </div>
  );
}

export default Uniswap;