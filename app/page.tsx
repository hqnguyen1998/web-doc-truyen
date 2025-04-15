'use client';
import Image from 'next/image';
import { useComics } from '@/hooks/useComics';

export default function Home() {
  const { comics, loading, error } = useComics();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(comics);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[100px]'>
      {comics?.items?.map((comic: any) => (
        <div key={comic._id}>
          <h2>{comic.name}</h2>
          <Image
            src={`https://img.otruyenapi.com/uploads/comics/${comic.thumb_url}`}
            alt={comic.name}
            width={200}
            height={200}
            priority
          />
        </div>
      ))}
    </div>
  );
}
