import fetch from "isomorphic-unfetch";

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_DOMAIN; // e.g. 'https://my-wordpressdomain.com'
const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_DOMAIN; // e.g. 'https://localhost:3000'

// Global regex search allows replacing all URLs
const HOSTNAME_REGEX = new RegExp(WORDPRESS_URL, "g");

function replace(...args) {
  const string = `${args[0]}`;
  return args.length < 3 ? string : string.replace(args[1], args[2]);
}

export default async function proxy(req, res) {
  let content;
  let contentType;

  // Get the page that was requested. The manual option allows us to process redirects
  // manually (if we get a redirect). So the next step of this function can work.
  const upstreamRes = await fetch(`${WORDPRESS_URL}${req.url}`, {
    redirect: "manual",
  });

  // Check for redirects.
  // This allows for any internal WordPress redirect. For example the /sitemap_index.xml to /sitemap.xml.
  if (upstreamRes.status > 300 && upstreamRes.status < 310) {
    const location = upstreamRes.headers.get("location");
    const locationURL = new URL(location, upstreamRes.url);

    // Follow once only if on a wordpress domain.
    if (locationURL.href.includes(WORDPRESS_URL)) {
      const locationURL = new URL(location, upstreamRes.url);
      const response2 = await fetch(locationURL, {
        redirect: "manual",
      });
      content = await response2.text();
      contentType = response2.headers.get("content-type");
    } else {
      // If there were more than two redirects, throw an error.
      throw new Error(
        `abort proxy to non wordpress target ${locationURL.href} to avoid redirect loops`
      );
    }
  } else {
    // There are no redirects, get original response text.
    content = await upstreamRes.text();
    contentType = upstreamRes.headers.get("content-type");
  }

  // If the current URL includes 'sitemap'.
  if (req.url.includes("sitemap")) {
    // Find any URLS inside the XML content that include "sitemap",
    // and replace the WordPress URL with the current site URL.
    content = replace(content, HOSTNAME_REGEX, FRONTEND_URL);

    // Change sitemap xsl file path to local
    let sitemapFind = "//(.*)main-sitemap.xsl"; // The Yoast internal template.
    let sitemapReplace = "/sitemap-template.xsl"; // Our custom template.
    const SITEMAP_XSL_REGEX = new RegExp(sitemapFind, "g");
    content = replace(content, SITEMAP_XSL_REGEX, sitemapReplace);
  }

  res.setHeader("Content-Type", contentType);
  res.setHeader("Cache-Control", "max-age=60");

  res.send(content);
}
