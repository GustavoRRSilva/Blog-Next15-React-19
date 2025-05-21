import Container from '@/components/Container';
import Header from '@/components/Header';
import Posts from '@/components/PostsList';
import Spinloader from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<Spinloader />}>
        <Posts />
      </Suspense>

      <footer className='mt-10'>
        <p>Footer</p>
      </footer>
    </Container>
  );
}
