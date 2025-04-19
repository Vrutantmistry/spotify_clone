import Image from 'next/image';
import Link from 'next/link';

// Mock Categories
const categories = [
  { id: '1', name: 'Podcasts', color: '#FF5500', image: 'https://ext.same-assets.com/2220852004/1063712396.jpeg' },
  { id: '2', name: 'Live Events', color: '#8400E7', image: 'https://ext.same-assets.com/2220852004/1368514171.jpeg' },
  { id: '3', name: 'Made For You', color: '#1DB954', image: 'https://ext.same-assets.com/2220852004/2323236870.jpeg' },
  { id: '4', name: 'New Releases', color: '#E8115B', image: 'https://ext.same-assets.com/2220852004/4076976859.jpeg' },
  { id: '5', name: 'Pop', color: '#FF0090', image: 'https://ext.same-assets.com/2220852004/365286169.jpeg' },
  { id: '6', name: 'Hip-Hop', color: '#E8115B', image: 'https://ext.same-assets.com/2220852004/3858013545.jpeg' },
  { id: '7', name: 'Rock', color: '#BA5D07', image: 'https://ext.same-assets.com/2220852004/951344193.jpeg' },
  { id: '8', name: 'Latin', color: '#0060E6', image: 'https://ext.same-assets.com/2220852004/3461568553.jpeg' },
  { id: '9', name: 'Dance/Electronic', color: '#1DB954', image: 'https://ext.same-assets.com/2220852004/212424206.jpeg' },
  { id: '10', name: 'R&B', color: '#8400E7', image: 'https://ext.same-assets.com/2220852004/1114201942.jpeg' },
];

export default function SearchPage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Browse all</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/genre/${category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="rounded-lg overflow-hidden relative h-52"
              style={{ backgroundColor: category.color }}
            >
              <div className="p-4 relative z-10">
                <h3 className="text-2xl font-bold">{category.name}</h3>
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 transform rotate-25 translate-x-1/6 translate-y-1/6">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={100}
                  height={100}
                  className="object-cover shadow-lg rounded-md transform rotate-[-25deg]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Top genres</h2>
          <Link href="/genres" className="text-sm text-[var(--spotify-gray)] font-bold hover:underline">
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.slice(4, 10).map((category) => (
            <Link
              key={category.id}
              href={`/genre/${category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="rounded-lg overflow-hidden relative h-28"
              style={{ backgroundColor: category.color }}
            >
              <div className="p-3 relative z-10">
                <h3 className="text-lg font-bold">{category.name}</h3>
              </div>
              <div className="absolute bottom-0 right-0 w-1/3 h-1/2 transform rotate-25 translate-x-1/4 translate-y-1/4">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={60}
                  height={60}
                  className="object-cover shadow-sm rounded-md transform rotate-[-25deg]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="w-full bg-[#2a2a2a] text-white p-3 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--spotify-green)]"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16 16" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="text-center p-8 text-[var(--spotify-gray)]">
          <h3 className="text-xl font-bold mb-2">Search for songs, artists, or podcasts</h3>
          <p>Find your favorite music or discover something new</p>
        </div>
      </div>
    </div>
  );
}
