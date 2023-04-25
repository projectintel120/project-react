import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostBreadCrumbs from '../../components/post-breadcrumbs'
import CoverImage from '../../components/cover-image'
import Link from 'next/link'
import OrderNow from '../../components/order-now'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {process.env.NEXT_PUBLIC_SITE_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl ? post.featuredImage?.node.sourceUrl : '/img/post-default.jpg'}
                />
              </Head>
              <PostBreadCrumbs title={post.title}/>
              <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-12 md:col-span-8'>
                  <div>
                    <PostHeader
                      title={post.title}
                      date={post.date}
                    />
                  </div>
                  <div className='pt-7 text-sm italic text-gray-500'>
                    {`Approximately ${Math.ceil((post.content.trim().split(/\s+/).length)/250)} Min Read` }
                  </div>
                  <PostBody content={post.content} />
                  <footer>
                    {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
                  </footer>
                  <div className='my-5 py-5'>
                    <div className='flex justify-center'>
                      <OrderNow/>
                    </div>
                    <div className='py-10'>
                      <h4 className='font-medium'>Every Student Buys Essays from us, here is why!</h4>
                      <p className='leading-8 py-3 text-sm text-gray-700'>Pressed for time to complete assignments or when you feel like you cannot write, you can purchase an essay on our website. Some students also want model papers to use as samples when revising or writing. There are also students who approach our essay writing service to beat deadlines. We handle every type of homework, assignment, and academic writing tasks. You can buy college essays and other assignments here. At a glance, here are some reasons students prefer our website.</p>
                      <h4 className='font-medium'>100% Original Essays and Papers</h4>
                      <p className='leading-8 py-3 text-sm text-gray-700'>You can be sure that you are getting a paper that is custom written based on your instructions. We do not sell papers that are pre-written. Instead, we write every essay from scratch. When you say “write my essay,” we respond by giving you a paper that is 100% original and free of any plagiarism. The essays you purchase from us have never been sold anywhere.</p>
                      <h4 className='font-medium'>Flexible &amp; Affordable Prices</h4>
                      <p className='leading-8 py-3 text-sm text-gray-700'>It does not cost a fortune to get academic writing help on our website. If you have a question from class, place an order, get a discount, and get cheap essay writing services. What you see as the price is what you pay for. There are no any hidden charges. If you need urgent papers, they might cost a little more, but the price is worth the quality you get in the end. Hire a professional academic writer beginning from $13 a page.</p>
                      <h4 className='font-medium'>Anonymity, Privacy, and Confidentiality</h4>
                      <p className='leading-8 py-3 text-sm text-gray-700'>No one will ever know that you purchased an essay or assignment from our website. The essays you buy from us are written by experts. Your data is only used to coordinate the essay writing services you get. No one can access your personal information and data. Go ahead and order an essay from our website. It is safe, secure, and convenient.</p>
                    </div>
                    <div className='flex justify-center'>
                      <OrderNow/>
                    </div>
                  </div>
                </div>
                <div className='col-span-12 md:col-span-4 p-4'>
                  <div className="rounded-lg border mb-5 p-5">
                      <h4 className="font-medium text-xl text-center">Services we offer</h4>
                      <div className='my-5'>
                        <ul className='text-gray-600 text-sm'>
                          <li className='py-2'>&raquo; Custom paper writing</li>
                          <li className='py-2'>&raquo; Question and answers</li>
                          <li className='py-2'>&raquo; Essay paper writing</li>
                          <li className='py-2'>&raquo; Editing and proofreading</li>
                          <li className='py-2'>&raquo; Plagiarism removal services</li>
                          <li className='py-2'>&raquo; Multiple answer questions</li>
                        </ul>
                      </div>
                      <Link href={process.env.NEXT_PUBLIC_ORDER_LINK} className="text-center bg-green-800 block w-full text-white py-1 rounded-full">Order Now</Link>
                  </div>
                  <div className="rounded-lg border mb-5 p-5 bg-white">
                      <h4 className="font-medium text-xl text-center">Guarantee you</h4>
                      <div className='my-5'>
                        <ul className='text-gray-600 text-sm'>
                          <li className='py-2'>&raquo; Zero Plagiarism</li>
                          <li className='py-2'>&raquo; On-time delivery</li>
                          <li className='py-2'>&raquo; A-Grade Papers</li>
                          <li className='py-2'>&raquo; Free Revision</li>
                          <li className='py-2'>&raquo; 24/7 Support</li>
                          <li className='py-2'>&raquo; 100% Confidentiality</li>
                          <li className='py-2'>&raquo; Professional Writers</li>
                        </ul>
                      </div>
                      <Link href={process.env.NEXT_PUBLIC_ORDER_LINK} className="text-center bg-green-800 block w-full text-white py-1 rounded-full">Order Now</Link>
                  </div>
                </div>
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: false,
  }
}
