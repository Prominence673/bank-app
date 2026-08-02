"use client";
import { useState } from 'react'
import { cards } from './constants/dashboardData'

export function CardsSection() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <div className="rounded-2xl p-6" style={{ background: '#0d1130', border: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold" style={{ color: '#e8eaf2' }}>Mis tarjetas</h2>
        <button className="text-xs" style={{ color: '#4f8eff' }}>+ Nueva</button>
      </div>
      <div className={`rounded-2xl p-5 mb-4 relative overflow-hidden bg-gradient-to-br ${cards[activeCard].color}`} style={{ aspectRatio: '1.586', minHeight: 160 }}>
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20" style={{ background: 'white', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full opacity-10" style={{ background: 'white', transform: 'translate(-30%, 30%)' }} />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-xs font-medium opacity-70" style={{ color: 'white', letterSpacing: '0.05em' }}>{cards[activeCard].type}</span>
            <div className="w-8 h-5 rounded" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
          <div>
            <div className="text-sm mb-1 opacity-60" style={{ color: 'white', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>{cards[activeCard].number}</div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs opacity-50 mb-0.5" style={{ color: 'white' }}>TITULAR</div>
                <div className="text-xs font-medium" style={{ color: 'white', letterSpacing: '0.05em' }}>{cards[activeCard].holder}</div>
              </div>
              <div className="text-right">
                <div className="text-xs opacity-50 mb-0.5" style={{ color: 'white' }}>VÁLIDA</div>
                <div className="text-xs font-medium" style={{ color: 'white' }}>{cards[activeCard].expiry}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        {cards.map((c, i) => (
          <button
            key={i}
            onClick={() => setActiveCard(i)}
            className="flex-1 py-2 px-3 rounded-xl text-xs text-left transition-all"
            style={{
              background: activeCard === i ? 'rgba(79,142,255,0.12)' : 'rgba(255,255,255,0.04)',
              color: activeCard === i ? '#4f8eff' : '#6b7494',
              border: activeCard === i ? '1px solid rgba(79,142,255,0.25)' : '1px solid transparent',
            }}
          >
            <div className="font-medium truncate">{c.type.split(' ')[1]}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>···· {c.number.slice(-4)}</div>
          </button>
        ))}
      </div>
    </div>
  )
}