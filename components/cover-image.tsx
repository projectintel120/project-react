import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  coverImage?: {
    node: {
      sourceUrl: string
    }
  }
  srcDefault?: string
  slug?: string
}

export default function CoverImage({ title, coverImage, srcDefault, slug }: Props) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`${title}`}
      src={coverImage?.node.sourceUrl ? coverImage?.node.sourceUrl : srcDefault}
      className={cn('shadow-small w-full h-full', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
