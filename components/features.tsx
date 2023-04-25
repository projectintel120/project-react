import Container from "./container";
import Image from 'next/image'

export default function Features(){
    return <>
    <section className="mb-16">
        <Container>
            <div className="grid grid-cols-3 gap-3">
                <div className="col-span-3 md:col-span-1">
                    <div className="flex">
                        <div className="mr-3">
                            <Image src="/img/features/ico_plagiarism-free.svg" alt="" width="150" height="300"/>
                        </div>
                        <div>
                            <h3 className="font-medium">Plagiarism-free papers</h3>
                            <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">100% original essay writing is our key principle. We go the extra mile to make your custom paper unique and cite all references properly.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <div className="flex">
                        <div className="mr-3">
                            <Image src="/img/features/ico_superwriters.svg" alt="" width="150" height="300"/>
                        </div>
                        <div>
                            <h3 className="font-medium">Super essay writers</h3>
                            <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">Our experts can satisfy even the pickiest students. When using our services, you get an essay writer who knows your subject perfectly.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1">
                    <div className="flex">
                        <div className="mr-3">
                            <Image src="/img/features/ico_freerevisions.svg" alt="" width="150" height="300"/>
                        </div>
                        <div>
                            <h3 className="font-medium">Free revisions</h3>
                            <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">Your essay will be flawless. If you need improvements, we’ll edit your paper for free until it follows every single line of your instructions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
    </>
}