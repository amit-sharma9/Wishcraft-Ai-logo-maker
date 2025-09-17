import { AILogoPrompt } from "@/configs/AiModel";
import { NextResponse } from "next/server";
import FormData from "form-data";
import axios from "axios";

export async function POST(req) {
  const { prompt } = await req.json();

  try {
    // 1) create text prompt via your existing AILogoPrompt
    const AiPromptResult = await AILogoPrompt.sendMessage(prompt);
    const AIPrompt = JSON.parse(AiPromptResult.response.text()).prompt;
    console.log("Ai prompt is", AIPrompt);

    // 2) prepare multipart/form-data for ClipDrop
    const form = new FormData();
    form.append("prompt", AIPrompt);
    // OPTIONAL: add more params if you want (width, height, samples, etc.)
    // form.append("width", "1024");
    // form.append("height", "1024");

    // 3) call ClipDrop text-to-image endpoint
    const resp = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      form,
      {
        headers: {
          ...form.getHeaders(), // boundary header required for multipart
          "x-api-key": process.env.CLIPDROP_API_KEY,
        },
        responseType: "arraybuffer", // we expect binary image
        timeout: 120000, // optional: increase if needed
      }
    );

    // 4) convert binary -> base64 + add mime
    const buffer = Buffer.from(resp.data); // resp.data is ArrayBuffer/binary
    const base64 = buffer.toString("base64");
    const mime = resp.headers["content-type"] || "image/png";
    const base64ImageWithMime = `data:${mime};base64,${base64}`;

    // 5) return same shape as before
    return NextResponse.json({ image: base64ImageWithMime });
  } catch (error) {
    // prettier error logging
    console.error(
      "ClipDrop Error:",
      error?.response?.data || error?.message || error
    );
    const status = error?.response?.status || 500;
    const message = error?.response?.data
      ? typeof error.response.data === "string"
        ? error.response.data
        : JSON.stringify(error.response.data)
      : error?.message;
    return NextResponse.json({ error: message }, { status });
  }
}
