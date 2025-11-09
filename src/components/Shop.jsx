import React from 'react';

const tiers = [
  {
    name: 'VIP',
    perks: ['Kit speciali e vantaggi in BedWars'],
    extra: '💠 Priorità accesso',
    color: 'from-cyan-300 to-sky-400'
  },
  {
    name: 'CHAMPION',
    perks: ['Tutti i vantaggi VIP + comandi esclusivi'],
    extra: '⚡ Partite private',
    color: 'from-violet-300 to-fuchsia-400'
  },
  {
    name: 'LEGEND',
    perks: ['Tutti i vantaggi + stanze private, nome colorato e bonus mensili'],
    extra: '🌟 Status unico',
    color: 'from-amber-300 to-orange-400'
  }
];

const Shop = () => {
  return (
    <section id="shop" className="relative py-24 bg-gradient-to-b from-sky-900 to-indigo-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Shop / VIP</h2>
        <p className="text-sky-100/80 text-center mt-2">Sali su piattaforme fluttuanti e scegli il tuo potere</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="group relative rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur overflow-hidden">
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition blur-2xl bg-gradient-to-r ${t.color}`} />
              <div className="relative">
                <div className="text-center">
                  <div className={`mx-auto w-24 h-24 rounded-full bg-gradient-to-br ${t.color} shadow-[0_0_60px_rgba(255,255,255,0.25)]`} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-center">{t.name}</h3>
                <ul className="mt-4 space-y-2 text-sky-100/90">
                  {t.perks.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
                <div className="mt-4 text-amber-200 font-medium">{t.extra}</div>
                <div className="mt-6 text-center">
                  <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 hover:bg-white text-sky-900 font-semibold shadow-lg shadow-white/30 transition">
                    Acquista ora ✨
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
