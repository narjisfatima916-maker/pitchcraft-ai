/**
 * PitchCraft AI Service Engine
 * Synthesizes pitch decks, simulates dynamic investor Q&A defense, and scores performance.
 */

// Presets for quick start testing
export const STARTUP_PRESETS = [
  {
    id: "healthai",
    name: "AuraHealth AI",
    tagline: "Autonomous Diagnostic Copilot for Emergency Triage",
    audience: "Hospitals & Urgent Care Centers",
    problem: "Emergency room wait times exceed 4 hours due to manual patient triage bottlenecks and administrative overload.",
    solution: "AI-powered vision & audio sensors that instantly pre-triage patient vitals, symptom urgency, and queue priority in under 45 seconds.",
    market: "$48B Global Health Tech & Hospital Automation Market",
    model: "SaaS per hospital bed ($1,500/bed/yr) + Enterprise API integrations",
    traction: "Pilot live in 3 regional hospitals, reduced triage wait by 64%, $420k ARR pipeline"
  },
  {
    id: "devscale",
    name: "CodePulse",
    tagline: "Autonomous Microservice Refactoring & Security Agent",
    audience: "DevOps & Engineering Leaders",
    problem: "Engineering teams waste 35% of sprint cycles updating legacy dependency vulnerabilities and technical debt.",
    solution: "Multi-agent AI bot that automatically generates clean PRs, updates breaking dependencies, and runs automated regression tests.",
    market: "$28B Developer Productivity Tools Market",
    model: "Usage-based tier starting at $99/dev/month",
    traction: "12,000 GitHub installs, 4.9 star rating, $85k MRR growing 22% MoM"
  },
  {
    id: "ecofleet",
    name: "VoltGrid AI",
    tagline: "Real-Time Smart Charging Optimization for Electric Fleets",
    audience: "Commercial Logistics & Delivery Fleets",
    problem: "Commercial EV fleets face 40% higher energy costs due to peak demand electricity tariffs and unoptimized charging schedules.",
    solution: "Predictive energy management software that orchestrates depot charging around grid tariffs, vehicle readiness, and battery health.",
    market: "$35B EV Fleet Management & Clean Energy Tech",
    model: "Software subscription + 15% revenue share on energy cost savings",
    traction: "Contracted with 2 fleet operators (450 vehicles), $180k ARR, 38% energy cost savings achieved"
  },
  {
    id: "finpulse",
    name: "Nexus Pay",
    tagline: "Instant Cross-Border B2B Settlement on Layer 2 Infrastructure",
    audience: "Global E-Commerce Vendors & Freight Forwarders",
    problem: "Cross-border wire transfers take 3-5 business days and incur 3.5% in FX margin fees and intermediary bank friction.",
    solution: "Instant, sub-cent cross-border settlement using stablecoins wrapped in a zero-knowledge regulatory compliance layer.",
    market: "$150B Cross-Border Payments Infrastructure Market",
    model: "0.25% transaction fee per volume settled",
    traction: "$14M total volume processed in Q2, 350 active merchant accounts, zero compliance flags"
  }
];

// Persona definitions for Q&A simulation
export const INVESTOR_PERSONAS = [
  {
    id: "vc_victor",
    name: "Victor Vance",
    role: "Managing Partner, Apex Ventures",
    avatar: "💼",
    archetype: "Aggressive VC",
    focus: "TAM, Moat, Unit Economics & 10x Scale",
    style: "Direct, metric-driven, challenges defensibility and market ceiling.",
    initialGreeting: "I've seen 50 pitches like this. Tell me in 30 seconds why you won't get crushed by big tech or an open-source copycat."
  },
  {
    id: "angel_elena",
    name: "Elena Rostova",
    role: "Early-Stage Angel & Ex-Product VP",
    avatar: "🚀",
    archetype: "Product Visionary",
    focus: "User Experience, Retention & Founder Grit",
    style: "Empathetic, product-focused, asks about user feedback and organic acquisition.",
    initialGreeting: "Your vision is intriguing. Walk me through the exact moment a customer realizes they can never live without your product."
  },
  {
    id: "cto_aris",
    name: "Dr. Aris Thorne",
    role: "Chief Architect & AI AI Ethics Lead",
    avatar: "⚡",
    archetype: "Skeptical Technical CTO",
    focus: "Latency, Edge Cases, Hallucination & Scalability",
    style: "Deeply technical, probe algorithm reliability, data privacy, and edge performance.",
    initialGreeting: "AI models hallucinate and latency spikes under load. What happens to your app when your core AI API goes down for 3 hours?"
  },
  {
    id: "buyer_marcus",
    name: "Marcus Brody",
    role: "VP Enterprise Procurement",
    avatar: "🏢",
    archetype: "Pragmatic Enterprise Client",
    focus: "SOC2 Compliance, SLA, ROI & Onboarding Speed",
    style: "Risk-averse, procurement focused, demands proof of security and seamless workflow integration.",
    initialGreeting: "Enterprise buying cycles take 9 months. How do you plan to survive that ramp while proving immediate compliance?"
  }
];

/**
 * Generates full 6-slide deck based on input startup data.
 */
export async function generatePitchDeck(formData) {
  // Simulate AI processing delay for rich loading experience
  await new Promise((res) => setTimeout(res, 1200));

  const name = formData.name || "NovaCorp AI";
  const tagline = formData.tagline || "The Next Generation Intelligence Platform";
  const audience = formData.audience || "Global Enterprise Teams";
  const problem = formData.problem || "Inefficient manual workflows cost companies millions in lost productivity.";
  const solution = formData.solution || "AI-automated orchestrator streamlining end-to-end operational pipelines.";
  const market = formData.market || "$30B Global Productivity & AI Market";
  const model = formData.model || "B2B SaaS Subscription ($50/user/month)";
  const traction = formData.traction || "Beta running with 10 enterprise teams, $120k ARR pipeline.";

  return {
    metadata: {
      generatedAt: new Date().toISOString(),
      name,
      tagline,
      theme: "cyber"
    },
    slides: [
      {
        id: 1,
        title: name,
        subtitle: tagline,
        category: "COVER",
        icon: "Sparkles",
        bullets: [
          `Target Segment: ${audience}`,
          "Revolutionizing work with autonomous intelligence",
          "Built for high-growth modern teams"
        ],
        chartData: null,
        speakerNotes: "Opening slide: Speak with high energy. State the company name clearly and anchor your core mission."
      },
      {
        id: 2,
        title: "The Problem & Opportunity",
        subtitle: "Why the status quo is broken",
        category: "PROBLEM",
        icon: "AlertTriangle",
        bullets: [
          problem,
          "Legacy tools require constant manual supervision and create data silos",
          "Teams spend up to 40% of their workday managing administrative overhead"
        ],
        chartData: {
          label: "Time Wasted on Legacy Workflows (Hours/Week)",
          values: [
            { label: "Manual Triage", value: 18, color: "#f43f5e" },
            { label: "Context Switching", value: 14, color: "#f59e0b" },
            { label: "Productive Execution", value: 8, color: "#10b981" }
          ]
        },
        speakerNotes: "Problem slide: Agitate the pain point. Make the audience feel the financial and operational frustration."
      },
      {
        id: 3,
        title: "The Solution",
        subtitle: "Autonomous AI-Powered Intelligence Engine",
        category: "SOLUTION",
        icon: "Zap",
        bullets: [
          solution,
          "Zero-friction deployment: Integrates into existing stack in under 10 minutes",
          "Real-time adaptive learning system that gets smarter with every interaction",
          "Enterprise-grade security with end-to-end data encryption"
        ],
        chartData: null,
        speakerNotes: "Solution slide: Showcase simplicity and power. Highlight how your product transforms the nightmare into delight."
      },
      {
        id: 4,
        title: "Market Size & Business Model",
        subtitle: "Capturing a massive, expanding sector",
        category: "MARKET",
        icon: "TrendingUp",
        bullets: [
          `TAM (Total Addressable Market): ${market}`,
          `Business Model: ${model}`,
          "High gross margin software asset with predictable recurring revenue stream"
        ],
        chartData: {
          label: "Market Expansion ($ Billions)",
          values: [
            { label: "SOM (Obtainable)", value: 2.4, color: "#06b6d4" },
            { label: "SAM (Serviceable)", value: 8.5, color: "#8b5cf6" },
            { label: "TAM (Total)", value: 34.0, color: "#10b981" }
          ]
        },
        speakerNotes: "Market slide: Prove the market is large enough to build a billion-dollar outcome."
      },
      {
        id: 5,
        title: "Traction & Growth Roadmap",
        subtitle: "Rapid execution and customer validation",
        category: "TRACTION",
        icon: "Award",
        bullets: [
          traction,
          "98% Net Revenue Retention rate among pilot customers",
          "Q3 Focus: Expand enterprise sales pipeline & launch automated self-serve onboarding"
        ],
        chartData: {
          label: "ARR Growth Trajectory ($k)",
          values: [
            { label: "Q1 2025", value: 40, color: "#94a3b8" },
            { label: "Q2 2025", value: 110, color: "#06b6d4" },
            { label: "Q3 2025 (Est)", value: 280, color: "#8b5cf6" },
            { label: "Q4 2025 (Est)", value: 650, color: "#10b981" }
          ]
        },
        speakerNotes: "Traction slide: Let numbers speak. Show velocity and momentum."
      },
      {
        id: 6,
        title: "The Ask & Next Horizon",
        subtitle: "Partner with us to lead the category",
        category: "THE ASK",
        icon: "Target",
        bullets: [
          "Raising $1.5M Seed Round to accelerate product engineering and go-to-market scaling",
          "Use of Funds: 60% Engineering & Product, 30% Go-To-Market & Sales, 10% Ops & Compliance",
          "Experienced founder team with prior successful exits and domain mastery"
        ],
        chartData: null,
        speakerNotes: "Closing slide: State your ask with confidence. Reiterate why now is the exact moment to invest."
      }
    ]
  };
}

/**
 * Simulates AI Investor response and follow-up question.
 */
export async function simulateInvestorResponse(personaId, userPitchText, conversationHistory, deckData) {
  await new Promise((res) => setTimeout(res, 1000));

  const persona = INVESTOR_PERSONAS.find((p) => p.id === personaId) || INVESTOR_PERSONAS[0];
  const startupName = deckData?.metadata?.name || "your startup";

  // Dynamic responses based on archetype and keywords
  let aiComment = "";
  let followUpQuestion = "";
  let scoreImpact = 85;

  const lowerText = userPitchText.toLowerCase();

  if (persona.id === "vc_victor") {
    if (lowerText.includes("ai") || lowerText.includes("moat") || lowerText.includes("defensib")) {
      aiComment = "Good point on defensibility, but big tech models are getting cheaper by the day.";
      followUpQuestion = "What proprietary data or network effect prevents OpenAI or Google from building this as a free plugin next quarter?";
      scoreImpact = 88;
    } else if (lowerText.includes("margin") || lowerText.includes("arr") || lowerText.includes("revenue") || lowerText.includes("customer")) {
      aiComment = "Your customer acquisition numbers look interesting, but what is your payback period?";
      followUpQuestion = "If CAC doubles as you scale sales channels, how does your unit economics hold up?";
      scoreImpact = 90;
    } else {
      aiComment = "That sounds somewhat vague. In venture capital, we need extreme clarity on scale.";
      followUpQuestion = "Break down how this reaches $100M in ARR over the next 5 years. What are the key expansion levers?";
      scoreImpact = 76;
    }
  } else if (persona.id === "angel_elena") {
    if (lowerText.includes("user") || lowerText.includes("feedback") || lowerText.includes("retention")) {
      aiComment = "I love seeing founder passion for customer delight! That's the real seed of greatness.";
      followUpQuestion = "What was the most surprising piece of negative feedback a user gave you, and how did you pivot?";
      scoreImpact = 94;
    } else {
      aiComment = "The tech sounds neat, but I care deeply about organic adoption and user behavior.";
      followUpQuestion = "How do your first 100 users find out about you without spending millions on paid ads?";
      scoreImpact = 82;
    }
  } else if (persona.id === "cto_aris") {
    if (lowerText.includes("cache") || lowerText.includes("latency") || lowerText.includes("fine-tune") || lowerText.includes("security") || lowerText.includes("architecture")) {
      aiComment = "Appreciate the technical depth on caching and architecture.";
      followUpQuestion = "How do you handle edge-case hallucinations when a user enters malformed or adversarial prompts?";
      scoreImpact = 91;
    } else {
      aiComment = "You're hand-waving over the infrastructure layer. AI systems break at high throughput.";
      followUpQuestion = "What is your fallback mechanism when third-party API rate limits hit during peak usage hours?";
      scoreImpact = 74;
    }
  } else { // Enterprise Buyer Marcus
    if (lowerText.includes("security") || lowerText.includes("soc2") || lowerText.includes("compliance") || lowerText.includes("sla")) {
      aiComment = "Clear understanding of enterprise security requirements. That speeds up procurement.";
      followUpQuestion = "Do you support single sign-on (SSO) and role-based access control out of the box?";
      scoreImpact = 93;
    } else {
      aiComment = "Enterprise IT committees veto 90% of new SaaS tools due to compliance concerns.";
      followUpQuestion = "What guarantees and SLAs can you sign today to ensure zero data leakage for corporate IP?";
      scoreImpact = 79;
    }
  }

  // Calculate real-time feedback scores
  const clarityScore = Math.min(98, Math.max(65, Math.floor(scoreImpact + (userPitchText.length > 50 ? 5 : -10))));
  const persuasivenessScore = Math.min(99, Math.max(60, Math.floor(scoreImpact + Math.random() * 6)));
  const objectionHandlingScore = Math.min(96, Math.max(62, Math.floor(scoreImpact - Math.random() * 4)));

  return {
    personaId,
    personaName: persona.name,
    personaRole: persona.role,
    avatar: persona.avatar,
    aiComment,
    followUpQuestion,
    scores: {
      clarity: clarityScore,
      persuasiveness: persuasivenessScore,
      objectionHandling: objectionHandlingScore,
      overall: Math.round((clarityScore + persuasivenessScore + objectionHandlingScore) / 3)
    },
    soundbiteTip: `Key Soundbite: "Anchor your answer with a specific quantitative metric before explaining the strategy."`
  };
}

/**
 * Calculates overall pitch readiness score and summary report data.
 */
export function calculateOverallScorecard(qaHistory, deckData) {
  if (!qaHistory || qaHistory.length === 0) {
    return {
      overallScore: 86,
      clarityAvg: 88,
      persuasivenessAvg: 84,
      objectionHandlingAvg: 86,
      grade: "A-",
      readinessLevel: "Investment Ready",
      strengths: [
        "Strong market opportunity framing with clear TAM breakdown",
        "High clarity on core value proposition and problem-solution fit",
        "Clear differentiation from incumbent legacy solutions"
      ],
      vulnerabilities: [
        "Defensibility under competitive pressure could be articulated more aggressively",
        "Unit economics and customer acquisition payback period need further quantitative proof points"
      ],
      actionPlan: [
        "Add explicit LTV/CAC ratios to Slide 5 (Traction)",
        "Practice 15-second elevator pitch focusing on defensibility against open-source alternatives",
        "Prepare an appendix slide for technical architecture and SOC2 security audit timeline"
      ]
    };
  }

  const claritySum = qaHistory.reduce((acc, curr) => acc + curr.scores.clarity, 0);
  const persSum = qaHistory.reduce((acc, curr) => acc + curr.scores.persuasiveness, 0);
  const objSum = qaHistory.reduce((acc, curr) => acc + curr.scores.objectionHandling, 0);

  const clarityAvg = Math.round(claritySum / qaHistory.length);
  const persuasivenessAvg = Math.round(persSum / qaHistory.length);
  const objectionHandlingAvg = Math.round(objSum / qaHistory.length);

  const overallScore = Math.round((clarityAvg + persuasivenessAvg + objectionHandlingAvg) / 3);

  let grade = "B+";
  let readinessLevel = "Promising";

  if (overallScore >= 90) {
    grade = "A+";
    readinessLevel = "Venture Ready";
  } else if (overallScore >= 85) {
    grade = "A";
    readinessLevel = "Investment Ready";
  } else if (overallScore >= 75) {
    grade = "B";
    readinessLevel = "Needs Polish";
  } else {
    grade = "C";
    readinessLevel = "Early Draft";
  }

  return {
    overallScore,
    clarityAvg,
    persuasivenessAvg,
    objectionHandlingAvg,
    grade,
    readinessLevel,
    strengths: [
      `Maintained high clarity (${clarityAvg}%) across investor persona exchanges`,
      "Responsive adaptation to direct competitive and moat challenges",
      "Clear positioning aligned with target market demands"
    ],
    vulnerabilities: [
      "Could sharpen quantitative answers to unexpected technical & SLA questions",
      "Consider shortening intro responses to retain high presentation momentum"
    ],
    actionPlan: [
      "Review investor Q&A transcript soundbites to refine live delivery",
      "Ensure Slide 4 (Market Size) is memorized for quick reference during Q&A",
      "Deploy live deck link or share PDF report directly with prospective partners"
    ]
  };
}
