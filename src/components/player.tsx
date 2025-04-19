import Image from 'next/image';
import { PlayIcon, PauseIcon, NextIcon, PreviousIcon, RepeatIcon, ShuffleIcon, VolumeIcon } from './icons';

export default function Player() {
  return (
    <div className="bg-black border-t border-[var(--spotify-light-gray)] h-20 flex items-center justify-between px-4">
      {/* Now playing info */}
      <div className="flex items-center gap-3 w-1/3">
        <div className="min-w-12 min-h-12 relative">
          <Image
            src="https://ext.same-assets.com/2861895459/3893076360.jpeg"
            alt="Song cover"
            width={48}
            height={48}
            className="rounded"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold">Messy</h4>
          <p className="text-xs text-[var(--spotify-gray)]">Lola Young</p>
        </div>
      </div>

      {/* Player controls */}
      <div className="flex flex-col items-center gap-2 w-1/3">
        <div className="flex items-center gap-5">
          <button className="player-button">
            <ShuffleIcon className="w-4 h-4" />
          </button>
          <button className="player-button">
            <PreviousIcon className="w-4 h-4" />
          </button>
          <button className="bg-white rounded-full p-2 hover:scale-105 transition-transform">
            <PlayIcon className="w-4 h-4 text-black" />
          </button>
          <button className="player-button">
            <NextIcon className="w-4 h-4" />
          </button>
          <button className="player-button">
            <RepeatIcon className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-80">
          <span className="text-xs text-[var(--spotify-gray)]">1:21</span>
          <div className="flex-1 bg-[var(--spotify-light-gray)] rounded-full h-1 relative">
            <div className="absolute h-full w-1/3 bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-[var(--spotify-gray)]">4:44</span>
        </div>
      </div>

      {/* Volume controls */}
      <div className="flex items-center justify-end gap-3 w-1/3">
        <VolumeIcon className="w-4 h-4 text-[var(--spotify-gray)]" />
        <div className="w-24 bg-[var(--spotify-light-gray)] rounded-full h-1 relative">
          <div className="absolute h-full w-2/3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
