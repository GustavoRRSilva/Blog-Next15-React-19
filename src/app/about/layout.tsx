import clsx from 'clsx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description:
    'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          true && 'Teste',
          'a',
          'b',
          'c',
          'd',
          '4',
        )}
      >
        Hello about my friend
        {children}
      </body>
    </html>
  );
}
