export default function Thanks() {
    return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
        <div className="bg-slate-800 p-10 rounded-3xl border border-indigo-500/30 text-center shadow-2xl">
        <div className="text-5xl mb-4">🎉</div>
        <h1 className="text-4xl font-bold text-indigo-400 mb-2">You're In!</h1>
        <p className="text-slate-300 text-lg">
            Thanks for registering for <span className="text-white font-mono">HACK_26</span>.
        </p>
        <p className="mt-4 text-sm text-slate-500">Check your SRM email for updates soon.</p>
        <a 
        href="/" 
        className="inline-block mt-8 text-indigo-400 hover:text-indigo-300 underline font-medium"
        >
            Go back to Home
            </a>
            </div>
            </div>
            )
        }