import type { APIRoute } from "astro"
import { fetchWithTimeout, splitKeys } from "~/utils"
import { localKey, genBillingsTable, baseURL, fetchBilling } from "."

export const config = {
    runtime: "edge",
    /**
     * https://vercel.com/docs/concepts/edge-network/regions#region-list
     * disable hongkong
     * only for vercel
     */
    regions: [
        "arn1",
        "bom1",
        "bru1",
        "cdg1",
        "cle1",
        "cpt1a",
        "dub1",
        "fra1",
        "gru1",
        "hnd1",
        "iad1",
        "icn1",
        "kix1",
        "lhr1",
        "pdx1",
        "sfo1",
        "sin1",
        "syd1"
    ]
}

export const get: APIRoute = async () => {
    try {
        const rawRes = await fetch(`https://m.kepub.net/ai/userInfo`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const text = await rawRes.text();
        return new Response(text);
    } catch (e) {
        return new Response(`fail`)
    }
}