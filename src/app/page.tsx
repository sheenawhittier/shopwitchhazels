"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [qty, setQty] = useState(1);
  const price = 22;

  const checkout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ qty }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
      <main className="min-h-screen bg-[#0c0f0d] text-zinc-100">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-white/5 bg-black/30 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full grid place-items-center ring-1 ring-emerald-400/40 bg-emerald-600/20">🌙</div>
              <span className="font-semibold tracking-wide">Witch Hazel’s Aroma Balm</span>
            </div>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#shop" className="hover:text-emerald-300">Shop</a>
              <a href="#ingredients" className="hover:text-emerald-300">Ingredients</a>
              <a href="#ritual" className="hover:text-emerald-300">Ritual</a>
              <a href="#about" className="hover:text-emerald-300">Our Story</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="relative grain">
          <Image
              src="/images/candles-jar.jpg"
              alt="Aroma Balm among candles in the forest"
              width={2400}
              height={1400}
              priority
              className="h-[70vh] w-full object-cover sepia-warm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f0d] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 pb-12">
            <div className="mx-auto max-w-6xl px-4">
              <h1 className="font-serif text-4xl md:text-5xl leading-tight drop-shadow">
                Soothe, seal, and spellbind.
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-zinc-200">
                A small-batch botanical balm perfected over 20+ years to calm skin and steady breath.
              </p>
            </div>
          </div>
        </section>

        {/* Product / Buy */}
        <section id="shop" className="py-16">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl ring-1 ring-white/10 p-6 bg-[#121512]">
              <Image
                  src="/images/basket-jar.jpg"
                  alt="Green-tinted balm jar nestled in a woven basket"
                  width={1200}
                  height={900}
                  className="rounded-xl object-cover jar-green"
              />
            </div>

            <div>
              <h2 className="font-serif text-3xl">Aroma Balm — 1 oz</h2>
              <p className="mt-3 text-zinc-300">
                Menthol rub for sore muscles, congestion, and anxiety relief. A gentle, witch-crafted
                blend you can feel good about using daily.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <input
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                    className="w-24 rounded-xl border border-white/10 bg-black/30 px-3 py-2"
                />
                <button
                    onClick={checkout}
                    className="rounded-2xl bg-emerald-600/80 px-5 py-3 font-medium ring-1 ring-emerald-400/40 shadow-lg shadow-emerald-900/40 hover:bg-emerald-500"
                >
                  Buy Now — ${price * qty}
                </button>
              </div>
              <p className="mt-2 text-sm text-zinc-500">
                Ships in 2–3 business days • Local pickup available (Utah)
              </p>
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section id="ingredients" className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h3 className="font-serif text-2xl mb-4">Whole, gentle ingredients</h3>
            <p className="text-zinc-300">
              Menthol Crystals, Coconut Oil, Beeswax, Camphor, Eucalyptus, Cassia, Peppermint,
              Castor, Petroleum Jelly, Shea Butter, Tea Tree, Clove.
            </p>
            <p className="text-xs text-zinc-500 mt-3">
              Uses: menthol rub for sore muscles, congestion, and anxiety support.
            </p>
          </div>
        </section>

        {/* Ritual / How to use */}
        <section id="ritual" className="py-16">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
            {[
              ["Breathe", "Warm a pea-size amount between fingers. Inhale slowly for 4, hold 4, exhale 6."],
              ["Soothe", "Press into temples, neck, or sore muscles. For congestion, apply to chest or back."],
              ["Settle", "Let the botanicals and menthol open airways and ease anxious spirals."],
            ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <h4 className="font-semibold">{t}</h4>
                  <p className="text-zinc-300 mt-2">{d}</p>
                </div>
            ))}
          </div>
        </section>

        {/* Gallery mood strip */}
        <section className="border-t border-white/5 py-10">
          <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image src="/images/field-02.jpg" alt="Autumn field" width={800} height={1200} className="rounded-xl object-cover sepia-warm" />
            <Image src="/images/field-03.jpg" alt="Dancing in the field" width={800} height={1200} className="rounded-xl object-cover sepia-warm" />
            <Image src="/images/tree-jar.jpg"  alt="Jar by the tree" width={800} height={1200} className="rounded-xl object-cover jar-green" />
            <Image src="/images/botanicals.jpg" alt="Wild botanicals" width={800} height={1200} className="rounded-xl object-cover" />
          </div>
        </section>

        {/* About / Story */}
        <section id="about" className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h3 className="font-serif text-2xl mb-3">Family recipe, 20+ years in the making</h3>
            <p className="text-zinc-300">
              Crafted by sisters and refined over decades, Witch Hazel’s Aroma Balm blends time-trusted
              botanicals with a calming ritual to support body and breath—especially on anxious days.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Witch Hazel’s Aroma Balm • shopwitchhazels.com</p>
            <p>
              <a className="underline" href="mailto:witchhazelshelp@gmail.com">witchhazelshelp@gmail.com</a> • (435) 590-4447
            </p>
          </div>
        </footer>
      </main>
  );
}



