import Banner from './components/banner'
import Section2 from './components/section2'
import Section8 from './components/section8'
import Section7 from './components/section7'
import Section6 from './components/section6'
import Section5 from './components/section5'
import Blog from './components/blog'
export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <Section2 />
      <Section6 />
      <Section5 />
      <Section7 />
      <Blog />
      <Section8 />
    </div>
  );
}
