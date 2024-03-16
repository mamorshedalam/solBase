import logoImg from '../assets/logo.png';
export default function RootLayout() {
     return (
          <main className="sl-container">
               <div className="min-h-screen w-full flex flex-wrap items-center">
                    <div className="md:w-2/5 w-2/3 mx-auto">
                         <img src={logoImg} alt="logo" />
                    </div>
                    <div className="md:w-3/5 w-full lg:pl-10">
                         <h3 className="md:text-5xl text-3xl font-bold tracking-widest md:mb-6 mb-4">COMING SOON</h3>
                         <h2 className="md:text-2xl text-xl font-medium leading-relaxed mb-2">Get ready to revolutionize your crypto investments with <span className="text-amber-500 font-semibold">SolBase-AI</span></h2>
                         <p className="md:text-base text-sm opacity-80">Where buying tokens and maximizing returns through investment pools is just the beginning. Coming soon to redefine your financial future!</p>
                    </div>
               </div>
          </main>
     )
}