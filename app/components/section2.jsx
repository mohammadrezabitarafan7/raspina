import { Divider } from "@nextui-org/react";
import Image from "next/image";
import b from '../images/b4.jpg'
import v from '../images/logo2.png'
import b3 from '../images/back3.png'
import arrow from '../images/arrow.png'
import { Button } from "@nextui-org/react";
import logo2 from '../images/logo2.png'






const Section2 = () => {
    return (
        <div className="grid grid-cols-3  gap-8 p-14 max-lg:grid-cols-1">


            <div className="flex flex-row-reverse gap-2 justify-around md:hidden">
                <Image className="my-auto" width={80} src={logo2} />
                <div className="flex flex-col text-right my-auto">
                    <span className="font-bold">راسپينا</span>
                    <span className="">با بیش از یک دهه تجربه</span>
                    <span className="underline text-[#F27F14]">بیشتر بدانید</span>
                    <Divider className="my-2  text-center " />
                </div>
            </div>
            {/* بخش چپ */}

            <div className=" p-4 max-md:order-2">
                <div className="flex flex-col gap-4 ">
                    <span className="text-end">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</span>
                    <Image className="p-6" src={b3} />
                    <div className="flex flex-row-reverse justify-around">
                        <Image className="h-[23px] w-[59px] my-auto max-md:hidden" src={arrow} />
                        <Button className='bg-[#F27F14] -rotate-6 px-8 text-[#ffffff] max-md:rotate-0' radius='none' variant="solid">
                            درباره ما                        </Button>
                    </div>

                </div>
            </div>
            {/* بخش وسط */}
            <div className="h-full relative max-md:hidden">
                <div className="bg-[#C8DFD5] p-4  ">
                    <Image className="" src={b} />
                    <Image className=" absolute top-[43rem] right-[34rem] xl:top-[26rem] xl:right-[19rem]" src={v} width={120} />



                </div>
            </div>
            {/* بخش اول */}
            <div className=" p-4">
                <div className="flex flex-col items-end  ">
                    <span className="text-[#F27F14] font-bold text-md">روال کار چجوریه؟.</span>
                    <span className="text-[#000000] text-xl text-end font-bold mt-6 leading-normal">روند کار در راسپینا شامل چه مراحلی میشه ؟</span>

                    <div className="flex flex-row mt-12 gap-2">
                        <span className="font-bold text-sm m-auto ">بازدید حضوری</span>
                        <div className="bg-[#EAF0EE] p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C8DFD5" class="size-6">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>
                        </div>

                    </div>
                    <Divider className="my-2  text-center py-[1px]" />
                    <div className="flex flex-row mt-12 gap-4">
                        <span className="font-bold text-sm m-auto">براورد جامع مالی پروژه</span>
                        <div className="bg-[#FCE5D5] p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F27F14" class="size-6">
                                <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                                <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <Divider className="my-2  text-center py-[1px]" />
                    <div className="flex flex-row mt-12 gap-4 max-md:gap-2">
                        <span className="font-bold text-sm m-auto max-md:text-[12px]">طراحی دو بعدی و سه بعدی پروژه</span>
                        <div className="bg-[#EAF0EE] p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C8DFD5" class="size-6">
                                <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                            </svg>
                        </div>
                    </div>
                    <Divider className="my-2 text-center py-[1px]" />
                    <div className="flex flex-row mt-12 gap-4">
                        <span className="font-bold text-sm m-auto">عملیات اجرایی</span>
                        <div className="bg-[#FCE5D5] p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F27F14" class="size-6">
                                <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                                <path fill-rule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <Divider className="my-2  text-center py-[1px]" />
                    <div className="flex flex-row mt-12 gap-4">
                        <span className="font-bold text-sm m-auto">پشتیانی و گارانتی</span>
                        <div className="bg-[#EAF0EE] p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C8DFD5" class="size-6">
                                <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Section2