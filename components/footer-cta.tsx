import Container from "./container";
import OrderNow from "./order-now";
import Image from "next/image";

export default function FooterCTA(){

    return <>
        <div className="py-10">
            <Container>
                <div className="flex flex-col h-full">
                    <div className="flex flex-col md:flex-row h-full items-center">
                        <div className="flex-1 h-full">
                            <h5 className="font-light leading-7 text-gray-700 font-xs text-center md:text-left md:font-sm text-5xl">Get your troublesome papers finished by our <span className="text-green-800 block leading-8">competent writers</span></h5>
                        </div>
                        <div className="flex flex-1 justify-center md:justify-end">
                            <div>
                                <Image src="/img/img_cta-3.2x.svg" alt="" height="500" width="500"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-start"><OrderNow/></div>
                </div>
            </Container>
        </div>
    </>

}