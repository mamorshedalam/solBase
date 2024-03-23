
import logoImg from "../assets/logo/logo.png";
import Button from "../components/Button/button";
import NumberImg from "../assets/banner/numbers.jpg";
import tradeImg from "../assets/banner/ai-trading.jpg";
import ecoImg from "../assets/banner/eco-pattern.jpg";
import defImg from "../assets/banner/definsurance.jpg";

export default function Home() {
     return (
          <main>
               <section className="md:pt-40 py-20 bg-gradient-to-t from-purple-500 to-slate-950">
                    <div className="sl-container">
                         <div className="flex flex-wrap items-center justify-center">
                              <div className="md:w-3/5 md:order-1 order-2">
                                   <h1 className="lg:text-6xl sm:text-5xl text-4xl font-semibold md:mb-9 mb-6">Revolutionizing <span className="text-amber-500">Trading</span></h1>
                                   <p className="xl:w-2/3 sm:text-xl text-lg mb-6">The first meme inspired token that maximizes returns though investment pools.</p>
                                   <div>
                                        <Button classes="mr-4">Buy on Solana</Button>
                                        <Button classes="">Buy on Base</Button>
                                   </div>
                              </div>
                              <div className="md:w-2/5 md:order-2 order-1">
                                   <img className="md:max-w-full max-w-80 mb-4" src={logoImg} alt="logo" />
                              </div>
                         </div>
                    </div>
               </section>
               <section className="md:py-20 py-10 md:bg-gradient-to-b bg-neutral-900 from-purple-500 to-slate-950">
                    <div className="sl-container">
                         <div className="flex flex-wrap w-full md:border border-amber-500/25 rounded-lg bg-neutral-900">
                              <div className="md:w-2/5 w-full md:border-r border-amber-500/25 xl:px-16 md:px-3 md:py-40 sm:py-10 pb-10">
                                   <h2 className="md:text-5xl text-3xl font-semibold md:mb-6 mb-4">Why is SolBase <span className="text-amber-500">AI</span>?</h2>
                                   <p>SolBase-AI offers multiple services enabling users to maximise profits on their investment. There are lots of way investors can generate profit using the platform.</p>
                              </div>
                              <div className="flex flex-wrap md:w-3/5 w-full xl:px-20 sm:py-10">
                                   <div className="sm:w-1/2 sm:px-3 md:-mt-20">
                                        <div className="sm:max-w-60 w-full px-6 py-8 ml-auto rounded-lg bg-gradient-to-b from-sky-700 to-sky-900 shadow-lg shadow-sky-400/25 text-sm sm:mb-6 mb-8">
                                             <div><svg className="fill-sky-400" xmlns="http://www.w3.org/2000/svg" width="46" height="26" aria-hidden="true" aria-labelledby="svgcid-1nccze-ijof5z" data-bbox="23.001 56 153.999 88" data-type="color" viewBox="23.001 56 153.999 88">
                                                  <path d="M177 59.996V100a4 4 0 0 1-8 0V69.688l-56.211 56.467a4.001 4.001 0 0 1-5.67 0L76.772 95.67l-46.937 47.152A3.989 3.989 0 0 1 27 144a4.001 4.001 0 0 1-2.835-6.822l49.772-50a4.001 4.001 0 0 1 5.67 0l30.347 30.485L163.374 64h-30.193a4 4 0 0 1 0-8H173c.049 0 .095.013.144.015.212.008.424.022.633.064.125.025.242.07.362.106.129.038.259.068.384.119.136.056.259.132.387.202.101.055.206.1.303.164.176.117.335.255.489.397.038.035.082.06.119.097l.004.005c.185.185.351.388.497.606.07.104.118.218.177.327.065.12.139.235.192.362.059.141.093.288.135.434.03.105.072.205.094.313.052.259.079.522.08.785z" data-color="1"></path>
                                             </svg></div>
                                             <h3 className="text-lg font-semibold mt-4 mb-2">$SOLBASE</h3>
                                             <p className="text-white/75 mb-6">Trading $SOLBASE as a meme coin on 2 of the most explosive chains</p>
                                             <button className="py-2 px-3 rounded-lg font-semibold bg-sky-400/25 hover:bg-sky-400">Read more</button>
                                        </div>
                                        <div className="sm:max-w-60 w-full px-6 py-8 ml-auto rounded-lg bg-gradient-to-b from-rose-700 to-rose-900 shadow-lg shadow-rose-400/25 text-sm sm:mb-6 mb-8">
                                             <div><svg className="fill-rose-400" xmlns="http://www.w3.org/2000/svg" width="53" height="34" aria-hidden="true" aria-labelledby="svgcid--igpc9261a4jj" data-bbox="20.42 48.257 159.16 103.485" data-type="color" viewBox="20.42 48.257 159.16 103.485">
                                                  <path d="M177.118 96.151 142.48 80.165a4.235 4.235 0 0 0-3.555 0l-34.637 15.986a4.252 4.252 0 0 0-2.464 3.849c0 1.648.967 3.159 2.463 3.85l34.638 15.986c.553.255 1.167.39 1.777.39.619 0 1.217-.131 1.778-.39l34.638-15.986c1.496-.691 2.462-2.202 2.462-3.85s-.967-3.159-2.462-3.849zM165.223 100l-24.521 11.316L116.181 100l24.52-11.316L165.223 100zM98.177 100a4.251 4.251 0 0 0-2.463-3.849L61.076 80.165a4.236 4.236 0 0 0-3.554 0L22.883 96.151c-1.496.691-2.463 2.202-2.463 3.849s.967 3.159 2.463 3.85l34.638 15.985a4.257 4.257 0 0 0 1.777.391c.619 0 1.216-.131 1.777-.39l34.638-15.986a4.253 4.253 0 0 0 2.464-3.85zm-14.358 0-24.521 11.316L34.778 100l24.52-11.316L83.819 100zM63.585 72.333l34.638 15.985a4.257 4.257 0 0 0 1.777.391 4.21 4.21 0 0 0 1.777-.39l34.639-15.986a4.253 4.253 0 0 0 2.462-3.85 4.252 4.252 0 0 0-2.462-3.849l-34.639-15.986a4.236 4.236 0 0 0-3.554 0L63.585 64.634a4.253 4.253 0 0 0-2.463 3.849c0 1.648.966 3.159 2.463 3.85zm11.895-3.85L100 57.167l24.52 11.316L100 79.8 75.48 68.483zM136.417 127.667l-34.639-15.986a4.236 4.236 0 0 0-3.554 0l-34.639 15.986c-1.496.691-2.463 2.202-2.463 3.849s.967 3.159 2.463 3.85l34.638 15.985a4.257 4.257 0 0 0 1.777.391 4.21 4.21 0 0 0 1.777-.39l34.639-15.986c1.496-.691 2.462-2.202 2.462-3.85s-.966-3.158-2.461-3.849zm-11.897 3.85L100 142.833l-24.52-11.316L100 120.2l24.52 11.317z" data-color="1"></path>
                                             </svg></div>
                                             <h3 className="text-lg font-semibold mt-4 mb-2">Trading Pools</h3>
                                             <p className="text-white/75 mb-6">Investing in trading pools, getting both conservative and degen ROI</p>
                                             <button className="py-2 px-3 rounded-lg font-semibold bg-rose-400/25 hover:bg-rose-400">Read more</button>
                                        </div>
                                   </div>
                                   <div className="sm:w-1/2 sm:px-3 md:mt-20">
                                        <div className="sm:max-w-60 w-full px-6 py-8 rounded-lg bg-gradient-to-b from-violet-700 to-violet-900 shadow-lg shadow-violet-400/25 text-sm sm:mb-6 mb-8">
                                             <div><svg className="fill-violet-400" xmlns="http://www.w3.org/2000/svg" width="51" height="34" aria-hidden="true" aria-labelledby="svgcid-e3fjfb3uoi0z" data-bbox="20.532 45.947 158.928 108.107" data-type="color" viewBox="20.532 45.947 158.928 108.107">
                                                  <path d="m82.935 75.852 44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.828 4.828 0 0 0 0-8.768l-44.836-20.692a4.826 4.826 0 0 0-4.047 0L82.935 67.083a4.828 4.828 0 0 0 0 8.769zm46.86-19.759 33.312 15.374-33.312 15.374-33.312-15.374 33.312-15.374z" data-color="1"></path>
                                                  <path d="m172.608 95.616-42.813 19.758-42.813-19.758a4.83 4.83 0 0 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769z" data-color="1"></path>
                                                  <path d="m172.608 124.149-42.813 19.758-42.813-19.758a4.828 4.828 0 1 0-4.047 8.769l44.836 20.692a4.833 4.833 0 0 0 4.048 0l44.836-20.692a4.83 4.83 0 0 0-4.047-8.769zM65.095 95.171H25.368a4.829 4.829 0 1 0 0 9.658h39.727a4.829 4.829 0 1 0 0-9.658zM65.095 76.446H37.44a4.829 4.829 0 1 0 0 9.658h27.655a4.829 4.829 0 1 0 0-9.658zM65.095 113.897H49.512a4.829 4.829 0 1 0 0 9.658h15.583a4.829 4.829 0 1 0 0-9.658z" data-color="1"></path>
                                             </svg></div>
                                             <h3 className="text-lg font-semibold my-2">NFTs</h3>
                                             <p className="text-white/75 mb-6">Generating revenue through holding and trading NFTs</p>
                                             <button className="py-2 px-3 rounded-lg font-semibold bg-violet-400/25 hover:bg-violet-400">Read more</button>
                                        </div>
                                        <div className="sm:max-w-60 w-full px-6 py-8 rounded-lg bg-gradient-to-b from-slate-700 to-slate-900 shadow-lg shadow-slate-400/25 text-sm sm:mb-6 mb-8">
                                             <div><svg className="fill-slate-400" xmlns="http://www.w3.org/2000/svg" width="43" height="39" aria-hidden="true" aria-labelledby="svgcid-d50ipbiu0jba" data-bbox="20.124 26.752 159.752 146.495" data-type="color" viewBox="20.124 26.752 159.752 146.495">
                                                  <path d="M117.275 125.299c8.267-5.705 13.161-14.963 13.161-25.039 0-16.782-13.653-30.435-30.435-30.435S69.566 83.478 69.566 100.26c0 10.076 4.892 19.333 13.159 25.039-17.083 6.994-28.462 23.834-28.462 42.343v5.605h91.474v-5.605c0-18.509-11.38-35.349-28.462-42.343zm-17.274-5.814c-10.6 0-19.225-8.624-19.225-19.225 0-10.6 8.625-19.224 19.225-19.224s19.225 8.624 19.225 19.224c0 10.601-8.625 19.225-19.225 19.225zm-34.074 42.552c2.713-16.546 17.215-28.921 34.074-28.921 16.857 0 31.36 12.375 34.072 28.921H65.927zM100.001 62.03c9.726 0 17.639-7.913 17.639-17.639 0-9.726-7.913-17.639-17.639-17.639-9.727 0-17.64 7.913-17.64 17.639 0 9.726 7.912 17.639 17.64 17.639zm-6.429-17.639a6.435 6.435 0 0 1 6.429-6.428 6.435 6.435 0 0 1 6.428 6.428 6.435 6.435 0 0 1-6.428 6.429 6.437 6.437 0 0 1-6.429-6.429zM37.764 101.971c-9.727 0-17.64 7.913-17.64 17.639 0 9.727 7.913 17.639 17.64 17.639 9.726 0 17.639-7.913 17.639-17.639 0-9.726-7.913-17.639-17.639-17.639zm6.428 17.639c0 3.545-2.883 6.429-6.428 6.429s-6.429-2.884-6.429-6.429c0-3.545 2.884-6.429 6.429-6.429s6.428 2.884 6.428 6.429zM162.236 101.971c-9.726 0-17.639 7.913-17.639 17.639 0 9.727 7.913 17.639 17.639 17.639 9.727 0 17.64-7.913 17.64-17.639 0-9.726-7.913-17.639-17.64-17.639zm6.429 17.639a6.436 6.436 0 0 1-6.429 6.429 6.435 6.435 0 0 1-6.428-6.429 6.435 6.435 0 0 1 6.428-6.429 6.437 6.437 0 0 1 6.429 6.429z" data-color="1"></path>
                                             </svg></div>
                                             <h3 className="text-lg font-semibold my-2">Trading Bots</h3>
                                             <p className="text-white/75 mb-6">Renting trading bots & copy trading our teams’ accounts</p>
                                             <button className="py-2 px-3 rounded-lg font-semibold bg-slate-400/25 hover:bg-slate-400">Read more</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="py-20 bg-fixed bg-no-repeat bg-cover bg-bottom" style={{ backgroundImage: `url(${NumberImg})` }}>
                    <div className="absolute inset-0 w-full h-full bg-black/30 z-0"></div>
                    <div className="relative sl-container text-center z-10">
                         <h2 className="md:text-5xl text-3xl font-semibold md:mb-9 mb-6">We Take Pride in Our Numbers</h2>
                         <div className="lg:flex flex-wrap justify-between font-medium">
                              <div className="w-fit mx-auto sm:px-2 mb-6">
                                   <span className="md:text-7xl text-5xl">2</span>
                                   <p className="text-amber-500 mt-2 pt-2 border-t-4 border-amber-500">Quants</p>
                              </div>
                              <div className="w-fit mx-auto sm:px-2 mb-6">
                                   <span className="md:text-7xl text-5xl">$1B</span>
                                   <p className="text-amber-500 mt-2 pt-2 border-t-4 border-amber-500">Supply</p>
                              </div>
                              <div className="w-fit mx-auto sm:px-2 mb-6">
                                   <span className="md:text-7xl text-5xl">$1000</span>
                                   <p className="text-amber-500 mt-2 pt-2 border-t-4 border-amber-500">NFTs</p>
                              </div>
                              <div className="w-fit mx-auto sm:px-2 mb-6">
                                   <span className="md:text-7xl text-5xl">Soon</span>
                                   <p className="text-amber-500 mt-2 pt-2 border-t-4 border-amber-500">Market Cap</p>
                              </div>
                              <div className="w-fit mx-auto sm:px-2 mb-6">
                                   <span className="md:text-7xl text-5xl">Soon</span>
                                   <p className="text-amber-500 mt-2 pt-2 border-t-4 border-amber-500">Token Price</p>
                              </div>
                         </div>
                    </div>
               </section>
               <section className="md:py-20 py-10 bg-gradient-to-t from-purple-500">
                    <div className="sl-container">
                         <div className="flex flex-wrap w-full md:border border-white/10 rounded-t-lg">
                              <div className="flex items-center text-center md:w-3/5 p-20 border-r border-white/10 min-h-[600px] bg-fixed bg-cover bg-no-repeat bg-center rounded-tl-lg" style={{backgroundImage: `url(${tradeImg})`}}>
                                   <h2 className="text-4xl leading-loose">Trade <span className="text-[#208D7D]">$SOLBASE</span> on Solana/Base Chains as meme coins </h2>
                              </div>
                              <div className="flex flex-col justify-center p-20 md:w-2/5 bg-[#181D2B] rounded-tr-lg">
                                   <p className="text-white/70 mb-6">We decided to launch $SOLBASE on both Solana and Base chains, as this is where the market is currently exploding. We will offer an ICO on both tokens and launch them. Tokens can be traded, but also if held, they will provide customers with access to the Degen Haven.</p>
                                   <button className="w-fit bg-[#208D7D] border-2 border-[#208D7D] px-6 py-3 rounded-lg hover:bg-[#181D2B]">Learn More</button>
                              </div>
                         </div>
                         <div className="flex flex-wrap w-full md:border border-white/10">
                              <div className="flex flex-col justify-center p-20 md:w-2/5 bg-[#220001]">
                                   <p className="text-white/70 mb-6">Our NFTs are not just jpegs. There will only ever be 1000 NFTs minted, therefore they can be traded as they will appreciate in value, they can be staked to generate ROI, but their main utility is to be used as an access key to the Degen Haven and provide investors with degenly high ROI. Find more about NFTs “here”</p>
                                   <button className="w-fit bg-[#E46359] border-2 border-[#E46359] px-6 py-3 rounded-lg hover:bg-[#220001]">Learn More</button>
                              </div>
                              <div className="flex items-center text-center md:w-3/5 p-20 border-r border-white/10 min-h-[600px] bg-fixed bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${ecoImg})`}}>
                                   <h2 className="text-4xl leading-loose">Trade SolBase NFTs and generate <span className="text-[#E46359]">revenue</span> by holding them</h2>
                              </div>
                         </div>
                         <div className="flex flex-wrap w-full md:border border-white/10 rounded-t-lg">
                              <div className="flex items-center text-center md:w-3/5 p-20 border-r border-white/10 min-h-[600px] bg-fixed bg-cover bg-no-repeat bg-center rounded-tl-lg" style={{backgroundImage: `url(${defImg})`}}>
                                   <h2 className="text-4xl leading-loose"><span className="text-[#AF6FCD]">Invest</span> in trading pools, getting both conservative and degen ROI</h2>
                              </div>
                              <div className="flex flex-col justify-center p-20 md:w-2/5 bg-[#180B24] rounded-tr-lg">
                                   <p className="text-white/70 mb-6">The core element of our project. We are a team of traders and developers. The motivation for the team to launch SolBase was to be able to use our extensive manual and algorithmic trading experience to benefit and benefit others by helping them getting a high return on their investment. Thus, we created a platform that contains trading pools, where investors can invest or stake their money for a specific amount of time and get the agreed-on ROI. </p>
                                   <button className="w-fit bg-[#AF6FCD] border-2 border-[#AF6FCD] px-6 py-3 rounded-lg hover:bg-[#180B24]">Learn More</button>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     )
}