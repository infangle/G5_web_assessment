import { Metadata } from 'next';
import { Blog } from '../../components/blog/blog'; // Adjust path if necessary

interface Props {
  params: {
    detail: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { detail } = params;

  try {
    const response = await fetch(`https://a2sv-backend.onrender.com/api/blogs/${detail}`);
    if (!response.ok) throw new Error('Failed to fetch blog details');
    const blog: Blog = await response.json();
    return { title: `Blog Detail - ${blog.title}` };
  } catch (error) {
    console.error('Error fetching blog metadata:', error);
    return { title: 'Blog Detail' }; // Fallback title
  }
}
