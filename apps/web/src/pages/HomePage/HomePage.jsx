import { ClientLayout } from '@/layouts/ClientLayout';
import { Hero, Dishes, Reservation } from '@/features/home';

export function HomePage() {
  return (
      <ClientLayout>
        <Hero />
        <Reservation />
        <Dishes />
      </ClientLayout>
  )
}
