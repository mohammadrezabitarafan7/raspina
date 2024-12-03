import Image from 'next/image'
import bb2 from '../images/bb2.png'
import { Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Toolbar from '../components/toolbar'
import logo2 from '../images/logo2.png'





const Banner = () => {
    return (

        <div className='flex flex-col relative  bg-[#edf8f4] '>
         <Toolbar />
            <div className='flex flex-row-reverse justify-between  p-12 gap-8 max-md:flex-col'>
       
                {/* Right */}
                <div className='basis-[45%]'>
                    <div className='w-full flex flex-col'>
                        <div class="max-w-xl mx-auto text-right">
                            <h1 className="text-4xl font-iransbold mb-6 max-md:text-3xl">راسپينا دکوراسيون</h1>
                            <h2 className="text-2xl font-bold  mb-6 max-md:text-xl">بازسازي و طراحي دکوراسيون داخلي</h2>
                            <h2 class=
                                "text-[13px] text-end max-md:text-center">طراح و مجري واحدهاي اداري، مسکوني، تجاري و ويلا بيش از يک دهه سابقه حرفه‌اي در پروژه‌هاي بازسازي و طراحي داخلي
                            </h2>
                            <div class="flex justify-end">
                                <Button className='mt-6 bg-[#F27F14] text-[#ffffff]' radius='none' variant="solid">
                                    پروژه هاي ما
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center */}
                <div className='basis-[35%] z-10  m-auto'>
                    <Image className='max-md:w-full' src={bb2} />
                </div>

                {/* Left */}
                <div className='basis-[20%] my-auto'>
                    <div className='flex flex-col gap-3  max-md:order-3 max-md:flex-row max-md:basis-full max-md:justify-between '>
                        <div class="flex flex-col  items-center">
                            <span class="text-3xl font-iransbold mx-auto">+53</span>
                            <span class="text-lg font-iransbold  mt-2 max-md:text-sm max-md:font-irans">پرسنل کاري</span>
                        </div>
                        <Divider className="my-2  text-center mx-auto max-md:hidden" />
                        <div class="flex flex-col items-center">
                            <span class="text-3xl font-iransbold ">+13</span>
                            <span class="text-lg font-iransbold mt-2 ax-md:text-sm max-md:font-irans">سابقه کار</span>
                        </div>
                        <Divider className="my-2 text-center mx-auto max-md:hidden" />

                        <div class="flex flex-col items-center">
                            <span class="text-3xl font-iransbold">+230</span>
                            <span class="text-lg font-iransbold  mt-2 ax-md:text-sm max-md:font-irans">پروژه انجام شده</span>
                        </div>

                    </div>
                </div>

            </div>

            <div className='h-[130px] flex p-4  justify-end w-2/3 bg-[#fafafa] absolute  bottom-12 right-0 max-md:hidden'>
                <div className="flex flex-row-reverse gap-2 ">
                    <Image className="my-auto" width={80} src={logo2} />
                    <div className="flex flex-col text-right my-auto">
                        <span className="font-bold">راسپينا</span>
                        <span className="">با بیش از یک دهه تجربه</span>
                        <span className="underline text-[#F27F14]">بیشتر بدانید</span>
                        <Divider className="my-2  text-center " />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Banner