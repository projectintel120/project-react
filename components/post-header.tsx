import Date from './date'
import PostTitle from './post-title'

export default function PostHeader({
  title,
  date,
}) {
  return (
    <section className='pt-10'>
      <PostTitle>{title}</PostTitle>    
      <div className="max-w-2xl">
        <div className="mb-6 text-sm">
          Posted <Date dateString={date} />
        </div>
      </div>
    </section>
  )
}
