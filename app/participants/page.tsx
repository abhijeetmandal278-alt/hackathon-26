'use client'
import { supabase } from '../supabase'
import { useEffect, useState } from 'react'

export default function Participants() {
    const [students, setStudents] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    async function fetchStudents() {
      // This line "Selects" all rows from your registrations table
        const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false })

        if (error) console.error('Error fetching:', error)
        else setStudents(data || [])
        setLoading(false)
    }
    fetchStudents()
    }, [])

    return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-indigo-400">Registered Participants</h1>
        
        {loading ? (
            <p className="text-slate-400 italic">Loading entries...</p>
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
                {students.map((student, index) => (
                    <tr key={index}>
                    <td className="px-6 py-4 font-medium">{student.name}</td>
                    <td className="px-6 py-4 text-slate-400">{student.email}</td>
                    <td className="px-6 py-4 text-indigo-300">@{student.github}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}
        </div>
    </div>
    )
}