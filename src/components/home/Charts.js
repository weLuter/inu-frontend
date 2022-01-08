import React from 'react';
import 'tw-elements';

const Charts = () =>{
  return (
    <div class="mx-auto max-w-screen-sm accordion mb-4" id="accordionExample">
      <div class="accordion-item bg-white border border-gray-200">
        <div class="flex flex-row justify-between space-between">
          <div className="px-4 py-3 sm:px-6">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Charts</h3>
          </div>
          <button
            class="
              accordion-button
              collapsed relative
              flex items-center
              py-4 px-5
              text-base text-gray-800 text-left
              bg-white border-0
              rounded-none transition focus:ring-0
            "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          />
        </div>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div className="bg-slate-100 text-md font-medium text-gray-500">
              <div className="flex rounded-md shadow mb-2">
                <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-0 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  CoinMarketCap
                </a>
              </div>
              <div className="flex rounded-md shadow mb-2">
                <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-0 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  CoinGecko
                </a>
              </div>
              <div className="flex rounded-md shadow mb-2">
                <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-0 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  DexScreener
                </a>
              </div>
              <div className="flex rounded-md shadow mb-2">
                <a href="#" className="flex flex-grow items-center justify-center px-5 py-2 border border-0 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  DexTools
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;