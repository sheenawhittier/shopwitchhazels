import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// figure out our base URL in prod vs local
const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export async function POST(request: Request) {
    const { qty = 1 } = await request.json().catch(() => ({ qty: 1 }));

    const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: { name: "Witch Hazel’s Aroma Balm — 1 oz" },
                    unit_amount: 2200,
                },
                quantity: Math.max(1, Number(qty) || 1),
            },
        ],
        success_url: `${baseUrl}/success`,
        cancel_url: `${baseUrl}/cancel`,
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
    });

    return NextResponse.json({ url: session.url });
}

