'use client'

import { useEffect, useState } from 'react'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  createdAt: string
}

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  const fetchMenuItems = async () => {
    try {
      const res = await fetch('/api/menu', { method: 'GET' })
      const data = await res.json()
      setMenuItems(data)
    } catch (err) {
      console.error('Error fetching menu items:', err)
    }
  }

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const payload = {
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
      imageUrl: form.imageUrl,
    }

    const res = await fetch('/api/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      setForm({ name: '', description: '', price: '', imageUrl: '' })
      setMessage('Menu item added successfully!')
      fetchMenuItems() // refresh list
    } else {
      const data = await res.json()
      setMessage(data.error || 'Failed to add menu item.')
    }

    setLoading(false)
  }

  return (
    <main className="p-8 max-w-xl mx-auto space-y-8">
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
        <input
          type="number"
          placeholder="Price (BND)"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={e => setForm({ ...form, imageUrl: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {message && <p>{message}</p>}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">All Menu Items</h2>
        {menuItems.length === 0 ? (
          <p className="text-gray-500">No items found.</p>
        ) : (
          <ul className="space-y-4">
            {menuItems.map(item => (
              <li key={item.id} className="border p-4 rounded">
                <p className="font-bold">{item.name}</p>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-green-700 font-semibold">BND {item.price.toFixed(2)}</p>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-32 h-32 object-cover mt-2 rounded"
                />
                <p className="text-sm text-gray-400">
                  Added on {new Date(item.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
