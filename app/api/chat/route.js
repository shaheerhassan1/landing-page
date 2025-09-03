import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    console.log("Incoming message:", message);

    const response = await client.chat.completions.create({
       model: "gpt-4.1-mini", 
      messages: [
        { role: "user", content: message },
      ],
    });

    console.log("API Response:", response);

    return new Response(
      JSON.stringify({ reply: response.choices[0].message.content }),
      { status: 200 }
    );
  } catch (err) {
    console.error("API Error Details:", err);
    return new Response(
      JSON.stringify({ reply: "API Error!", details: String(err) }),
      { status: 500 }
    );
  }
}
