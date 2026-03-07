export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
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
    </main>
  );
}