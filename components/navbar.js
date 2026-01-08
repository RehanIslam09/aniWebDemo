'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);

  // ✅ Initialize ref correctly
  const audioRef = useRef(null);

  const songs = ['/sienna.mp3'];

  const playRandomSong = () => {
    const nextSong = Math.floor(Math.random() * songs.length);
    setCurrentSong(nextSong);
    const audio = audioRef.current;
    if (audio) {
      audio.src = songs[nextSong];
      audio.play().catch((err) => console.log('Play failed:', err));
    }
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      if (!audio.src) {
        playRandomSong();
      } else {
        audio.play().catch((err) => console.log('Play failed:', err));
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleEnded = () => {
    playRandomSong();
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.volume = 0.5;
  }, []);

  return (
    <nav className="bg-gradient-to-r from-pink-400 via-pink-500 to-violet-600 text-white py-4 shadow-lg backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="relative container mx-auto flex justify-between items-center px-6">
        {/* Left - Home */}
        <Link
          href="/"
          className="text-lg font-semibold hover:text-pink-100 transition duration-300"
        >
          Home
        </Link>

        {/* Center - Title */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold tracking-wide text-white drop-shadow-sm">
          💖 Happy Anniversary 💖
        </h1>

        {/* Right - Links + Music Animation */}
        <div className="flex items-center space-x-6">
          <Link
            href="/gallery"
            className="text-lg font-semibold hover:text-pink-100 transition duration-300"
          >
            Pictures
          </Link>

          {/* Music Button */}
          <button
            onClick={handlePlayPause}
            className="relative w-6 h-6 flex items-center justify-center cursor-pointer"
            aria-label="Play music"
          >
            <div className="flex items-end justify-between w-full h-full space-x-[2px]">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={`w-[2px] bg-white rounded-full transition-all duration-300 ${
                    isPlaying ? 'animate-music-bar' : 'h-1 opacity-60'
                  }`}
                ></span>
              ))}
            </div>
          </button>

          {/* ✅ Hidden Audio */}
          <audio ref={audioRef} onEnded={handleEnded} />
        </div>
      </div>
    </nav>
  );
}
