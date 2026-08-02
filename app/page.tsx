"use client";
import { Bell } from 'lucide-react'
import { Sidebar } from './_components/Sidebar'
import { BalanceCard } from './_components/BalanceCard'
import { QuickTransfer } from './_components/QuickTransfer'
import { TransactionsList } from './_components/TransactionsList'
import { CardsSection } from './_components/CardsSection'
import { CategoryExpenses } from './_components/CategoryExpenses'

export default function Home() {
  const totalBalance = 16730.50

  return (
    <div className="min-h-screen flex" style={{ background: '#07091a', fontFamily: "'Inter', sans-serif" }}>
      {/* Lateral navigation */}
      <Sidebar />

      {/* Main Container */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-[1100px] mx-auto px-6 py-8">

          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <div className="text-sm mb-1" style={{ color: '#6b7494' }}>Viernes, 1 de agosto de 2026</div>
              <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, color: '#e8eaf2', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Buenos días, Elena.
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10" style={{ background: 'rgba(255,255,255,0.05)', color: '#9ba3c4' }}>
                <Bell className="w-4 h-4" />
              </button>
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold" style={{ background: 'linear-gradient(135deg, #4f8eff, #22d3a0)', color: '#07091a' }}>
                EV
              </div>
            </div>
          </div>

          {/* Upper Grid */}
          <div className="grid gap-6 mb-6 grid-cols-1 lg:grid-cols-[1fr_320px]">
            <BalanceCard totalBalance={totalBalance} />
            <QuickTransfer />
          </div>

          {/* Lower Grid */}
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-[1fr_340px]">
            <TransactionsList />
            <div className="flex flex-col gap-6">
              <CardsSection />
              <CategoryExpenses />
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}