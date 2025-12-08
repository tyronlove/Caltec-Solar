import { GoogleGenAI } from "@google/genai";

export const generateSolarVisualization = async (prompt: string): Promise<string | null> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("No API Key provided for image generation.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-2.5-flash-image (Nano Banana) for fast image generation
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `Photorealistic, high quality, sunny day. ${prompt}. Ensure solar panels are visible on the roof. South African architectural style.`
          }
        ]
      },
      config: {
        // Nano banana models do not support responseMimeType or responseSchema
        // Just standard generation
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData && part.inlineData.data) {
            return `data:image/png;base64,${part.inlineData.data}`;
        }
    }
    
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};