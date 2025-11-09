import React from 'react';

const modes = [
  {
    title: 'BedWars',
    emoji: '⚔️',
    desc: 'Dimostra la tua strategia e proteggi il tuo letto tra le nuvole!'
  },
  {
    title: 'Survival Games (SG)',
    emoji: '🏹',
    desc: 'Sopravvivi, combatti e resta l\'ultimo in piedi!'
  },
  { title: 'Duels', emoji: '🎲', desc: 'Sfida i tuoi amici o nuovi avversari!' },
  { title: 'Minigames', emoji: '🎴', desc: 'Tanti giochi per rilassarti e divertirti!' },
  { title: 'Nuove modalità in arrivo!', emoji: '🎮', desc: 'Resta connesso per le novità!' }
];

const Modes = () => {
  return (
    <section id="modalita" className="relative py-24 bg-gradient-to-b from-sky-950 to-sky-900 text-white">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Modalità di Gioco</h2>
        <p className="text-sky-100/80 text-center mt-2">Scopri le avventure che ti attendono tra le nuvole</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((m) => (
            <div
              key={m.title}
              className="group relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition blur-3xl bg-gradient-to-tr from-indigo-500/20 via-sky-500/20 to-emerald-400/20" />
              <div className="relative">
                <div className="text-4xl mb-3 drop-shadow">{m.emoji}</div>
                <h3 className="text-xl font-bold">{m.title}</h3>
                <p className="mt-2 text-sky-100/80">{m.desc}</p>
                <div className="mt-4 inline-block px-3 py-1 rounded-full bg-sky-400/20 text-sky-100/90 border border-sky-300/20">
                  Pixel art • Effetti hover
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modes;
