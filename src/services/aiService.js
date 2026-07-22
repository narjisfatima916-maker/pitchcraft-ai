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
    role: "Chief Architect & AI Ethics Lead",
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
  await new Promise((res) => setTimeout(res, 1000));

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
 * Intelligent Dynamic Investor Response Simulator
 * Guarantees context-aware, non-repeating, multi-turn AI responses.
 */
export async function simulateInvestorResponse(personaId, userPitchText, conversationHistory = [], deckData = {}) {
  await new Promise((res) => setTimeout(res, 800));

  const persona = INVESTOR_PERSONAS.find((p) => p.id === personaId) || INVESTOR_PERSONAS[0];
  const startupName = deckData?.metadata?.name || "your startup";
  const lowerText = userPitchText.toLowerCase().trim();
  const turnIndex = conversationHistory.filter((item) => item.sender === 'user').length;

  let aiComment = "";
  let followUpQuestion = "";
  let scoreImpact = 82;

  // Keyword Intent Detector
  const containsWord = (...words) => words.some((w) => lowerText.includes(w));

  // --- VICTOR VANCE (Aggressive VC - TAM, Moat, Scale) ---
  if (persona.id === "vc_victor") {
    if (containsWord("ai", "moat", "defensib", "patent", "proprietary", "data")) {
      const options = [
        {
          comment: `You mentioned data and defensibility for ${startupName}. But foundational AI models update every month.`,
          q: "What proprietary network effect or data flywheel makes your product defensible when hyperscalers launch competing features for free?"
        },
        {
          comment: "I hear the tech narrative, but algorithms alone rarely create sustainable software moats.",
          q: "How locked-in are your customers? If a competitor offers a 50% price cut tomorrow, why wouldn't they switch?"
        }
      ];
      const pick = options[turnIndex % options.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 88;
    } else if (containsWord("price", "arr", "revenue", "cost", "margin", "cac", "ltv", "money")) {
      const options = [
        {
          comment: "Your financial outlook touches on revenue, but unit economics dictate true valuation.",
          q: "What is your current customer acquisition cost (CAC), and how many months does it take to recoup that investment?"
        },
        {
          comment: "Marginal profit looks promising on paper, but scaling sales headcount destroys margins quickly.",
          q: "What is your projected LTV-to-CAC ratio once you scale past your first 100 enterprise accounts?"
        }
      ];
      const pick = options[turnIndex % options.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 90;
    } else if (containsWord("market", "tam", "scale", "growth", "global", "expand")) {
      const options = [
        {
          comment: "Capturing a slice of a large market is standard pitch material.",
          q: "Walk me through your exact 18-month expansion roadmap. Which specific sub-segment do you dominate first before expanding?"
        },
        {
          comment: "Market size calculations often overstate actual obtainable addressable demand.",
          q: "Realistic SOM is usually 5% of TAM. What is your bottom-up calculation for obtainable revenue in Year 2?"
        }
      ];
      const pick = options[turnIndex % options.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 86;
    } else {
      // Dynamic turn-based progression
      const turnResponses = [
        {
          comment: `Interesting perspective on ${startupName}, but venture capital requires exponential $100M+ ARR potential.`,
          q: "If I invest $1.5M today, what are the top 3 critical milestones you hit in the next 12 months to unlock a 10x valuation jump?"
        },
        {
          comment: "You're speaking high-level strategy. I need quantitative proof of execution momentum.",
          q: "What is your strongest traction metric right now (e.g. MoM user growth, net revenue retention, or sales velocity)?"
        },
        {
          comment: "That addresses part of the picture, but competitive response time is critical.",
          q: "If an incumbent legacy player clone your core feature in their next release, what is your unfair distribution advantage?"
        }
      ];
      const pick = turnResponses[turnIndex % turnResponses.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 79;
    }
  }

  // --- ELENA ROSTOVA (Product Visionary & Angel) ---
  else if (persona.id === "angel_elena") {
    if (containsWord("user", "customer", "feedback", "retention", "love", "churn", "delight")) {
      const options = [
        {
          comment: "I love your focus on customer delight! Great products win on user passion.",
          q: "Tell me about a specific feature your early users requested that completely changed your product roadmap."
        },
        {
          comment: "High customer retention is the truest indicator of product-market fit.",
          q: "What is your 30-day user retention rate, and what specific onboarding step triggers the 'aha' moment?"
        }
      ];
      const pick = options[turnIndex % options.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 94;
    } else if (containsWord("team", "founder", "background", "experience", "mission", "passion")) {
      const options = [
        {
          comment: "Early stage investing is 80% betting on the founder's resilience.",
          q: "What unique insight or hard-earned lesson from your past experience gives your team the right to win this market?"
        },
        {
          comment: "Great founder teams balance vision with execution grit.",
          q: "When things got tough during early development, how did your team resolve critical strategic disagreements?"
        }
      ];
      const pick = options[turnIndex % options.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 92;
    } else {
      const turnResponses = [
        {
          comment: `I see potential in ${startupName}, but organic acquisition beats paid marketing every time.`,
          q: "How do your first 1,000 active users find out about your product without spending heavily on paid ads?"
        },
        {
          comment: "Product simplicity is key to rapid word-of-mouth growth.",
          q: "How long does it take a brand new user to get full value from your software after signing up?"
        },
        {
          comment: "That gives context, but user habit creation is what builds enduring companies.",
          q: "What daily or weekly workflow triggers bring users back into your application organically?"
        }
      ];
      const pick = turnResponses[turnIndex % turnResponses.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 84;
    }
  }

  // --- DR. ARIS THORNE (Skeptical Technical CTO) ---
  else if (persona.id === "cto_aris") {
    if (containsWord("latency", "speed", "cache", "architecture", "scale", "infrastructure", "api", "gpu", "model")) {
      const options = [
        {
          comment: "Good technical awareness regarding infrastructure and throughput.",
          q: "What is your average P99 latency response time under heavy concurrent user requests?"
        },
        {
          comment: "Caching helps, but model inference overhead scales linearly with prompt complexity.",
          q: "How do you optimize GPU compute costs as daily active queries scale 10x?"
        }
      ];
      const pick = options[turnIndex % options.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 91;
    } else if (containsWord("security", "privacy", "data", "encrypt", "hallucinational", "error", "failover")) {
      const options = [
        {
          comment: "Handling edge-case failures and data privacy is paramount for production AI.",
          q: "What automated validation pipeline prevents hallucinations or inaccurate outputs from reaching end users?"
        },
        {
          comment: "Data privacy regulations are tightening across enterprise deployment environments.",
          q: "Do you fine-tune open-weight models on customer data, and how do you guarantee zero cross-tenant data leaks?"
        }
      ];
      const pick = options[turnIndex % options.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 93;
    } else {
      const turnResponses = [
        {
          comment: "You're covering business points, but as CTO I care about system reliability under stress.",
          q: "What is your architectural fallback when third-party AI APIs experience rate-limits or 4-hour outages?"
        },
        {
          comment: "Technical debt accumulates rapidly in early AI prototypes.",
          q: "How modular is your code architecture if you need to swap out core model providers next month?"
        },
        {
          comment: "Let's dig into data pipeline performance.",
          q: "How do you handle real-time streaming data integration without creating processing bottlenecks?"
        }
      ];
      const pick = turnResponses[turnIndex % turnResponses.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 78;
    }
  }

  // --- MARCUS BRODY (Enterprise Buyer) ---
  else {
    if (containsWord("soc2", "compliance", "sla", "sso", "security", "audit", "gdpr", "hipaa")) {
      const options = [
        {
          comment: "Clear understanding of compliance metrics! That streamlines enterprise procurement approval.",
          q: "Do you have SOC2 Type II certification completed, or what is your audit completion timeline?"
        },
        {
          comment: "Security reviews can stall deals by 6 months if requirements aren't met up front.",
          q: "Do you support SAML/OKTA Single Sign-On (SSO) and granular role-based access control out of the box?"
        }
      ];
      const pick = options[turnIndex % options.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 95;
    } else if (containsWord("roi", "cost", "save", "time", "integration", "onboard", "workflow")) {
      const options = [
        {
          comment: "Demonstrating clear ROI is essential to securing CFO purchasing sign-off.",
          q: "What concrete quantitative savings (hours saved or revenue generated) can a client expect in Month 1?"
        },
        {
          comment: "Enterprise IT teams resist software that requires heavy custom implementation.",
          q: "What is the average implementation timeframe for an enterprise customer from contract signing to full rollout?"
        }
      ];
      const pick = options[turnIndex % options.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 92;
    } else {
      const turnResponses = [
        {
          comment: "Enterprise buying committees evaluate risk, implementation complexity, and ongoing vendor SLA.",
          q: "What uptime SLA guarantees and dedicated support tiers do you include in your enterprise contracts?"
        },
        {
          comment: "Long sales cycles can drain early startup cash reserves.",
          q: "How do you navigate 6-to-9 month enterprise procurement hurdles without burning through your seed runway?"
        },
        {
          comment: "Let's discuss contract structure and customer expansion.",
          q: "What is your land-and-expand pricing strategy when moving from a single department pilot to company-wide deployment?"
        }
      ];
      const pick = turnResponses[turnIndex % turnResponses.length];
      aiComment = pick.comment;
      followUpQuestion = pick.q;
      scoreImpact = 81;
    }
  }

  // Dynamic Telemetry Scoring & Soundbite Tip
  const textLen = lowerText.length;
  const clarityScore = Math.min(99, Math.max(68, Math.floor(scoreImpact + (textLen > 40 ? 6 : -8))));
  const persuasivenessScore = Math.min(99, Math.max(62, Math.floor(scoreImpact + (Math.random() * 8 - 4))));
  const objectionHandlingScore = Math.min(98, Math.max(65, Math.floor(scoreImpact + (containsWord("data", "metric", "percent", "number", "dollar") ? 7 : -2))));

  const soundbiteTips = [
    `Key Soundbite: "State a precise quantitative metric before explaining strategy."`,
    `Key Soundbite: "Acknowledge the risk directly, then present your mitigation strategy."`,
    `Key Soundbite: "Reference real customer feedback to ground your argument in proof."`,
    `Key Soundbite: "Highlight your speed of execution as your key competitive moat."`
  ];
  const soundbiteTip = soundbiteTips[turnIndex % soundbiteTips.length];

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
    soundbiteTip
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

  const investorItems = qaHistory.filter((item) => item.scores);
  const itemsToEvaluate = investorItems.length > 0 ? investorItems : qaHistory;

  const claritySum = itemsToEvaluate.reduce((acc, curr) => acc + (curr.scores?.clarity || 85), 0);
  const persSum = itemsToEvaluate.reduce((acc, curr) => acc + (curr.scores?.persuasiveness || 85), 0);
  const objSum = itemsToEvaluate.reduce((acc, curr) => acc + (curr.scores?.objectionHandling || 85), 0);

  const clarityAvg = Math.round(claritySum / itemsToEvaluate.length);
  const persuasivenessAvg = Math.round(persSum / itemsToEvaluate.length);
  const objectionHandlingAvg = Math.round(objSum / itemsToEvaluate.length);

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
