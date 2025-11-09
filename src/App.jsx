import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modes from './components/Modes';
import Shop from './components/Shop';
import HowToJoin from './components/HowToJoin';

function App() {
  useEffect(() => {
    // SEO meta tags setup
    document.title = 'CloudsMC – Il regno tra le nuvole del divertimento Minecraft';

    const metaDesc = document.querySelector('meta[name="description"]');
    const contentDesc = 'Entra su CloudsMC! Modalità BedWars, Survival Games, Duels e Minigames. Server Minecraft italiano competitivo e magico, con community e premi VIP esclusivi.';
    if (metaDesc) {
      metaDesc.setAttribute('content', contentDesc);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = contentDesc;
      document.head.appendChild(m);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywords = 'Server Minecraft italiano, BedWars Italia, CloudsMC, Survival Games, Duels, Minigames, server italiano Minecraft';
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const k = document.createElement('meta');
      k.name = 'keywords';
      k.content = keywords;
      document.head.appendChild(k);
    }

    const link = document.querySelector("link[rel='icon']");
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    // Simple pixel-art cloud favicon
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0,0,64,64);
    ctx.fillStyle = '#ffffff';
    const px = (x, y) => ctx.fillRect(x*4, y*4, 4, 4);
    // Cloud pixels
    [[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[6,7],[7,7],[8,7],[9,7],[7,6],[8,6],[9,6],[8,5]].forEach(([x,y])=>px(x,y));
    const url = canvas.toDataURL('image/png');
    if (link) {
      link.setAttribute('href', url);
    } else {
      const l = document.createElement('link');
      l.rel = 'icon';
      l.href = url;
      document.head.appendChild(l);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 via-sky-800 to-indigo-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Modes />
        <Shop />
        <HowToJoin />
      </main>
      <footer className="bg-sky-950/80 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-white/80">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div>
              <div className="font-semibold tracking-wider">CloudsMC</div>
              <div className="text-white/70 mt-1">IP del server: <span className="text-sky-200">play.cloudsmc.it</span></div>
              <div className="text-white/70">Discord: <a className="underline hover:text-white" href="https://discord.gg/3JRY3DgxmB" target="_blank" rel="noreferrer">discord.gg/3JRY3DgxmB</a></div>
            </div>
            <nav className="flex flex-wrap items-center gap-4 text-white/80">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#modalita" className="hover:text-white">Modalità</a>
              <a href="#shop" className="hover:text-white">Shop</a>
              <a href="https://discord.gg/3JRY3DgxmB" target="_blank" rel="noreferrer" className="hover:text-white">Discord</a>
              <a href="#staff" className="hover:text-white">Staff</a>
            </nav>
          </div>
          <div className="mt-6 text-center text-white/60">Copyright © 2025 CloudsMC – Tutti i diritti riservati</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
