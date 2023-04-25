import Link from "next/link"

export default function OrderNow(){
    return <Link href={process.env.NEXT_PUBLIC_ORDER_LINK} className='bg-green-500 text-white hover:bg-green-600 hover:shadow-gray-50 rounded-lg py-4 px-5 font-medium'>Order a Custom Paper</Link>
}