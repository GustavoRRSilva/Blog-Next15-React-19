import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children:React.ReactNode;
  link:string;
  as?: 'h1' | 'h2'
}

export default function PostHeading({children,link,as:Tag = 'h2'}:PostHeadingProps) {

  const headingClassesMap = {
    h1:'text-2xl/tight sm:text-4xl',
    h2:'text-2xl/tight sm:text-4xl'
  }

  const commomClasses = 'font-extrabold'

  return(
          <Tag className={clsx(headingClassesMap[Tag],commomClasses)}>
            <Link href={link}>{children}</Link>
          </Tag>
  )
}