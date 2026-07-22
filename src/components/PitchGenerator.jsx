import React, { useState } from 'react';
import { STARTUP_PRESETS } from '../services/aiService';
import { Sparkles, Rocket, Zap, CheckCircle2, ArrowRight, Wand2, ShieldAlert } from 'lucide-react';

export default function PitchGenerator({ onGenerate, isGenerating }) {
  const [formData, setFormData] = useState({
    name: "AuraHealth AI",
    tagline: "Autonomous Diagnostic Copilot for Emergency Triage",
    audience: "Hospitals & Urgent Care Centers",
    problem: "Emergency room wait times exceed 4 hours due to manual patient triage bottlenecks and administrative overload.",
    solution: "AI-powered vision & audio sensors that instantly pre-triage patient vitals, symptom urgency, and queue priority in under 45 seconds.",
    market: "$48B Global Health Tech & Hospital Automation Market",
    model: "SaaS per hospital bed ($1,500/bed/yr) + Enterprise API integrations",
    traction: "Pilot live in 3 regional hospitals, reduced triage wait by 64%, $420k ARR pipeline"
  });

  const [activeStep, setActiveStep] = useState(1);

  const handleSelectPreset = (preset) => {
    setFormData({
      name: preset.name,
      tagline: preset.tagline,
      audience: preset.audience,
      problem: preset.problem,
      solution: preset.solution,
      market: preset.market,
      model: preset.model,
      traction: preset.traction
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '32px auto', padding: '0 20px' }}>
      
      {/* Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }} className="animate-fade-in">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '30px', color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>
          <Wand2 size={14} /> AI-POWERED PITCH DECK & DEFENSE SYNTHESIZER
        </div>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2 }}>
          Turn Your Project Idea into an <br />
          <span className="gradient-text">Investment-Ready Pitch Deck & AI Defense</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto' }}>
          Synthesize a complete 6-slide visual presentation, practice live investor Q&A defense against custom AI VC personas, and receive instant performance telemetry.
        </p>
      </div>

      {/* Preset Quick Loader */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Rocket size={18} color="var(--accent-cyan)" /> 1-Click Instant Startup Presets
          </h3>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Click any preset to populate form instantly</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
          {STARTUP_PRESETS.map((preset) => (
            <div
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className="glass-panel"
              style={{
                padding: '16px',
                borderRadius: '14px',
                cursor: 'pointer',
                border: formData.name === preset.name ? '1.5px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                background: formData.name === preset.name ? 'rgba(6, 182, 212, 0.08)' : 'var(--bg-card)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                {preset.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '8px' }}>
                {preset.audience}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {preset.tagline}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Box */}
      <div className="glass-panel" style={{ padding: '36px', borderRadius: '24px', position: 'relative' }}>
        
        <form onSubmit={handleSubmit}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '24px' }}>
            
            {/* Startup Name */}
            <div>
              <label className="form-label">Startup / Project Name *</label>
              <input
                type="text"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. AuraHealth AI"
                required
              />
            </div>

            {/* Tagline */}
            <div>
              <label className="form-label">Tagline / Vision Statement *</label>
              <input
                type="text"
                className="form-input"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                placeholder="e.g. Autonomous Diagnostic Copilot for Emergency Triage"
                required
              />
            </div>

            {/* Target Audience */}
            <div>
              <label className="form-label">Target Audience / Segment *</label>
              <input
                type="text"
                className="form-input"
                value={formData.audience}
                onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                placeholder="e.g. Hospitals & Urgent Care Centers"
                required
              />
            </div>

            {/* Market Size */}
            <div>
              <label className="form-label">Market Size & TAM *</label>
              <input
                type="text"
                className="form-input"
                value={formData.market}
                onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                placeholder="e.g. $48B Global Health Tech Market"
                required
              />
            </div>

          </div>

          {/* Problem Statement */}
          <div style={{ marginBottom: '20px' }}>
            <label className="form-label">The Critical Problem You Are Solving *</label>
            <textarea
              rows={3}
              className="form-input"
              value={formData.problem}
              onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
              placeholder="What pain point exists today that costs time, money, or efficiency?"
              required
            />
          </div>

          {/* Solution */}
          <div style={{ marginBottom: '20px' }}>
            <label className="form-label">Your Core Solution & Product Secret Sauce *</label>
            <textarea
              rows={3}
              className="form-input"
              value={formData.solution}
              onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
              placeholder="How does your technology solve this problem 10x better?"
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            {/* Revenue Model */}
            <div>
              <label className="form-label">Business & Monetization Model *</label>
              <input
                type="text"
                className="form-input"
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                placeholder="e.g. B2B SaaS per seat / Usage-based fee"
                required
              />
            </div>

            {/* Traction */}
            <div>
              <label className="form-label">Key Traction & Milestones *</label>
              <input
                type="text"
                className="form-input"
                value={formData.traction}
                onChange={(e) => setFormData({ ...formData, traction: e.target.value })}
                placeholder="e.g. 3 hospital pilots live, $420k ARR pipeline"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              disabled={isGenerating}
              className="btn-primary pulse-glow"
              style={{
                padding: '16px 40px',
                fontSize: '1.1rem',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '480px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              {isGenerating ? (
                <>
                  <div className="spinner" />
                  <span>Synthesizing Pitch Deck & AI Persona Engine...</span>
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  <span>Synthesize Pitch Deck & Launch AI Suite</span>
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}
