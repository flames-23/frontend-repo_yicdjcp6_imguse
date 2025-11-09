import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText('play.cloudsmc.it');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Spline 3D background (ready for future scene) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2dVZJ9I0o1Spla1G/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradients and particles overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-900/60 via-sky-800/40 to-sky-900/80" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.45),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Benvenuto su <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-emerald-200 to-indigo-200">CloudsMC</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-sky-100/90 max-w-3xl mx-auto">
          Il mondo tra le nuvole del divertimento Minecraft! "Unisciti a uno dei server italiani più divertenti, competitivi e magici."
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={copyIP} className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 hover:bg-white text-sky-900 font-semibold shadow-lg shadow-sky-200/40 transition">
            <span>🎮 Entra nel Server</span>
            <span className="text-sky-700 group-hover:text-sky-900">play.cloudsmc.it</span>
          </button>
          <a
            href="https://discord.gg/3JRY3DgxmB"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-500/90 hover:bg-indigo-400 text-white font-semibold shadow-lg shadow-indigo-500/40 transition"
          >
            💬 Unisciti al Discord
          </a>
          <a href="#shop" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-400/90 hover:bg-amber-300 text-sky-900 font-semibold shadow-lg shadow-amber-400/40 transition">
            🛒 Vai allo Shop
          </a>
        </div>

        {copied && (
          <div className="mt-3 text-sm text-emerald-200">IP copiato negli appunti!</div>
        )}
      </div>
    </section>
  );
};

export default Hero;
