import { getServerSideSitemapIndex, getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { getAllPostUrls, getTotalPosts } from '../../../lib/api'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const totalPosts = await getTotalPosts()

    const posts = await getAllPostUrls()

    const items = [];

    const pages: any = Math.ceil(Number(totalPosts) / Number(process.env.NEXT_PUBLIC_SITEMAPS_PER_PAGE))

    const urls = []

    posts.map(post => {
      urls.push(`${process.env.NEXT_PUBLIC_SITE_URL}/${post.node.slug}`)
  })
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemapIndex(ctx, urls)
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}