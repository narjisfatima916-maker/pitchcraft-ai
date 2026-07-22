import React, { useEffect } from 'react';
import { calculateOverallScorecard } from '../services/aiService';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, AlertTriangle, ShieldCheck, Download, Sparkles, TrendingUp, RefreshCw, BarChart2 } from 'lucide-react';

export default function Scorecard({ deckData, qaHistory, onOpenExport, onRestart }) {
  const scorecard = calculateOverallScorecard(qaHistory, deckData);

  // Trigger confetti burst on load
  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log("Confetti trigger", e);
    }
  }, []);

  return (
    <div style={{ maxWidth: '1150px', margin: '32px auto', padding: '0 20px' }}>
      
      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }} className="animate-fade-in">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '30px', color: 'var(--accent-emerald)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '14px' }}>
          <ShieldCheck size={14} /> PITCH PERFORMANCE TELEMETRY AUDIT
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 12px 0' }}>
          Pitch Readiness Score: <span className="gradient-text">{scorecard.overallScore}/100</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto' }}>
          Comprehensive evaluation based on your deck structure and simulated AI investor defense exchanges.
        </p>
      </div>

      {/* Hero Stats Dashboard Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        
        {/* Overall Grade Card */}
        <div className="glass-panel" style={{ padding: '24px', borderRadius: '20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            VERDICT GRADE
          </span>
          <div style={{ fontSize: '3.6rem', fontWeight: 900, color: 'var(--accent-cyan)', lineHeight: 1.1, margin: '8px 0' }}>
            {scorecard.grade}
          </div>
          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-emerald)' }}>
            {scorecard.readinessLevel}
          </div>
        </div>

        {/* Story Clarity */}
        <div className="glass-panel" style={{ padding: '24px', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Story Clarity</span>
            <span style={{ fontWeight: 800, color: 'var(--accent-cyan)' }}>{scorecard.clarityAvg}%</span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${scorecard.clarityAvg}%`, height: '100%', background: 'var(--accent-cyan)', borderRadius: '4px' }} />
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginTop: '12px' }}>
            Problem-solution alignment and messaging precision
          </span>
        </div>

        {/* Persuasiveness */}
        <div className="glass-panel" style={{ padding: '24px', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Persuasiveness</span>
            <span style={{ fontWeight: 800, color: 'var(--accent-violet)' }}>{scorecard.persuasivenessAvg}%</span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${scorecard.persuasivenessAvg}%`, height: '100%', background: 'var(--accent-violet)', borderRadius: '4px' }} />
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginTop: '12px' }}>
            Value proposition impact and vision scale
          </span>
        </div>

        {/* Objection Resolution */}
        <div className="glass-panel" style={{ padding: '24px', borderRadius: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Objection Defense</span>
            <span style={{ fontWeight: 800, color: 'var(--accent-emerald)' }}>{scorecard.objectionHandlingAvg}%</span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${scorecard.objectionHandlingAvg}%`, height: '100%', background: 'var(--accent-emerald)', borderRadius: '4px' }} />
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginTop: '12px' }}>
            Moat defense, CAC/LTV & technical answers
          </span>
        </div>

      </div>

      {/* Two Column Heatmap: Strengths vs Vulnerabilities */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        
        {/* Strengths Card */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '24px', borderLeft: '4px solid var(--accent-emerald)' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-emerald)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={22} /> Key Pitch Strengths
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {scorecard.strengths.map((str, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <span style={{ color: 'var(--accent-emerald)', marginTop: '2px' }}>✓</span>
                <span>{str}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vulnerabilities Card */}
        <div className="glass-panel" style={{ padding: '28px', borderRadius: '24px', borderLeft: '4px solid var(--accent-amber)' }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--accent-amber)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AlertTriangle size={22} /> Potential Investor Pushbacks
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {scorecard.vulnerabilities.map((vuln, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <span style={{ color: 'var(--accent-amber)', marginTop: '2px' }}>⚠</span>
                <span>{vuln}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Action Plan */}
      <div className="glass-panel" style={{ padding: '28px', borderRadius: '24px', marginBottom: '36px' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={20} color="var(--accent-cyan)" /> Priority Action Steps Before Live Pitch
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {scorecard.actionPlan.map((action, idx) => (
            <div key={idx} style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '6px' }}>
                ACTION ITEM 0{idx + 1}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0 }}>
                {action}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
        <button
          onClick={onOpenExport}
          className="btn-primary pulse-glow"
          style={{ padding: '14px 32px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Download size={18} /> Export Full Pitch Report & Presentation
        </button>

        <button
          onClick={onRestart}
          className="btn-secondary"
          style={{ padding: '14px 24px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <RefreshCw size={18} /> Practice Another Startup
        </button>
      </div>

    </div>
  );
}
