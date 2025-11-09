import React from 'react';

const HowToJoin = () => {
  return (
    <section id="join" className="relative py-24 bg-gradient-to-b from-indigo-950 to-sky-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Come Entrare</h2>
        <p className="text-sky-100/80 text-center mt-2">Apri il portale tra le nuvole e inizia l'avventura</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
            <div className="text-3xl">🧭</div>
            <h3 className="mt-2 font-semibold">Apri Minecraft Java o Bedrock</h3>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
            <div className="text-3xl">🌐</div>
            <h3 className="mt-2 font-semibold">Vai su “Multiplayer” → “Aggiungi Server”</h3>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
            <div className="text-3xl">🔗</div>
            <h3 className="mt-2 font-semibold">Inserisci IP: <span className="text-sky-200">play.cloudsmc.it</span></h3>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
            <div className="text-3xl">✨</div>
            <h3 className="mt-2 font-semibold">Entra e vivi l’avventura su CloudsMC!</h3>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl p-8 bg-gradient-to-br from-sky-400/10 to-indigo-400/10 border border-white/10">
            <h3 className="text-2xl font-bold mb-2">📸 Galleria del Server – Le nostre Avventure</h3>
            <p className="text-sky-100/80">Prossimamente qui troverai le immagini ufficiali delle nostre mappe, eventi e costruzioni più spettacolari!</p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-video rounded-xl bg-white/5 border border-white/10" />
              ))}
            </div>
          </div>
          <div id="staff" className="rounded-3xl p-8 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 border border-white/10">
            <h3 className="text-2xl font-bold mb-2">🧑‍💼 Diventa Staff</h3>
            <p className="text-sky-100/90">
              Vuoi far parte delle nuvole? ✨ Stiamo cercando nuovi membri per il nostro team Staff! Se ami Minecraft e vuoi aiutare la community, entra subito nel nostro Discord e candidati.
            </p>
            <a
              href="https://discord.gg/3JRY3DgxmB"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-indigo-500/90 hover:bg-indigo-400 text-white font-semibold shadow-lg shadow-indigo-500/40 transition"
            >
              💬 Entra nel Discord
            </a>
          </div>
        </div>

        <div className="mt-16 text-center text-sky-100/90">
          Server ottimizzato, community attiva e staff sempre disponibile per aiutarti. Partecipa agli eventi, vinci premi e vivi l’esperienza CloudsMC al massimo!
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
