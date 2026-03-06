'use client'
import { supabase } from '../supabase'
import { useState } from 'react'

export default function Register() {
    const [formData, setFormData] = useState({ name: '', email: '', github: '' })
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // This sends your form data to the Supabase table you created
    const { error } = await supabase.from('registrations').insert([formData])
    
    if (error) {
        alert('Error: ' + error.message)
    } else {
        alert('Success! You are registered for HACK_26.')
        setFormData({ name: '', email: '', github: '' }) // This clears the form
    }
}

return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 w-full max-w-md shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-400">HACK_26 Signup</h1>
        
        <div className="space-y-4">
            <input 
            placeholder="Full Name" 
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            value={formData.name}
            required
            />
            <input 
            placeholder="College Email" 
            type="email"
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            value={formData.email}
            required
            />
            <input 
            placeholder="GitHub Username" 
            className="w-full p-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setFormData({...formData, github: e.target.value})}
            value={formData.github}
            required
            />
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg font-bold transition duration-200">
            Submit Application
            </button>
            </div>
            </form>
            </div>
            )
        }