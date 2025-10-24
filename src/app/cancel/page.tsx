export default function Cancel() {
    return (
        <main className="min-h-screen bg-[#0c0f0d] text-zinc-100 grid place-items-center p-10">
            <div className="max-w-xl text-center">
                <h1 className="font-serif text-3xl">Order canceled</h1>
                <p className="mt-3 text-zinc-300">
                    No charge was made. If you ran into trouble, try again or reach out and we’ll help.
                </p>
                <div className="mt-8">
                    <a
                        href="/"
                        className="rounded-2xl bg-emerald-600/80 px-5 py-2 font-medium ring-1 ring-emerald-400/40 hover:bg-emerald-500"
                    >
                        Return to shop
                    </a>
                </div>
            </div>
        </main>
    );
}

