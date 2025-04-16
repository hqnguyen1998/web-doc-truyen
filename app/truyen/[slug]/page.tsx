'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useComicsBySlug } from '@/hooks/useComics';
import Image from 'next/image';

const ComicPage = () => {
  const { slug } = useParams();

  const { comic } = useComicsBySlug(slug?.toString() || '');

  console.log(comic);

  return (
    comic?.item && (
      <div>
        <div className='flex flex-row gap-4'>
          <Image
            src={`https://img.otruyenapi.com/uploads/comics/${comic?.item?.thumb_url}`}
            alt={comic?.item?.name || 'Comic Image'}
            width={200}
            height={200}
            className='w-[200px] h-[300px] object-cover'
          />
          <div className='flex flex-col gap-4 flex-1'>
            <h1 className='text-white text-2xl font-bold'>
              {comic?.item?.name}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: comic?.item?.content }} />
          </div>
        </div>
        {/* Chapter lists */}
        <div className='w-full h-[500px] overflow-y-auto bg-[var(--primary-bg-color)] brightness-75 rounded-lg p-4 mt-10'>
          <h1 className='text-white text-2xl font-bold mb-4'>
            Danh sách chương
          </h1>
          <div className='grid grid-cols-2 gap-4'>
            {comic?.item?.chapters?.map((chapter: any) =>
              chapter.server_data.map((server: any) => (
                <div key={server.chapter_name}>
                  <h2 className='text-white text-xl font-bold'>
                    Chương {server.chapter_name}
                  </h2>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ComicPage;
