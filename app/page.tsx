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
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#schedule" className="hover:text-white transition">Schedule</a>
          <a href="#prizes" className="hover:text-white transition">Prizes</a>
        </div>
        <a href="/register">
        <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg font-medium transition">
          Register
          </button>
          </a>
          </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm mb-6">
          Coming to Dhanbad Jharkhand
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-linear-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Code the Future.
        </h1>
        <p className="max-w-2xl text-lg text-slate-400 mb-10">
          A 24-hour sprint of pure creation. Join hundreds of developers, designers, and 
          visionaries to build solutions for the next generation.
        </p>
        <div className="flex gap-4">
          <a href="/register">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition">
            Apply Now
            </button>
            </a>
          <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition border border-slate-700">
            View Tracks
          </button>
        </div>
      </section>

      {/* Info Cards */}
      <section id="about" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-20 border-t border-slate-800">
        <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
          <h3 className="text-xl font-bold mb-3 text-indigo-400">₹1,00,000+</h3>
          <p className="text-slate-400">In prizes, swag, and internship opportunities for the winning teams.</p>
        </div>
        <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
          <h3 className="text-xl font-bold mb-3 text-indigo-400">24 Hours</h3>
          <p className="text-slate-400">Non-stop building, mentoring, and workshops from industry experts.</p>
        </div>
        <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
          <h3 className="text-xl font-bold mb-3 text-indigo-400">Any Track</h3>
          <p className="text-slate-400">Whether it is AI, Web3, or Fintech—build what you are passionate about.</p>
        </div>
      </section>
      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-slate-800/50 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-400 mb-8">Event Schedule</h2>
          <div className="text-slate-400 space-y-4">
            <p>🕒 09:00 AM - Opening Ceremony</p>
            <p>💻 10:00 AM - Hacking Begins</p>
            <p>🍕 01:00 PM - Lunch Break</p>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-400 mb-8">Prizes</h2>
          <p className="text-slate-400">Grand Prize: ₹50,000 + Internship Opportunities</p>
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
            <a href="https://github.com/abhijeetmandal278-alt" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/abhijeet-man-429b29385" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:abhijeetmandal278@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}