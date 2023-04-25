import Head from 'next/head'
import Layout from '../components/layout'
import { SITE_NAME } from '../lib/constants'

export default function Services({ preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>Services | {SITE_NAME}</title>
      </Head>
    </Layout>
  )
}
