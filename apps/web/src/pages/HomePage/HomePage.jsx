import { ClientLayout } from '@/layouts/ClientLayout';
import { Hero } from '@/features/Home/Hero'

export function HomePage() {
  return (
    <section>
      <ClientLayout>
        <Hero />
      </ClientLayout>
    </section>
  )
}
