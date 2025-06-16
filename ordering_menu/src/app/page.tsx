'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [menuItems, setMenuItems] = useState([])
  const [form, setForm] = useState({ name: '', description: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(data => setMenuItems(data))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      setForm({ name: '', description: '' })
      const newItems = await res.json()
      setMenuItems(newItems)
    }
    setLoading(false)
  }

  return (
    <main className="p-8 max-w-xl mx-auto space-y-8">
      <div className="flex justify-end">
        <Link href="/menu">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Menu
          </button>
        </Link>
      </div>

      <h1 className="text-2xl font-bold">Add Menu Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-8">Current Menu</h2>
      <ul className="space-y-2">
        {menuItems.map((item: any) => (
          <li key={item.id} className="p-4 border rounded">
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
