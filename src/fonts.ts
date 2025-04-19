import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

export const spotifyBold = localFont({
  src: '../public/fonts/SpotifyMixUI-Bold.woff2',
  display: 'swap',
  variable: '--font-spotify-bold',
});

export const spotifyRegular = localFont({
  src: '../public/fonts/SpotifyMixUI-Regular.woff2',
  display: 'swap',
  variable: '--font-spotify-regular',
});

export const spotifyTitle = localFont({
  src: '../public/fonts/SpotifyMixUITitleVariable.woff2',
  display: 'swap',
  variable: '--font-spotify-title',
});

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
