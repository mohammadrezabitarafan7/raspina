'use client'
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from '../images/logo-raspina.png'

const Toolbar = () => {

    const links = [
        {
            name: "تماس با ما",
            href: ""
        },
        {
            name: "درباره ما",
            href: ""
        },
        {
            name: "پروژه ها",
            href: ""
        },
        {
            name: "صفحه نخست",
            href: ""
        }
    ]
    const pathname = usePathname();
    return (
        <div className="flex my-auto flex-row-reverse justify-around p-6 max-md:hidden">
            <div className="basis-[10%] flex justify-center my-auto">
                <Image width={100} src={logo}/>
            </div>
            <div className="flex flex-row justify-center gap-6 my-auto basis-[80%]">
                {links.map(i =>
                    <Link className=
                        'flex flex-col px-3 py-2  text-md font-bold text-[#666]  hover:text-[#242424]'
                        href={i.href}>{i.name}</Link>
                )}
            </div>
            <div className="basis-[10%] flex justify-start m-auto">
                <Button className='bg-[#323232] px-6 py-3 text-[#ffffff]' radius='none' variant="solid">
                    مشاوره رایگان
                </Button>
            </div>
        </div>
    )
}
export default Toolbar