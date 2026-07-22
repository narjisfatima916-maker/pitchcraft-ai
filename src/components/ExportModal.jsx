import React, { useState } from 'react';
import { X, Copy, Download, FileText, Check, Printer } from 'lucide-react';

export default function ExportModal({ deckData, qaHistory, onClose }) {
  const [copied, setCopied] = useState(false);

  const startupName = deckData?.metadata?.name || "Startup Pitch";
  const slides = deckData?.slides || [];

  // Generate markdown report
  const generateMarkdownReport = () => {
    let md = `# PitchCraft AI Project Report - ${startupName}\n\n`;
    md += `**Tagline:** ${deckData?.metadata?.tagline || ""}\n`;
    md += `**Generated:** ${new Date().toLocaleDateString()}\n\n`;
    md += `---\n\n## 📊 Executive Presentation Deck Summary\n\n`;

    slides.forEach((slide) => {
      md += `### Slide ${slide.id}: ${slide.title} (${slide.category})\n`;
      md += `*${slide.subtitle}*\n\n`;
      slide.bullets.forEach((b) => {
        md += `- ${b}\n`;
      });
      md += `\n*Speaker Note:* ${slide.speakerNotes}\n\n`;
    });

    md += `---\n\n## 🎙️ Simulated Investor Q&A Transcript\n\n`;
    if (qaHistory && qaHistory.length > 0) {
      qaHistory.forEach((item) => {
        if (item.sender === 'user') {
          md += `**Founder:** ${item.text}\n\n`;
        } else {
          md += `**${item.personaName} (${item.personaRole}):** ${item.text}\n`;
          if (item.scores) {
            md += `> *Telemetry Score: Clarity ${item.scores.clarity}%, Persuasiveness ${item.scores.persuasiveness}%, Overall ${item.scores.overall}/100*\n\n`;
          }
        }
      });
    } else {
      md += `*No live Q&A session recorded yet.*\n\n`;
    }

    return md;
  };

  const handleCopyMarkdown = () => {
    const md = generateMarkdownReport();
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const md = generateMarkdownReport();
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${startupName.toLowerCase().replace(/\s+/g, '-')}-pitch-report.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div
        className="glass-panel animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          borderRadius: '24px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'var(--bg-secondary)',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Export Pitch Report & Assets</h3>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Download project markdown, summary report, or print presentation deck.
            </span>
          </div>

          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '8px', borderRadius: '50%' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Markdown Preview Area */}
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '24px', padding: '16px', background: 'rgba(0,0,0,0.4)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-secondary)', whiteSpace: 'pre-wrap' }}>
          {generateMarkdownReport()}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <button
            onClick={handleCopyMarkdown}
            className="btn-secondary"
            style={{ padding: '10px 18px', fontSize: '0.88rem' }}
          >
            {copied ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Markdown'}</span>
          </button>

          <button
            onClick={handlePrintPDF}
            className="btn-secondary"
            style={{ padding: '10px 18px', fontSize: '0.88rem' }}
          >
            <Printer size={16} />
            <span>Print / Save as PDF</span>
          </button>

          <button
            onClick={handleDownloadMarkdown}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.88rem' }}
          >
            <Download size={16} />
            <span>Download .MD Report</span>
          </button>
        </div>

      </div>
    </div>
  );
}
