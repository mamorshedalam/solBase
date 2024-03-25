import bgImg from "../assets/banner/neural.webp";
import fig3Img from "../assets/figure/figure3.png";

export default function TradingBot() {
     return (
          <main className="bg-gradient-to-t from-slate-950 via-purple-500 to-slate-950">
               <section className="md:py-40 py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className="wow fadeIn sl-container">
                         <h2 className="sm:text-5xl text-4xl font-semibold text-amber-500 tracking-wider sm:mb-6 mb-4">Trading Bots Rental</h2>
                    </div>
               </section>
               <section className="md:pb-20 pb-10 md:-mt-20 -mt-16">
                    <div className="sl-container">
                         <div className="wow fadeInUp bg-[#180B24] rounded-lg border border-white/15 md:px-20 md:py-20 py-12 px-5 shadow shadow-[#180B24]/30">
                              <p className="mb-6">Through seamless integration with leading cryptocurrency exchanges, SolBase-AI grants users direct access to execute trades. Automation eliminates manual tasks, keeping traders ahead of the curve in a fast-paced market.</p>
                              <div className="flex flex-wrap items-center">
                                   <div className="lg:w-1/4 w-full mb-6"><img className="max-w-xs w-full mx-auto" src={fig3Img} alt="" /></div>
                                   <div className="lg:w-3/4 w-full">
                                        <p className="mb-6">Furthermore, SolBase-AI places a strong emphasis on risk management. Traders can customize parameters to align with their risk tolerance, ensuring the protection of their capital in volatile conditions.</p>
                                        <p className="mb-6">With detailed performance reports and an intuitive administrative panel, SolBase-AI empowers traders to monitor and optimize their strategies. Data-driven decisions result in consistent outcomes.</p>
                                        <p className="mb-6">In summary, SolBase-AI streamlines trading, automates execution, and underscores risk management to meet the market's demands. It offers access to advanced strategies and user-friendly tools, aiding traders in confidently and efficiently navigating the market.</p>
                                   </div>
                              </div>
                              <p className="mb-6">Renting a trading bot is the best option if a customer wants to keep his funds in his own exchange and trade under their own supervision</p>
                              <p className="font-medium italic mb-6">The auto trading feature eliminates the need for manual intervention and allows users to take advantage of trading opportunities 24/7, even when they are not actively monitoring the market.</p>
                         </div>
                    </div>
               </section>
          </main>
     )
}