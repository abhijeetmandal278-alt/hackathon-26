'use client'
import { supabase } from '../supabase'
import { useEffect, useState } from 'react'

export default function Participants() {
    const [students, setStudents] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('') // 1. Added search state
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    async function fetchStudents() {
        const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false })

        if (error) console.error('Error:', error)
        else setStudents(data || [])
        setLoading(false)
    }
    fetchStudents()
    }, [])

  // 2. Filter students based on search term
    const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
            <h1 className="text-4xl font-bold text-indigo-400">Participants</h1>
            <p className="text-slate-400">{students.length} Total Registrations</p>
            </div>

          {/* 3. The Search Input */}
            <input 
            type="text"
            placeholder="Search by name or email..."
            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 w-full md:w-64 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        {loading ? (
            <p className="text-slate-400 italic">Loading...</p>
        ) : (
            <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
            <table className="w-full text-left">
                <thead className="bg-slate-700 text-slate-300 uppercase text-xs">
                <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">GitHub</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                {/* 4. Map over filteredStudents instead of students */}
                {filteredStudents.map((student, index) => (
                    <tr key={index} className="hover:bg-slate-700/50 transition">
                    <td className="px-6 py-4 font-medium">{student.name}</td>
                    <td className="px-6 py-4 text-slate-400">{student.email}</td>
                    <td className="px-6 py-4 text-indigo-300">@{student.github}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {filteredStudents.length === 0 && (
                <p className="p-6 text-center text-slate-500">No participants found matching "{searchTerm}"</p>
            )}
            </div>
        )}
        </div>
    </div>
    )
}