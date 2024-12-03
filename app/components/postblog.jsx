import Image from "next/image"
import post from '../images/8-Contemporary-Office-Room-Design-1024x723 (1).jpg'
import { Divider } from "@nextui-org/react";


const BlogPost = () => {

    return (

        <div className="flex flex-col w-full gap-3">
            <div className="flex flex-row-reverse justify-start gap-2 ">
                <div className="bais-[30%]p-1">
                    <Image className="w-[100px] h-[100px] bg-[#ffffff] p-2" src={post} />
                </div>
                <div className="bais-[70%] my-auto flex flex-col gap-3 ">
                    <p className="font-bold  text-sm">چرا شرکت ما نیاز به بازسازی دارد؟</p>
                    <div className="flex flex-row justify-end gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F27F14" class=" size-5">
                            <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                        </svg>
                        <p className="text-sm text-[#F27F14]">مشاهده</p>
                    </div>
                </div>
            </div>
            <Divider className="m-auto" />
        </div>
    )
}
export default BlogPost