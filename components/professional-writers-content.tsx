import Container from "./container";
import Image from 'next/image'

export default function ProfessionalWritersContent(){

    return (
        <>
            <section className="py-16 bg-gray-100">
                <Container>
                    <div>
                        <h3 className="text-xl font-medium">Professional essay writers can meet all of your academic needs</h3>
                        <div className="my-3">
                            <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">CustomWritings is an all-in-one writing service where you can get help with papers of any academic level and complexity. You may ask, “My essay needs help, but keep it simple, I’m a high school student,” and our writers will do exactly as you ask. You can also request, “I need someone to work on a dissertation chapter for my PhD paper,” and we’ll find an extra experienced professional for your order. Here are just a few examples of what we can do for you:</p>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-16">
                            <div className="col-span-3 md:col-span-1">
                                <div className="flex">
                                    <div className="mr-3">
                                        <Image src="/img/features/ico_superwriters.svg" alt="" width="250" height="300"/>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Simple English essays</h3>
                                        <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">It’s okay if you don’t want to make things complex. Our professional essay writers work for high school and college students too, and they won’t use complex academic language if you need just a high school essay.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 md:col-span-1">
                                <div className="flex">
                                    <div className="mr-3">
                                        <Image src="/img/features/ico_writer.svg" alt="" width="250" height="300"/>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Complex papers</h3>
                                        <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">We take pride in our Advanced writers, who can satisfy even the most scrupulous Master’s and PhD students. If you are looking for an expert to help with your graduate or postgraduate writing, our professionals are up to the job.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-3 md:col-span-1">
                                <div className="flex">
                                    <div className="mr-3">
                                        <Image src="/img/features/ico_writer-award.svg" alt="" width="250" height="300"/>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Calculation tasks</h3>
                                        <p className="font-light leading-7 text-gray-700 font-xs md:font-sm">Our team of STEM experts can easily solve math problems and equations that give you headaches. We have experts in 30+ technical disciplines, so you can rest assured that they will complete your assignment correctly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )

}