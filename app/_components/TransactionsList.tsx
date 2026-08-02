"use client";
import { Music, ArrowDownLeft, ShoppingBag, Tv, Fuel, Utensils } from 'lucide-react'
import { transactions } from './constants/dashboardData'

const iconMap: Record<string, React.ReactNode> = {
  Music: <Music className="w-4 h-4" />,
  ArrowDownLeft: <ArrowDownLeft className="w-4 h-4 text-emerald-400" />,
  ShoppingBag: <ShoppingBag className="w-4 h-4" />,
  Tv: <Tv className="w-4 h-4" />,
  Fuel: <Fuel className="w-4 h-4" />,
  Utensils: <Utensils className="w-4 h-4" />,
}

export function TransactionsList() {
  return (
    <div className="rounded-2xl p-6" style={{ background: '#0d1130', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex items-center justify-between mb-6">
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: '#e8eaf2' }}>Movimientos recientes</h2>
        <button className="text-xs font-medium" style={{ color: '#4f8eff' }}>Ver todos</button>
      </div>
      <div className="flex flex-col gap-1">
        {transactions.map(tx => (
          <div
            key={tx.id}
            className="flex items-center gap-4 px-3 py-3 rounded-xl transition-colors cursor-pointer"
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0" style={{ background: 'rgba(255,255,255,0.06)', color: '#9ba3c4' }}>
              {iconMap[tx.iconName]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate" style={{ color: '#e8eaf2' }}>{tx.name}</div>
              <div className="text-xs" style={{ color: '#6b7494' }}>{tx.category} · {tx.date}</div>
            </div>
            <div className="text-sm font-semibold" style={{ color: tx.amount > 0 ? '#22d3a0' : '#e8eaf2', fontFamily: "'JetBrains Mono', monospace" }}>
              {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}