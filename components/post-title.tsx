export default function PostTitle({ children }) {
  return (
    <h1
      className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-3"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
