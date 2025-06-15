import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

type PostCoverProps={
  image:React.ComponentProps<typeof Image>
  link:React.ComponentProps<typeof Link>
  src:string

}

export default function PostCover({image,link,src}:PostCoverProps) {
  return(
      <Link className={clsx('w-full h-full overflow-hidden rounded-xl',link.className)} {...link} >
          <Image
            className={clsx('w-full h-full object-cover object-center group-hover:scale-105 transition',image.className)}
            {...image}
            src ={src}
          />
        </Link>
  )
}