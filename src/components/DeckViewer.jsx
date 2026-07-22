import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Edit3, Check, Sparkles, TrendingUp, AlertTriangle, Zap, Target, Award, Play } from 'lucide-react';

export default function DeckViewer({ deckData, onUpdateDeck, onStartQA }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState(false);

  const slides = deckData?.slides || [];
  const activeSlide = slides[currentSlideIndex] || slides[0];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, slides.length]);

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const renderSlideIcon = (category) => {
    switch (category) {
      case 'COVER': return <Sparkles size={28} color="var(--accent-cyan)" />;
      case 'PROBLEM': return <AlertTriangle size={28} color="var(--accent-rose)" />;
      case 'SOLUTION': return <Zap size={28} color="var(--accent-cyan)" />;
      case 'MARKET': return <TrendingUp size={28} color="var(--accent-amber)" />;
      case 'TRACTION': return <Award size={28} color="var(--accent-emerald)" />;
      case 'THE ASK': return <Target size={28} color="var(--accent-violet)" />;
      default: return <Sparkles size={28} color="var(--accent-cyan)" />;
    }
  };

  if (!activeSlide) return null;

  return (
    <div style={{ maxWidth: isFullscreen ? '100vw' : '1200px', margin: isFullscreen ? '0' : '24px auto', padding: isFullscreen ? '0' : '0 20px' }}>
      
      {/* Deck Controls Header */}
      {!isFullscreen && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Slide {currentSlideIndex + 1} of {slides.length} • {activeSlide.category}
            </span>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{deckData.metadata?.name}</h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Toggle Speaker Notes */}
            <button
              onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
              className="btn-secondary"
              style={{ fontSize: '0.82rem', padding: '8px 14px' }}
            >
              💬 {showSpeakerNotes ? 'Hide Speaker Notes' : 'Speaker Notes'}
            </button>

            {/* Start Q&A Defense */}
            <button
              onClick={onStartQA}
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '8px 16px', background: 'var(--gradient-brand)' }}
            >
              <Play size={16} /> Practice Investor Q&A
            </button>

            {/* Fullscreen Mode */}
            <button
              onClick={toggleFullscreen}
              className="btn-secondary"
              style={{ padding: '8px 12px' }}
              title="Fullscreen Presentation (Press F)"
            >
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>
          </div>
        </div>
      )}

      {/* Main Slide Presentation Stage */}
      <div
        className="glass-panel slide-stage"
        style={{
          borderRadius: isFullscreen ? '0' : '24px',
          minHeight: isFullscreen ? '100vh' : '560px',
          padding: isFullscreen ? '60px 80px' : '48px 56px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(9,13,22,0.96) 100%)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden'
        }}
      >
        
        {/* Top Bar of Slide */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ padding: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              {renderSlideIcon(activeSlide.category)}
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', letterSpacing: '0.1em' }}>
                SLIDE 0{currentSlideIndex + 1} // {activeSlide.category}
              </span>
              <h2 style={{ fontSize: isFullscreen ? '2.4rem' : '1.8rem', fontWeight: 800, margin: 0 }}>
                {activeSlide.title}
              </h2>
            </div>
          </div>

          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            {deckData.metadata?.name}
          </div>
        </div>

        {/* Slide Body */}
        <div style={{ display: 'grid', gridTemplateColumns: activeSlide.chartData ? '1.2fr 1fr' : '1fr', gap: '40px', alignItems: 'center', flex: 1 }}>
          
          {/* Bullet Points */}
          <div>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '24px', fontWeight: 500 }}>
              {activeSlide.subtitle}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {activeSlide.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '16px 20px',
                    borderRadius: '14px',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    fontSize: isFullscreen ? '1.15rem' : '1.02rem',
                    lineHeight: 1.5,
                    color: 'var(--text-primary)'
                  }}
                >
                  <span style={{ minWidth: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', marginTop: '8px' }} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Chart Visualizer if available */}
          {activeSlide.chartData && (
            <div
              className="glass-panel"
              style={{
                padding: '24px',
                borderRadius: '18px',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '20px', textAlign: 'center' }}>
                📊 {activeSlide.chartData.label}
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {activeSlide.chartData.values.map((item, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                      <span style={{ fontWeight: 600 }}>{item.label}</span>
                      <span style={{ fontWeight: 700, color: item.color }}>{item.value}</span>
                    </div>
                    <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '5px', overflow: 'hidden' }}>
                      <div
                        style={{
                          width: `${Math.min(100, (parseFloat(item.value) / 50) * 100 || (idx + 1) * 30)}%`,
                          height: '100%',
                          background: item.color,
                          borderRadius: '5px',
                          transition: 'width 0.8s ease'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Slide Stage Footer Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '32px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="btn-secondary"
            style={{ opacity: currentSlideIndex === 0 ? 0.4 : 1, padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <ChevronLeft size={18} /> Previous Slide
          </button>

          {/* Slide Progress Dots */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {slides.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                style={{
                  width: idx === currentSlideIndex ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: idx === currentSlideIndex ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            className="btn-secondary"
            style={{ opacity: currentSlideIndex === slides.length - 1 ? 0.4 : 1, padding: '8px 18px', fontSize: '0.85rem' }}
          >
            Next Slide <ChevronRight size={18} />
          </button>

        </div>

      </div>

      {/* Speaker Notes Drawer */}
      {showSpeakerNotes && (
        <div
          className="glass-panel animate-fade-in"
          style={{
            marginTop: '20px',
            padding: '20px 24px',
            borderRadius: '16px',
            borderLeft: '4px solid var(--accent-cyan)',
            background: 'rgba(6, 182, 212, 0.05)'
          }}
        >
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '6px' }}>
            💡 STAGE SPEAKER NOTES & DELIVERY TIP
          </h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: 0 }}>
            {activeSlide.speakerNotes}
          </p>
        </div>
      )}

      {/* Slide Thumbnails Bar */}
      {!isFullscreen && (
        <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
          {slides.map((slide, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className="glass-panel"
              style={{
                padding: '12px',
                borderRadius: '12px',
                cursor: 'pointer',
                border: idx === currentSlideIndex ? '2px solid var(--accent-cyan)' : '1px solid rgba(255, 255, 255, 0.08)',
                background: idx === currentSlideIndex ? 'rgba(6, 182, 212, 0.1)' : 'var(--bg-card)',
                textAlign: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                0{idx + 1}
              </div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {slide.category}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
