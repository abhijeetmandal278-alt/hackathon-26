'use client'
import { supabase } from '../supabase'
import { useState } from 'react'
import { useRouter } from 'next/navigation' // 1. Added this import

export default function Register() {
    const router = useRouter() // 2. Initialize the router
    const [formData, setFormData] = useState({ name: '', email: '', github: '' })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    const { error } = await supabase.from('registrations').insert([formData])
    
    if (error) {
        alert('Error: ' + error.message)
        setLoading(false)
    } else {
      // 3. Replaced the alert with a redirect to the /thanks page
        router.push('/thanks') 
    }
}

return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 w-full max-w-md shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-400">HACK_26 Signup</h1>
        
        <div className="space-y-4"><input 
            placeholder="Full Name" 
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            value={formData.name}
            required
            disabled={loading} // Disable during loading
            />
            <input 
            placeholder="College Email" 
            type="email"
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            value={formData.email}
            required
            disabled={loading}
            />
            <input 
            placeholder="GitHub Username" 
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setFormData({...formData, github: e.target.value})}
            value={formData.github}
            required
            disabled={loading}
            />

            <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold transition duration-200 ${
                loading ? 'bg-slate-600 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500'
            }`}
            >
            {loading ? 'Processing...' : 'Submit Application'}
            </button>
            </div>
            </form>
            </div>
            )
        }