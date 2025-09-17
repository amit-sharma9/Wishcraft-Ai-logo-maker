const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash"
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const AIDesignIdea = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Based on Logo of type Modern Mascot Logos Generate a text prompt to create Logo for Logo title/Brand name : Indian Spice with description: Indian Restaurant and referring to prompt: A vibrant logo featuring a friendly, animated character with a playful expression. The character is dressed in a classic uniform, complete with a distinctive accessory that adds personality. In one hand, they hold a signature item that represents the brand, while the other elements of the design—such as small decorative touches or natural accents—enhance the overall look. The background consists of a bold, circular design with subtle accents to highlight the character. Below, the brand name is displayed in bold, stylized lettering, with a slight curve and complementary decorative lines. The overall style is fun, welcoming, and full of character.. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format with ideas field",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "ideas": [\n    "Chef Elephant with spices",\n    "Smiling Mango character, Turban",\n    "Friendly Tiger holding Curry",\n    "Animated Nan bread chef",\n        "Peacock waiter with plate"\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

export const AILogoPrompt = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a text prompt to create Logo for Logo Title/Brand name : Amit,with description: A simple logo, with Color combination of Ocean Blues, also include the Funny camel with sunglasses and include Cartoon Logo design idea and Referring to this Logo Prompt:Create a set of vibrant, playful logo designs featuring cartoon-style characters with puns or witty text. Each logo should include a cute anthropomorphic object, animal, or food item with expressive features like sunglasses, hats, or smiles, combined with a short, pun-based slogan. Use bold colors, clean lines, and retro aesthetics, ensuring the design is eye-catching and cheerful. Place each logo against a dark background to make the colors pop  Give me result in JSON portal with prompt field only\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "prompt": "Create a vibrant, playful cartoon logo for the brand \\"Amit\\". The logo should feature a funny camel wearing sunglasses, designed in a cute, cartoon style with expressive features. The color palette should primarily consist of ocean blues. The overall design should be simple and eye-catching, utilizing clean lines. Place the logo against a dark background to emphasize the colors. Ensure the design incorporates the idea of a cheerful, retro aesthetic. This logo must include the word \\"Amit\\" as part of the design. The style should adhere to the idea of a character-based logo with a playful and witty feel, similar to examples where anthropomorphic objects, animals, or food items are used with expressive features and a short, pun-based slogan."\n}\n```\n',
        },
      ],
    },
  ],
});