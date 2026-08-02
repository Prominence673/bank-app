export interface Transaction {
  id: number
  name: string
  category: string
  date: string
  amount: number
  iconName: string
}

export interface CardItem {
  id: number
  type: string
  number: string
  expiry: string
  holder: string
  color: string
  balance: number
}

export interface QuickContact {
  name: string
  initials: string
  color: string
}

export interface NavItem {
  label: string
  iconName: string
}

export const transactions: Transaction[] = [
  { id: 1, name: 'Spotify Premium', category: 'Entretenimiento', date: '31 Jul', amount: -9.99, iconName: 'Music' },
  { id: 2, name: 'Nómina Julio', category: 'Ingreso', date: '30 Jul', amount: 3850.0, iconName: 'ArrowDownLeft' },
  { id: 3, name: 'Supermercado El Corte', category: 'Alimentación', date: '28 Jul', amount: -124.50, iconName: 'ShoppingBag' },
  { id: 4, name: 'Netflix', category: 'Entretenimiento', date: '27 Jul', amount: -15.99, iconName: 'Tv' },
  { id: 5, name: 'Transferencia M. García', category: 'Transferencia', date: '25 Jul', amount: 250.0, iconName: 'ArrowDownLeft' },
  { id: 6, name: 'Gasolinera Shell', category: 'Transporte', date: '24 Jul', amount: -68.40, iconName: 'Fuel' },
  { id: 7, name: 'Amazon Prime', category: 'Compras', date: '22 Jul', amount: -49.90, iconName: 'ShoppingBag' },
  { id: 8, name: 'Restaurante La Mar', category: 'Restauración', date: '20 Jul', amount: -87.30, iconName: 'Utensils' },
]

export const cards: CardItem[] = [
  { id: 1, type: 'Visa Platinum', number: '•••• •••• •••• 4821', expiry: '09/28', holder: 'ELENA VIDAL', color: 'from-[#1a2a6c] via-[#1e3a8a] to-[#0f4c81]', balance: 12450.00 },
  { id: 2, type: 'Mastercard Gold', number: '•••• •••• •••• 7340', expiry: '03/27', holder: 'ELENA VIDAL', color: 'from-[#1a1a2e] via-[#2d1b4e] to-[#0f0f23]', balance: 4280.50 },
]

export const quickContacts: QuickContact[] = [
  { name: 'Marco R.', initials: 'MR', color: '#4f8eff' },
  { name: 'Sofia L.', initials: 'SL', color: '#22d3a0' },
  { name: 'Pablo M.', initials: 'PM', color: '#f59e0b' },
  { name: 'Ana T.', initials: 'AT', color: '#ec4899' },
]

export const navItems: NavItem[] = [
  { label: 'Inicio', iconName: 'LayoutGrid' },
  { label: 'Tarjetas', iconName: 'CreditCard' },
  { label: 'Transferir', iconName: 'ArrowLeftRight' },
  { label: 'Análisis', iconName: 'PieChart' },
  { label: 'Ajustes', iconName: 'Settings' },
]