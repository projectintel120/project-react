import { Fragment } from 'react'
import Container from './container';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link';
import { SITE_NAME  } from '../lib/constants';
import { Montserrat } from '@next/font/google'

const shrikhand = Montserrat({
  subsets: ['latin'],
})

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'How it Works', href: '/how-it-works/' },
  { name: 'Our Team', href: '/our-team/' },
  { name: 'Pricing', href: '/pricing/' },
  { name: 'Services', href: '/services/' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  let name = process.env.NEXT_PUBLIC_SITE_NAME
  let part = name.split(" ")
  let rest = part.shift()
  return (
    <>
      <div className="fixed w-full bg-white border-b border-gray-200 z-40">
        <Container>
          <div className='relative flex h-20 items-center justify-between'>
            <div className='flex flex-1'>
              <Link href='/' className={`text-xl font-semibold md:text-2xl`}><span className='text-green-800'>{rest}</span> { part } </Link>
            </div>
            {/* <div className='hidden md:flex flex-grow justify-center'>
              {navigation.map((item) => (
                <Link key={item.name}
                href={item.href} 
                className='px-3 py-2 rounded-md text-sm font-medium'>{item.name}</Link>
              ))}
            </div> */}
            <div className='flex flex-1 justify-end items-center'>
              <div className='flex items-center'>
                  <Link href={process.env.NEXT_PUBLIC_LOGIN_LINK} className='bg-green-800 text-base text-white px-2.5 md:px-5 py-1 md:py-2 rounded-full shadow'>Login</Link>
                  <Link href={process.env.NEXT_PUBLIC_ORDER_LINK} className='ml-2 md:ml-4 text-base font-medium bg-yellow-500 px-2.5 md:px-5 py-1 md:py-2 rounded-full shadow'>Order Now</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
