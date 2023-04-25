import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../../components/container'
import ListPosts from '../../components/list-posts'
import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import PageBreadCrumbs from '../../components/page-breadcrumbs'
import Link from 'next/link'

export default function Index({ allPosts: { pageInfo, edges }, preview }) {

  const haveMorePosts = Boolean(pageInfo?.hasNextPage);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{ process.env.NEXT_PUBLIC_SITE_NAME }</title>
      </Head>
      <Container>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-12 md:col-span-8 py-5'>
            {edges.map((post) => (
              <ListPosts
                key={post.node.slug}
                title={post.node.title}
                coverImage={post.node.featuredImage}
                date={post.node.date}
                author={post.node.author}
                slug={post.node.slug}
                excerpt={post.node.excerpt}
                content={post.node.content}
              />
            ))}
            {haveMorePosts ? (
            <div className='my-5'>
              <div className='flex justify-center w-full'>
                  <div>
                    <button className='border border-green-500 py-2 px-5 rounded text-green-500'>Load More Posts</button>
                  </div>
              </div>
            </div>
            )
            : ''}
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
        
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {

  const allPosts = await getAllPosts(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}