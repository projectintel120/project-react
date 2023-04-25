import Head from 'next/head'
import Layout from '../components/layout'
import { SITE_NAME } from '../lib/constants'

export default function HowItWorks({ preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>How it Works | {SITE_NAME}</title>
      </Head>
    </Layout>
  )
}
