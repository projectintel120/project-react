import Container from './container'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-5 border-t border-accent-2">
      <Container>
        <div className='py-5'>
          <div className='grid grid-cols-4 gap-4 pb-5'>
            <div className='col-span-2 md:col-span-1'>
              <h4 className='text-gray-200 text-xl'>Company</h4>
              <div className='flex flex-col text-gray-300 text-xs md:text-sm mt-3'>
                <Link href="#" className='py-1'>About Us</Link>
                <Link href="#" className='py-1'>Contact Us</Link>
                <Link href="#" className='py-1'>Our Guarantees</Link>
                <Link href="#" className='py-1'>Reviews</Link>
              </div>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <h4 className='text-gray-200 text-xl'>Resources</h4>
              <div className='flex flex-col text-gray-300 text-xs md:text-sm mt-3'>
                <Link href="#" className='py-1'>Blog</Link>
                <Link href="#" className='py-1'>FAQ</Link>
                <Link href="#" className='py-1'>Essay Help</Link>
                <Link href="#" className='py-1'>Writing Guide</Link>
              </div>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <h4 className='text-gray-200 text-xl'>Terms</h4>
              <div className='flex flex-col text-gray-300 text-xs md:text-sm mt-3'>
                <Link href="#" className='py-1'>Terms &amp; Conditions</Link>
                <Link href="#" className='py-1'>Cookie Policy</Link>
                <Link href="#" className='py-1'>Privacy Policy</Link>
              </div>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <h4 className='text-gray-200 text-xl'>We Accept</h4>
              <div className='flex flex-col text-gray-300 text-xs md:text-sm mt-3'>
                <Image src="/img/ico_payments.svg" alt="We accept PayPal, Visa and Mastercard" height="50" width="300"/>
              </div>
            </div>
          </div>
          <div className='py-5 border-t border-gray-900'>
            <div className='max-w-4xl mx-auto text-gray-200 text-center'>
              <h6 className='text-gray-200 text-xl'>Disclaimer</h6>
              <p className='mt-5 leading-7 text-xs md:text-md'>{process.env.NEXT_PUBLIC_SITE_NAME}: a professional writing service that provides original papers. Our products include academic papers of varying complexity and other personalized
          services, along with research materials for assistance purposes only. All the materials from our website should be used with proper references.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
