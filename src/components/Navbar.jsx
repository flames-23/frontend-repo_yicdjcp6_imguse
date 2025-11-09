import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-sky-900/40 to-sky-900/10 backdrop-blur-xl border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          {/* Loghetto nuvola con bagliore leggero */}
          <span className="relative inline-flex">
            <svg
              viewBox="0 0 64 64"
              className="w-9 h-9 text-white opacity-90 drop-shadow-[0_0_12px_rgba(255,255,255,0.45)] group-hover:opacity-100 transition"
              fill="currentColor"
              aria-hidden
            >
              <path d="M20 46h22c7 0 12-5 12-11s-5-11-12-11h-1C40 16 35 12 29 12c-6 0-11 4-12 10-6 1-11 6-11 12 0 6 5 12 14 12z" />
            </svg>
          </span>
          <div className="leading-tight">
            <span className="block text-sm tracking-widest uppercase text-white/90">CloudsMC</span>
            <span className="text-xs text-white/70">Il regno tra le nuvole</span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#modalita" className="hover:text-white transition">Modalità</a>
          <a href="#shop" className="hover:text-white transition">Shop</a>
          <a href="#join" className="hover:text-white transition">Come Entrare</a>
          <a href="#staff" className="hover:text-white transition">Staff</a>
          <a
            href="https://discord.gg/3JRY3DgxmB"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/80 hover:bg-indigo-400 text-white transition shadow-md shadow-indigo-500/30"
          >
            💬 Discord
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
