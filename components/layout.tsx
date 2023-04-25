import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import Script from 'next/script';
import Link from 'next/link';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Script strategy="lazyOnload">
        {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWK_TO_ID}/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();`}
      </Script>
      <div className='h-screen flex flex-col'>
        <Header/>
        <div className='pt-20 overflow-y-auto'>
            <main className=''>{children}</main>
            <Footer />
        </div>
        {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? (
          <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}/?text=Please+help+me+with+my+assignment`} className="fixed bottom-3 left-5 bg-green-700 text-white text-sm py-4 px-6 rounded-full">Talk to Us on WhatsApp {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</Link>) : ''}
      </div>      
    </>
  )
}
