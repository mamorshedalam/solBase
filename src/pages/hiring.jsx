import bgImg from "../assets/banner/neural.webp";
export default function Hiring() {
     return (
          <main className="bg-gradient-to-t from-slate-950 via-purple-500 to-slate-950">
               <section className="md:py-40 py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className="wow fadeIn sl-container">
                         <h2 className="sm:text-5xl text-4xl font-semibold text-amber-500 tracking-wider sm:mb-6 mb-4">Hiring</h2>
                         <p className="lg:w-1/2 sm:text-xl text-base leading-loose">Let's make something great together!</p>
                    </div>
               </section>
               <section className="md:pb-20 pb-10 md:-mt-20 -mt-16 px-2">
                    <div data-wow-duration="2s" className="wow fadeIn max-w-3xl mx-auto text-center border border-white/10 rounded-lg bg-neutral-900/75 backdrop-blur-lg shadow-lg shadow-neutral-900/15 sm:py-20 lg:px-20 sm:px-10 py-10 px-5 ">
                         <h3 className="sm:text-2xl text-xl font-semibold ">01000011 01101111 01101101 01101001 01101110 01100111 00100000 01010011 01101111 01101111 01101110</h3>
                         <p className="text-white/75 sm:my-6 my-4">We want your brains, not your wallet.</p>
                         <a href="mailto:careers@solbaseai.com" className="bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 py-2 px-6 rounded-lg font-semibold hover:text-white">Mail Us</a>
                    </div>
               </section>
          </main>
     )
}