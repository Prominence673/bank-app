const categories = [
  { label: 'Alimentación', pct: 38, amount: '124,50', color: '#4f8eff' },
  { label: 'Entretenimiento', pct: 26, amount: '87,30', color: '#22d3a0' },
  { label: 'Transporte', pct: 20, amount: '68,40', color: '#f59e0b' },
  { label: 'Compras', pct: 16, amount: '53,80', color: '#ec4899' },
]

export function CategoryExpenses() {
  return (
    <div className="rounded-2xl p-6" style={{ background: '#0d1130', border: '1px solid rgba(255,255,255,0.06)' }}>
      <h2 className="text-sm font-semibold mb-5" style={{ color: '#e8eaf2' }}>Gasto por categoría</h2>
      <div className="flex flex-col gap-4">
        {categories.map(cat => (
          <div key={cat.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs" style={{ color: '#9ba3c4' }}>{cat.label}</span>
              <span className="text-xs" style={{ color: '#6b7494', fontFamily: "'JetBrains Mono', monospace" }}>€ {cat.amount}</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="h-full rounded-full" style={{ width: `${cat.pct}%`, background: cat.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}