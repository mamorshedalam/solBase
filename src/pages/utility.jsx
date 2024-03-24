import tradeImg from "../assets/banner/ai-trading.jpg";
import ecoImg from "../assets/banner/eco-pattern.jpg";
import defImg from "../assets/banner/definsurance.jpg";

export default function Utility() {
     return (
          <section className="md:py-20 py-10 bg-gradient-to-t from-purple-500 to-slate-950">
               <div className="sl-container">
                    <div className="flex flex-wrap w-full md:border border-white/10 rounded-t-lg">
                         <div className="flex items-center text-center md:w-3/5 w-full sm:py-20 lg:px-20 sm:px-10 py-10 px-5 border-r border-white/10 md:min-h-[600px] min-h-[280px] bg-fixed bg-cover bg-no-repeat bg-center md:rounded-tr-none rounded-t-lg" style={{ backgroundImage: `url(${tradeImg})` }}>
                              <h2 className="sm:text-4xl text-3xl leading-loose">Trade <span className="text-[#208D7D]">$SOLBASE</span> on Solana/Base Chains as meme coins </h2>
                         </div>
                         <div className="flex flex-col justify-center sm:py-20 lg:px-20 sm:px-10 py-10 px-5 md:w-2/5 bg-[#181D2B] rounded-tr-lg">
                              <p className="text-white/70 sm:mb-6 mb-4">We decided to launch $SOLBASE on both Solana and Base chains, as this is where the market is currently exploding. We will offer an ICO on both tokens and launch them. Tokens can be traded, but also if held, they will provide customers with access to the Degen Haven.</p>
                              <button className="w-fit bg-[#208D7D] border-2 border-[#208D7D] px-6 sm:py-3 py-2 rounded-lg hover:bg-[#181D2B]">Learn More</button>
                         </div>
                    </div>
                    <div className="flex flex-wrap w-full md:border border-white/10">
                         <div className="md:order-1 order-2 flex flex-col justify-center lg:px-20 sm:px-10 py-10 px-5 md:w-2/5 bg-[#220001]">
                              <p className="text-white/70 sm:mb-6 mb-4">Our NFTs are not just jpegs. There will only ever be 1000 NFTs minted, therefore they can be traded as they will appreciate in value, they can be staked to generate ROI, but their main utility is to be used as an access key to the Degen Haven and provide investors with degenly high ROI.</p>
                              <button className="w-fit bg-[#E46359] border-2 border-[#E46359] px-6 sm:py-3 py-2 rounded-lg hover:bg-[#220001]">Learn More</button>
                         </div>
                         <div className="md:order-2 order-1 flex items-center text-center md:w-3/5 w-full sm:py-20 lg:px-20 sm:px-10 py-10 px-5 border-r border-white/10 md:min-h-[600px] min-h-[280px] bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${ecoImg})` }}>
                              <h2 className="sm:text-4xl text-3xl leading-loose">Trade SolBase NFTs and generate <span className="text-[#E46359]">revenue</span> by holding them</h2>
                         </div>
                    </div>
                    <div className="flex flex-wrap w-full md:border border-white/10 rounded-b-lg">
                         <div className="flex items-center text-center md:w-3/5 w-full sm:py-20 lg:px-20 sm:px-10 py-10 px-5 border-r border-white/10 md:min-h-[600px] min-h-[280px] bg-fixed bg-cover bg-no-repeat bg-center md:rounded-bl-lg" style={{ backgroundImage: `url(${defImg})` }}>
                              <h2 className="sm:text-4xl text-3xl leading-loose"><span className="text-[#AF6FCD]">Invest</span> in trading pools, getting both conservative and degen ROI</h2>
                         </div>
                         <div className="flex flex-col justify-center lg:px-20 sm:px-10 py-10 px-5 md:w-2/5 bg-[#180B24] md:rounded-bl-none rounded-b-lg">
                              <p className="text-white/70 sm:mb-6 mb-4">The core element of our project. We are a team of traders and developers. The motivation for the team to launch SolBase was to be able to use our extensive manual and algorithmic trading experience to benefit and benefit others by helping them getting a high return on their investment. Thus, we created a platform that contains trading pools, where investors can invest or stake their money for a specific amount of time and get the agreed-on ROI. </p>
                              <button className="w-fit bg-[#AF6FCD] border-2 border-[#AF6FCD] px-6 sm:py-3 py-2 rounded-lg hover:bg-[#180B24]">Learn More</button>
                         </div>
                    </div>
               </div>
          </section>
     )
}