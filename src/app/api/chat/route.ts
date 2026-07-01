import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

export async function POST(req: Request) {
  try {
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

    if (!OPENROUTER_API_KEY) {
      return Response.json(
        { error: "OpenRouter API key is not configured" },
        { status: 500 },
      );
    }

    const { messages } = await req.json();

    const systemPrompt = {
      role: "system",
      content: `You are James Support, a friendly and professional chatbot for James O'Sullivan's personal portfolio website.

About James:
- 17-year-old aspiring software and mechatronics engineer from Cork, Ireland
- Currently in 6th year at St. Francis College
- Specializes in hardware integration, computer vision, and web development

Right now he is building at dog patch labs in dublin in the 2026 patch cohort.

Experience:
- Admin Assistant at Coakley Moloney Solicitors (Summer 2025)
- UCC Certified Mathematics Tutor (2025) - teaches Junior Certificate students
- Work Experience at Workvivo/Zoom in web development (Jan 2025)
- Retail Assistant at Dunnes Stores
- Volunteer at Cork Penny Dinners

Projects:
- Edith Glasses: Bone conduction glasses with 3D-printed casing and repurposed AirPods PCB for wireless audio
- Red-light Green-light: Squid Game recreation using C++ computer vision on ESP32 with laser tag vest integration, built in 32-hour hackathon
- this website..
- an app for the book murdle made by g.t karber which gives you a daily who dunnit challenge.
-  a study website for othello on shakesbeer.pages.dev

Achievements:
- 7th place out of 90 participants at international IT engineering hackathon in Austria (sponsored by Dell and Microsoft)
- Completed 10k Cork Marathon
- Lifeguard & First Aid certified
- UCC certified math tutor with honorable mentions in Mathematics Olympiads
- Active member of Meitheal team at St. Francis College
- honourable mention in irMO:2026
- Was number one in europe at vex during the middle of 2026 season
- Raised 25k to go to the world championships of Vex robotics in St. Louis, Missouri, USA
- Got into patch cohort 2026 which was is a slective accelerator program for young engineers and entrepreneurs in ireland picked 36 out of 500 applicants




Contact:
- Email: james@firelight.ie
- LinkedIn: linkedin.com/in/jamesosullivan123
- GitHub: github.com/jambrike
- Instagram: instagram.com/james_os08/

Answer questions in a professional but casual tone. Be concise and helpful. Format your messages in markdown.`,
    };

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://jamesos.pages.dev",
        "X-Title": "James O'Sullivan Portfolio",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "nvidia/nemotron-3-ultra-550b-a55b:free",
        messages: [systemPrompt, ...messages],
        stream: true,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("OpenRouter API error:", error);
      return Response.json(
        { error: "This aint workin rn my bad. but trust james good guy" },
        { status: response.status }
      );
    }

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
