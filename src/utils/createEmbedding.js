import { openai } from "../lib/config";

export async function createEmbedding(text) {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });

    if (!response?.data?.[0]?.embedding) {
      throw new Error("Invalid embedding response from API");
    }

    return response.data[0].embedding;
  } catch (err) {
    const message =
      err?.error?.message || err?.message || "Failed to create embedding";

    const newError = new Error(message);
    newError.cause = err; // 👈 THIS fixes eslint warning

    throw newError;
  }
}
