import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-slate-100 dark:bg-slate-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-1 md:order-1">
        <a href="http://dark-mode.obs-ed.fr/" className="flex items-center">
          <img src="https://www.obs-ed.fr/wp-content/uploads/2023/10/DM-ObsED.png" className="h-20 pl-10" alt=" Logo" />
        </a>
        <div className="flex md:order-3">
          <button type="button" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-base px-4 py-2 text-center mr-3 md:mr-4 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Light Mode</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <button type="button" className=" text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-base px-4 py-2 text-center mr-3 md:mr-0 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">OED</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
 
        <div className="items-center hidden w-full md:flex md:w-auto md:order-2" id="navbar-sticky">
        <div className="flex justify-end w-full">    
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-100 dark:bg-slate-800 md:dark:bg-slate-900 dark:border-gray-700 justify-end">
            <li>
              <a href="/" className="block py-3 pl-3 pr-4 text-base font-medium text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 md:dark:hover:text-slate-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">INFOS</a>
            </li>
            <li>
              <a href="/archives" className="block py-3 pl-3 pr-4 text-base font-medium text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 md:dark:hover:text-slate-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ARCHIVES</a>
            </li>
            <li>
              <a href="/about" className="block py-3 pl-3 pr-4 text-base font-medium text-slate-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 md:dark:hover:text-slate-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CONTACT</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
