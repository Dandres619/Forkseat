import { ClientLayout } from '@/layouts/ClientLayout';
import { Hero, Dishes } from '@/features/home';

export function HomePage() {
  return (
      <ClientLayout>
        <Hero />
        <Dishes />
      </ClientLayout>
  )
}
