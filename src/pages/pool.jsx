import bgImg from "../assets/banner/neural.webp";

export default function Pool() {
     return (
          <main className="bg-gradient-to-t from-slate-950 via-purple-500 to-slate-950">
               <section className="md:py-40 py-28 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className="wow fadeIn sl-container">
                         <h2 className="sm:text-5xl text-4xl font-semibold text-amber-500 tracking-wider sm:mb-6 mb-4">Investment Pools</h2>
                         <p className="lg:w-1/2 sm:text-xl text-base leading-loose">SolBase isn’t developed to just be a meme coin. Its main purpose is to offer high ROI and different methods of generating money using the platform. </p>
                    </div>
               </section>
               <section className="md:pb-20 pb-10 md:-mt-20 -mt-16">
                    <div className="sl-container">
                    </div>
               </section>
          </main>
     )
}