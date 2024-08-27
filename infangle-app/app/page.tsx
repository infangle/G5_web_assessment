"use client"; // Ensure this is a client component
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/blogs'); // Redirect to the blogs page
  }, [router]);

  return null; // Return null since we're redirecting
}
