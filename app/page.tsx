import { Trophy, Clock, Layers } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white font-sans relative overflow-hidden">
      {/* Advanced Tech Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
          style={{ backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}>
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)] pointer-events-none">
      </div>

      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-md">
        <h2 className="text-2xl font-bold tracking-tighter">HACK_26</h2>
        <div className="space-x-6 hidden md:block text-slate-400">
          <a href="#about" className="px-5 py-2 rounded-xl text-slate-300 transition-all duration-300 hover:text-amber-400 hover:bg-amber-500/10 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] border border-transparent hover:border-amber-500/20">About</a>
          <a href="#schedule" className="px-5 py-2 rounded-xl text-slate-300 transition-all duration-300 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-transparent hover:border-cyan-500/20">Schedule</a>
          <a href="#prizes" className="px-5 py-2 rounded-xl text-slate-300 transition-all duration-300 hover:text-fuchsia-400 hover:bg-fuchsia-500/10 hover:shadow-[0_0_15px_rgba(192,38,211,0.4)] border border-transparent hover:border-fuchsia-500/20">Prizes</a>
        </div>
        <a href="/register">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-indigo-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] animate-pulse">
            Register
          </button>
        </a>
      </nav>

{/* Hero Section - Text Side */}
<section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24 px-6 relative z-10">
  
  {/* THIS IS THE MISSING PURPLE BOX WRAPPER */}
  <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative shadow-2xl shadow-indigo-500/10">
    
    <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm mb-6">
      Coming to Dhanbad Jharkhand
    </div>

    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent leading-tight">
      Code the Future
    </h1>

    <p className="max-w-2xl text-lg text-slate-400 mb-10">
      A 24-hour sprint of pure creation. Join hundreds of developers, designers, and 
      visionaries to build solutions for the next generation.
    </p>

    <div className="flex gap-4">
      <a href="/register">
        <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
          Apply Now
        </button>
      </a>
      <a href="#tracks">
        <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]">
          View Tracks
        </button>
      </a>
    </div>
  </div>
        
        {/* High-Tech Image Visual */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-10 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
              alt="Advanced Tech Visual" 
              className="w-full h-auto opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section id="about" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-20 border-t border-slate-800">
        <div className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 transition-all duration-300 hover:scale-105 hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]">
          <Trophy className="w-8 h-8 text-indigo-400 mb-4 transition-transform group-hover:rotate-12" />
          <h3 className="text-xl font-bold mb-3 text-indigo-400">₹1,00,000+</h3>
          <p className="text-slate-400">In prizes, swag, and internship opportunities for the winning teams.</p>
        </div>

        <div className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]">
          <Clock className="w-8 h-8 text-cyan-400 mb-4 transition-transform group-hover:scale-110" />
          <h3 className="text-xl font-bold mb-3 text-cyan-400">24 Hours</h3>
          <p className="text-slate-400">Non-stop building, mentoring, and workshops from industry experts.</p>
        </div>

        <div className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 transition-all duration-300 hover:scale-105 hover:border-fuchsia-500/50 hover:shadow-[0_0_25px_rgba(192,38,211,0.2)]">
          <Layers className="w-8 h-8 text-fuchsia-400 mb-4 transition-transform group-hover:-translate-y-1" />
          <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Any Track</h3>
          <p className="text-slate-400">Whether it is AI, Web3, or Fintech—build what you are passionate about.</p>
        </div>
      </section>

      {/* Event Schedule Section */}
      <section id="schedule" className="py-24 bg-slate-900/50 border-y border-slate-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16 bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Event Schedule
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-slate-800"></div>

            {/* Event 1 */}
            <div className="mb-12 ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right relative">
              <div className="absolute -left-[43px] md:-left-auto md:-right-[10px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] border-4 border-slate-900 z-10"></div>
              <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all hover:scale-105">
                <span className="text-indigo-400 font-mono font-bold text-sm tracking-widest uppercase">09:00 AM</span>
                <h3 className="text-xl font-bold text-white mt-1">🕒 Opening Ceremony</h3>
              </div>
            </div>

            {/* Event 2 - Right Side */}
          <div className="mb-12 ml-12 md:ml-0 md:w-1/2 md:ml-auto md:pl-12 relative">
            {/* The Dot - repositioned to stay on the line */}
            <div className="absolute -left-[43px] md:-left-[10px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] border-4 border-slate-900 z-10"></div>
            {/* The Card */}
          <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-105">
              <span className="text-cyan-400 font-mono font-bold text-sm tracking-widest uppercase">10:00 AM</span>
              <h3 className="text-xl font-bold text-white mt-1">💻 Hacking Begins</h3>
          </div>
        </div>

            {/* Event 3 */}
            <div className="mb-12 ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right relative">
              <div className="absolute -left-[43px] md:-left-auto md:-right-[10px] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-fuchsia-500 shadow-[0_0_15px_rgba(192,38,211,0.5)] border-4 border-slate-900 z-10"></div>
              <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-fuchsia-500/50 transition-all hover:scale-105">
                <span className="text-fuchsia-400 font-mono font-bold text-sm tracking-widest uppercase">01:00 PM</span>
                <h3 className="text-xl font-bold text-white mt-1">🍕 Lunch Break</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Tracks Section */}
      <section id="tracks" className="py-24 bg-[#030712] relative z-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-400 mb-12 text-center">Hackathon Tracks</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* AI Track */}
      <div className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 transition-all duration-300 hover:scale-105 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] overflow-hidden">
        {/* THE MISSING GLOW LAYER */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none"></div>
        {/* Layer 2: NEW SHINY REFLECTION SWIPE */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-2xl mb-4">🤖</div>
          <h3 className="text-xl font-bold text-white mb-3">AI & Machine Learning</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Leverage LLMs, computer vision, or predictive analytics to solve real-world problems.
          </p>
        </div>
      </div>

      {/* Web3 Track */}
      <div className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] overflow-hidden">
        {/* THE MISSING GLOW LAYER */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none"></div>
        {/* Layer 2: NEW SHINY REFLECTION SWIPE */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-2xl mb-4">⛓️</div>
          <h3 className="text-xl font-bold text-white mb-3">Web3 & Blockchain</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Build decentralized applications (dApps) using smart contracts.
          </p>
        </div>
      </div>

      {/* Open Innovation */}
      <div className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 transition-all duration-300 hover:scale-105 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] overflow-hidden">
        {/* THE MISSING GLOW LAYER */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 pointer-events-none"></div>
        {/* Layer 2: NEW SHINY REFLECTION SWIPE */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-2xl mb-4">💡</div>
          <h3 className="text-xl font-bold text-white mb-3">Open Innovation</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Build anything disruptive in FinTech, EdTech, or Sustainability.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Grand Prizes Section */}
      <section id="prizes" className="py-24 bg-[#030712] relative overflow-hidden border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Grand Prizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(192,192,192,0.6)]">
              <div className="text-4xl mb-4">🥈</div>
              <h3 className="text-xl font-bold text-white mb-2">Runner Up</h3>
              <p className="text-2xl font-black text-slate-300">₹25,000</p>
            </div>
            <div className="group relative p-8 rounded-2xl bg-slate-900/60 border-2 border-amber-500/40 text-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(245,158,11,0.8)]">
              <div className="text-5xl mb-4">👑</div>
              <h3 className="text-2xl font-bold text-white mb-2">Overall Winner</h3>
              <p className="text-4xl font-black text-amber-400">₹50,000</p>
            </div>
            <div className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.7)]">
              <div className="text-4xl mb-4">🥉</div>
              <h3 className="text-xl font-bold text-white mb-2">Second Runner Up</h3>
              <p className="text-2xl font-black text-orange-500">₹10,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 border-t border-slate-800 bg-[#030712] relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-xl font-bold tracking-tighter text-white">HACK_26</h2>
            <p className="text-slate-500 text-sm mt-1">© 2026 Code the Future. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href="https://github.com/abhijeetmandal278-alt" target="_blank" className="px-4 py-2 rounded-lg text-slate-400 hover:text-white transition-all duration-300 hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-transparent hover:border-green-500/20">GitHub</a>
            <a href="https://linkedin.com/in/abhijeet-man-429b29385" target="_blank" className="px-4 py-2 rounded-lg text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:bg-indigo-500/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-transparent hover:border-indigo-500/20">LinkedIn</a>
            <a href="mailto:abhijeetmandal278@gmail.com" className="px-4 py-2 rounded-lg text-slate-400 hover:text-red-400 transition-all duration-300 hover:bg-red-500/10 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] border border-transparent hover:border-red-500/20">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}