import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateLoreResponse = async (question: string) => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `User Question: ${question}`,
      config: {
        systemInstruction: `You are Armin Arlert, the narrator and strategist of the Survey Corps from Attack on Titan. 
        Answer the user's questions about the Attack on Titan lore, history, characters, or themes.
        Keep your answers concise (under 100 words), insightful, and atmospheric. 
        Use a tone that is intelligent, slightly melancholic but hopeful.
        If the question is unrelated to Attack on Titan, politely redirect them to the walls.`,
      },
    });

    return response.text || "The archives are incomplete...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "A Titan has breached the connection. Please try again later.";
  }
};