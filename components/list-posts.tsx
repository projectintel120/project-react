import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function ListPosts({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  content
}) {
  return (
    <>
    <section className='py-5 border-b border-gray-200 md:hover:bg-slate-100'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12'>
          <div className='pt-3 md:pt-0 px-0 md:px-5 flex flex-col'>
            <h3 className="mb-2 text-lg lg:text-xl font-medium leading-tight">
              <Link
                href={`/${(!process.env.NEXT_PUBLIC_POST_SLUG || (process.env.NEXT_PUBLIC_POST_SLUG == 'default') ? slug : '')}`}
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              ></Link>
            </h3>
            {/* <div className="text-xs text-gray-400 mb-4 md:mb-1">
              <Date dateString={date} />
            </div> */}
            <div>
              <Link
                href={`/${slug}`}
                className="text-sm leading-relaxed my-4 text-gray-700"
                dangerouslySetInnerHTML={{ __html: excerpt }}
              ></Link>
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
