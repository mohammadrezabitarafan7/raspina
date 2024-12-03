'use client'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from "next/image";
import Link from "next/link";
import dsd from '../images/dsd.png'
const Section7 = () => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const itemClasses = {
        base: " w-full",
        title: "font-bold text-[14px] text-right ",
        trigger: "data-[hover=true]:bg-[#ffffff1a] rounded-md h-10 flex gap-4 items-center",
        indicator: "text-large ",
        content: "text-small  flex flex-col gap-1",
    };
    return (
        <div className="flex flex-row-reverse gap-10 bg-[#FEF0E3] p-14 max-md:flex-col ">
            <div className="basis-[40%] flex flex-col gap-6 text-right ">
                <p className="text-[#F27F14] font-bold text-sm">پاسخ به سوالات پر تکرار.</p>
                <p className="text-[#000000] font-bold text-[25px]">سوالات متداول</p>
                <Accordion
                isCompact
                    showDivider={true}
                    itemClasses={itemClasses}
                >
                    <AccordionItem key="1" aria-label="Accordion 1" title="بازسازی معمولی چقدر زمان میبره؟">
                        <span className="text-right">
                            میزان زمان لازم برای اجرایی کردن پروژه بر اساس حجم کار و مکان بازسازی به طور کامل متفاوت است. برخی از بازسازی‌ها طی دو هفته انجام می‌شوند؛ در صورتی که برخی حجم کار بالایی دارند و بازسازی 5 الی 6 ماه زمان می‌برد. مسئله مهم این است که مجموعه طبق تاریخ تعیین شده کار را شروع کند و مطابق تاریخ موعود، پروژه را به صورت آماده و بدون تاخیر به دست مشتری رساند؛ همچنین مجموعه باید برای منطقی و اجرایی بودن تاریخ تعیین شده، ضمانت در نظر بگیرد.
                        </span>
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Products" title="هزینه بازسازی در سال ۱۴۰3 چقدره است؟">
                        <span>هزینه بازسازی و دکوراسیون خانه، دفتر کار، ویلا یا فروشگاه تماماً به خود شما بستگی دارد! شما به عنوان صاحب ملک، بر اساس میزان بودجه خود این توانایی را دارید تا از بین بیش از 300 آیتم و ابزار بازسازی، انتخاب‌های خود را انجام دهید و هزینه نهایی بعد از آن تعیین می‌شود. مشاوران شرکت راسپینا در این مسیر به طور کامل شما را همراهی می‌کنند.</span>
                    </AccordionItem>

                    <AccordionItem key="3" aria-label="Category" title="آیا لازم است برای بازسازی واحد به صورت تخلیه باشد؟">
                        <span>
                            اگر حجم بازسازی کم است، نیازی به تخلیه منزل یا ملک نیست؛ اما اگر حجم بازسازی زیاد است و باید به طور گسترده انجام شود، نیاز است تا در زمان بازسازی ملک را تخلیه کنید. انجام این کار باعث می‌شود تا تیم اجرایی کارها را در کمترین زمان و به بهترین شکل پیش ببرد و برای جا به جایی وسایل، دچار محدودیت و مشکل نشود.
                        </span>

                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Category" title="چرا باید واحدم را برای بازسازی به راسپینا بسپارم؟">
                        <span>
                            راسپینا با بیش از 10 سال سابقه کار و داشتن یک تیم قدرتمند، بهترین خدمات را برای شما در نظر گرفته است. در صورت همکاری با ما، در قبال هزینه پرداختی بیشترین خدمات ممکن را دریافت می‌کنید. کیفیت تجهیزات و متریالی که ما برای انجام کار بازسازی استفاده می‌کنیم بسیار بالاست. داشتن نفوذ در صنعت بازسازی و طراحی دکوراسیون داخلی باعث شده است تا با تأمین‌کنندگان دست‌اول در ارتباط باشیم و تجهیزات را با کمترین قیمت وبهترین کیفیت تهیه کنیم.

                        </span>

                    </AccordionItem>

                </Accordion>

            </div>
            <div className="basis-[60%] max-md:basis-full">
                <div className="relative w-full m-auto flex flex-row ">
                    <Image className="max-md:hidden" src={dsd} />
                    <div class="bg-[#ffffff] p-6 rounded-lg shadow-lg max-w-md w-full absolute left-[12rem] top-[3.5rem]
                    max-md:relative max-md:left-0 max-md:top-0">
                        <h2 class="text-lg font-semibold mb-2 text-right">درخواست مشاوره رایگان</h2>
                        <p class="text-gray-600 text-right mb-4 text-[12px]">پس از ارسال درخواست همکاران ما با شما تماس خواهند گرفت</p>
                        <form action="#" method="POST" class="space-y-4">
                            <div>
                                <input type="text" id="name" name="name" placeholder="نام و نام خانوادگی" 
                                className="mt-1 block w-full text-right px-4 py-3 border border-[#e6e6e6] sm:text-sm" />
                            </div>
                            <div>
                                <input type="text" id="phone" name="phone" placeholder="شماره موبایل"
                                 className="mt-1 text-right block w-full px-4 py-3 border border-[#e6e6e6] sm:text-sm" />
                            </div>
                            <div>
                                <textarea id="description" name="description" placeholder="شرح درخواست" rows="4"
                                 class="mt-1 block w-full px-4 py-2 border border-[#e6e6e6]  text-right sm:text-sm"></textarea>
                            </div>
                            <button type="submit" className=" bg-mycolor-50 w-full bg-indigo-600 text-[#ffff] text-sm py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">ارسال درخواست</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section7