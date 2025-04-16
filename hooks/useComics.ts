import { useEffect, useState } from 'react';


// Get All Comics
export const getComics = async () => {
  const response = await fetch('https://otruyenapi.com/v1/api/home', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.data;
};

export const useComics = () => {
  const [comics, setComics] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const comics = await getComics();
        setComics(comics);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchComics();
  }, []);

  return { comics, loading, error };
};


// Get Comics By Slug
export const getComicsBySlug = async (slug: string) => {
  const response = await fetch(`https://otruyenapi.com/v1/api/truyen-tranh/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
};