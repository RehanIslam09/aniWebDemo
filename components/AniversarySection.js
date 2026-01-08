'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AnniversarySection() {
  const [showMessage, setShowMessage] = useState(false);
  const [hideBow, setHideBow] = useState(false);

  const handleClick = () => {
    // trigger fade-out animation
    setHideBow(true);

    // wait for fade-out to finish before showing message
    setTimeout(() => {
      setShowMessage(true);
    }, 800); // matches fade duration
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-linear-to-b from-pink-200 via-pink-300 to-violet-300 text-violet-900 font-bold p-6 relative overflow-hidden transition-all duration-700">
      {/* Sparkle overlay */}
      <div className="absolute inset-0 bg-[url('/sparkles.svg')] opacity-20 animate-pulse pointer-events-none"></div>

      {/* 🎀 Main Bow */}
      {!showMessage && (
        <div
          onClick={handleClick}
          className={`cursor-pointer select-none transition-all duration-700 ${
            hideBow ? 'animate-fadeOutAndShrink' : 'hover:scale-110'
          }`}
        >
          <p className="text-[10rem] md:text-[14rem] drop-shadow-[0_0_30px_rgba(244,114,182,0.8)] animate-glow">
            🎀
          </p>
        </div>
      )}

      {/* 💌 Message + Cake */}
      {showMessage && (
        <div className="flex flex-col items-center justify-center animate-fadeInAndGrow">
          <p className="text-5xl md:text-6xl mb-8 text-violet-800 drop-shadow-md animate-textShimmer">
            💖 Happy 1 Year of Us 💖
          </p>

          <div className="animate-bounce-slow">
            <Link href={'/letter'}>
              <Image
                src="/cake.png"
                alt="Anniversary Cake"
                width={340}
                height={340}
                className="mx-auto mt-6 drop-shadow-[0_10px_25px_rgba(233,30,99,0.3)] rounded-lg"
              />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
