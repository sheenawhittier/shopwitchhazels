import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-09-30.clover",
});

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
                    unit_amount: 2200, // $22.00
                },
                quantity: Math.max(1, Number(qty) || 1),
            },
        ],
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
    });

    return NextResponse.json({ url: session.url });
}
