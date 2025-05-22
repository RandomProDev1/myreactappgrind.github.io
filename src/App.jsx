import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800/80 backdrop-blur-lg border-b border-gray-700 fixed w-full top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                GRIND++ 🔥
              </span>
            </div>
            
            {/* Right Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button className="hover:text-green-400 transition-all duration-300">
                Dashboard
              </button>
              <button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full transition-all duration-300 shadow-lg shadow-green-500/20">
                Start Grinding
              </button>
            </div>
          </div>
        </div>
      </nav>

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
              Become Legendary 🚀
            </div>
          </button>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {['Progress Tracking', 'Elite Community', 'Achievement System'].map((feature) => (
          <div key={feature} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-green-400/30 transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 mb-4 rounded-lg bg-green-500/10 flex items-center justify-center">
              <div className="w-6 h-6 bg-green-500 rounded-full"/>
            </div>
            <h3 className="text-xl font-bold mb-3">{feature}</h3>
            <p className="text-gray-400">Level up your grind with military-grade tracking systems used by top performers.</p>
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
    </div>
  );
}

export default App;
