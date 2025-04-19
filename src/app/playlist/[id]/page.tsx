import Image from 'next/image';
import Link from 'next/link';
import { PlayIcon } from '@/components/icons';
import { Metadata } from 'next';

type Playlist = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  owner: string;
  followers: string;
  totalSongs: number;
  duration: string;
  tracks: Track[];
};

type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  addedAt: string;
  albumCover: string;
  artistUrl: string;
  albumUrl: string;
};

// Mock data for playlists
const playlists: Record<string, Playlist> = {
  'todays-top-hits': {
    id: 'todays-top-hits',
    title: "Today's Top Hits",
    description: "The hottest 50. Cover: Lola Young",
    coverImage: "https://ext.same-assets.com/2861895459/3893076360.jpeg",
    owner: "Spotify",
    followers: "35,298,586",
    totalSongs: 50,
    duration: "2 hr 45 min",
    tracks: [
      {
        id: '1',
        title: 'Messy',
        artist: 'Lola Young',
        album: 'Messy',
        duration: '4:44',
        addedAt: 'Jan 31, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/3893076360.jpeg',
        artistUrl: '/artist/lola-young',
        albumUrl: '/album/messy',
      },
      {
        id: '2',
        title: 'Anxiety',
        artist: 'Doechii',
        album: 'Anxiety',
        duration: '4:09',
        addedAt: 'Mar 7, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/3093785667.jpeg',
        artistUrl: '/artist/doechii',
        albumUrl: '/album/anxiety',
      },
      {
        id: '3',
        title: 'Ordinary',
        artist: 'Alex Warren',
        album: 'Ordinary',
        duration: '3:06',
        addedAt: 'Feb 14, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/2570224976.jpeg',
        artistUrl: '/artist/alex-warren',
        albumUrl: '/album/ordinary',
      },
      {
        id: '4',
        title: 'Die With A Smile',
        artist: 'Lady Gaga, Bruno Mars',
        album: 'Die With A Smile',
        duration: '4:11',
        addedAt: 'Jan 31, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/2761989293.jpeg',
        artistUrl: '/artist/lady-gaga',
        albumUrl: '/album/die-with-a-smile',
      },
      {
        id: '5',
        title: 'luther (with sza)',
        artist: 'Kendrick Lamar, SZA',
        album: 'GNX',
        duration: '2:57',
        addedAt: 'Jan 31, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/2761989293.jpeg',
        artistUrl: '/artist/kendrick-lamar',
        albumUrl: '/album/gnx',
      },
      {
        id: '6',
        title: 'BIRDS OF A FEATHER',
        artist: 'Billie Eilish',
        album: 'HIT ME HARD AND SOFT',
        duration: '3:30',
        addedAt: 'Jan 31, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/585595416.jpeg',
        artistUrl: '/artist/billie-eilish',
        albumUrl: '/album/hit-me-hard-and-soft',
      },
      {
        id: '7',
        title: 'Thats So True',
        artist: 'Gracie Abrams',
        album: 'The Secret of Us (Deluxe)',
        duration: '2:46',
        addedAt: 'Jan 31, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/1108731350.jpeg',
        artistUrl: '/artist/gracie-abrams',
        albumUrl: '/album/the-secret-of-us',
      },
      {
        id: '8',
        title: 'Azizam',
        artist: 'Ed Sheeran',
        album: 'Azizam',
        duration: '2:42',
        addedAt: '1 week ago',
        albumCover: 'https://ext.same-assets.com/2861895459/287712440.jpeg',
        artistUrl: '/artist/ed-sheeran',
        albumUrl: '/album/azizam',
      },
    ]
  },
  'discover-weekly': {
    id: 'discover-weekly',
    title: "Discover Weekly",
    description: "Your weekly mixtape of fresh music. Enjoy new discoveries and deep cuts chosen just for you. Updates every Monday.",
    coverImage: "https://ext.same-assets.com/2220852004/3069725324.jpeg",
    owner: "Spotify",
    followers: "12,857,493",
    totalSongs: 30,
    duration: "1 hr 45 min",
    tracks: [
      {
        id: '1',
        title: 'Die With A Smile',
        artist: 'Lady Gaga, Bruno Mars',
        album: 'Die With A Smile',
        duration: '4:11',
        addedAt: 'Jan 31, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/2761989293.jpeg',
        artistUrl: '/artist/lady-gaga',
        albumUrl: '/album/die-with-a-smile',
      },
      {
        id: '2',
        title: 'Taste',
        artist: 'Sabrina Carpenter',
        album: "Short n' Sweet",
        duration: '2:37',
        addedAt: 'Jan 31, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/1357729783.jpeg',
        artistUrl: '/artist/sabrina-carpenter',
        albumUrl: '/album/short-n-sweet',
      },
      {
        id: '3',
        title: 'DtMF',
        artist: 'Bad Bunny',
        album: 'DeB TiRAR MS FOToS',
        duration: '3:57',
        addedAt: 'Jan 31, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/1556408678.jpeg',
        artistUrl: '/artist/bad-bunny',
        albumUrl: '/album/deb-tirar-ms-fotos',
      },
    ]
  },
  'rap-caviar': {
    id: 'rap-caviar',
    title: "RapCaviar",
    description: "Music from Lil Tecca, Quavo and Playboi Carti.",
    coverImage: "https://ext.same-assets.com/2220852004/1556408678.jpeg",
    owner: "Spotify",
    followers: "15,489,273",
    totalSongs: 50,
    duration: "2 hr 30 min",
    tracks: [
      {
        id: '1',
        title: 'Legends (with Lil Baby)',
        artist: 'Quavo, Lil Baby',
        album: 'Legends (with Lil Baby)',
        duration: '4:29',
        addedAt: 'Jan 31, 2025',
        albumCover: 'https://ext.same-assets.com/2220852004/577403131.jpeg',
        artistUrl: '/artist/quavo',
        albumUrl: '/album/legends',
      },
      {
        id: '2',
        title: 'luther (with sza)',
        artist: 'Kendrick Lamar, SZA',
        album: 'GNX',
        duration: '2:57',
        addedAt: 'Jan 31, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/2761989293.jpeg',
        artistUrl: '/artist/kendrick-lamar',
        albumUrl: '/album/gnx',
      },
      {
        id: '3',
        title: 'Timeless (feat. Playboi Carti)',
        artist: 'The Weeknd, Playboi Carti',
        album: 'Timeless',
        duration: '4:16',
        addedAt: 'Jan 31, 2025',
        albumCover: 'https://ext.same-assets.com/2861895459/2999472674.jpeg',
        artistUrl: '/artist/the-weeknd',
        albumUrl: '/album/timeless',
      },
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(playlists).map(id => ({
    id,
  }));
}

interface PlaylistPageProps {
  params: {
    id: string;
  };
}

export default function PlaylistPage({ params }: PlaylistPageProps) {
  const playlist = playlists[params.id];

  // Handle case where playlist doesn't exist
  if (!playlist) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h1 className="text-3xl font-bold mb-4">Playlist not found</h1>
        <p className="text-[var(--spotify-gray)] mb-6">The playlist you're looking for doesn't exist or has been removed.</p>
        <Link href="/" className="bg-[var(--spotify-green)] text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row items-end gap-6 mb-6 bg-gradient-to-b from-[#503750] to-[var(--spotify-black)] p-6">
        <div className="w-48 h-48 min-w-48 shadow-lg">
          <Image
            src={playlist.coverImage}
            alt={playlist.title}
            width={192}
            height={192}
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase mb-2">Public Playlist</p>
          <h1 className="text-7xl font-black mb-6">{playlist.title}</h1>
          <p className="text-[var(--spotify-gray)] mb-2">{playlist.description}</p>
          <div className="flex items-center gap-1 text-sm">
            <span className="font-bold">{playlist.owner}</span>
            <span className="text-[var(--spotify-gray)]">•</span>
            <span className="text-[var(--spotify-gray)]">{playlist.followers} saves</span>
            <span className="text-[var(--spotify-gray)]">•</span>
            <span className="text-[var(--spotify-gray)]">{playlist.totalSongs} songs, about {playlist.duration}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-8 mb-8">
          <button className="bg-[var(--spotify-green)] text-black rounded-full w-14 h-14 flex items-center justify-center hover:scale-105 transition-transform">
            <PlayIcon className="w-6 h-6" />
          </button>
        </div>

        <table className="w-full text-left">
          <thead className="border-b border-[var(--spotify-light-gray)]">
            <tr className="text-[var(--spotify-gray)] text-sm">
              <th className="py-2 w-12">#</th>
              <th className="py-2">Title</th>
              <th className="py-2 hidden md:table-cell">Album</th>
              <th className="py-2 hidden lg:table-cell">Date added</th>
              <th className="py-2 text-right pr-6">
                <span className="sr-only">Duration</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                  <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z" />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {playlist.tracks.map((track, index) => (
              <tr key={track.id} className="hover:bg-[#2a2a2a] group">
                <td className="py-3 text-[var(--spotify-gray)]">{index + 1}</td>
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 min-w-10 relative">
                      <Image
                        src={track.albumCover}
                        alt={track.album}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <p className="font-normal">{track.title}</p>
                      <p className="text-sm text-[var(--spotify-gray)]">
                        <Link href={track.artistUrl} className="hover:underline">{track.artist}</Link>
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 hidden md:table-cell text-[var(--spotify-gray)]">
                  <Link href={track.albumUrl} className="hover:underline">{track.album}</Link>
                </td>
                <td className="py-3 hidden lg:table-cell text-[var(--spotify-gray)]">{track.addedAt}</td>
                <td className="py-3 text-right text-[var(--spotify-gray)] pr-6">{track.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
