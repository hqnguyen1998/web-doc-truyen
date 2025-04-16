'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getComicsBySlug } from '@/hooks/useComics'

const ComicPage = () => {
    const [comic, setComic] = useState<any>([]);
    const { slug } = useParams();

    useEffect(() => {

        const fetchComic = async () => {
            if (slug === undefined){
                return null
            }
            const data = await getComicsBySlug(slug.toString());
            setComic(data);
        }

        fetchComic()
     
    }, [slug]);

    console.log(comic);


  return (
    <div>
        <h1>123</h1>
    </div>
  )
}

export default ComicPage