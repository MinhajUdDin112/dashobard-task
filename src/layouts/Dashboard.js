import React from "react";
import Items from "../utils/sidebar";

function Dashboard({ children }) {
  return (
    <div className="h-screen w-screen flex bg-gray-50 overflow-y-scroll overflow-x-hidden">
      <aside className="flex  min-w-[140px] flex-col items-center bg-white text-gray-700 shadow h-screen">
        <div className="fixed flex flex-col bg-white h-screen">
          <div className="mt-10 mb-[33px] flex items-center w-full">
            <a className=" w-[140px] mx-auto" href="http://svelte.dev/">
              <img className=" mx-auto" alt="logo" src="/images/logo.png" />
            </a>
          </div>

          <ul>
            {Items.map((item, index) => (
              <li key={index} className="hover:bg-gray-100">
                <div className="mt-10 mb-[33px] flex items-center w-full">
                  <a className=" w-[58px] mx-auto" href="#">
                    <img className=" mx-auto" alt="logo" src={item.icon} />
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-auto h-16 flex items-center w-full">
            <button
              className="h-16 mx-auto flex  justify-center items-center
				w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none"
            >
              <div className="mt-10 mb-[33px] flex items-center w-full">
                <a className=" w-[58px] mx-auto" href="#">
                  <img
                    className=" mx-auto"
                    alt="logo"
                    src="/images/sidebar/arr002.png"
                  />
                </a>
              </div>
            </button>
          </div>
        </div>
      </aside>

      <div className="mb-6 px-[100px] py-[39px] w-full ">
        <div className=" w-[100%] h-20 p-10">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Categories
            </h5>

            <div className="flex space-x-4">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 pl-10 text-sm text-gray-800 border border-gray-300 rounded-lg focus:border-gray-50 "
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>

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

              <button class="bg-[#B0DC00] hover:bg-blue-700 text-white font-bold py-[11px] px-[20px] rounded">
                New Goal
              </button>
            </div>
          </div>
        </div>

        <div className="p-12 2xl:container w-[80%]">{children}</div>
      </div>
    </div>
  );
}

export default Dashboard;
