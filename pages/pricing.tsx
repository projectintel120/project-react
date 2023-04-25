import Head from 'next/head'
import Layout from '../components/layout'
import { SITE_NAME } from '../lib/constants'

export default function Pricing({ preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>Pricing | {SITE_NAME}</title>
      </Head>
    </Layout>
  )
}
