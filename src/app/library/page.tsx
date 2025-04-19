import Image from 'next/image';
import Link from 'next/link';

const savedItems = [
  {
    id: '1',
    type: 'playlist',
    title: 'Liked Songs',
    owner: 'You',
    imageUrl: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
    itemCount: '27 songs',
    link: '/collection/tracks'
  },
  {
    id: '2',
    type: 'playlist',
    title: 'Your Episodes',
    owner: 'You',
    imageUrl: 'https://misc.scdn.co/your-episodes/your-episodes-640.png',
    itemCount: '4 episodes',
    link: '/collection/episodes'
  },
  {
    id: '3',
    type: 'artist',
    title: 'The Weeknd',
    owner: 'Artist',
    imageUrl: 'https://ext.same-assets.com/2220852004/2323236870.jpeg',
    itemCount: '',
    link: '/artist/the-weeknd'
  },
  {
    id: '4',
    type: 'playlist',
    title: 'Today\'s Top Hits',
    owner: 'Spotify',
    imageUrl: 'https://ext.same-assets.com/2861895459/3893076360.jpeg',
    itemCount: '50 songs',
    link: '/playlist/todays-top-hits'
  },
  {
    id: '5',
    type: 'album',
    title: 'HIT ME HARD AND SOFT',
    owner: 'Billie Eilish',
    imageUrl: 'https://ext.same-assets.com/2861895459/585595416.jpeg',
    itemCount: '10 songs',
    link: '/album/hit-me-hard-and-soft'
  },
  {
    id: '6',
    type: 'playlist',
    title: 'Discover Weekly',
    owner: 'Spotify',
    imageUrl: 'https://ext.same-assets.com/2220852004/3069725324.jpeg',
    itemCount: '30 songs',
    link: '/playlist/discover-weekly'
  }
];

export default function LibraryPage() {
  return (
    <div className="text-white">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Your Library</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-[#2a2a2a] rounded-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.946c-3.83 0-6.946-3.116-6.946-6.946S4.17 1.054 8 1.054 14.946 4.17 14.946 8 11.83 14.946 8 14.946z" />
                <path d="M11.815 7.468h-3.283V4.185a.566.566 0 1 0-1.132 0v3.283H4.185a.566.566 0 1 0 0 1.132H7.4v3.283a.566.566 0 0 0 1.132 0V8.6h3.283a.566.566 0 0 0 0-1.132z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button className="bg-[var(--spotify-light-gray)] hover:bg-[#3a3a3a] px-3 py-1 rounded-full text-sm font-bold">
            Playlists
          </button>
          <button className="bg-[var(--spotify-light-gray)] hover:bg-[#3a3a3a] px-3 py-1 rounded-full text-sm font-bold">
            Artists
          </button>
          <button className="bg-[var(--spotify-light-gray)] hover:bg-[#3a3a3a] px-3 py-1 rounded-full text-sm font-bold">
            Albums
          </button>
          <button className="bg-[var(--spotify-light-gray)] hover:bg-[#3a3a3a] px-3 py-1 rounded-full text-sm font-bold">
            Podcasts & Shows
          </button>
        </div>

        <div className="flex justify-between items-center mb-4 text-[var(--spotify-gray)]">
          <div className="flex items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="mr-1">
              <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 5.75H1v-1.5h2v1.5zm0 5.75H1V13h2v1.5z" />
            </svg>
            <span className="text-xs">Recents</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {savedItems.map((item) => (
            <Link key={item.id} href={item.link} className="bg-[#181818] rounded-md p-4 hover:bg-[#282828] transition-colors group">
              <div className="mb-4 relative pb-[100%]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className={`object-cover ${item.type === 'artist' ? 'rounded-full' : 'rounded'}`}
                />
                <div className="absolute bottom-2 right-2 bg-[var(--spotify-green)] rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" fill="black" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-base mb-1 truncate">{item.title}</h3>
              <div className="flex flex-col">
                <p className="text-sm text-[var(--spotify-gray)] truncate">{item.type === 'artist' ? 'Artist' : item.owner}</p>
                {item.itemCount && (
                  <p className="text-sm text-[var(--spotify-gray)] truncate">{item.itemCount}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
