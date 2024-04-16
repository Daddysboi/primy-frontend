import axios from "axios";
import { cleanAndParseString } from "../utils/helpers";

const api_key = import.meta.env.VITE_OPEN_AI;

export const generateQuestions = async (topic, numQuestions = 5) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Generate ${numQuestions} multiple choice questions on ${topic}`,
          },
          {
            role: "system",
            content: `You are a teacher that responds with a json text of array of {text: "",options: [],correctAnswer: ""}`,
          },
        ],
        max_tokens: 400,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${api_key}`,
        },
      }
    );

    return cleanAndParseString(response.data.choices[0].message.content);
  } catch (error) {
    console.error("Error generating questions:", error);
  }
};
