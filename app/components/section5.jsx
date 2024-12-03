'use clien'
import Image from 'next/image'
import img1 from '../images/sdfdsfdsf.png'
import img2 from '../images/ddd.jpg'
import { Divider } from "@nextui-org/react";
const Section5 = () => {
    return (
        <div className="flex flex-col gap-6 text-end p-12">
            <div className="flex flex-row max-lg:flex-col max-lg:gap-5">
                <div className="basis-[70%]  m-auto">
                    <Image
                        alt="raspina"
                        src={img1}
                        width={800}/>             
                       </div>
                <div className="basis-[30%] flex flex-col gap-2">
                    <span className='font-bold text-[#F27F14] text-[14px]'>مرکز فناوری بازسازی راسپینا .</span>
                    <span className='font-bold text-xl leading-relaxed'>اولین مرکز تخصصی ارائه دهنده <br />خدمات مهندسی بازسازی</span>
                    <p className="text-sm leading-loose max-md:text-justify ">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                        و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                        فعلی تکنولوژیبا  در
                        این صورت می توان ام
                        ید داشت که تمام و د
                        شواری موجود در ارائ
                        ه راهکارها، و شرایط
                        سخت تایپ به پایان رسد
                    </p>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-around gap-8 max-lg:flex-col">
                <div className="basis-[40%] h-[200px] bg-[#FFE2C8]">
                    <Image className='h-[200px] rounded-lg' src={img2}/>
                </div>
                <div className="basis-[60%]">
                    <span className='font-bold text-xl leading-relaxed'>! همه فن حریف هستیم</span>
                    <p className="text-sm leading-loose ">
                        حرفه ای ترین های شهر را در هر بخش گرد هم آوردیم تا بدون نقص، بهترین کیفیت را ارائه دهیم.
                        خانه و محل کار شما، محل کسب تجربه و آزمایش پیمانکاران مختلف نیست. ما درتهران ایده با تکیه بر تجربه مجرب ترین عوامل اجرایی و دانش بالای مهندسین مرکز، آماده قبول پروژه های بازسازی هستیم.
                        ما به بازسازی به عنوان یک پروژه مهندسی نگاه می کنیم.
                        با پیشرفت تکنولوژی در تولید مصالح و تجهیزات ساختمانی، علم به کارگیری درست و اصولی آن ها، جایگاهی ویژه پیدا کرده است. دیگر زمان بازسازی به روش سنتی، گذشته و نگاه علمی ما به این مسئله ما را متمایز کرده است.
                    </p>
                </div>
            </div>
            <Divider className="my-2  text-center py-[1px]" />
            {/* برند ها */}
            <div className='flex flex-row justify-between gap-3'>
            </div>
        </div >
    )
}
export default Section5