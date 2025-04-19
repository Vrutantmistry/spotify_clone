import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon, SearchIcon, LibraryIcon, PlusIcon } from '@/components/icons';

export default function Sidebar() {
  return (
    <aside className="bg-black w-[var(--sidebar-width)] flex flex-col h-full">
      <div className="p-6">
        <Link href="/" className="block mb-8">
          <Image
            src="/images/spotify-logo.svg"
            alt="Spotify"
            width={131}
            height={40}
            className="text-white"
          />
        </Link>

        <nav className="mb-6">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="sidebar-nav-link active">
                <HomeIcon className="w-6 h-6" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/search" className="sidebar-nav-link">
                <SearchIcon className="w-6 h-6" />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <Link href="/library" className="sidebar-nav-link">
                <LibraryIcon className="w-6 h-6" />
                <span>Your Library</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-8">
          <div className="flex flex-col gap-4">
            <button className="sidebar-nav-link">
              <div className="bg-[var(--spotify-gray)] rounded-sm p-1">
                <PlusIcon className="w-4 h-4 text-black" />
              </div>
              <span>Create Playlist</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-2 px-6 overflow-auto flex-1">
        <div className="text-[var(--spotify-gray)] text-sm mb-4">
          <h2 className="font-bold mb-4">PLAYLISTS</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/playlist/todays-top-hits" className="hover:text-white transition-colors">
                Today's Top Hits
              </Link>
            </li>
            <li>
              <Link href="/playlist/discover-weekly" className="hover:text-white transition-colors">
                Discover Weekly
              </Link>
            </li>
            <li>
              <Link href="/playlist/rap-caviar" className="hover:text-white transition-colors">
                RapCaviar
              </Link>
            </li>
            <li>
              <Link href="/playlist/rock-classics" className="hover:text-white transition-colors">
                Rock Classics
              </Link>
            </li>
            <li>
              <Link href="/playlist/chill-hits" className="hover:text-white transition-colors">
                Chill Hits
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-6 text-xs text-[var(--spotify-gray)]">
        <div className="flex flex-wrap gap-2 mb-6">
          <Link href="#" className="hover:text-white transition-colors">Legal</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacy Center</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          <Link href="#" className="hover:text-white transition-colors">About Ads</Link>
        </div>
        <button className="border border-[var(--spotify-gray)] rounded-full px-3 py-1 hover:border-white hover:text-white transition-colors">
          English
        </button>
      </div>
    </aside>
  );
}
