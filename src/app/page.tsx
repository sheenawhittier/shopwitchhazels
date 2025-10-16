"use client";
import { useState } from "react";

export default function Home() {
  const [qty, setQty] = useState(1);
  const price = 22; // USD

  const handleCheckout = async () => {
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
              <div className="h-8 w-8 rounded-full grid place-items-center ring-1 ring-emerald-400/40 bg-emerald-600/20">
                🌙
              </div>
              <span className="font-semibold tracking-wide">Witch Hazel’s Aroma Balm</span>
            </div>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#ingredients" className="hover:text-emerald-300">Ingredients</a>
              <a href="#ritual" className="hover:text-emerald-300">Ritual</a>
              <a href="#faq" className="hover:text-emerald-300">FAQ</a>
              <a href="#contact" className="hover:text-emerald-300">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero + Product */}
        <section className="relative">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),transparent_60%)]" />
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl leading-tight">
                Soothe, seal, and spellbind.
              </h1>
              <p className="mt-4 text-lg text-zinc-300">
                A small-batch botanical balm with witch hazel, calendula, and blue tansy. Calm for skin,
                quiet for senses.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <label htmlFor="qty" className="sr-only">Quantity</label>
                <input
                    id="qty"
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                    className="w-24 rounded-xl border border-white/10 bg-black/30 px-3 py-2"
                />
                <button
                    onClick={handleCheckout}
                    className="rounded-2xl bg-emerald-600/80 px-5 py-3 font-medium ring-1 ring-emerald-400/40 shadow-lg shadow-emerald-900/40 hover:bg-emerald-500"
                >
                  Buy Aroma Balm — ${price * qty}
                </button>
                <a href="#ingredients" className="text-emerald-300 underline underline-offset-4">
                  See ingredients
                </a>
              </div>

              <p className="mt-3 text-sm text-zinc-400">
                1 oz glass jar • Vegan • Essential oils • Ships in 2–3 business days
              </p>
            </div>

            {/* Product Card / Jar visual */}
            <div className="rounded-2xl ring-1 ring-white/10 p-10 bg-[#121512]">
              <div className="aspect-square rounded-xl grid place-items-center bg-gradient-to-tr from-emerald-900/40 via-emerald-800/20 to-transparent">
                <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]">
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  <rect x="60" y="24" width="80" height="20" rx="6" fill="url(#g)" opacity="0.9" />
                  <rect x="50" y="44" width="100" height="120" rx="16" fill="#0f1512" stroke="#34d399" strokeOpacity="0.35" />
                  <rect x="58" y="52" width="84" height="62" rx="12" fill="#0c100e" stroke="#34d399" strokeOpacity="0.25" />
                  <rect x="58" y="118" width="84" height="36" rx="10" fill="url(#g)" opacity="0.85" />
                  <text x="100" y="84" fill="#baf5d5" fontSize="11" textAnchor="middle">Aroma Balm</text>
                </svg>
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
                <li>🌿 Witch Hazel Distillate — tones & calms</li>
                <li>🌼 Calendula CO₂ — soothes stressed skin</li>
                <li>🫒 Jojoba & Meadowfoam — light, non-greasy</li>
                <li>🟦 Blue Tansy — serene hue & aroma</li>
                <li>🛡️ Vitamin E — antioxidant support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section id="ingredients" className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-serif text-2xl mb-4">Whole, gentle ingredients</h2>
            <p className="text-zinc-300">
              INCI: Hamamelis Virginiana (Witch Hazel) Distillate, Calendula Officinalis Flower Extract,
              Simmondsia Chinensis (Jojoba) Seed Oil, Limnanthes Alba (Meadowfoam) Seed Oil,
              Tanacetum Annuum (Blue Tansy) Oil, Tocopherol (Vitamin E), Essential Oils, Candelilla Wax.
            </p>
            <p className="text-xs text-zinc-500 mt-3">For external use only. Patch test before use.</p>
          </div>
        </section>

        {/* Ritual */}
        <section id="ritual" className="py-16">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
            {[
              ["Cleanse", "Warm a pea-size amount between fingers."],
              ["Soothe", "Press into areas that crave calm: cheeks, lips, cuticles."],
              ["Seal", "Breathe in, count to seven, exhale slowly. Repeat."],
            ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-zinc-300 mt-2">{copy}</p>
                </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-white/5 py-16">
          <div className="mx-auto max-w-4xl px-4 space-y-6">
            <div>
              <h3 className="font-semibold">Is it safe for sensitive skin?</h3>
              <p className="text-zinc-300">
                Yes—our dilution is gentle. Always patch test and discontinue if irritation occurs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">How long does one jar last?</h3>
              <p className="text-zinc-300">Used nightly, about 6–8 weeks.</p>
            </div>
            <div>
              <h3 className="font-semibold">Do you offer local pickup?</h3>
              <p className="text-zinc-300">Yes—in Utah. Message us after checkout for pickup arrangements.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Questions? Wholesale? Collabs?</h3>
              <p className="text-zinc-300 mt-2">
                Email <a className="underline" href="mailto:witchhazelshelp@gmail.com">witchhazelshelp@gmail.com</a> or call{" "}
                <a className="underline" href="tel:14355904447">(435) 590-4447</a>.
              </p>
            </div>
            <p className="text-zinc-400">Follow us on social—links coming soon.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Witch Hazel’s Aroma Balm • shopwitchhazels.com</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-300">Privacy</a>
              <a href="#" className="hover:text-zinc-300">Terms</a>
            </div>
          </div>
        </footer>
      </main>
  );
}

