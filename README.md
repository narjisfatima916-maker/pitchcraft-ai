# 🔥 PitchCraft AI

> **Real-Time AI Pitch Deck Synthesizer & Interactive Investor Q&A Defense Simulator**

[![Built with Vite](https://img.shields.io/badge/Vite-8.1.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🌟 Executive Overview

**PitchCraft AI** is an end-to-end web application that empowers startup founders, product creators, indie hackers, and students to **synthesize executive presentation pitch decks**, practice **live investor pitch Q&A defense** against custom AI VC personas, and receive **instant performance telemetry analytics**.

Pitching a startup or new initiative to venture capital partners, angel investors, enterprise clients, or internal stakeholders is a high-stakes challenge. Founders often struggle with:
1. Structuring concise, quantitative, 6-slide presentation narratives.
2. Anticipating brutal investor pushback regarding unit economics, defensibility, and technical risk.
3. Practicing real-time vocal or written delivery under pressure.

**PitchCraft AI** solves this problem end-to-end in a single unified interface.

---

## 🚀 Key Features & Capabilities

### 1. 🪄 AI Pitch Deck Synthesizer
- **1-Click Startup Presets**: Includes pre-configured high-impact startups (*AuraHealth AI*, *CodePulse*, *VoltGrid AI*, *Nexus Pay*) for instant testing.
- **Custom Project Wizard**: Input project vision, problem statement, solution secret sauce, market size, business model, and traction.
- **6-Slide Executive Deck Generator**:
  - **Slide 1: Cover & Vision** (Tagline, target segment)
  - **Slide 2: Problem & Opportunity** (Pain point agitating + interactive time-loss bar chart)
  - **Slide 3: Solution Architecture** (Product breakdown, ease of integration)
  - **Slide 4: Market Opportunity** (TAM / SAM / SOM breakdown visualizer)
  - **Slide 5: Traction & Growth** (ARR growth velocity charts)
  - **Slide 6: The Ask & Team** (Funding allocation & milestones)

### 2. 📺 Interactive Presentation Deck Workbench
- **Slide Carousel & Keyboard Navigation**: Navigate using `Left` / `Right` arrow keys or Spacebar.
- **Fullscreen Stage Mode**: Press `F` key or click Fullscreen to present directly in high resolution.
- **Dynamic CSS Bar Charts**: Live metric charts rendered inside slides for market size and revenue growth.
- **Speaker Notes Drawer**: Built-in delivery tips for every slide during presentation.
- **4 Custom Themes**: *Cyber Dark*, *Executive Gold*, *Emerald Tech*, and *Obsidian Glass*.

### 3. 🎙️ Real-Time Investor Q&A Defense Simulator
- **4 Custom AI Investor Personas**:
  1. **Victor Vance**: Aggressive VC partner focusing on TAM, unit economics, defensibility, and 10x ROI.
  2. **Elena Rostova**: Early-stage product visionary focusing on user retention and organic acquisition.
  3. **Dr. Aris Thorne**: Skeptical CTO probing latency, AI hallucinations, and fallback architecture.
  4. **Marcus Brody**: Enterprise Buyer demanding SOC2 compliance, SLAs, and procurement readiness.
- **Speech Recognition (Web Speech API)**: Speak answers directly via microphone or type responses.
- **Text-To-Speech (Speech Synthesis)**: AI investor speaks responses aloud with realistic vocal feedback.
- **Real-Time Response Telemetry**: Evaluates Clarity, Persuasiveness, and Objection Resolution scores per exchange.

### 4. 📊 Performance Scorecard & Analytics Dashboard
- **Overall Pitch Readiness Score**: Score out of 100 with verdict grade (e.g. `A+ Venture Ready`).
- **Telemetry Radar Visualizer**: Breakdown of Story Clarity, Persuasiveness, and Objection Defense.
- **Strengths vs. Vulnerabilities Heatmap**: Pinpoints exact areas of excellence and potential investor pushback.
- **Confetti Celebration Trigger**: Micro-animations celebrating pitch completion.

### 5. 📤 Export & Publishing Hub
- **GitHub Markdown Report (.MD)**: One-click export of complete project summary, slide text, and Q&A transcripts.
- **PDF & Print Layout**: High-resolution print styling for pitch deck presentations.
- **Clipboard Copy**: Instant summary soundbites for pitch emails.

---

## 🛠️ Technology Stack

| Layer | Technology Used |
| :--- | :--- |
| **Core Framework** | React 19 + Vite 8 |
| **Styling & Aesthetics** | Vanilla CSS (CSS Design Tokens, Glassmorphic backdrop filters, custom radial glows) |
| **Typography** | Google Fonts (*Outfit*, *Inter*, *Fira Code*) |
| **Iconography** | Lucide React |
| **Audio & Speech** | Native Web Speech API (`webkitSpeechRecognition` + `SpeechSynthesis`) |
| **Effects & Feedback** | Canvas Confetti |
| **Version Control** | Git 2.55 |

---

## 💻 Local Installation & Setup Guide

### Prerequisites
- Node.js (v18+ recommended, tested on v24.18.0)
- npm (v10+)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/pitchcraft-ai.git
   cd pitchcraft-ai
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Launch Local Development Server**:
   ```bash
   npm run dev
   ```
   *The app will launch at `http://localhost:5173/`.*

4. **Build Production Bundle**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🎨 Design System & CSS Architecture

PitchCraft AI is styled using Vanilla CSS with CSS custom variables for maximum flexibility, responsiveness, and performance.

### Color Tokens
- `--bg-primary`: `#090d16` (Cyber Dark Base)
- `--accent-cyan`: `#06b6d4`
- `--accent-violet`: `#8b5cf6`
- `--accent-amber`: `#f59e0b`
- `--accent-emerald`: `#10b981`
- `--bg-card`: `rgba(15, 23, 42, 0.75)` (Glassmorphism backdrop-filter blur 16px)

---

## 🌐 Live Deployment Strategy

PitchCraft AI is configured for instant zero-config deployment on Vercel, Netlify, or Cloudflare Pages:

- **Vercel Deployment**:
  ```bash
  npx vercel
  ```
- **Netlify Deployment**:
  ```bash
  npx netlify-cli deploy --prod
  ```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

*Built with passion by Antigravity AI & Pair Programmer.* 🔥
