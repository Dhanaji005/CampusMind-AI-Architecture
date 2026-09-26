import fs from 'fs';
import path from 'path';

const dir = 'C:/Users/Admin/.gemini/antigravity/scratch/CampusMind-AI-Architecture';

const pages = [
  { file: 'index.html', active: 'arch' },
  { file: 'voice-sequence.html', active: 'voice' },
  { file: 'attendance-workflow.html', active: 'attendance' }
];

for (const p of pages) {
  const filePath = path.join(dir, p.file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Remove existing nav if any
  html = html.replace(/<!-- CAMPUSMIND LIVE NAVIGATION BAR -->[\s\S]*?<!-- \/CAMPUSMIND LIVE NAVIGATION BAR -->/g, '');

  const archStyle = p.active === 'arch' ? 'background:rgba(56,189,248,0.22);color:#38bdf8;border:1px solid rgba(56,189,248,0.45);font-weight:600;' : 'color:#94a3b8;font-weight:500;border:1px solid transparent;';
  const voiceStyle = p.active === 'voice' ? 'background:rgba(56,189,248,0.22);color:#38bdf8;border:1px solid rgba(56,189,248,0.45);font-weight:600;' : 'color:#94a3b8;font-weight:500;border:1px solid transparent;';
  const attStyle = p.active === 'attendance' ? 'background:rgba(56,189,248,0.22);color:#38bdf8;border:1px solid rgba(56,189,248,0.45);font-weight:600;' : 'color:#94a3b8;font-weight:500;border:1px solid transparent;';

  const navHtml = `
<!-- CAMPUSMIND LIVE NAVIGATION BAR -->
<style>
  html[data-theme="dark"] body {
    background: radial-gradient(circle at 65% -10%, #0c1e3d 0%, #020617 80%) !important;
  }
  
  /* Dock horizontally on the top right in the blank space */
  #cm-nav-pill {
    position: fixed !important;
    top: 10px !important;
    right: 14px !important;
    left: auto !important;
    transform: none !important;
    z-index: 99999 !important;
    display: flex !important;
    align-items: center !important;
    gap: 4px !important;
    background: rgba(10, 15, 26, 0.94) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    padding: 4px 8px !important;
    border-radius: 999px !important;
    border: 1px solid rgba(56, 189, 248, 0.3) !important;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6), 0 0 16px rgba(56, 189, 248, 0.15) !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    font-size: 11.5px !important;
    white-space: nowrap !important;
  }

  /* Move native Archify toolbar slightly down so it never collides */
  .toolbar {
    top: 50px !important;
    right: 14px !important;
    z-index: 9999 !important;
  }
  #btn-theme {
    display: none !important;
  }

  .cm-pill-link {
    text-decoration: none;
    padding: 5px 11px;
    border-radius: 999px;
    transition: all 0.18s ease;
  }
  .cm-pill-link:hover {
    color: #fff !important;
    background: rgba(255, 255, 255, 0.12) !important;
  }

  #cm-theme-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 14px rgba(56, 189, 248, 0.4) !important;
  }

  @media (max-width: 900px) {
    #cm-nav-pill {
      top: 6px !important;
      right: 6px !important;
      padding: 3px 6px !important;
      font-size: 10.5px !important;
      max-width: calc(100vw - 12px) !important;
      overflow-x: auto !important;
    }
    .toolbar {
      top: 46px !important;
      right: 6px !important;
    }
    .cm-pill-name {
      display: none !important;
    }
  }
</style>

<div id="cm-nav-pill">
  <!-- Name Box -->
  <a href="portal.html" title="Open CampusMind Portal Hub" style="text-decoration:none;display:flex;align-items:center;gap:6px;background:rgba(56,189,248,0.12);padding:4px 10px;border-radius:999px;border:1px solid rgba(56,189,248,0.25);margin-right:2px;">
    <span style="width:7px;height:7px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981;"></span>
    <span class="cm-pill-name" style="font-weight:700;color:#fff;letter-spacing:0.3px;font-size:11.5px;">CampusMind AI</span>
  </a>

  <!-- Links -->
  <a href="index.html" class="cm-pill-link" style="${archStyle}">🏗️ Runtime Arch</a>
  <a href="voice-sequence.html" class="cm-pill-link" style="${voiceStyle}">🎙️ Voice Sequence</a>
  <a href="attendance-workflow.html" class="cm-pill-link" style="${attStyle}">📋 Attendance Workflow</a>

  <!-- Theme Toggle Button (Black-Blue) -->
  <button id="cm-theme-btn" onclick="cmToggleTheme()" title="Click to toggle Black-Blue / Light theme" style="background:rgba(15,23,42,0.92);color:#38bdf8;border:1px solid rgba(56,189,248,0.45);border-radius:999px;padding:4px 10px;font-size:11px;font-weight:600;display:flex;align-items:center;gap:5px;cursor:pointer;transition:all .18s;box-shadow:0 0 10px rgba(56,189,248,0.2);margin:0 2px;">
    <span id="cm-theme-icon">🌙</span>
    <span id="cm-theme-text">Black-Blue</span>
  </button>

  <!-- GitHub Link -->
  <a href="https://github.com/Dhanaji005/CampusMind-AI" target="_blank" rel="noopener noreferrer" style="color:#94a3b8;text-decoration:none;padding:4px 8px;border-radius:999px;font-weight:500;display:flex;align-items:center;gap:4px;transition:all .18s;" class="cm-pill-link" title="Open Main Project Repository">
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
    GitHub ↗
  </a>
</div>

<script>
  function cmUpdateThemeUI(theme) {
    const btn = document.getElementById('cm-theme-btn');
    const icon = document.getElementById('cm-theme-icon');
    const text = document.getElementById('cm-theme-text');
    if (!btn || !icon || !text) return;
    if (theme === 'dark') {
      icon.textContent = '🌙';
      text.textContent = 'Black-Blue';
      btn.style.borderColor = 'rgba(56,189,248,0.5)';
      btn.style.color = '#38bdf8';
      btn.style.background = 'rgba(15,23,42,0.92)';
      btn.style.boxShadow = '0 0 12px rgba(56,189,248,0.25)';
    } else {
      icon.textContent = '☀️';
      text.textContent = 'Light Mode';
      btn.style.borderColor = 'rgba(245,158,11,0.5)';
      btn.style.color = '#d97706';
      btn.style.background = '#ffffff';
      btn.style.boxShadow = '0 0 12px rgba(245,158,11,0.2)';
    }
  }

  function cmToggleTheme() {
    const htmlEl = document.documentElement;
    const current = htmlEl.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', next);
    try {
      localStorage.setItem('archify-theme', next);
    } catch(e) {}
    cmUpdateThemeUI(next);
  }

  // Sync theme button on load
  (function() {
    let saved = 'dark';
    try {
      saved = localStorage.getItem('archify-theme') || 'dark';
    } catch(e) {}
    document.documentElement.setAttribute('data-theme', saved);
    setTimeout(function() { cmUpdateThemeUI(saved); }, 50);
  })();
</script>
<!-- /CAMPUSMIND LIVE NAVIGATION BAR -->
`;

  html = html.replace('</body>', navHtml + '\n</body>');
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Docked navbar to top-right in ${p.file}`);
}
