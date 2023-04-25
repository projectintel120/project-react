import { GetStaticProps } from "next";

export default function handler(allPosts, req, res) {
  res.statusCode = 200;

  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
      <loc>http://www.example.com/foo.html</loc>
      <lastmod>2021-01-01</lastmod>
    </url>${allPosts}
    </urlset>`;

  res.end(xml);
}

export const getStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllSitemaps(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
