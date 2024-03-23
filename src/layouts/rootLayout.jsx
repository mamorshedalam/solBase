import { useState } from "react";
import solImg from "../assets/company/sol.png";
import baseImg from "../assets/company/base.png";
import barImg from "../assets/icon/ham.svg";
import { Outlet } from "react-router-dom";
import Button from "../components/Button/button";

export default function RootLayout() {
     const [sidebar, setSidebar] = useState(false);
     return (
          <>
               <header className="fixed top-0 left-0 right-0 w-full shadow-lg shadow-slate-950/30 border-b border-white/10 bg-slate-950 flex justify-between items-center sm:px-9 px-2 z-[999]">
                    <div >
                         <a href="/" className="md:text-2xl text-base font-semibold tracking-wider">SOL BASE <span className="text-amber-500">Ai</span></a>
                    </div>
                    <div>
                         <div className="flex flex-wrap items-center">
                              <nav className={`lg:relative absolute overflow-hidden top-full right-0 bg-slate-950 rounded-bl-md lg:w-auto lg:opacity-100 lg:visible sl-animation ${sidebar ? 'w-3/4 opacity-100 visible' : 'w-0 opacity-0 invisible'}`}>
                                   <ul className="flex flex-wrap lg:flex-row flex-col lg:text-xs text-center font-medium lg:mr-6 lg:mb-0 mb-2">
                                        <li><a href="" className="lg:inline-block block p-3 hover:text-amber-500">Home</a></li>
                                        <li><a href="" className="lg:inline-block block p-3 hover:text-amber-500">Utility</a></li>
                                        <li><a href="" className="lg:inline-block block p-3 hover:text-amber-500">NFTs</a></li>
                                        <li><a href="" className="lg:inline-block block p-3 hover:text-amber-500">Whitepaper</a></li>
                                        <li><a href="" className="lg:inline-block block p-3 hover:text-amber-500">Hiring</a></li>
                                        <li><a href="" className="lg:inline-block block p-3 hover:text-amber-500">About</a></li>
                                   </ul>
                              </nav>
                              <Button classes="flex items-center text-xs sm:px-5 !px-3 md:py-2.5 !py-1.5 sm:my-4 my-3 gap-2 sm:mr-4 mr-2">Buy on <img src={solImg} alt="sol" className="h-5" /></Button>
                              <Button classes="flex items-center text-xs sm:px-5 !px-3 md:py-2.5 !py-1.5 sm:my-4 my-3 gap-2 sm:mr-4 mr-2">Buy on <img src={baseImg} alt="sol" className="h-5" /></Button>
                              <button onClick={() => setSidebar(!sidebar)}><img src={barImg} alt="" className="lg:hidden block sm:h-9 h-6 sm:ml-4 ml-2" /></button>
                         </div>
                    </div>
               </header>
               <Outlet />
          </>
     )
}