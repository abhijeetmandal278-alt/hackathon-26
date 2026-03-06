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
    <div className="min-h-screen bg-slate-900 text-white p-8"> {/* Main Parent */}
        <div className="max-w-4xl mx-auto">
        
        {/* Move the counter INSIDE the max-w-4xl container */}
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-indigo-400">Registered Participants</h1>
            <span className="bg-indigo-600 px-4 py-1 rounded-full text-sm font-bold">
            {students.length} Students Joined
            </span>
        </div>

        {loading ? (
            <p className="text-slate-400 italic">Loading entries...</p>
        ) : (
            <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
            <table className="w-full text-left">
              {/* ... keep your <thead> and <tbody> code exactly as it was */}
            </table>
            </div>
        )}

        </div>
    </div>
    )
}