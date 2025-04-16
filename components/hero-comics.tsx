import React from 'react'
import Image from 'next/image'
import { useComics } from '@/hooks/useComics'
import Link from 'next/link';

const HeroComics = () => {
    const { comics, loading, error } = useComics();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='w-full h-full mt-[100px]'>
      <h1 className='text-white text-2xl font-bold mb-4'>Truyện Hot</h1>
       <div className='grid grid-cols-4 bg-[var(--primary-bg-color)] brightness-75 p-4 rounded-lg'>
         {comics?.items?.slice(0, 8).map((comic: any) => (
           <Link href={`/truyen/${comic.slug}`} as={`/truyen/${comic.slug}`} title={comic.slug} key={comic._id} className='text-white w-full h-full flex flex-col justify-center items-center gap-4 mb-10'>
           <div className='relative'>
             <Image
               src={`https://img.otruyenapi.com/uploads/comics/${comic.thumb_url}`}
               alt={comic.name}
               width={100}
               height={150}
               className='w-[100px] h-[150px] object-cover'
               priority
               />
               {comic.status === "completed" && (
                 <div className='absolute top-0 left-0 bg-teal-700 w-full h-[20px] flex justify-center items-center'>
                 <span className='text-[10px]'>Đã hoàn thành</span>
                 </div>
               )}
               

                </div>
               <h2 className='text-xs font-bold w-[100px] h-full overflow-hidden'>{comic.name}</h2>
           </Link>
         ))}
       </div>
         </div>
  )
}

export default HeroComics