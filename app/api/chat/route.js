import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const endpoint = "https://models.inference.ai.azure.com"; 
const model = "gpt-4o-mini";

export async function POST(req) {
  try {
    const { message } = await req.json();

    console.log("Incoming message:", message);

    const client = ModelClient(
      endpoint,
      new AzureKeyCredential(process.env.GITHUB_TOKEN)
    );

    const response = await client.path("/chat/completions").post({
      body: {
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: message }
        ],
        model
      }
    });

    if (isUnexpected(response)) {
      console.error("API Unexpected Error:", response.body.error);
      throw response.body.error;
    }

    console.log("API Response:", response.body);

    return new Response(
      JSON.stringify({ reply: response.body.choices[0].message.content }),
      { status: 200 }
    );
  } catch (err) {
    console.error("API Error Details:", err);
    return new Response(JSON.stringify({ reply: "API Error!" }), { status: 500 });
  }
}
