import React from 'react';
import { Sparkles, Layers, MessageSquare, BarChart3, Download, Moon, Sun, Shield } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, theme, setTheme, onOpenExport, deckReady }) {
  const themeOptions = [
    { id: 'cyber', name: 'Cyber Dark', icon: '🌌' },
    { id: 'gold', name: 'Executive Gold', icon: '✨' },
    { id: 'emerald', name: 'Emerald Tech', icon: '🌿' },
    { id: 'obsidian', name: 'Obsidian Glass', icon: '🔮' }
  ];

  return (
    <header className="glass-panel header-container" style={{ borderRadius: '0 0 20px 20px', borderTop: 'none', padding: '16px 28px', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => setActiveTab('generator')}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--gradient-brand)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <Sparkles size={22} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
              PitchCraft <span className="gradient-text">AI</span>
            </h1>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500, letterSpacing: '0.05em' }}>
              REAL-TIME PITCH & DEFENSE SUITE
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 0, 0, 0.25)', padding: '6px', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <button
            onClick={() => setActiveTab('generator')}
            className={`nav-btn ${activeTab === 'generator' ? 'active' : ''}`}
          >
            <Sparkles size={16} />
            <span>AI Synthesizer</span>
          </button>

          <button
            onClick={() => setActiveTab('deck')}
            className={`nav-btn ${activeTab === 'deck' ? 'active' : ''}`}
            style={{ opacity: deckReady ? 1 : 0.6 }}
          >
            <Layers size={16} />
            <span>Pitch Deck</span>
            {deckReady && <span className="badge-dot" />}
          </button>

          <button
            onClick={() => setActiveTab('qa')}
            className={`nav-btn ${activeTab === 'qa' ? 'active' : ''}`}
            style={{ opacity: deckReady ? 1 : 0.6 }}
          >
            <MessageSquare size={16} />
            <span>Investor Q&A</span>
          </button>

          <button
            onClick={() => setActiveTab('scorecard')}
            className={`nav-btn ${activeTab === 'scorecard' ? 'active' : ''}`}
            style={{ opacity: deckReady ? 1 : 0.6 }}
          >
            <BarChart3 size={16} />
            <span>Telemetry Score</span>
          </button>
        </nav>

        {/* Actions & Theme Picker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Selector */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              color: 'var(--text-primary)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '8px 14px',
              borderRadius: '10px',
              fontWeight: 500,
              fontSize: '0.85rem',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {themeOptions.map((t) => (
              <option key={t.id} value={t.id} style={{ background: '#0f172a', color: '#fff' }}>
                {t.icon} {t.name}
              </option>
            ))}
          </select>

          {/* Export Button */}
          <button
            onClick={onOpenExport}
            className="btn-primary"
            style={{
              padding: '8px 16px',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Download size={16} />
            <span>Export Report</span>
          </button>
        </div>

      </div>
    </header>
  );
}
