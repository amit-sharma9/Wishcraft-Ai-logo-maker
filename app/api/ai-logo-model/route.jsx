import { AILogoPrompt } from "@/configs/AiModel";
import { NextResponse } from "next/server";
import FormData from "form-data";
import axios from "axios";
import { db } from "@/configs/FirebaseConfig";
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";

export async function POST(req) {
  const { prompt ,email, title, desc} = await req.json();

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


    
    // Add the logo data to the user's document in Firebase
    const logoData = {
      image: base64ImageWithMime,
      title: title,
      desc: desc,
      id: Date.now(),
    };

    const userDocRef = doc(db, "users", email);

    // Check if the user document exists
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      // Create the document if it doesn't exist
      await setDoc(userDocRef, { logos: [logoData] });
    } else {
      // Update the document if it exists
      await updateDoc(userDocRef, {
        logos: arrayUnion(logoData),
      });
    }

    // 5) return same shape as before
    return NextResponse.json({ image: base64ImageWithMime });
  } catch (error) {
    
     console.error("Error:", error);
    return NextResponse.json({ error: error.message });
  }
}
