import Link from "next/link";

export default function CancelPage() {
    return (
        <main className="min-h-[60vh] grid place-items-center p-6">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-semibold">Payment canceled</h1>
                <p className="text-muted-foreground">
                    No charge was made. You can safely try again.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border hover:shadow-sm transition breathing"
                >
                    ← Back to home
                </Link>
            </div>
        </main>
    );
}


