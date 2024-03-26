import tradeImg from "../assets/banner/ai-trading.jpg";
import ecoImg from "../assets/banner/eco-pattern.jpg";
import defImg from "../assets/banner/definsurance.jpg";
import neuImg from "../assets/banner/neural-2.webp";
import bgImg from "../assets/banner/neural.webp";
import { Link } from "react-router-dom";

export default function Utility() {
     return (
          <main className="bg-gradient-to-t from-slate-950 via-purple-500 to-slate-950">
               <section className="md:py-40 py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className="wow fadeIn sl-container">
                         <h2 className="sm:text-5xl text-4xl font-semibold text-amber-500 tracking-wider sm:mb-6 mb-4">Utility</h2>
                         <p className="lg:w-1/2 sm:text-xl text-base leading-loose">SolBase isn’t developed to just be a meme coin. Its main purpose is to offer high ROI and different methods of generating money using the platform. </p>
                    </div>
               </section>
               <section className="md:pb-20 pb-10 md:-mt-20 -mt-16">
                    <div className="sl-container">
                         <div className="wow fadeInUp flex flex-wrap w-full md:border border-white/10 rounded-t-lg">
                              <div className="flex items-center text-center md:w-3/5 w-full sm:py-20 lg:px-20 sm:px-10 py-10 px-5 border-r border-white/10 md:min-h-[600px] min-h-[280px] bg-fixed bg-cover bg-no-repeat bg-center md:rounded-tr-none rounded-t-lg" style={{ backgroundImage: `url(${tradeImg})` }}>
                                   <h2 className="sm:text-4xl text-3xl leading-loose">Trade <span className="text-[#208D7D]">$SOLBASE</span> on Solana/Base Chains as meme coins </h2>
                              </div>
                              <div className="flex flex-col justify-center sm:py-20 lg:px-20 sm:px-10 py-10 px-5 md:w-2/5 bg-[#181D2B] rounded-tr-lg">
                                   <p className="text-white/70 sm:mb-6 mb-4">$SOLBASE will be launched on both Solana and Base chains, as this is where the market is currently exploding. We will offer an ICO on both tokens and launch them. Tokens can be traded, but also if held, they will provide customers with access to the Degen Haven.</p>
                                   <Link to={`/solbase`} className="w-fit bg-[#208D7D] border-2 border-[#208D7D] px-6 sm:py-3 py-2 rounded-lg hover:bg-[#181D2B]">Learn More</Link>
                              </div>
                         </div>
                         <div className="wow fadeInLeft flex flex-wrap w-full md:border border-white/10">
                              <div className="md:order-1 order-2 flex flex-col justify-center lg:px-20 sm:px-10 py-10 px-5 md:w-2/5 bg-[#220001]">
                                   <p className="text-white/70 sm:mb-6 mb-4">Our NFTs are not just JPEGs. There will only ever be 1000 NFTs minted, therefore they can be traded as they will appreciate in value, they can be staked to generate ROI, but their main utility is to be used to grant access to the Degen Haven and provide investors with high ROI.</p>
                                   <Link to={`/nft`} className="w-fit bg-[#E46359] border-2 border-[#E46359] px-6 sm:py-3 py-2 rounded-lg hover:bg-[#220001]">Learn More</Link>
                              </div>
                              <div className="md:order-2 order-1 flex items-center text-center md:w-3/5 w-full sm:py-20 lg:px-20 sm:px-10 py-10 px-5 border-r border-white/10 md:min-h-[600px] min-h-[280px] bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${ecoImg})` }}>
                                   <h2 className="sm:text-4xl text-3xl leading-loose">Trade SolBase NFTs and generate <span className="text-[#E46359]">revenue</span> by holding them</h2>
                              </div>
                         </div>
                         <div className="wow fadeInRight flex flex-wrap w-full md:border border-white/10">
                              <div className="flex items-center text-center md:w-3/5 w-full sm:py-20 lg:px-20 sm:px-10 py-10 px-5 border-r border-white/10 md:min-h-[600px] min-h-[280px] bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${defImg})` }}>
                                   <h2 className="sm:text-4xl text-3xl leading-loose"><span className="text-[#AF6FCD]">Invest</span> in trading pools, getting both conservative and degen ROI</h2>
                              </div>
                              <div className="flex flex-col justify-center lg:px-20 sm:px-10 py-10 px-5 md:w-2/5 bg-[#180B24]">
                                   <p className="text-white/70 sm:mb-6 mb-4">The core element of our project. We are a team of traders and developers. The motivation for the team to launch SolBase was to be able to use our extensive manual and algorithmic trading experience to benefit us and others by helping them get high returns on their investment. Thus, we created a platform that contains trading pools, where investors can invest or stake their money for a specific amount of time and get the agreed-on ROI.</p>
                                   <Link to={`/trading-pool`} className="w-fit bg-[#AF6FCD] border-2 border-[#AF6FCD] px-6 sm:py-3 py-2 rounded-lg hover:bg-[#180B24]">Learn More</Link>
                              </div>
                         </div>
                         <div className="wow fadeInLeft flex flex-wrap w-full md:border border-white/10 rounded-b-lg">
                              <div className="md:order-1 order-2 flex flex-col justify-center lg:px-20 sm:px-10 py-10 px-5 md:w-2/5 bg-slate-950">
                                   <p className="text-white/70 sm:mb-6 mb-4">Our trading bots will be available for renting as scripts after launching our pools. Customers can rent them for durations from 1 to 30 days and use them trading their own funds. The bots won’t be available to buy and the source code isn’t available to the public. We will also provide accounts on CEXs to allow customers to copy our trades. This feature will be available on third party platforms, and there will be no fee charged for this outside the platform’s fees.</p>
                                   <Link to={`/trading-bot`} className="w-fit bg-sky-700 border-2 border-sky-700 px-6 sm:py-3 py-2 rounded-lg hover:bg-slate-950">Learn More</Link>
                              </div>
                              <div className="md:order-2 order-1 flex items-center text-center md:w-3/5 w-full sm:py-20 lg:px-20 sm:px-10 py-10 px-5 border-r border-white/10 md:min-h-[600px] min-h-[280px] bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${neuImg})` }}>
                                   <h2 className="sm:text-4xl text-3xl leading-loose w-full">Trading <span className="text-sky-700">bots</span></h2>
                              </div>
                         </div>
                         <div className="wow fadeInRight flex flex-wrap w-full md:border border-white/10 rounded-b-lg">
                              <div className="flex items-center text-center md:w-3/5 w-full sm:py-20 lg:px-20 sm:px-10 py-10 px-5 border-r border-white/10 md:min-h-[600px] min-h-[280px] bg-fixed bg-cover bg-no-repeat bg-center md:rounded-bl-lg" style={{ backgroundImage: `url(${ecoImg})` }}>
                                   <h2 className="sm:text-4xl text-3xl leading-loose w-full"><span className="text-pink-400">Copy</span> Trading</h2>
                              </div>
                              <div className="flex flex-col justify-center lg:px-20 sm:px-10 py-10 px-5 md:w-2/5 bg-rose-950 md:rounded-bl-none rounded-b-lg">
                                   <p className="text-white/70 sm:mb-6 mb-4">The core element of our project. We are a team of traders and developers. The motivation for the team to launch SolBase was to be able to use our extensive manual and algorithmic trading experience to benefit and benefit others by helping them getting a high return on their investment. Thus, we created a plSolBase-AI introduces an innovative copy trading functionality, enabling users to replicate the trading activities of experienced traders seamlessly. Within this feature, users gain access to a selection of high-performing traders on the platform. By linking their accounts to these chosen traders, users can effortlessly mirror their real-time trading actions.</p>
                                   <Link to={`/copy-trading`} className="w-fit bg-pink-400 border-2 border-pink-400 px-6 sm:py-3 py-2 rounded-lg hover:bg-rose-950">Learn More</Link>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     )
}