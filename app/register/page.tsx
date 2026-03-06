export default function Register() {
    return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
        <h1 className="text-3xl font-bold mb-2 text-center">Join HACK_26</h1>
        <p className="text-slate-400 text-center mb-8">Fill in your details to secure your spot.</p>
        
        <form className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
            <input
            type="text"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Abhijeet Mandal"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">College Email</label>
            <input
            type="email" 
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="am5185@srmist.edu.in"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">GitHub Username</label>
            <input
            type="text" 
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Abhijeet6080"
            />
            </div>

            <button 
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg font-bold transition mt-4"
            >
            Submit Application
            </button>
            </form>

        <a href="/" className="block text-center mt-6 text-slate-500 hover:text-white text-sm transition">
        ← Cancel and return home
        </a>
        </div>
    </div>
    );
}