import React, { useState, useEffect, useRef } from 'react';
import { INVESTOR_PERSONAS, simulateInvestorResponse } from '../services/aiService';
import { MessageSquare, Mic, MicOff, Send, Volume2, VolumeX, Sparkles, Award, ArrowRight, Bot, User, CheckCircle2 } from 'lucide-react';

export default function QASimulator({ deckData, qaHistory, setQaHistory, onFinishQA }) {
  const [selectedPersonaId, setSelectedPersonaId] = useState('vc_victor');
  const [userSpeechText, setUserSpeechText] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const activePersona = INVESTOR_PERSONAS.find((p) => p.id === selectedPersonaId) || INVESTOR_PERSONAS[0];
  const chatBottomRef = useRef(null);

  // Initialize speech recognition if available
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join('');
        setUserSpeechText(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser environment. You can type your response!");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setUserSpeechText('');
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const speakText = (text) => {
    if (isMuted || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleSendAnswer = async (e) => {
    if (e) e.preventDefault();
    if (!userSpeechText.trim() || isEvaluating) return;

    const userEntry = {
      id: Date.now(),
      sender: 'user',
      text: userSpeechText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newHistory = [...qaHistory, userEntry];
    setQaHistory(newHistory);
    const textToSubmit = userSpeechText;
    setUserSpeechText('');
    setIsEvaluating(true);

    // Call AI Simulation engine
    const aiResult = await simulateInvestorResponse(selectedPersonaId, textToSubmit, newHistory, deckData);

    const aiEntry = {
      id: Date.now() + 1,
      sender: 'investor',
      persona: activePersona,
      text: `${aiResult.aiComment} ${aiResult.followUpQuestion}`,
      aiComment: aiResult.aiComment,
      followUpQuestion: aiResult.followUpQuestion,
      scores: aiResult.scores,
      soundbiteTip: aiResult.soundbiteTip,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setQaHistory([...newHistory, aiEntry]);
    setIsEvaluating(false);

    // Trigger AI speech audio
    speakText(`${aiResult.aiComment} ${aiResult.followUpQuestion}`);

    // Auto scroll chat
    setTimeout(() => {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div style={{ maxWidth: '1250px', margin: '24px auto', padding: '0 20px' }}>
      
      {/* Top Banner */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            REAL-TIME INVESTOR PITCH DEFENSE
          </span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
            Simulate Investor Q&A & Objection Handling
          </h2>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Mute TTS Audio */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="btn-secondary"
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span>{isMuted ? 'Audio Muted' : 'AI Voice On'}</span>
          </button>

          {/* Finish & View Scorecard */}
          <button
            onClick={onFinishQA}
            className="btn-primary"
            style={{ background: 'var(--gradient-brand)', padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <Award size={16} /> View Scorecard & Analytics
          </button>
        </div>
      </div>

      {/* Main Grid: Persona Selector + Live Interactive Arena */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '24px' }}>
        
        {/* Left Column: Investor Persona List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Select AI Investor Persona
          </h4>

          {INVESTOR_PERSONAS.map((persona) => (
            <div
              key={persona.id}
              onClick={() => setSelectedPersonaId(persona.id)}
              className="glass-panel"
              style={{
                padding: '16px',
                borderRadius: '16px',
                cursor: 'pointer',
                border: persona.id === selectedPersonaId ? '1.5px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                background: persona.id === selectedPersonaId ? 'rgba(6, 182, 212, 0.1)' : 'var(--bg-card)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.6rem' }}>{persona.avatar}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                    {persona.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {persona.archetype}
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Focus: {persona.focus}
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                "{persona.style}"
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Live Conversation Stage */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '24px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            height: '620px',
            justifyContent: 'space-between'
          }}
        >
          
          {/* Persona Header Info */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.8rem' }}>{activePersona.avatar}</span>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: 0 }}>
                  {activePersona.name} • <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>{activePersona.role}</span>
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Evaluates: {activePersona.focus}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '20px', fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 600 }}>
              <span className="badge-dot" style={{ background: 'var(--accent-emerald)' }} /> Live Simulation Active
            </div>
          </div>

          {/* Chat Messages Timeline */}
          <div style={{ flex: 1, overflowY: 'auto', margin: '16px 0', paddingRight: '8px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Initial Greeting from active persona */}
            <div style={{ display: 'flex', gap: '12px', maxWidth: '85%' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                {activePersona.avatar}
              </div>
              <div className="glass-panel" style={{ padding: '14px 18px', borderRadius: '16px 16px 16px 4px', background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                  {activePersona.name} ({activePersona.role})
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: 0 }}>
                  {activePersona.initialGreeting}
                </p>
              </div>
            </div>

            {/* Conversation History */}
            {qaHistory.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: item.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '100%'
                }}
              >
                {item.sender === 'investor' && (
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                    {item.avatar || activePersona.avatar}
                  </div>
                )}

                <div style={{ maxWidth: '82%' }}>
                  <div
                    className="glass-panel"
                    style={{
                      padding: '14px 18px',
                      borderRadius: item.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      background: item.sender === 'user' ? 'rgba(6, 182, 212, 0.15)' : 'rgba(15, 23, 42, 0.85)',
                      border: item.sender === 'user' ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: item.sender === 'user' ? 'var(--accent-cyan)' : 'var(--accent-violet)', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{item.sender === 'user' ? 'Founder Response' : item.personaName}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{item.timestamp}</span>
                    </div>

                    <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: 0 }}>
                      {item.text}
                    </p>
                  </div>

                  {/* AI Evaluation Scores pill for investor message */}
                  {item.scores && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px', padding: '6px 12px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '10px', fontSize: '0.78rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>AI Score Telemetry:</span>
                      <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>Clarity: {item.scores.clarity}%</span>
                      <span style={{ color: 'var(--accent-violet)', fontWeight: 700 }}>Persuasiveness: {item.scores.persuasiveness}%</span>
                      <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>Overall: {item.scores.overall}/100</span>
                    </div>
                  )}
                </div>

                {item.sender === 'user' && (
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--gradient-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <User size={18} />
                  </div>
                )}
              </div>
            ))}

            {isEvaluating && (
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div className="spinner" />
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontStyle: 'italic' }}>
                  {activePersona.name} is analyzing your pitch metrics...
                </span>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* User Input Bar */}
          <form onSubmit={handleSendAnswer} style={{ display: 'flex', gap: '10px', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            
            {/* Microphone Toggle Button */}
            <button
              type="button"
              onClick={toggleListening}
              className={`btn-secondary ${isListening ? 'listening-pulse' : ''}`}
              style={{
                padding: '12px 14px',
                borderRadius: '12px',
                background: isListening ? 'rgba(244, 63, 94, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                border: isListening ? '1px solid var(--accent-rose)' : '1px solid rgba(255, 255, 255, 0.12)',
                color: isListening ? 'var(--accent-rose)' : 'var(--text-primary)'
              }}
              title={isListening ? "Listening... Click to stop" : "Speak response using microphone"}
            >
              {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            </button>

            {/* Text Input */}
            <input
              type="text"
              className="form-input"
              value={userSpeechText}
              onChange={(e) => setUserSpeechText(e.target.value)}
              placeholder={isListening ? "Listening to your voice..." : "Type your pitch response or objection answer..."}
              style={{ flex: 1, borderRadius: '12px', padding: '12px 16px' }}
              disabled={isEvaluating}
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={!userSpeechText.trim() || isEvaluating}
              className="btn-primary"
              style={{ padding: '12px 20px', borderRadius: '12px', opacity: !userSpeechText.trim() || isEvaluating ? 0.5 : 1 }}
            >
              <Send size={18} />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}
