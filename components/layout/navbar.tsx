'use client';
import Link from 'next/link';
import Image from 'next/image';
import { User, Menu, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 h-[75px] bg-[var(--primary-bg-color)] border-b-1 border-b-[var(--primary-bg-color)] brightness-120 shadow-md'>
      <div className='flex flex-row justify-between items-center p-4 w-[90%] lg:w-[80%] 2xl:w-[70%] 3xl:w-[50%] mx-auto'>
        <div className='flex flex-row gap-5 items-center'>
          <Menu className='text-white cursor-pointer' fill='white' size={24} />
          <Image
            src='https://thuvientruyentranh.com/_next/static/media/logo.4df38c3d.png'
            alt='Logo'
            width={100}
            height={100}
            className='cursor-pointer'
          />
          <ul className='flex-row gap-4 items-center text-white hidden md:flex'>
            <li>
              <Link href='/'>Thể loại</Link>
            </li>
            <li>
              <Link href='/'>Lịch truyện</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-row gap-4 items-center'>
          <Input
            type='text'
            placeholder='Tìm kiếm'
            className='hidden xl:block xl:w-[300px] md:w-[150px] sm:w-[100px] xs:w-[50px] transition-all duration-300 placeholder:text-white text-white focus:ring-0 active:ring-0 focus:border-none active:border-none '
          />
          <Search
            className='text-white cursor-pointer xl:hidden'
            size={24}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <div className='cursor-pointer w-6 h-6'>
            <User className='w-6 h-6 text-white' fill='white' />
          </div>
        </div>
        {isSearchOpen && (
          <div className='fixed top-0 left-0 right-0 z-10 bg-black transition-all duration-300'>
            <div className='flex flex-row gap-2 px-2 justify-between items-center h-[75px] w-full'>
              <Input
                type='text'
                placeholder='Tìm kiếm'
                className='w-full transition-all duration-300 placeholder:text-white text-white focus:ring-0 active:ring-0 focus:border-none active:border-none'
              />
              <X
                className='text-white cursor-pointer'
                size={24}
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
