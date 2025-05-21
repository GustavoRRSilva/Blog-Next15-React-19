import clsx from 'clsx';
import Link from 'next/link';

export default function Header() {
  return (
    <header className=''>
      <h1
        className={clsx(
          'text-3xl/normal',
          'font-extrabold',
          'sm:text-5xl/normal',
          'sm:py-10',
          'md:text-6xl/normal',
          'md:py-11',
          'md:py-12',
        )}
      >
        <Link href={'/'}>The Guga´s Blog</Link>
      </h1>
    </header>
  );
}
