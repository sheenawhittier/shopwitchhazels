export default function Success() {
    return (
        <main className="min-h-screen bg-[#0c0f0d] text-zinc-100 grid place-items-center p-10">
            <div className="max-w-2xl w-full text-center">
                {/* Heading */}
                <h1 className="font-serif text-4xl">Order complete ✨</h1>
                <p className="mt-3 text-zinc-300">
                    Thank you for supporting our small-batch craft. Your Aroma Balm will ship in 2–3 business days.
                </p>

                {/* Breathing helper */}
                <div className="mt-10 grid place-items-center">
                    <div className="relative h-56 w-56 rounded-full pulse-ring bg-gradient-to-br from-emerald-700/60 to-emerald-500/40">
                        <div className="absolute inset-5 rounded-full bg-black/30 backdrop-blur breathe grid place-items-center">
                            <span className="text-emerald-200/90 tracking-wide">breathe</span>
                        </div>
                    </div>
                    <p className="mt-6 text-zinc-400">
                        Inhale <strong>4</strong> • Hold <strong>4</strong> • Exhale <strong>6</strong> — repeat with the circle.
                    </p>
                </div>

                {/* Links */}
                <div className="mt-10 flex items-center justify-center gap-4">
                    <a
                        href="/"
                        className="rounded-2xl bg-emerald-600/80 px-5 py-2 font-medium ring-1 ring-emerald-400/40 hover:bg-emerald-500"
                    >
                        Back to shop
                    </a>
                    <a
                        href="mailto:witchhazelshelp@gmail.com"
                        className="text-zinc-300 underline underline-offset-4"
                    >
                        Need help?
                    </a>
                </div>

                {/* Reassurance */}
                <p className="mt-6 text-sm text-zinc-500">
                    You’ll also receive an email confirmation. Local pickup in Utah? Reply to your email and we’ll arrange it.
                </p>
            </div>
        </main>
    );
}

