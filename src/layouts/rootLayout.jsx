import { useEffect, useState } from "react";
import solImg from "../assets/company/sol.png";
import baseImg from "../assets/company/base.png";
import barImg from "../assets/icon/ham.svg";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Button from "../components/Button/button";
import WOW from "wow.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function RootLayout() {
     const [sidebar, setSidebar] = useState(false);
     const [popUp, setPopUp] = useState(false);
     const { pathname } = useLocation();

     useEffect(() => { // Top in Render
          if (pathname != "/") window.scrollTo(0, 0);
     }, [pathname]);

     useEffect(() => {
          new WOW().init();
     }, [])
     return (
          <>
               {/* POPUP */}
               <div class={`fixed inset-0 w-full overflow-x-hidden overflow-y-auto z-[9999] sl-animation-fade ${popUp ? 'opacity-100 h-full' : 'opacity-0 h-0'}`}>
                    <div onClick={() => setPopUp(!popUp)} class="absolute inset-0 w-full h-full bg-black/50 -z-10"></div >
                    <div class={`relative max-w-[500px] w-full my-20 mx-auto z-10 rounded-3xl py-12 px-16 bg-gradient-to-t from-slate-900 to-purple-700 sl-animation translate-y-0 ${popUp ? 'translate-y-0' : '-translate-y-14'}`} >
                         <button onClick={() => setPopUp(!popUp)} class="absolute right-6 top-6 text-white/60 text-lg hover:text-amber-500" ><FontAwesomeIcon icon={faXmark} /></button >
                         <h2 className="sm:text-4xl text-center font-semibold">Coming <span className="text-amber-500">Soon</span>!</h2>
                    </div >
               </div >

               <header className="fixed top-0 left-0 right-0 w-full shadow-lg shadow-slate-950/30 border-b border-white/10 bg-slate-950 flex justify-between items-center sm:px-9 px-2 z-[999]">
                    <div >
                         <a href="/" className="md:text-2xl text-base font-semibold tracking-wider">SOLBASE <span className="text-amber-500">AI</span></a>
                    </div>
                    <div>
                         <div className="flex flex-wrap items-center">
                              <nav className={`lg:relative absolute lg:overflow-visible overflow-hidden top-full right-0 bg-slate-950 rounded-bl-md lg:w-auto lg:opacity-100 lg:visible sl-animation ${sidebar ? 'w-3/4 opacity-100 visible' : 'w-0 opacity-0 invisible'}`}>
                                   <ul className="flex flex-wrap lg:flex-row flex-col lg:text-xs text-center font-medium lg:mr-6 lg:mb-0 mb-2">
                                        <li><NavLink onClick={() => setSidebar(!sidebar)} to={`/`} className={({ isActive }) => isActive ? "lg:inline-block block p-2 text-amber-500" : "lg:inline-block block p-2 hover:text-amber-500"}>Home</NavLink></li>
                                        <li className="sl-submenu-hover group relative">
                                             <NavLink onClick={() => setSidebar(!sidebar)} to={`/utility`} className={({ isActive }) => isActive ? "lg:inline-block block p-2 text-amber-500" : "lg:inline-block block p-2 hover:text-amber-500"}>Utility</NavLink>
                                             <ul className="absolute lg:block hidden left-0 w-32 py-2 bg-slate-950 shadow-lg rounded-lg border border-white/10 z-50 top-[150%] group-hover:top-full">
                                                  <li><NavLink onClick={() => setSidebar(!sidebar)} to={`/solbase`} className={({ isActive }) => isActive ? "px-3 py-2 text-amber-500" : "px-3 py-2 hover:text-amber-500"}>$SOLBASE</NavLink></li>
                                                  <li><NavLink onClick={() => setSidebar(!sidebar)} to={`/trading-pool`} className={({ isActive }) => isActive ? "px-3 py-2 text-amber-500" : "px-3 py-2 hover:text-amber-500"}>Trading Pools</NavLink></li>
                                                  <li><NavLink onClick={() => setSidebar(!sidebar)} to={`/trading-bot`} className={({ isActive }) => isActive ? "px-3 py-2 text-amber-500" : "px-3 py-2 hover:text-amber-500"}>Trading Bot</NavLink></li>
                                                  <li><NavLink onClick={() => setSidebar(!sidebar)} to={`/copy-trading`} className={({ isActive }) => isActive ? "px-3 py-2 text-amber-500" : "px-3 py-2 hover:text-amber-500"}>Copy Trading</NavLink></li>
                                             </ul>
                                        </li>
                                        <li><NavLink onClick={() => setSidebar(!sidebar)} to={`/solbase`} className={({ isActive }) => isActive ? "lg:hidden block p-2 text-amber-500" : "lg:hidden block p-2 hover:text-amber-500"}>$SOLBASE</NavLink></li>
                                        <li><NavLink onClick={() => setSidebar(!sidebar)} to={`/trading-pool`} className={({ isActive }) => isActive ? "lg:hidden block p-2 text-amber-500" : "lg:hidden block p-2 hover:text-amber-500"}>Trading Pools</NavLink></li>
                                        <li><NavLink onClick={() => setSidebar(!sidebar)} to={`/trading-bot`} className={({ isActive }) => isActive ? "lg:hidden block p-2 text-amber-500" : "lg:hidden block p-2 hover:text-amber-500"}>Trading Bot</NavLink></li>
                                        <li><NavLink onClick={() => setSidebar(!sidebar)} to={`/copy-trading`} className={({ isActive }) => isActive ? "lg:hidden block p-2 text-amber-500" : "lg:hidden block p-2 hover:text-amber-500"}>Copy Trading</NavLink></li>
                                        <li><NavLink onClick={() => setSidebar(!sidebar)} to={`/nft`} className={({ isActive }) => isActive ? "lg:inline-block block p-2 text-amber-500" : "lg:inline-block block p-2 hover:text-amber-500"}>NFTs</NavLink></li>
                                        <li><a href="https://solbaseai.gitbook.io/solbase-ai/" target="_blank" onClick={() => setSidebar(!sidebar)} className="lg:inline-block block p-2 hover:text-amber-500">Whitepaper</a></li>
                                        <li><button onClick={() => { setSidebar(!sidebar); setPopUp(!popUp) }} className="lg:inline-block block p-2 hover:text-amber-500">KYC</button></li>
                                        <li><button onClick={() => { setSidebar(!sidebar); setPopUp(!popUp) }} className="lg:inline-block block p-2 hover:text-amber-500">Audit</button></li>
                                        <li><NavLink onClick={() => setSidebar(!sidebar)} to={`/hiring`} className={({ isActive }) => isActive ? "lg:inline-block block p-2 text-amber-500" : "lg:inline-block block p-2 hover:text-amber-500"}>Hiring</NavLink></li>
                                   </ul>
                              </nav>
                              <Button classes="flex items-center text-xs sm:px-5 !px-3 md:py-2.5 !py-1.5 sm:my-4 my-3 gap-2 sm:mr-4 mr-2">Buy on <img src={solImg} alt="sol" className="h-5" /></Button>
                              <Button classes="flex items-center text-xs sm:px-5 !px-3 md:py-2.5 !py-1.5 sm:my-4 my-3 gap-2 sm:mr-4 mr-2">Buy on <img src={baseImg} alt="sol" className="h-5" /></Button>
                              <button onClick={() => setSidebar(!sidebar)}><img src={barImg} alt="" className="lg:hidden block sm:h-9 h-6 sm:ml-4 ml-2" /></button>
                         </div>
                    </div>
               </header>
               <Outlet />
               <footer className="wow fadeInUp text-white/75 border-t border-white/10 sm:px-9 px-2 md:py-12 pt-10 pb-4">
                    <div className="flex flex-wrap">
                         <div className="lg:w-1/4 md:w-2/5">
                              <a href="/" className="text-2xl font-semibold tracking-wider text-white">SOLBASE <span className="text-amber-500">AI</span></a>
                              <p className="text-xs mt-2">Disclaimer: Investing in tokens such as $SOLBASE carries inherent risks and may result in financial loss. The information provided here is for educational and informational purposes only and should not be considered as financial or investment advice. Before investing, it is important to conduct your own research, evaluate your financial situation, and seek advice from a licensed financial advisor. The value of $SOLBASE can be volatile and subject to market fluctuations. The token's value may be impacted by various factors, including market trends, government regulations, and technological advancements. The team behind $SOLBASE makes no warranties or representations regarding the accuracy, reliability, or completeness of the information provided here. Users should exercise caution and diligence when trading.</p>
                         </div>
                         <ul className="md:flex-grow md:block flex flex-wrap md:w-0 w-full text-center md:text-base text-sm font-medium md:columns-2 md:py-0 py-3">
                              <li><Link to={`/`} className="relative md:px-4 px-2 py-1 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Home</Link></li>
                              <li><Link to={`/utility`} className="relative md:px-4 px-2 py-1 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Utility</Link></li>
                              <li><a href="https://solbaseai.gitbook.io/solbase-ai/" target="_blank" className="relative md:px-4 px-2 py-1 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Whitepaper</a></li>
                              <li><button onClick={() => setPopUp(!popUp)} className="relative md:px-4 px-2 py-1 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">KYC</button></li>
                              <li><button onClick={() => setPopUp(!popUp)} className="relative md:px-4 px-2 py-1 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Audit</button></li>
                              <li><Link to={`/hiring`} className="relative md:px-4 px-2 py-1 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Hiring</Link></li>
                              <li><Link to={`/NFT`} className="relative md:px-4 px-2 py-1 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">NFT</Link></li>
                              <li><Link to={`/solbase`} className="relative md:px-4 px-2 py-1 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">$SOLBASE</Link></li>
                              <li><Link to={`/trading-pool`} className="relative md:px-4 px-2 py-1 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Trading Pools</Link></li>
                              <li><Link to={`/trading-bot`} className="relative md:px-4 px-2 py-1 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Trading Bot</Link></li>
                              <li><Link to={`/copy-trading`} className="relative md:px-4 px-2 py-1 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Copy Trading</Link></li>
                         </ul>
                         <div className="lg:w-1/5 md:w-1/5">
                              <h4 className="font-medium md:px-2">Follow Us</h4>
                              <ul className="flex flex-wrap">
                                   <li><a href="https://twitter.com/SolBase_AI" target="_blank" className="px-2 py-1"><svg className="h-6 fill-current hover:fill-amber-500" stroke="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                   </svg></a></li>
                                   <li><a href="https://t.me/solbaseai" target="_blank" className="px-2 py-1"><svg className="h-6 fill-current hover:fill-amber-500" stroke="currentColor" strokeWidth="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                                   </svg></a></li>
                              </ul>
                         </div>
                    </div>
               </footer >
          </>
     )
}