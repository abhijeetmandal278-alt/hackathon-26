'use client'
import { supabase } from '../supabase'
import { useEffect, useState } from 'react'

export default function Participants() {
    const [students, setStudents] = useState<any[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    async function fetchStudents() {
        console.log("🛠️ FETCH START: Attempting to reach Supabase..."); 
        const { data, error } = await supabase
        .from('registrations')
        .select('*')

        if (error) {
        console.error("❌ DATABASE ERROR:", error.message);
        } else {
        console.log("✅ DATA RECEIVED:", data);
        setStudents(data || [])
        }
        setLoading(false)
    }
    fetchStudents()
    }, [])

    const filteredStudents = students.filter(student =>
    (student.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (student.email?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    )

    const handleDelete = async (email: string) => {
    if (!confirm("Are you sure you want to delete this participant?")) return;
    const { error } = await supabase
        .from('registrations')
        .delete()
        .eq('email', email); 

    if (error) {
        alert("Error deleting: " + error.message);
    } else {
        setStudents(students.filter(s => s.email !== email));
    }
    };

    return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
            <h1 className="text-4xl font-bold text-indigo-400">Participants</h1>
            <p className="text-slate-400">{students.length} Total Registrations</p>
            </div>

          {/* Re-added the missing Search Input */}
            <input 
            type="text"
            placeholder="Search by name or email..."
            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 w-full md:w-64 focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        {/* Table Section */}
        <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
            <table className="w-full text-left">
            <thead className="bg-slate-700 text-slate-300 uppercase text-xs">
                <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">GitHub</th>
                <th className="px-6 py-3">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
                {filteredStudents.map((student, index) => (
                <tr key={index} className="hover:bg-slate-700/50 transition">
                    <td className="px-6 py-4 font-medium">{student.name}</td>
                    <td className="px-6 py-4 text-slate-400">{student.email}</td>
                    <td className="px-6 py-4 text-indigo-300">@{student.github}</td>
                    <td className="px-6 py-4">
                    <button 
                        onClick={() => handleDelete(student.email)}
                        className="text-red-500 hover:text-red-400 font-medium transition duration-200"
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>

            {filteredStudents.length === 0 && !loading && (
            <p className="p-10 text-center text-slate-500">No participants found.</p>
            )}
        </div>
        </div>
    </div>
    )
}