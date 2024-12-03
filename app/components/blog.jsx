import { Button } from "@nextui-org/react";
import Image from "next/image";
import dd from '../images/ddd.jpg'
import BlogPost from '../components/postblog'

const Blog = () => {
    return (
        <div className="flex flex-col gap-5 p-14  h-full">
            <div className=" flex flex-row-reverse justify-between  max-md:flex-col max-md:gap-5">
                <div className="flex flex-col gap-4 text-right">
                    <p className="text-[#F27F14] text-md font-bold">آخرین مقالات.</p>
                    <p className="text-[#000000] text-xl">مطالبی برای<span className="font-bold"> خواندن </span></p>
                </div>
                <div className="flex justify-end">
                    <Button className='bg-[#323232]  px-10  text-[#ffffff] max-md:px-6' radius='none' variant="solid">
                        مشاهده همه
                    </Button>
                </div>
            </div>




            {/* blog content*/}
            <div className="flex flex-row-reverse justify-between gap-2 max-md:flex-col">
                <div className="basis-3/5 bg-[#c8dfd5] pt-4 px-4 pb-20 flex flex-col relative max-md:">
                    <Image src={dd} />
                    <div className="bg-[#ffffff] p-4 text-black flex flex-col text-right absolute bottom-[3rem] left-12 right-12 max-md:relative
                    max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:pt-4">
                        <p className="text-xl font-bold text-black">چرا شرکت ما نیاز به بازسازی دارد؟</p>
                        <div className=" flex flex-row-reverse justify-between gap-9 max-md:flex-col">
                            <span className="text-[14px] leading-relaxed  text-right text-[#000000]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </span>
                            <div className="bg-[#F27F14] m-auto p-3  rounded-md hover:bg-[#c96b13]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="size-4">
                                    <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="basis-2/5 bg-[#c8dfd5] flex flex-col items-end gap-3 p-4 ">
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                    <BlogPost />
                </div>

            </div>

        </div>
    )
}
export default Blog