import { Category } from '@/types/category';
import { useEffect, useState } from 'react';

export const useCategory = () => {
  const [categories, setCategories] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://otruyenapi.com/v1/api/the-loai');
        const {data: {items}}: {data: {items: Category[]}} = await response.json();
       
      
        setCategories(items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};
