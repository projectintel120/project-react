import { frontendUrl, sitemapPerPage } from "../utils/variables";

export default function getSitemapPages(item) {
  const items = [];
  for (let i = 1; i <= Math.ceil(item.total / sitemapPerPage); i++) {
    let url = `${frontendUrl}/posts/sitemap/${item.name}_sitemap_${i}.xml`;
    items.push(
      ` 
        <sitemap>
           <loc>
              ${url}
          </loc>
      </sitemap>
      `
    );
  }
  return items.join("");
}
