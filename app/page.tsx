"use client";
import { useState, useEffect } from 'react';
import { Trophy, Clock, Layers } from 'lucide-react';

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>₹{count.toLocaleString()}</span>;
};

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
    
    <p className="inline-block mb-6 px-4 py-1 text-sm font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient border border-indigo-500/20 rounded-full">
    Coming to Dhanbad Jharkhand
    </p>

    <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
      Code the Future
    </h1>

    <p className="max-w-2xl text-lg text-slate-400 mb-10">
      A 24-hour sprint of pure creation. Join hundreds of developers, designers, and 
      visionaries to build solutions for the next generation.
    </p>

    <div className="flex gap-4">
      <a href="/register">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.8)]">
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
        {/* --- PASTE BLOCKS START --- */}
  {/* 1. Background Grid Pattern */}
  <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
      style={{ backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }}>
  </div>

  {/* 2. Side Ghost Text (Pinned to screen edges) */}
  <div className="absolute top-0 left-4 h-full hidden lg:flex flex-col justify-around text-9xl font-black text-slate-800/10 select-none pointer-events-none tracking-tighter uppercase [writing-mode:vertical-lr] rotate-180">
    <span>Timeline</span>
    <span>Schedule</span>
  </div>
  
  <div className="absolute top-0 right-4 h-full hidden lg:flex flex-col justify-around text-9xl font-black text-slate-800/10 select-none pointer-events-none tracking-tighter uppercase [writing-mode:vertical-lr]">
    <span>Hacking</span>
    <span>Innovate</span>
  </div>
  {/* --- PASTE BLOCKS END --- */}
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(129,140,248,0.4)]">
          Event Schedule
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-slate-800">
          {/* Add this pulse div inside the line */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-scan shadow-[0_0_20px_rgba(34,211,238,0.5)]"></div>
          </div>

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
<section id="tracks" className="py-24 bg-[#030712] relative z-10 border-t border-slate-800 overflow-hidden">
  
  {/* 1. Main Blueprint Grid (40px) */}
  <div className="absolute inset-0 z-0 pointer-events-none" 
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(71, 85, 105, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(71, 85, 105, 0.2) 1px, transparent 1px)`, 
        backgroundSize: '40px 40px' 
      }}>
  </div>

  {/* 2. Sub-Grid (10px) - Gives it the "Engineering Paper" look */}
  <div className="absolute inset-0 z-0 pointer-events-none" 
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(71, 85, 105, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(71, 85, 105, 0.1) 1px, transparent 1px)`, 
        backgroundSize: '10px 10px' 
      }}>
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    {/* NEON TITLE UPGRADE */}
    <div className="relative mb-20 text-center">
      <h2 className="text-4xl md:text-5xl font-black tracking-tight">
        <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]">
          Hackathon Tracks
        </span>
      </h2>
      
      {/* Underglow Beam - Makes it look 3D */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px] opacity-40"></div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-[3px] opacity-30"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* 1. AI Track - Cyan/Blue Theme */}
      <div className="group relative p-10 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800 transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] cursor-pointer overflow-hidden">
        {/* Unique Cyan Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 pointer-events-none"></div>
        {/* Glass Reflection Swipe - Optimized for Performance */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out pointer-events-none transform-gpu"></div>
        <div className="relative z-10">
          <div className="text-4xl mb-6 transition-transform group-hover:scale-110 duration-300">🤖</div>
          <h3 className="text-2xl font-bold text-white mb-4">AI & Machine Learning</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Leverage LLMs and predictive analytics to solve real-world problems.
          </p>
        </div>
      </div>

      {/* 2. Web3 Track - Purple Theme */}
      <div className="group relative p-10 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800 transition-all duration-500 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] cursor-pointer overflow-hidden">
        {/* Unique Purple Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 pointer-events-none"></div>
        {/* Glass Reflection Swipe */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none transform-gpu"></div>
        <div className="relative z-10">
          <div className="text-4xl mb-6 transition-transform group-hover:scale-110 duration-300">⛓️</div>
          <h3 className="text-2xl font-bold text-white mb-4">Web3 & Blockchain</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Build decentralized applications (dApps) using smart contracts.
          </p>
        </div>
      </div>

      {/* 3. Open Innovation - Amber Theme */}
      <div className="group relative p-10 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800 transition-all duration-500 hover:scale-105 hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] cursor-pointer overflow-hidden">
        {/* Unique Amber Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 rounded-3xl opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 pointer-events-none"></div>
        {/* Glass Reflection Swipe */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none transform-gpu"></div>

        <div className="relative z-10">
          <div className="text-4xl mb-6 transition-transform group-hover:scale-110 duration-300">💡</div>
          <h3 className="text-2xl font-bold text-white mb-4">Open Innovation</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Build anything disruptive in FinTech, EdTech, or Sustainability.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Grand Prizes Section */}
<section id="prizes" className="py-24 bg-[#030712] relative overflow-hidden border-t border-slate-800">
  
  {/* Technical Metadata Overlays - High Visibility */}
<div className="absolute top-8 left-8 hidden lg:block z-20 pointer-events-none">
  <p className="font-mono text-[11px] text-cyan-400 uppercase tracking-[0.3em] leading-tight drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
    <span className="animate-pulse">Status: Verified</span><br />
    <span className="opacity-80">Allocation: Prize_Pool_Main</span><br />
    <span className="opacity-80">Ref: 0xFF-HACK-2026</span>
  </p>
</div>

<div className="absolute bottom-8 right-8 hidden lg:block z-20 pointer-events-none">
  <p className="font-mono text-[11px] text-cyan-400 uppercase tracking-[0.3em] text-right leading-tight drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
    <span className="opacity-80">Lat: 23.7957° N</span><br />
    <span className="opacity-80">Lon: 86.4304° E</span><br />
    <span className="opacity-80">Loc: DHN_JH_IN</span>
  </p>
</div>
  {/* PASTE THE METADATA BLOCK HERE - END */}
  
  {/* Radar Scanning Line - High Visibility Version */}
<div className="absolute left-0 w-full h-[3px] animate-scan pointer-events-none z-10 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.8)] opacity-100"></div>
  
  <div className="max-w-6xl mx-auto px-6">
    {/* Heading */}
    <h2 className="text-4xl font-black text-white mb-16 text-center tracking-tight">
      <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
        Grand Prizes
      </span>
    </h2>

    {/* Prize Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

      {/* Runner Up - Silver Glow */}
      <div className="group relative p-10 rounded-3xl bg-slate-900/40 border border-slate-400/20 text-center transition-all duration-300 hover:scale-105 hover:border-slate-300 hover:shadow-[0_0_30px_rgba(203,213,225,0.4)]">
        <div className="relative z-10">
          <div className="text-5xl mb-4 transition-transform group-hover:scale-110">🥈</div>
          <h3 className="text-xl font-bold text-white mb-2">Runner Up</h3>
          <p className="text-2xl font-black text-slate-300">
            <CountUp end={25000} />
            </p>
        </div>
      </div>

      {/* Overall Winner - Tighter, matching the right image */}
      <div className="group relative p-10 rounded-3xl bg-slate-900/60 border-2 border-amber-500/50 text-center transition-all duration-300 scale-105 z-20 shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)]">
        <div className="relative z-10">
    {/* Emoji - slightly smaller to match size */}
          <div className="text-6xl mb-4 transition-transform group-hover:scale-110">👑</div>
          <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Overall Winner</h3>
          <p className="text-4xl font-black text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">
            <CountUp end={50000} />
            </p>
        </div>
      </div>

      {/* Second Runner Up - Bronze Glow */}
      <div className="group relative p-10 rounded-3xl bg-slate-900/40 border border-orange-700/20 text-center transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(194,65,12,0.5)]">
        <div className="relative z-10">
          <div className="text-5xl mb-4 transition-transform group-hover:scale-110">🥉</div>
          <h3 className="text-xl font-bold text-white mb-2">Second Runner Up</h3>
          <p className="text-3xl font-black text-orange-500">
      <CountUp end={10000} />
    </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
<section id="faq" className="py-24 bg-[#030712] relative z-10 border-t border-slate-800 overflow-hidden">
  
  {/* 1. Main Blueprint Grid (40px) */}
  <div className="absolute inset-0 z-0 pointer-events-none" 
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(71, 85, 105, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(71, 85, 105, 0.2) 1px, transparent 1px)`, 
        backgroundSize: '40px 40px' 
      }}>
  </div>

  {/* 2. Sub-Grid (10px) */}
  <div className="absolute inset-0 z-0 pointer-events-none" 
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(71, 85, 105, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(71, 85, 105, 0.1) 1px, transparent 1px)`, 
        backgroundSize: '10px 10px' 
      }}>
  </div>

  <div className="max-w-4xl mx-auto px-6 relative z-10">
    
    {/* Neon Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black mb-6">
        <span className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]">
          Frequently Asked Questions
        </span>
      </h2>
      <p className="text-slate-400 text-lg">Everything you need to know before you start hacking.</p>
    </div>

    {/* FAQ Grid */}
    <div className="grid gap-6">
      {[
        { 
          q: "Who can participate?", 
          a: "Any university student with a valid ID can join! Whether you're a first-year beginner or a final-year pro, we want you here." 
        },
        { 
          q: "What is the team size?", 
          a: "Teams should consist of 2 to 4 members. Don't have a team? Don't worry, we'll have a team-matching session on Discord!" 
        },
        { 
          q: "Is it an offline or online event?", 
          a: "This is a 24-hour physical hackathon taking place on campus. High-speed Wi-Fi, food, and plenty of coffee will be provided!" 
        },
        { 
          q: "What should I bring?", 
          a: "Your laptop, charger, and a curious mind. If you're staying overnight, a sleeping bag and basic toiletries are recommended." 
        }
      ].map((item, i) => (
        <div 
          key={i} 
          className="group relative p-8 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900/60"
        >
          {/* Subtle Side-Glow on Hover */}
          <div className="absolute inset-y-0 left-0 w-1 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-2xl"></div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
            {item.q}
          </h3>
          <p className="text-slate-400 leading-relaxed text-lg">
            {item.a}
          </p>
        </div>
      ))}
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
            <a href="https://github.com/abhijeetmandal278-alt" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg text-slate-400 hover:text-green-400 transition-all duration-300 hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] border border-transparent hover:border-green-500/20">GitHub</a>            
            <a href="https://www.linkedin.com/in/abhijeet-mandal-429b29385" target="_blank" rel="noopener noreferrer"className="px-4 py-2 rounded-lg text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:bg-indigo-500/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-transparent hover:border-indigo-500/20">LinkedIn</a>
            <a href="mailto:abhijeetmandal278@gmail.com" className="px-4 py-2 rounded-lg text-slate-400 hover:text-red-400 transition-all duration-300 hover:bg-red-500/10 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] border border-transparent hover:border-red-500/20">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}