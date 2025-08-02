import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Groq } from "groq-sdk";

dotenv.config();
const app = express();

// Configure CORS to allow specific origins
app.use(cors({
  origin: [
    "http://localhost:3000", // Local frontend
    "https://symmetrical-robot-r47r4jwv74qv3wv7j-5173.app.github.dev", // Frontend Codespaces origin
    "https://monishhyperbolic-cc-3001.app.github.dev", // Backend Codespaces origin (if frontend is hosted there)
  ],
  methods: ["GET", "POST", "OPTIONS"], // Explicitly allow OPTIONS for preflight
  allowedHeaders: ["Content-Type"],
  credentials: false, // Set to true if cookies or auth headers are needed
}));

// Handle preflight requests explicitly (optional, as cors middleware should handle it)
app.options("/chat", cors()); // Ensure preflight for /chat endpoint

app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ reply: "Message cannot be empty." });
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message.trim() },
      ],
      model: "llama3-70b-8192",
    });

    const reply = chatCompletion.choices[0]?.message?.content || "I couldn't find a response.";
    res.json({ reply });
  } catch (err) {
    console.error("❌ Groq Error:", err.message);
    res.status(500).json({ reply: "Server error. Try again." });
  }
});

console.log("GROQ KEY:", process.env.GROQ_API_KEY ? "Loaded ✅" : "Missing ❌");

const PORT = process.env.PORT || 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on http://0.0.0.0:${PORT}`);
});