import Link from "next/link";

export default function SuccessPage() {
    return (
        <main className="min-h-[60vh] grid place-items-center p-6">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-semibold">Thank you! ✨</h1>
                <p className="text-muted-foreground">
                    Your order was received. A receipt is on its way to your email.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border hover:shadow-sm transition breathing"
                >
                    ← Continue shopping
                </Link>
            </div>
        </main>
    );
}


