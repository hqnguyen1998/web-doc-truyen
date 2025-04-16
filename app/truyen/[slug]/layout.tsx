export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const response = await fetch(
    `https://otruyenapi.com/v1/api/truyen-tranh/${params.slug}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();

  return {
    title: data?.data?.seoOnPage?.titleHead || `Comic - ${params.slug}`,
    description: data?.data?.seoOnPage?.descriptionHead || '',
    openGraph: {
      title: data?.data?.seoOnPage?.titleHead || `Comic - ${params.slug}`,
      description: data?.data?.seoOnPage?.descriptionHead || '',
    },
  };
}

const ComicLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className='mt-[100px] text-white'>{children}</div>;
};

export default ComicLayout;
