import { 
  ClientNavbar, 
  ClientFooter,
} from '.'

export function ClientLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      <ClientNavbar />
      <main className="flex-1">
        {children}
      </main>
      <ClientFooter />
    </div>
  )
}
