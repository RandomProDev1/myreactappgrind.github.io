import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';
import  Navbar from '../components/Navbar.jsx'; 


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
       {/* Navigation */}
      
      <Navbar/>

       

       {/* Hero Section */}
       <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent leading-tight">
            Level Up Your<br className="hidden md:block"/> Grind Game
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join 50,000+ legends crushing their goals daily. Track progress, compete with friends, and unlock elite achievements.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-sm text-gray-400">Grind Mode</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-blue-400">50k+</div>
              <div className="text-sm text-gray-400">Legends</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-purple-400">1M+</div>
              <div className="text-sm text-gray-400">Hours Logged</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-red-400">∞</div>
              <div className="text-sm text-gray-400">Potential</div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative px-8 py-4 bg-gray-900 rounded-lg text-xl font-bold hover:bg-gray-800 transition-all duration-300 border border-gray-700">
              Become Legendary <span className='inline-block  animate-bounce'>🚀</span>
            </div>
          </button>
        </div>
        {/* ===== SCROLL DOWN ICON - UPDATED ===== */}
        <a 
          href="#features" 
          // MODIFIED: Added classes for centering
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:inline"
        >
          {/* MODIFIED: Changed from border-2 to border */}
          <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-gray-400 rounded-full"
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </a>
        {/* ===== SCROLL DOWN ICON - END ===== */}
       </div>  

       {/* Feature Grid*/}
       <div id="features" className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {[
          {
            title: "Progress Tracking",
            icon: "📈",
            description: "Military-grade tracking systems used by Navy SEALs and billionaires"
          },
          {
            title: "Elite Community",
            icon: "🤝",
            description: "Compete against certified grinders who won't let you slack"
          },
          {
            title: "Achievement System",
            icon: "🏆",
            description: "Unlock legendary status with challenge-based trophies"
          }
        ].map((feature, index) => (
          <div 
            key={feature.title}
            className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-green-400/30 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
            <button className="mt-4 text-green-400 text-sm font-medium hover:underline flex items-center">
              See example 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
       </div>  
       
       {/* Final Call to Action */}
       <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to unlock beast mode?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            You’ve seen the vision. You’ve felt the energy. Now it’s time to stop scrolling and start ascending.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-lg px-8 py-4 rounded-full transition-all duration-300 font-bold shadow-lg shadow-green-500/30">
            Start Your Grind Journey 🛡️
          </button>
        </div>
       </div>  

   
       
       {/* Waitlist System - IMPROVED */}
       <div className='py-20 px-4'>
        <div className='max-w-2xl mx-auto bg-gray-800/50 border border-gray-700 rounded-2xl p-8 sm:p-12 text-center shadow-2xl shadow-green-500/5'>
          
          <h3 className='text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent'>
            Join The Founder's Waitlist
          </h3>
          
          <p className='text-gray-300 mb-8'>
            Be among the <strong className="text-green-400">first 100 users</strong> and get <strong className="text-green-400">permanent VIP status</strong>.
          </p>
      
          <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
            <input 
              type="email"
              placeholder='your.email@grindmachine.com'
              className='flex-grow px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400
                         transition-all duration-300' 
            />
      
            <button className='px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 font-bold text-white
                               rounded-lg transform transition-all duration-300
                               hover:shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5'>
              Lock In My Spot
            </button>
          </div>
      
          <div className="mt-6 flex items-center justify-center text-sm text-gray-400">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
            <span>47 spots remaining — Secure yours now!</span>
          </div>
      
          

          {/*  Add to waitlist section  */}
         <div className="mt-6">
           <div className="flex justify-between text-sm mb-1 text-gray-400">
             <span>Spots filling fast:</span>
             <span>47/100 remaining</span>
           </div>
           <div className="w-full bg-gray-700 rounded-full h-2">
             <div 
               className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full" 
               style={{ width: '53%' }}
             ></div>
           </div>
           <div className="mt-2 text-xs text-gray-500 text-center">
             Offer expires in: <span className="font-bold">48:32:11</span>
           </div>
         </div>
         
         <p className="mt-4 text-xs text-gray-500">
            We respect your inbox. No spam, ever.
         </p>
      
        </div>
       </div>

       {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 py-12 px-4">
       <div className="max-w-6xl mx-auto">
         {/* Core Brand + Social */}
         <div className="flex flex-col md:flex-row justify-between items-center mb-8">
           <div className="text-center md:text-left mb-6 md:mb-0">
             <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
               GRIND++ 🔥
             </span>
             <p className="mt-2 text-gray-500 text-sm">Built for the relentless.</p>
           </div>
     
           {/* --- ICON IMPROVEMENT --- */}
           <div className="flex space-x-4">
             {[
               { platform: 'Twitter', icon: <FaTwitter />, href: '#' },
               { platform: 'Discord', icon: <FaDiscord />, href: '#' },
               { platform: 'Instagram', icon: <FaInstagram />, href: '#' },
             ].map(({ platform, icon, href }) => (
               <a
                 key={platform}
                 href={href}
                 // ADDED: Better transitions and hover effects
                 className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center 
                            border border-gray-700 text-gray-400 
                            transition-all duration-300 ease-in-out
                            hover:bg-green-500/10 hover:border-green-400/50 hover:text-green-400
                            hover:-translate-y-1"
                 aria-label={`Visit our ${platform}`}
                 target="_blank" // Good practice to open social links in a new tab
                 rel="noopener noreferrer"
               >
                 {/* The SVG icon component is used here */}
                 <span className="text-xl">{icon}</span>
               </a>
             ))}
           </div>
           {/* --- END ICON IMPROVEMENT --- */}
         </div>
         
         {/* Separator - A nice visual touch */}
         <hr className="border-gray-800 my-8" />
     
         {/* Minimal Links + Copyright */}
         <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
             <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 mb-4 sm:mb-0">
               {['Waitlist', 'Roadmap', 'Support', 'Privacy Policy'].map((item) => (
                 <a
                   key={item}
                   href="#"
                   className="hover:text-green-400 transition-colors"
                 >
                   {item}
                 </a>
               ))}
             </div>
             <div className="text-center">
               © {new Date().getFullYear()} Grind++ • Forged in fire.
             </div>
         </div>
       </div>
      </footer>

    

    </div>
  );
}

export default App;
