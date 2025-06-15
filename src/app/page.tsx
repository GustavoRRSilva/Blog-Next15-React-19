import Container from '@/components/Container';
import Header from '@/components/Header';
import PostCover from '@/components/PostCover';
import PostHeading from '@/components/PostHeading';
import Posts from '@/components/PostsList';
import Spinloader from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>

        <PostCover image={{src:'/images/bryen_0.png',alt : 'Titulo do post',width:1200, height:720, priority:true}} link={{href:'/post/qualquerCoisa'}} src='/images/bryen_0.png' />
    
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-04-20'
          >
            20/04/2025 10:00
          </time>
 
          <PostHeading as='h1' link='#'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
            dolorem est dolor porro, doloribus neque, quidem mollitia
            doloremque, ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam
            harum blanditiis mollitia?
          </p>
        </div>
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
