import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImg from "../assets/banner/neural.webp";
import sub1Img from "../assets/member/Picture1.jpg";
import sub2Img from "../assets/member/Picture2.jpg";
import sub3Img from "../assets/member/Picture3.jpg";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

export default function Nft() {
     return (
          <main className="bg-gradient-to-t from-slate-950 via-purple-500 to-slate-950">
               <section className="md:py-40 py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className="sl-container">
                         <h2 className="sm:text-5xl text-4xl font-semibold text-amber-500 tracking-wider sm:mb-6 mb-4">NFTs</h2>
                         <p className="lg:w-1/2 sm:text-lg text-base leading-loose mb-3">Owning a SOLBASE NFT is a luxury leveraging the unique opportunities within the digital asset ecosystem. Not everyone will get to own one as there will only ever be 1000 NFTs minted. The NFTs can be held, traded, staked and  can be used to access SOLBASE degen pools.</p>
                         <p className="lg:w-1/2 sm:text-lg text-base leading-loose mb-3">The model is simple, there are only 3 different types of NFTs. All of them provide access to the degen haven, but each tier provides customers with different ROI. On top of that, NFT holders will enjoy zero fees when depositing and withdrawing their investment.</p>
                         <p className="lg:w-1/2 sm:text-lg text-base leading-loose mb-3">Every NFT will also benefit from constant revenue from the SAAS from the bots that will be rented. </p>
                         <p className="text-center sm:text-2xl text-lg font-medium mt-6">NFT Sale Will Be Available <span className="text-amber-500">Soon</span> </p>
                    </div>
               </section>
               <section className="md:pb-20 pb-10 md:-mt-20 -mt-16">
                    <div className="sl-container md:pb-20 pb-10">
                         <div className="flex flex-wrap border border-white/10 rounded-lg">
                              <div className="md:w-64 w-full"><img src={sub1Img} alt="" className="w-full h-full object-cover rounded-t-lg md:rounded-tr-none" /></div>
                              <div className="w-0 flex-grow md:rounded-tr-lg md:border-l border-white/10 bg-[#1B1C1E] md:p-16 p-4">
                                   <h3 className="text-2xl font-semibold text-amber-500 mb-4 tracking-wide">Non NFT holders</h3>
                                   <ul className="space-y-2">
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Get 110% on their investment per 14 days on USDT & USDC </li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Get 115% on their investment per 14 days on $SOLBASE</li>
                                        <li><FontAwesomeIcon className="text-gray-500 mr-2" icon={faCircleCheck} /> Access to degen pool</li>
                                        <li><FontAwesomeIcon className="text-gray-500 mr-2" icon={faCircleCheck} /> Exempt from paying fees when depositing</li>
                                        <li><FontAwesomeIcon className="text-gray-500 mr-2" icon={faCircleCheck} /> Exempt from paying fees when withdrawing</li>
                                   </ul>
                              </div>
                         </div>
                         <div className="flex flex-wrap border border-white/10 rounded-lg">
                              <div className="md:w-64 w-full"><img src={sub1Img} alt="" className="w-full h-full object-cover " /></div>
                              <div className="w-0 flex-grow md:border-l border-white/10 bg-[#1B1C1E] md:p-16 p-4">
                                   <h3 className="text-2xl font-semibold text-amber-500 mb-4 tracking-wide">Silver</h3>
                                   <ul className="space-y-2">
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Get 130% on their investment per week on USDT & USDC </li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Get 150% on their investment per week on $SOLBASE</li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Access to degen pool</li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Exempt from paying fees when depositing </li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Exempt from paying fees when withdrawing</li>
                                   </ul>
                              </div>
                         </div>
                         <div className="flex flex-wrap border border-white/10 rounded-lg">
                              <div className="md:w-64 w-full"><img src={sub2Img} alt="" className="w-full h-full object-cover " /></div>
                              <div className="w-0 flex-grow md:border-l border-white/10 bg-[#1B1C1E] md:p-16 p-4">
                                   <h3 className="text-2xl font-semibold text-amber-500 mb-4 tracking-wide">Gold</h3>
                                   <ul className="space-y-2">
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Get 140% on their investment per week on USDT & USDC </li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Get 180% on their investment per week on $SOLBASE</li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Access to degen pool  </li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Exempt from paying fees when depositing </li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Exempt from paying fees when withdrawing</li>
                                   </ul>
                              </div>
                         </div>
                         <div className="flex flex-wrap border border-white/10 rounded-lg">
                              <div className="md:w-64 w-full"><img src={sub3Img} alt="" className="w-full h-full object-cover md:rounded-bl-lg" /></div>
                              <div className="w-0 flex-grow rounded-b-lg md:rounded-bl-none md:border-l border-white/10 bg-[#1B1C1E] md:p-16 p-4">
                                   <h3 className="text-2xl font-semibold text-amber-500 mb-4 tracking-wide">Stellar</h3>
                                   <ul className="space-y-2">
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Get 180% on their investment per week on USDT & USDC </li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Get 220% on their investment per week on $SOLBASE</li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Access to degen pool  </li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Exempt from paying fees when depositing </li>
                                        <li><FontAwesomeIcon className="text-amber-500 mr-2" icon={faCircleCheck} /> Exempt from paying fees when withdrawing</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <p className="text-center capitalize text-lg font-medium">This Page Will Be Updated With More info <span className="text-amber-500">prior</span> to launching our pools <span className="block text-2xl">Stay tuned</span></p>
               </section>
          </main>
     )
}