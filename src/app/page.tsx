import Posts from '@/components/PostsList';
import Spinloader from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <div>
      <header className='my-10'>
        <p>Header</p>
      </header>

      <Suspense fallback={<Spinloader />}>
        <Posts />
      </Suspense>

      <footer className='mt-10'>
        <p>Footer</p>
      </footer>
    </div>
  );
}
