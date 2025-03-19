import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">State Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        The state you're looking for doesn't exist or doesn't have any national parks.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </main>
  );
} 