import Container from './container'
import Link from 'next/link'
import OrderNow from './order-now'

export default function Intro() {
  return (
    <section className="mb-16 md:mb-12 bg-green-800 text-white pt-10 bg-[url('/img/hero-bg.svg')]">
      <Container>
        <div className='flex h-full w-full items-center'>
          <div className='flex-1 py-16 px-5 h-full'>
            <h1 className='text-2xl md:text-5xl text-center md:text-left font-semibold'>Improve you School Grades</h1>
            <p className='py-5 text-base md:text-lg text-center md:text-left font-medium'>Trust your assignments to an essay writing service with the fastest delivery time and fully original content.</p>
            <div className='mt-8 flex justify-center md:justify-start'>
              <OrderNow/>
            </div>
          </div>
          <div className='hidden md:flex justify-end flex-1'>
            <div className='relative w-full'>
              <div className='bg-green-500 bottom-0 right-0 left-0 rounded-tl-full rounded-tr-full pt-5 pl-5 pr-5 w-full'>
                <img src='/img/students.png' alt='' className='h-96'/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
