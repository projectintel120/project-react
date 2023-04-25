export default async function postsTofeed(blogPosts) {
  console.log(typeof blogPosts);
  let latestPostDate = "";
  let rssItemsXml = "";
  blogPosts.forEach((post) => {
    const postDate = Date.parse(post.node.date);
    // Remember to change this URL to your own!
    const postHref = process.env.NEXT_PUBLIC_SITE_URL + "/" + post.node.slug;
    if (!latestPostDate || postDate > Date.parse(latestPostDate)) {
      latestPostDate = post.node.date;
    }
    rssItemsXml += `
          <item>
            <title><![CDATA[${post.node.title}]]></title>
            <link>${postHref}</link>
            <pubDate>${new Date(post.node.date).toUTCString()}</pubDate>
            <guid isPermaLink="false">${postHref}</guid>
            <description>
            <![CDATA[${post.node.excerpt}]]>
            </description>
            <content:encoded>
              <![CDATA[${post.node.content}]]>
            </content:encoded>
        </item>`;
  });
  return {
    rssItemsXml,
    latestPostDate,
  };
}
