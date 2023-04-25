import Head from 'next/head'
import Layout from '../components/layout'
import { SITE_NAME } from '../lib/constants'

export default function OurTeam({ preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>Our Team | {SITE_NAME}</title>
      </Head>
    </Layout>
  )
}
