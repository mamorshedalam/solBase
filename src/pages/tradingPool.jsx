import bgImg from "../assets/banner/neural.webp";
import fig1Img from "../assets/figure/figure9.png";

export default function TradingPool() {
     return (
          <main className="bg-gradient-to-t from-slate-950 via-purple-500 to-slate-950">
               <section className="md:py-40 py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className="wow fadeIn sl-container">
                         <h2 className="sm:text-5xl text-4xl font-semibold text-amber-500 tracking-wider sm:mb-6 mb-4">Investment Pools</h2>
                    </div>
               </section>
               <section className="md:pb-20 pb-10 md:-mt-20 -mt-16">
                    <div className="sl-container">
                         <div className="wow fadeInUp bg-[#180B24] rounded-lg border border-white/15 md:px-20 md:py-20 py-12 px-5 shadow shadow-[#180B24]/30">
                              <p className="mb-6">The core element of SolBase-AI lies its innovative approach to investment pools. Leveraging the expertise of a team comprising seasoned traders and developers, SolBase-AI curates diverse trading pools that cater to both conservative and adventurous investors. By staking funds in these pools, users can secure attractive returns, with some pools exclusively accessible to $SOLBASE and NFT holders.</p>
                              <div className="flex flex-wrap items-center">
                                   <div className="lg:w-1/4 w-full mb-6"><img className="max-w-xs w-full mx-auto" src={fig1Img} alt="" /></div>
                                   <div className="lg:w-3/4 w-full">
                                        <p className="mb-6">The motivation for the team to launch SolBase-AI was to be able to use our extensive manual and algorithmic trading experience to benefit us and benefit others by helping them getting a high return on their investment. Thus, we created a platform that contains trading pools, where investors can invest or stake their money for a specific amount of time and get the agreed-on ROI.</p>
                                        <p className="mb-6"> Trading pools are generated everyday depending on the supply and demand. They are also limited to use to make sure we can provide the agreed-on ROI. Not all pools will provide the same return, and there will be some pools restricted to NFT and $SOLBASE holders “The Degen Haven”.</p>
                                        <p className="mb-6">Investment can be done using USDT, USDC and $SOLBASE. $SOLBASE providing the highest ROI.</p>
                                   </div>
                              </div>
                              <div className="mb-6">
                                   <h4 className="text-amber-500 text-xl font-medium mb-4">How does it work?</h4>
                                   <ul className="list-disc ml-6 space-y-3">
                                        <li>SolBase-AI trading pools are launched on daily basis. Each pool will have its own parameters, such as ROI, duration of maturity, maximum allocation per person and size of the pool.</li>
                                        <li>Investors choose what token they would want to use for their investment.</li>
                                        <li>After the investor connects their wallet and deposits their investment, they will get a receipt with all the details, mainly their ROI, date and time of their maturity.</li>
                                        <li>Once the pool matures, investors can withdraw their funds by clicking on the "Withdraw" button. Funds will go back to the wallet they deposited with.</li>
                                   </ul>
                              </div>
                              <p className="mb-6">There is a 1% fee for depositing and withdrawing your funds, unless you are an NFT holder, holding the minimum quantity required for $SOLBASE or investing the Degen Haven.</p>
                              <div className="mb-6">
                                   <h4 className="text-amber-500 text-xl font-medium mb-4">How do we get the promised ROI?</h4>
                                   <p className="mb-6">Our team comprises seasoned professional traders with over a decade of experience in both forex and cryptocurrency markets, accumulating a wealth of expertise totalling over 40 years collectively. With an impressive track record, we boast an 82% success rate on our manual trades, while our trading bots demonstrate a commendable 72.3% accuracy. Transparency is paramount to us, which is why we are committed to showcasing our trades live. Prior to the launch of our trading pools, we will host an open week during which we will execute a series of live trades, both manual and automated, streamed directly to investors. We will even buy a funded challenge live and pass its 2 phases within that week. This demonstration aims to underscore the legitimacy and efficacy of our strategies, emphasizing that our platform operates with integrity and is in no way associated with any Ponzi scheme.</p>
                              </div>
                              <div className="mb-6">
                                   <h4 className="text-amber-500 text-xl font-medium mb-4">What happens to the funds if the team wasn't able to make the promised ROI?</h4>
                                   <p className="mb-6">In the unlikely event that we wont be able to secure the profits. A poll will be generated on our socials only for the investors who invested in that pool specific pool giving them the choice to either withdraw their deposit completely or give us an extension. Investors' deposits are always protected as most of them are not used for the trades, what we are using are funded accounts that we already secured for forex, they are only used if we are trading cryptocurrencies. Therefore it is not an option for anyone to lose their deposit specially that we will have a funding wallet secured from the NFT sales and royalities, and team tokens.</p>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     )
}