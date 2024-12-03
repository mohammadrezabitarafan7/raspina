'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p4 from '../images/p4.png'
import p5 from '../images/p5.png'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Divider, Button } from "@nextui-org/react";
import { useState } from 'react';
import Link from 'next/link';
// import '../../app/swiper.css'



const Section6 = () => {

    const [swiper, setSwiper] = useState(null);
    const next = () => {
        swiper.slidePrev();
    }
    const back = () => {
        swiper.slideNext();
    }
    const breakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

    }

    const imageList = [
        {
            src: p1,
            alt: "/",
            title: "پروژه نوشهر",
            des: ""
        },
        {
            src: p2,
            alt: "/",
            title: "پروژه سعادت آباد",
            des: ""
        },
        {
            src: p3,
            alt: "/",
            title: "پروژه نیاوران",
            des: ""
        },
        {
            src: p4,
            alt: "/",
            title: "پروژه لواسان",
            des: ""
        },
        {
            src: p5,
            alt: "/",
            title: "پروژه هروی",
            des: ""
        },
        {
            src: p3,
            alt: "/",
            title: "پروژه نیاوران",
            des: ""
        },
        {
            src: p4,
            alt: "/",
            title: "پروژه لواسان",
            des: ""
        },
        {
            src: p5,
            alt: "/",
            title: "پروژه هروی",
            des: ""
        },

    ]
    return (
        <div className='flex flex-col relative'>
            <div className='bg-[#FEF0E3] flex flex-row-reverse p-10 gap-8  pb-40 mb-20 max-lg:flex-col max-md:p-5 max-md:mb-0'>
                <div className='basis-[25%] flex justify-center flex-col gap-5 text-end'>
                    <span className='font-bold text-[#F27F14] text-[14px]'>پروژه های جدید راسپینا .</span>
                    <span className='font-bold text-xl leading-relaxed'>جدیدترین<br />پروژه های ما</span>
                    <span className='text-sm leading-relaxed'>در این قسمت، لیست تمامی پروژه‌های انجام شده توسط شرکت راسپینا را مشاهده می‌کنید.</span>

                    <Divider className="m-auto" />
                    <div className='flex flex-row-reverse justify-between'>
                        <Button className='bg-[#323232] text-[#ffffff]' radius='none' variant="solid">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
                            </svg>
                            مشاهده همه
                        </Button>
                        <div className='flex flex-row justify-around gap-2'>
                            <div onClick={next} className='h-10 w-10 border border-[#000000] bg-[#ffffff00] flex duration-500 hover:bg-[#ffffffb2] cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" class="size-5 m-auto justify-center">
                                    <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div onClick={back} className='h-10 w-10 border border-[#000000] bg-[#ffffff00] flex duration-500 hover:bg-[#ffffffb2] cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" class="size-5 m-auto justify-center">
                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>

                <Swiper className='w-full'
                    breakpoints={breakpoints}
                    onSwiper={(s) => {
                        setSwiper(s);
                    }}
                    loop={true}
                    slidesPerView={4}
                    centeredSlides={false}
                    spaceBetween={8}
                    pagination={{
                        type: '',
                    }}
                    modules={[Pagination, Navigation]}>
                    {imageList.map(item =>
                        <SwiperSlide >
                            <div className='rounded-lg'>
                                <Image className='rounded-lg w-56' src={item.src} />
                            </div>
                            <div className='flex flex-col  justify-between'>
                                <div className='flex flex-row-reverse justify-between mt-1'>
                                    <span className='font-bold text-sm text-[#000000] p-1 max-md:text-[8px]'>{item.title}</span>
                                    <div className='bg-[#F27F14] my-auto p-[3px] rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="size-4 m-auto ">
                                            <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <span className='text-[12px] text-[#666] p-1 text-right line-clamp-3 '>
                                    باز سازی و طراحی </span>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>

            </div>
            {/* Servives */}
            <div className='bg-[#ffffff] shadow-md rounded-md  mx-9 m-auto flex
             flex-col text-right px-7 py-4 gap-8 absolute
             top-[23rem] left-[3rem] right-[3rem] max-md:hidden'>
                <span className='text-xl font-bold'>آشنایی<br />
                    <span className='text-2xl'>
                        با خدمات راسپینا
                    </span>
                </span>
                <div className='flex flex-row justify-between max-md:grid max-md:grid-cols-2 max-md:grid-rows-2'>
                    <div className='flex flex-row justify-center gap-2 max-md:flex-col '>
                        <span className='font-bold textmd my-auto'>بازسازی آپارتمان</span>
                        <div className='p-2 bg-[#fdecdc] rounded-md '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#f27f14" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f27f14" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                            </svg>


                        </div>
                    </div>
                    <div className='flex flex-row justify-center gap-2 max-md:flex-col '>
                        <span className='font-bold textmd my-auto'>دکوراسیون داخلی منزل</span>
                        <div className='p-2 bg-[#e1eee8] rounded-md '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#7c9e8f" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                            </svg>

                        </div>
                    </div>
                    <div className='flex flex-row justify-center gap-2  max-md:flex-col'>
                        <span className='font-bold textmd my-auto'>بازسازی ساختمان</span>
                        <div className='p-2 bg-[#fdecdc] rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f27f14" class="size-6">
                                <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd" />
                            </svg>

                        </div>
                    </div>
                    <div className='flex flex-row justify-center gap-2 max-md:flex-col '>
                        <span className='font-bold textmd my-auto'>بازسازی خانه</span>
                        <div className='p-2 bg-[#e1eee8] rounded-md '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7c9e8f" class="size-6">
                                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/*  mobile Servives */}
            <div className='bg-[#FEF0E3] p-4 lg:hidden '>
                <div className='bg-[#ffffff] shadow-2xl rounded-md m-auto flex
             flex-col text-right px-4 py-3 gap-8'>
                    <span className='text-sm font-bold'>آشنایی<br />
                        <span className='text-sm'>
                            با خدمات راسپینا
                        </span>
                    </span>
                    <div className='flex flex-row justify-between gap-2'>
                        <div className='flex flex-row justify-center gap-2 max-md:flex-col'>
                            <span className='text-[8px] text-center my-auto'>بازسازی آپارتمان</span>
                            <div className='p-1 rounded-sm bg-[#fdecdc] flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#f27f14" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f27f14" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>


                            </div>
                        </div>
                        <div className='flex flex-row justify-center gap-2 max-md:flex-col'>
                            <span className='text-[8px] text-center  my-auto'>دکوراسیون داخلی منزل</span>
                            <div className='p-1 bg-[#e1eee8] flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#7c9e8f" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                                </svg>

                            </div>
                        </div>
                        <div className='flex flex-row justify-center gap-2  max-md:flex-col'>
                            <span className='text-[8px] text-center  my-auto'>بازسازی ساختمان</span>
                            <div className='p-1 bg-[#fdecdc] flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f27f14" class="size-6">
                                    <path fill-rule="evenodd" d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z" clip-rule="evenodd" />
                                </svg>

                            </div>
                        </div>
                        <div className='flex flex-row justify-center gap-2 max-md:flex-col '>
                            <span className='text-[8px] text-center my-auto'>بازسازی خانه</span>
                            <div className='p-1 bg-[#e1eee8] flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7c9e8f" class="size-6">
                                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>


    )
}
export default Section6