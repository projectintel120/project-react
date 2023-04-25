/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "http://localhost:3000",
  generateRobotsTxt: true,
  sitemapSize: process.env.NEXT_PUBLIC_SITEMAPS_PER_PAGE,
  generateIndexSitemap: true,
  exclude: ["/posts-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${
        process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || "http://localhost:3000"
      }/posts-sitemap.xml`,
    ],
  },
};
