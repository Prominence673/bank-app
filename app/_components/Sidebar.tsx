"use client";
import { useState } from 'react'
import { LayoutGrid, CreditCard, ArrowLeftRight, PieChart, Settings, LogOut } from 'lucide-react'
import { navItems } from './constants/dashboardData'

const iconMap: Record<string, React.ReactNode> = {
  LayoutGrid: <LayoutGrid className="w-4 h-4" />,
  CreditCard: <CreditCard className="w-4 h-4" />,
  ArrowLeftRight: <ArrowLeftRight className="w-4 h-4" />,
  PieChart: <PieChart className="w-4 h-4" />,
  Settings: <Settings className="w-4 h-4" />,
}

interface SidebarProps {
  onLogout?: () => void
}

export function Sidebar({ onLogout }: SidebarProps) {
  const [activeNav, setActiveNav] = useState('Inicio')

  return (
    <aside className="hidden md:flex flex-col w-[220px] min-h-screen py-8 px-5 border-r" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#07091a' }}>
      <div className="mb-10 pl-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#4f8eff' }}>
            <span className="text-white text-sm font-bold">V</span>
          </div>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: '#e8eaf2', letterSpacing: '-0.02em' }}>Valore</span>
        </div>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(item => (
          <button
            key={item.label}
            onClick={() => setActiveNav(item.label)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left"
            style={{
              background: activeNav === item.label ? 'rgba(79,142,255,0.12)' : 'transparent',
              color: activeNav === item.label ? '#4f8eff' : '#6b7494',
            }}
          >
            {iconMap[item.iconName]}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-8 flex items-center gap-3 px-2">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #4f8eff, #22d3a0)', color: '#07091a' }}>EV</div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium truncate" style={{ color: '#e8eaf2' }}>Elena Vidal</div>
          <div className="text-xs" style={{ color: '#6b7494' }}>Premium</div>
        </div>
        {onLogout && (
          <button onClick={onLogout} title="Cerrar sesión" className="text-xs transition-colors hover:text-white" style={{ color: '#6b7494' }}>
            <LogOut className="w-4 h-4" />
          </button>
        )}
      </div>
    </aside>
  )
}