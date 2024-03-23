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
               <footer className="text-white/75 border-t border-white/10 sm:px-9 px-2 md:py-12 pt-10 pb-4">
                    <div className="flex flex-wrap">
                         <div className="lg:w-1/4 md:w-2/5">
                              <a href="/" className="md:text-xl text-base font-semibold tracking-wider text-white">SOL BASE <span className="text-amber-500">Ai</span></a>
                              <p className="text-xs mt-2">Disclaimer: Investing in tokens such as $NFAI carries inherent risks and may result in financial loss. The information provided here is for educational and informational purposes only and should not be considered as financial or investment advice. Before investing, it is important to conduct your own research, evaluate your financial situation, and seek advice from a licensed financial advisor. The value of $NFAI can be volatile and subject to market fluctuations, and there is no guarantee of profit or return on investment. The token's value may be impacted by various factors, including market trends, government regulations, and technological advancements. The team behind $NFAI makes no warranties or representations regarding the accuracy, reliability, or completeness of the information provided here. Users should exercise caution and diligence when trading </p>
                         </div>
                         <ul className="md:flex-grow md:block flex flex-wrap md:w-0 w-full text-center md:text-base text-sm font-medium">
                              <li><a href="" className="relative md:px-4 px-2 md:py-1 py-4 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Home</a></li>
                              <li><a href="" className="relative md:px-4 px-2 md:py-1 py-4 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Utility</a></li>
                              <li><a href="" className="relative md:px-4 px-2 md:py-1 py-4 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">NFTs</a></li>
                              <li><a href="" className="relative md:px-4 px-2 md:py-1 py-4 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Whitepaper</a></li>
                              <li><a href="" className="relative md:px-4 px-2 md:py-1 py-4 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">Hiring</a></li>
                              <li><a href="" className="relative md:px-4 px-2 md:py-1 py-4 hover:text-amber-500 before:absolute md:before:hidden before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-3 before:bg-amber-500">About</a></li>
                         </ul>
                         <div className="lg:w-1/5 md:w-2/5">
                              <h4 className="font-medium md:px-2">Follow Us</h4>
                              <ul className="flex flex-wrap">
                                   <li><a href="" className="px-2 py-1"><svg className="h-6 fill-current hover:fill-amber-500" stroke="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"></path>
                                   </svg></a></li>
                                   <li><a href="" className="px-2 py-1"><svg className="h-6 fill-current hover:fill-amber-500" stroke="currentColor" stroke-width="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                                   </svg></a></li>
                                   <li><a href="" className="px-2 py-1"><svg className="h-6 fill-current hover:fill-amber-500" stroke="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                   </svg></a></li>
                                   <li><a href="" className="px-2 py-1"><svg className="h-6 fill-current hover:fill-amber-500" stroke="currentColor" stroke-width="0" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                                   </svg></a></li>
                                   <li><a href="" className="px-2 py-1"><svg className="h-6 fill-current hover:fill-amber-500" stroke="currentColor" stroke-width="0" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                   </svg></a></li>
                                   <li><a href="" className="px-2 py-1"><svg className="h-6 fill-current hover:fill-amber-500" stroke="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                   </svg></a></li>
                                   <li><a href="" className="px-2 py-1"><svg className="h-6 fill-current hover:fill-amber-500" stroke="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"></path>
                                   </svg></a></li>
                              </ul>
                         </div>
                    </div>
               </footer >
          </>
     )
}