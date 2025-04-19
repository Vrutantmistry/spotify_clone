import type { Metadata } from "next";
import { roboto, spotifyBold, spotifyRegular, spotifyTitle } from "@/fonts";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Player from "@/components/player";

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "A Spotify Clone built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${spotifyBold.variable} ${spotifyRegular.variable} ${spotifyTitle.variable} font-sans`}>
        <div className="flex h-screen flex-col">
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-auto p-6 pb-24">{children}</main>
          </div>
          <Player />
        </div>
      </body>
    </html>
  );
}
