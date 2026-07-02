import { openai } from "../lib/config";

export async function generateExplanation(profile, movie) {
  const response = await openai.chat.completions.create({
    model: "openai/gpt-oss-120b:free",
    messages: [
      {
        role: "system",
        content: `
You are an AI movie recommendation assistant.

Rules:
- Recommend ONLY the movie provided.
- Never invent another movie.
- Mention the user's preferences.
- Explain why this movie matches them.
- Keep the explanation under 60 words.
`,
      },
      {
        role: "user",
        content: `
User Preferences:
${profile}

Recommended Movie:
${movie.title}

Description:
${movie.content}

Explain why this movie matches the user's preferences.
`,
      },
    ],
  });

  return response.choices[0].message.content;
}
