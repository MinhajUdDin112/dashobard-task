import React from "react";

function RightSide() {
  return (
    <div>
      <div className="w-full bg-[#C4D70F] h-[237px]  rounded-lg">
        <div
          className=" w-full  h-full bg-no-repeat bg-right-bottom"
          style={{ backgroundImage: "url('/images/Bg.png')" }}
        >
          <div className="p-[49px] h-full ">
            <p className="text-[28px] w-[388px] leading-[38px] text-[#3F4254] font-semibold">
              We are working
            </p>
            <p className="text-[28px] w-[388px] leading-[38px] text-[#3F4254] font-semibold">
              to boost lovely mood
            </p>
            <button class="bg-[#3F4254] my-5 text-white font-bold py-[11px] px-[20px] rounded-lg">
              Create a store
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[30px] flex items-center justify-between">
        <div className="w-[340px]  bg-white p-5">
          <div>
            <p>Trends</p>
          </div>

          <ul class="divide-y divide-slate-100 ">
            {[1, 2, 3, 4, 5].map(() => (
              <li class="flex items-center gap-4 px-4 py-3">
                <div class="flex items-center self-center">
                  <img
                    src="https://tailwindmix.b-cdn.net/products/product-shoe-02.jpeg"
                    alt="product image"
                    class="w-16 rounded"
                  />
                </div>

                <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center flex-1 min-w-0">
                  <h4 class="w-full text-base truncate text-slate-700">
                    Gravity Glide
                  </h4>
                  <p class="w-full text-sm text-slate-500">
                    Color: Cream 
                  </p>
                </div>
                <div class="text-xs text-slate-400">$189</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[340px]  bg-white p-5">
          <div>
            <p>Trends</p>
          </div>

          <ul class="divide-y divide-slate-100 ">
            {[1, 2, 3, 4, 5].map(() => (
              <li class="flex items-center gap-4 px-4 py-3">
                <div class="flex items-center self-center">
                  <img
                    src="https://tailwindmix.b-cdn.net/products/product-shoe-02.jpeg"
                    alt="product image"
                    class="w-16 rounded"
                  />
                </div>

                <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center flex-1 min-w-0">
                  <h4 class="w-full text-base truncate text-slate-700">
                    Gravity Glide
                  </h4>
                  <p class="w-full text-sm text-slate-500">
                    Color: Cream 
                  </p>
                </div>
                <div class="text-xs text-slate-400">$189</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-[30px] w-full bg-white flex items-center justify-between">
        <ul class="divide-y divide-slate-100 w-full">
          {[1, 2, 3, 4, 5].map(() => (
            <li class="flex items-center gap-12 px-4 py-3">
              <div class="flex items-center gap-4 px-4 py-3">
                <div class="flex items-center self-center">
                  <img
                    src="https://tailwindmix.b-cdn.net/products/product-shoe-02.jpeg"
                    alt="product image"
                    class="w-16 rounded"
                  />
                </div>

                <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center flex-1 min-w-0">
                  <h4 class="w-full text-base truncate text-slate-700">
                    Gravity Glide
                  </h4>
                  <h4 class="w-full text-base truncate text-slate-700">
                    <span className="font-bold">FTP:</span> bprow@bnc.cc
                  </h4>
                </div>
              </div>
              <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center flex-1 min-w-0">
                <h4 class="font-bold w-full text-base truncate text-slate-700 text-right">
                  $200,000
                </h4>
                <p class="w-full text-sm text-slate-500 text-right">Paid</p>
              </div>

              <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center flex-1 min-w-0">
              <button class="bg-[#3F4254]  text-white font-bold py-1.5 px-5 rounded-lg">
              Approved
            </button>
              </div>

              <div class="flex  gap-1 min-h-[2rem] items-start justify-center flex-1 min-w-0">
              <button
                aria-label="chat"
                className="p-[12px] rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </button>
              <button
                aria-label="notification"
                className="p-[12px] rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button
                aria-label="notification"
                className="p-[12px] rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 m-auto text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RightSide;
