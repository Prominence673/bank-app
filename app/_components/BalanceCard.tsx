interface BalanceCardProps {
  totalBalance: number
}

export function BalanceCard({ totalBalance }: BalanceCardProps) {
  return (
    <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d1a4a 0%, #0a1230 50%, #0d2140 100%)', minHeight: 200 }}>
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full opacity-10" style={{ background: '#4f8eff' }} />
      <div className="absolute -right-4 -bottom-8 w-32 h-32 rounded-full opacity-10" style={{ background: '#22d3a0' }} />
      <div className="relative z-10">
        <div className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em' }}>SALDO TOTAL</div>
        <div className="flex items-end gap-3 mb-6">
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 52, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.03em' }}>
            {totalBalance.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
          </span>
          <span className="mb-2 text-xl" style={{ color: 'rgba(255,255,255,0.4)' }}>EUR</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Este mes</div>
            <div className="text-sm font-medium" style={{ color: '#22d3a0' }}>+€ 3.850,00</div>
          </div>
          <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div>
            <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Gastos</div>
            <div className="text-sm font-medium" style={{ color: '#f87171' }}>−€ 356,08</div>
          </div>
          <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div>
            <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Ahorro</div>
            <div className="text-sm font-medium" style={{ color: '#e8eaf2' }}>€ 1.200,00</div>
          </div>
        </div>
      </div>
    </div>
  )
}