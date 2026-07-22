import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PitchGenerator from './components/PitchGenerator';
import DeckViewer from './components/DeckViewer';
import QASimulator from './components/QASimulator';
import Scorecard from './components/Scorecard';
import ExportModal from './components/ExportModal';
import { generatePitchDeck } from './services/aiService';

export default function App() {
  const [activeTab, setActiveTab] = useState('generator'); // 'generator' | 'deck' | 'qa' | 'scorecard'
  const [theme, setTheme] = useState('cyber');
  const [isGenerating, setIsGenerating] = useState(false);
  const [deckData, setDeckData] = useState(null);
  const [qaHistory, setQaHistory] = useState([]);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Apply theme dataset attribute to document body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Initial auto-generation with default preset so the app is instantly rich & interactive on launch!
  useEffect(() => {
    const initDefaultDeck = async () => {
      setIsGenerating(true);
      const initialDeck = await generatePitchDeck({
        name: "AuraHealth AI",
        tagline: "Autonomous Diagnostic Copilot for Emergency Triage",
        audience: "Hospitals & Urgent Care Centers",
        problem: "Emergency room wait times exceed 4 hours due to manual patient triage bottlenecks and administrative overload.",
        solution: "AI-powered vision & audio sensors that instantly pre-triage patient vitals, symptom urgency, and queue priority in under 45 seconds.",
        market: "$48B Global Health Tech & Hospital Automation Market",
        model: "SaaS per hospital bed ($1,500/bed/yr) + Enterprise API integrations",
        traction: "Pilot live in 3 regional hospitals, reduced triage wait by 64%, $420k ARR pipeline"
      });
      setDeckData(initialDeck);
      setIsGenerating(false);
    };
    initDefaultDeck();
  }, []);

  const handleGenerateDeck = async (formData) => {
    setIsGenerating(true);
    const newDeck = await generatePitchDeck(formData);
    setDeckData(newDeck);
    setIsGenerating(false);
    setActiveTab('deck');
  };

  return (
    <div className="app-root">
      
      {/* Ambient Backdrop Orbs */}
      <div className="bg-ambient-glow">
        <div className="glow-orb orb-1" />
        <div className="glow-orb orb-2" />
      </div>

      {/* Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
        onOpenExport={() => setIsExportOpen(true)}
        deckReady={!!deckData}
      />

      {/* Main Tab Content */}
      <main style={{ position: 'relative', zIndex: 1, paddingBottom: '60px' }}>
        
        {activeTab === 'generator' && (
          <PitchGenerator
            onGenerate={handleGenerateDeck}
            isGenerating={isGenerating}
          />
        )}

        {activeTab === 'deck' && deckData && (
          <DeckViewer
            deckData={deckData}
            onUpdateDeck={(updated) => setDeckData(updated)}
            onStartQA={() => setActiveTab('qa')}
          />
        )}

        {activeTab === 'qa' && deckData && (
          <QASimulator
            deckData={deckData}
            qaHistory={qaHistory}
            setQaHistory={setQaHistory}
            onFinishQA={() => setActiveTab('scorecard')}
          />
        )}

        {activeTab === 'scorecard' && deckData && (
          <Scorecard
            deckData={deckData}
            qaHistory={qaHistory}
            onOpenExport={() => setIsExportOpen(true)}
            onRestart={() => setActiveTab('generator')}
          />
        )}

      </main>

      {/* Export Modal */}
      {isExportOpen && (
        <ExportModal
          deckData={deckData}
          qaHistory={qaHistory}
          onClose={() => setIsExportOpen(false)}
        />
      )}

    </div>
  );
}
