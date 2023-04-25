import Container from "./container"
import OrderNow from "./order-now"
import Link from "next/link"

export default function HomeWelcome(){
    return <section className="mb-16">
        <Container>
            <div className="grid grid-cols-12 w-full">
                <div className="hidden md:block col-span-5">
                    <div className="relative">
                        <img src='/img/nurse.jpg' alt={process.env.NEXT_PUBLIC_SITE_NAME} className="transform -scale-x-100"/>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7">
                    <h2 className="px-5 font-semibold text-2xl">Welcome to {process.env.NEXT_PUBLIC_SITE_NAME}</h2>
                    <div className="p-5 text-sm text-gray-500">
                        <p className="leading-6">
                            Pursuing a degree in nursing or any medical field is an uphill task, even to those practicing in the field. Due to complexity of the discipline and limited time to write the many nursing assignments, students often seek online nursing writing services from expert nursing paper writers to complete nursing essays, nursing research papers, nursing term papers, nursing dissertations, and capstones on nursing among other nursing academic writing assignments.
                            At <Link href="/" className="text-blue-800">{process.env.NEXT_PUBLIC_SITE_NAME}</Link> We have a team of writers who have gone through nursing and medical training and therefore understand the many nursing assignments requirements. We write high quality nursing papers, following the required paper formats, and with the correct nursing content.</p>
                    </div>
                    <div className="p-5">
                        <OrderNow/>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}