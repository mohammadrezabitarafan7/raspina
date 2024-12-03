import Image from "next/image"
import phone from '../images/phone ras.png'
import arrow from '../images/arrow.png'
import { Button } from "@nextui-org/react";



const Section8 = () => {
    return (
        <div className="flex flex-row justify-center mt-5 gap-[11rem] max-md:flex-col-reverse max-md:gap-12">
            <div className="max-md:mx-auto">
                <Image width={200} src={phone} className="max-md:w-[15rem]" />
            </div>
            <div className="my-auto max-md:mx-auto">
                <Image className="rotate-12" src={arrow} />
            </div>
            <div className="flex flex-col gap-8 justify-center">
                <span className="text-2xl font-bold text-center">در اینستاگرام همراه<br /> راسپینا دکوراسیون باشید</span>
                <Button className='bg-[#323232] px-8 text-[#ffffff] max-md:w-1/3 max-md:m-auto' radius='none' variant="solid">
                    FOLLOW US
                </Button>

            </div>
        </div>
    )
}
export default Section8