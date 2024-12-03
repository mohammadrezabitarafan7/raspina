'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'صفحه اصلی', href: '/'},
  {
    name: 'پروژه ها',
    href: '/projects',

  },
  { name: 'تماس با ما', href: '/contactus'},
];

export default function NavLinks() {

  const pathname = usePathname();


  return (
    <>
    {links.map((link) => {
  
      return (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex text-[#2c1a0b]  text-center h-[48px] grow items-center justify-center gap-2  p-3 text-sm font-bold hover:text-[#fbe4d7] md:flex-none md:justify-start md:p-2 md:px-3',
            {
              ' text-[#fbe4d7]': pathname === link.href,
            },
          )}
        >
      
          <p className=" md:block text-center items-center">{link.name}</p>
        </Link>
      );
    })}
  </>
  );
}
