import { GoogleGenAI, Type, Schema } from "@google/genai";
import { FPLevel, ExamType, Question, StudyNote } from "../types";
import { FP_CATEGORIES, FP_CATEGORIES_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const trilingualTextSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    ja: { type: Type.STRING, description: "Japanese text containing HTML <ruby> tags for ALL Kanji (e.g. <ruby>日本<rt>にほん</rt></ruby>)" },
    ja_kana: { type: Type.STRING, description: "Full Hiragana reading (backup)" },
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

const studySectionSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: trilingualTextSchema,
    content: trilingualTextSchema,
  },
  required: ["title", "content"],
};

const studyNoteSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    id: { type: Type.STRING },
    chapter: { type: Type.STRING },
    title: trilingualTextSchema,
    sections: {
      type: Type.ARRAY,
      items: studySectionSchema,
    },
  },
  required: ["id", "chapter", "title", "sections"],
};

export const generateQuestion = async (level: FPLevel, type: ExamType, chapterName?: string | null): Promise<Question> => {
  const model = "gemini-2.5-flash";
  
  // If chapterName is provided, use it as the specific topic. 
  // If not, pick a random broad category.
  const topic = chapterName 
    ? chapterName 
    : FP_CATEGORIES[Math.floor(Math.random() * FP_CATEGORIES.length)];

  const prompt = `
    Create a highly realistic exam question for the Japanese Financial Planner (FP) Examination.
    
    Parameters:
    - Level: ${level}
    - Type: ${type}
    - Topic/Category: ${topic}
    
    Requirements:
    1. The question must be specifically focused on the Topic provided ("${topic}").
    2. **CRITICAL**: For the Japanese text ('ja' field), you MUST use HTML <ruby> tags for EVERY Kanji word to provide readings. 
       Example: "<ruby>減価償却費<rt>げんかしょうきゃくひ</rt></ruby>は<ruby>計算<rt>けいさん</rt></ruby>される"
       Do not use parentheses, use real HTML tags.
    3. Provide content in English and Simplified Chinese as well.
    4. Ensure translations are natural and use accurate specialized financial terminology.
    5. For "Academic" type, create a multiple-choice question (4 options).
    6. For "Practical" type, create a scenario-based calculation or logic question.
    7. Provide a detailed explanation.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: questionSchema,
        temperature: 0.7, 
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

export const generateStudyNote = async (level: FPLevel, chapterName: string): Promise<StudyNote> => {
  const model = "gemini-2.5-flash";

  const prompt = `
    Create a comprehensive study note for the Japanese Financial Planner (FP) Examination.
    
    Parameters:
    - Level: ${level}
    - Topic/Chapter: ${chapterName}
    
    Requirements:
    1. Provide a main Title for the note.
    2. Break down the key concepts of this chapter into 3-5 distinct Sections.
    3. Each section must have a Title and detailed Body Content.
    4. **CRITICAL**: For ALL Japanese text ('ja' field), you MUST use HTML <ruby> tags for EVERY Kanji word.
       Example: "<ruby>不動産<rt>ふどうさん</rt></ruby><ruby>取得税<rt>しゅとくぜい</rt></ruby>"
    5. The content should be educational, explaining definitions, rules, formulas, or key points relevant to the exam.
    6. Provide accurate translations in English and Simplified Chinese.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: studyNoteSchema,
        temperature: 0.5, // Lower temperature for more factual content
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as StudyNote;
    }
    throw new Error("Empty response from AI");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};