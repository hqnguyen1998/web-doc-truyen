"use client";
import Link from "next/link";
import Image from "next/image";
import { User, Menu, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCategory } from "@/hooks/useCategory";
import { Category } from "@/types/category";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { categories, loading, error } = useCategory();

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories: {error.message}</div>;

  console.log(categories);

  return (
    <nav className="fixed z-50 top-0 left-0 right-0 w-full h-[75px] bg-[var(--primary-bg-color)] border-b-1 border-b-[var(--primary-bg-color)] brightness-120 shadow-md">
      <div className="flex flex-row justify-between items-center p-4 w-[90%] lg:w-[80%] 2xl:w-[70%] 3xl:w-[50%] mx-auto">
        <div className="flex flex-row gap-5 items-center">
          <Menu className="text-white cursor-pointer" fill="white" size={24} />
          <Link href="/">
            <Image
              src="https://thuvientruyentranh.com/_next/static/media/logo.4df38c3d.png"
              alt="Logo"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>
          <ul className="flex-row gap-4 items-center text-white hidden md:flex">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="ml-2 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:brightness-110">
                    Thể loại
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="grid grid-cols-2"
                  style={{ maxHeight: "500px", overflowY: "auto" }}
                >
                  {categories.map((category: Category) => (
                    <DropdownMenuLabel key={category._id}>
                      <Link href={`/the-loai/${category.slug}`}>
                        {category.name}
                      </Link>
                    </DropdownMenuLabel>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="/">Lịch truyện</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Input
            type="text"
            placeholder="Tìm kiếm"
            className="hidden xl:block xl:w-[300px] md:w-[150px] sm:w-[100px] xs:w-[50px] transition-all duration-300 placeholder:text-white text-white focus:ring-0 active:ring-0 focus:border-none active:border-none "
          />
          <Search
            className="text-white cursor-pointer xl:hidden"
            size={24}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <div className="cursor-pointer w-6 h-6">
            <User className="w-6 h-6 text-white" fill="white" />
          </div>
        </div>
        {isSearchOpen && (
          <div className="fixed top-0 left-0 right-0 z-10 bg-black transition-all duration-300">
            <div className="flex flex-row gap-2 px-2 justify-between items-center h-[75px] w-full">
              <Input
                type="text"
                placeholder="Tìm kiếm"
                className="w-full transition-all duration-300 placeholder:text-white text-white focus:ring-0 active:ring-0 focus:border-none active:border-none"
              />
              <X
                className="text-white cursor-pointer"
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
