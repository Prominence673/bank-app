"use client";
import { useState } from 'react'
import { quickContacts } from './constants/dashboardData'

export function QuickTransfer() {
  const [transferAmount, setTransferAmount] = useState('')
  const [selectedContact, setSelectedContact] = useState<number | null>(null)

  return (
    <div className="rounded-2xl p-6" style={{ background: '#0d1130', border: '1px solid rgba(255,255,255,0.06)' }}>
      <h2 className="text-sm font-semibold mb-4" style={{ color: '#e8eaf2' }}>Transferencia rápida</h2>
      <div className="flex gap-3 mb-5">
        {quickContacts.map((c, i) => (
          <button key={i} onClick={() => setSelectedContact(i)} className="flex flex-col items-center gap-1.5">
            <div className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold transition-all" style={{
              background: selectedContact === i ? c.color : 'rgba(255,255,255,0.06)',
              color: selectedContact === i ? '#07091a' : c.color,
              boxShadow: selectedContact === i ? `0 0 0 3px ${c.color}33` : 'none',
            }}>{c.initials}</div>
            <span className="text-xs" style={{ color: '#6b7494' }}>{c.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>
      <div className="rounded-xl p-4 mb-4" style={{ background: 'rgba(255,255,255,0.04)' }}>
        <div className="text-xs mb-2" style={{ color: '#6b7494' }}>Importe</div>
        <div className="flex items-center gap-2">
          <span className="text-lg" style={{ color: '#6b7494' }}>€</span>
          <input
            type="text"
            value={transferAmount}
            onChange={e => setTransferAmount(e.target.value)}
            placeholder="0,00"
            className="flex-1 bg-transparent outline-none text-2xl font-light"
            style={{ color: '#e8eaf2', fontFamily: "'Instrument Serif', serif" }}
          />
        </div>
      </div>
      <button className="w-full py-3 rounded-xl text-sm font-semibold transition-all active:scale-95" style={{ background: '#4f8eff', color: '#ffffff' }}>
        Enviar transferencia
      </button>
    </div>
  )
}