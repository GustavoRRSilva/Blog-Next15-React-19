import Container from '@/components/Container';
import Header from '@/components/Header';
import Posts from '@/components/PostsList';
import Spinloader from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 mb-4 md:grid-cols-2 group'>
        <Link href='#' className='w-full h-full overflow-hidden rounded-2xl'>
          <Image
            className='group-hover:scale-105 transition'
            src='/images/bryen_0.png'
            width={1280}
            height={720}
            alt='person '
          />
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iste
          quae, tempore cum culpa ullam suscipit obcaecati quod officiis
          delectus sit minus voluptatem assumenda eaque sapiente accusantium
          ipsum blanditiis magni.
        </p>
      </section>
      <Suspense fallback={<Spinloader />}>
        <Posts />
      </Suspense>

      <footer className='mt-10'>
        <p>Footer</p>
      </footer>
    </Container>
  );
}
