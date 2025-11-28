import { GoogleGenAI, Type, Schema } from "@google/genai";
import { FPLevel, ExamType, Question } from "../types";
import { FP_CATEGORIES, FP_CATEGORIES_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const trilingualTextSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    ja: { type: Type.STRING, description: "Japanese text (Kanji mixed)" },
    ja_kana: { type: Type.STRING, description: "Japanese text (Hiragana/Katakana reading only) for study purposes" },
    en: { type: Type.STRING, description: "English translation" },
    cn: { type: Type.STRING, description: "Simplified Chinese translation" },
  },
  required: ["ja", "ja_kana", "en", "cn"],
};

const optionSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    id: { type: Type.STRING },
    text: trilingualTextSchema,
  },
  required: ["id", "text"],
};

const questionSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    id: { type: Type.STRING },
    category: { type: Type.STRING },
    text: trilingualTextSchema,
    options: {
      type: Type.ARRAY,
      items: optionSchema,
    },
    correctOptionId: { type: Type.STRING },
    explanation: trilingualTextSchema,
  },
  required: ["id", "category", "text", "options", "correctOptionId", "explanation"],
};

export const generateQuestion = async (level: FPLevel, type: ExamType, specificCategoryName?: string | null): Promise<Question> => {
  const model = "gemini-2.5-flash";
  
  // Use specific category if provided, otherwise pick random
  const category = specificCategoryName 
    ? specificCategoryName 
    : FP_CATEGORIES[Math.floor(Math.random() * FP_CATEGORIES.length)];

  const prompt = `
    Create a highly realistic exam question for the Japanese Financial Planner (FP) Examination.
    
    Parameters:
    - Level: ${level}
    - Type: ${type}
    - Category: ${category}
    
    Requirements:
    1. The question must be challenging and appropriate for the selected grade level.
    2. Provide content in Japanese (Normal Kanji), Japanese (Kana Reading/Furigana style full text), English, and Simplified Chinese.
    3. Ensure the Chinese and English translations are natural and accurate specialized financial terminology.
    4. For "Academic" type, create a multiple-choice question (4 options).
    5. For "Practical" type, create a scenario-based calculation or logic question (still multiple choice format for this app).
    6. Provide a detailed explanation of why the answer is correct and others are wrong.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionSchema,
        temperature: 0.7, // Some creativity, but mostly factual
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as Question;
    }
    throw new Error("Empty response from AI");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};