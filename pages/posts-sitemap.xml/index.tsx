import { getServerSideSitemapIndex, getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { getAllPostUrls, getTotalPosts } from '../../lib/api'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const totalPosts = await getTotalPosts()

    const posts = await getAllPostUrls()

    const items = [];

    const pages: any = Math.ceil(Number(totalPosts) / Number(process.env.NEXT_PUBLIC_SITEMAPS_PER_PAGE))

    // for (let i = 0; i <= pages; i++) {
    //     let url = `${process.env.NEXT_PUBLIC_SITE_URL}/posts-sitemap/sitemap-${i}.xml`;
    //     items.push(url);
    // }

    const sitemaps = Array(pages)
    .fill('')
    .map((v, index) => `${process.env.NEXT_PUBLIC_SITE_URL}/posts-sitemap.xml/sitemap-${index}.xml`);

    const urls = []

    posts.map(post => {
      urls.push(`${process.env.NEXT_PUBLIC_SITE_URL}/${post.node.slug}`)
  })

    const fields = []

    posts.map(post => {
        //urls.push(`${process.env.NEXT_PUBLIC_SITE_URL}/${post.node.slug}`)
        fields.push({
            loc: `${process.env.NEXT_PUBLIC_SITE_URL}/${post.node.slug}`, // Absolute url
            lastmod: new Date(post.node.date).toISOString(),
            changefreq: 'daily',
            priority: 0.7
          },)
    })
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  return getServerSideSitemapIndex(ctx, sitemaps)
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}