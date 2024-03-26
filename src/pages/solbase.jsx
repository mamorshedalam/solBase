import bgImg from "../assets/banner/neural.webp";
import fig2Img from "../assets/figure/figure2.png";

export default function SolBase() {
     return (
          <main className="bg-gradient-to-t from-slate-950 via-purple-500 to-slate-950">
               <section className="md:py-40 py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className="wow fadeIn sl-container">
                         <h2 className="sm:text-5xl text-4xl font-semibold text-amber-500 tracking-wider sm:mb-6 mb-4">The Token $SOLBASE</h2>
                    </div>
               </section>
               <section className="md:pb-20 pb-10 md:-mt-20 -mt-16">
                    <div className="sl-container">
                         <div className="wow fadeInUp bg-[#181D2B] rounded-lg border border-white/15 md:px-20 md:py-20 py-12 px-5 shadow shadow-[#180B24]/30">
                              <p className="mb-6">SolBase-AI initiates its journey by launching $SOLBASE tokens on Solana and Base chains, tapping into the burgeoning market potential. Through an Initial Coin Offering (ICO), users can acquire $SOLBASE tokens, which serve as both tradable assets and access keys to the exclusive "Degen Haven" trading pools.</p>
                              <div className="flex flex-wrap items-center">
                                   <div className="lg:w-1/4 w-full mb-6"><img className="max-w-xs w-full mx-auto" src={fig2Img} alt="" /></div>
                                   <div className="lg:w-3/4 w-full mb-6">
                                        <h4 className="text-amber-500 text-xl font-medium mb-4">What are the benefits of buying/holding $SOLBASE?</h4>
                                        <ul className="list-disc ml-6 space-y-3">
                                             <li>To be traded as a meme coin in the current explosive meme atmosphere. Recently meme coins on Solana & Base chains are skyrocketing, making millionaires everyday. Even though the plan was always to launch the tokens after activating the investment pools, however after seeing the current market potential, we decided to switch things around, and launch the tokens first so that our investors can benefit from the current aura.</li>
                                             <li>The main benefit of $SOLBASE is to act as a key for its holders to access our Degen Haven. The Degen Haven is where all the high ROI pools are, and is only accessible for token & NFT holders. The quantity a holder is required to hold to have access to these pools will be confirmed prior to the launch of the pools.</li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </main>
     )
}