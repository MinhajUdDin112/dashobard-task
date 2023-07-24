import React from "react";

function LeftSide() {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/3 mr-5 my-2">
        <div className="overflow-hidden p-2 text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200">
          <figure className="p-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mx-auto stroke-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
              role="graphics-symbol"
              aria-labelledby="title-01 desc-01"
            >
              <title id="title-01">Icon title</title>
              <desc id="desc-01">A more detailed description of the icon</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </figure>
          <p>Create gifts</p>
        </div>
      </div>

      <div className="w-1/3 mr-5 my-2">
        <div className="overflow-hidden p-2 text-center bg-white rounded shadow-md text-slate-500 shadow-slate-200">
          <figure className="p-6 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mx-auto stroke-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
              role="graphics-symbol"
              aria-labelledby="title-01 desc-01"
            >
              <title id="title-01">Icon title</title>
              <desc id="desc-01">A more detailed description of the icon</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </figure>
          <p>Create gifts</p>
        </div>
      </div>



    </div>
  );
}

export default LeftSide;
