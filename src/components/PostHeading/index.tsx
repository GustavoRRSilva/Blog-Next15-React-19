import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  link: string;
  as?: 'h1' | 'h2';
};

export default function PostHeading({
  children,
  link,
  as: Tag = 'h2',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-2xl/tight sm:text-4xl font-extrabold',
    h2: 'text-2xl/tight font-bold',
  };

  const commomClasses =
    'group-hover:text-slate-600 transition hover:cursor-pointer';

  return (
    <Tag className={clsx(headingClassesMap[Tag], commomClasses)}>
      <Link href={link}>{children}</Link>
    </Tag>
  );
}
