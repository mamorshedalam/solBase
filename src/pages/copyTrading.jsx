import bgImg from "../assets/banner/neural.webp";
import fig7Img from "../assets/figure/figure7.png";

export default function CopyTrading() {
     return (
          <main className="bg-gradient-to-t from-slate-950 via-purple-500 to-slate-950">
               <section className="md:py-40 py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className="wow fadeIn sl-container">
                         <h2 className="sm:text-5xl text-4xl font-semibold text-amber-500 tracking-wider sm:mb-6 mb-4">Copy Trading</h2>
                    </div>
               </section>
               <section className="md:pb-20 pb-10 md:-mt-20 -mt-16">
                    <div className="sl-container">
                         <div className="wow fadeInUp bg-rose-950 rounded-lg border border-white/15 md:px-20 md:py-20 py-12 px-5 shadow shadow-[#180B24]/30">
                              <p className="mb-6">SolBase-AI introduces an innovative copy trading functionality, enabling users to replicate the trading activities of experienced traders seamlessly. Within this feature, users gain access to a selection of high-performing traders on the platform. By linking their accounts to these chosen traders, users can effortlessly mirror their real-time trading actions.</p>
                              <div className="flex flex-wrap items-center">
                                   <div className="lg:w-1/4 w-full mb-6"><img className="max-w-xs w-full mx-auto" src={fig7Img} alt="" /></div>
                                   <div className="lg:w-3/4 w-full">
                                        <p className="mb-6">The copy trading feature offers a valuable opportunity for traders who may lack experience or time to benefit from the expertise and track record of seasoned traders. Users can thoroughly assess the performance history, risk profile, and trading strategies of available traders before making their selection. Once the connection is established, the platform takes charge, executing trades on the user's behalf in accordance with the chosen trader's decisions.</p>
                                        <p className="mb-6"> In essence, SolBase-AI springs into action, executing trades on your behalf in synchronization with the selected trader's maneuvers. Picture reaping the benefits of expert wisdom while you concentrate on other priorities or progressively build your trading skills. With SolBase-AI's copy trading feature, the journey to trading success not only becomes more accessible but also more intelligent.</p>
                                   </div>
                              </div>
                              <p className="mb-6">Seize the opportunity to reshape your trading journey with SolBase-AI's distinctive copy trading feature. It's not just a matter of convenience; it's a chance to elevate your success by tapping into the knowledge of trading experts.</p>
                         </div>
                    </div>
               </section>
          </main>
     )
}