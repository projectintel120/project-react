import Head from 'next/head'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Features from '../components/features'
import FooterCTA from '../components/footer-cta'
import ContentOne from '../components/content-one'
import ProfessionalWritersContent from '../components/professional-writers-content'

export default function Index({ preview }) {

  return (
    <Layout preview={preview}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>
        <Intro />
        <Features/>
        <ProfessionalWritersContent/>
        <ContentOne/>
        <FooterCTA/>
    </Layout>
  )
}
