import Image from 'next/image';
import Link from 'next/link';

// Mock data for home page
const trendingSongs = [
  {
    id: '1',
    title: 'Henry, come on',
    artist: 'Lana Del Rey',
    image: 'https://ext.same-assets.com/2220852004/4023633414.jpeg',
    link: '/album/henry-come-on'
  },
  {
    id: '2',
    title: 'Lord Of Chaos',
    artist: 'Ken Carson',
    image: 'https://ext.same-assets.com/2220852004/2097187800.jpeg',
    link: '/album/lord-of-chaos'
  },
  {
    id: '3',
    title: "There's A Rhythmn",
    artist: 'Bon Iver',
    image: 'https://ext.same-assets.com/2220852004/3543477348.jpeg',
    link: '/album/theres-a-rhythmn'
  },
  {
    id: '4',
    title: 'Blink Twice',
    artist: 'Shaboozey, Myles Smith',
    image: 'https://ext.same-assets.com/2220852004/2089929671.jpeg',
    link: '/album/blink-twice'
  },
  {
    id: '5',
    title: 'Legends (with Lil Baby)',
    artist: 'Quavo, Lil Baby',
    image: 'https://ext.same-assets.com/2220852004/577403131.jpeg',
    link: '/album/legends'
  }
];

const popularArtists = [
  {
    id: '1',
    name: 'Kendrick Lamar',
    image: 'https://ext.same-assets.com/2220852004/1063712396.jpeg',
    link: '/artist/kendrick-lamar'
  },
  {
    id: '2',
    name: 'Drake',
    image: 'https://ext.same-assets.com/2220852004/1368514171.jpeg',
    link: '/artist/drake'
  },
  {
    id: '3',
    name: 'The Weeknd',
    image: 'https://ext.same-assets.com/2220852004/2323236870.jpeg',
    link: '/artist/the-weeknd'
  },
  {
    id: '4',
    name: 'Lady Gaga',
    image: 'https://ext.same-assets.com/2220852004/4076976859.jpeg',
    link: '/artist/lady-gaga'
  },
  {
    id: '5',
    name: 'Post Malone',
    image: 'https://ext.same-assets.com/2220852004/365286169.jpeg',
    link: '/artist/post-malone'
  }
];

const popularAlbums = [
  {
    id: '1',
    title: 'MUSIC',
    artist: 'Playboi Carti',
    image: 'https://ext.same-assets.com/2220852004/2571522388.jpeg',
    link: '/album/music'
  },
  {
    id: '2',
    title: 'DeB TiRAR MS FOToS',
    artist: 'Bad Bunny',
    image: 'https://ext.same-assets.com/2220852004/90410256.jpeg',
    link: '/album/deb-tirar-ms-fotos'
  },
  {
    id: '3',
    title: 'GNX',
    artist: 'Kendrick Lamar',
    image: 'https://ext.same-assets.com/2220852004/1875643277.jpeg',
    link: '/album/gnx'
  },
  {
    id: '4',
    title: '$ome $exy $ongs 4 U',
    artist: 'PARTYNEXTDOOR, Drake',
    image: 'https://ext.same-assets.com/2220852004/4149053400.jpeg',
    link: '/album/some-sexy-songs-4-u'
  },
  {
    id: '5',
    title: 'HIT ME HARD AND SOFT',
    artist: 'Billie Eilish',
    image: 'https://ext.same-assets.com/2220852004/769494518.jpeg',
    link: '/album/hit-me-hard-and-soft'
  }
];

export default function Home() {
  return (
    <div className="text-white">
      <div className="bg-gradient-to-b from-[#232323] to-[var(--spotify-black)] pb-6 mb-6">
        <h1 className="text-3xl font-bold mb-6">Good evening</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link href="/playlist/todays-top-hits" className="flex items-center bg-[#2a2a2a] hover:bg-[#3e3e3e] transition-colors rounded overflow-hidden">
            <div className="w-20 h-20 relative">
              <Image
                src="https://ext.same-assets.com/2861895459/3893076360.jpeg"
                alt="Today's Top Hits"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold px-4">Today's Top Hits</span>
          </Link>
          <Link href="/playlist/discover-weekly" className="flex items-center bg-[#2a2a2a] hover:bg-[#3e3e3e] transition-colors rounded overflow-hidden">
            <div className="w-20 h-20 relative">
              <Image
                src="https://ext.same-assets.com/2220852004/3069725324.jpeg"
                alt="Discover Weekly"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold px-4">Discover Weekly</span>
          </Link>
          <Link href="/playlist/rap-caviar" className="flex items-center bg-[#2a2a2a] hover:bg-[#3e3e3e] transition-colors rounded overflow-hidden">
            <div className="w-20 h-20 relative">
              <Image
                src="https://ext.same-assets.com/2220852004/1556408678.jpeg"
                alt="RapCaviar"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold px-4">RapCaviar</span>
          </Link>
        </div>
      </div>

      {/* Trending Songs */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Trending songs</h2>
          <Link href="/section/trending" className="text-sm text-[var(--spotify-gray)] font-bold hover:underline">
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trendingSongs.map((song) => (
            <Link key={song.id} href={song.link} className="card">
              <div className="mb-4 relative pb-[100%]">
                <Image
                  src={song.image}
                  alt={song.title}
                  fill
                  className="rounded object-cover"
                />
              </div>
              <h3 className="font-bold text-base mb-1 truncate">{song.title}</h3>
              <p className="text-sm text-[var(--spotify-gray)] truncate">{song.artist}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Artists */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Popular artists</h2>
          <Link href="/section/artists" className="text-sm text-[var(--spotify-gray)] font-bold hover:underline">
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {popularArtists.map((artist) => (
            <Link key={artist.id} href={artist.link} className="card text-center">
              <div className="mb-4 relative pb-[100%] rounded-full overflow-hidden mx-auto">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-base mb-1">{artist.name}</h3>
              <p className="text-sm text-[var(--spotify-gray)]">Artist</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Albums */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Popular albums and singles</h2>
          <Link href="/section/albums" className="text-sm text-[var(--spotify-gray)] font-bold hover:underline">
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {popularAlbums.map((album) => (
            <Link key={album.id} href={album.link} className="card">
              <div className="mb-4 relative pb-[100%]">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="rounded object-cover"
                />
              </div>
              <h3 className="font-bold text-base mb-1 truncate">{album.title}</h3>
              <p className="text-sm text-[var(--spotify-gray)] truncate">{album.artist}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
