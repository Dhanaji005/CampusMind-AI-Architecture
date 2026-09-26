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

  const archStyle = p.active === 'arch' ? 'background:rgba(255,255,255,0.18);color:#fff;font-weight:600;' : 'color:#94a3b8;font-weight:500;';
  const voiceStyle = p.active === 'voice' ? 'background:rgba(255,255,255,0.18);color:#fff;font-weight:600;' : 'color:#94a3b8;font-weight:500;';
  const attStyle = p.active === 'attendance' ? 'background:rgba(255,255,255,0.18);color:#fff;font-weight:600;' : 'color:#94a3b8;font-weight:500;';

  const navHtml = `
<!-- CAMPUSMIND LIVE NAVIGATION BAR -->
<div id="cm-nav-pill" style="position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:99999;display:flex;align-items:center;gap:6px;background:rgba(15,18,22,0.92);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);padding:6px 10px;border-radius:999px;border:1px solid rgba(255,255,255,0.14);box-shadow:0 12px 30px rgba(0,0,0,0.5);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:12px;">
  <span style="font-weight:700;color:#fff;padding:0 8px;letter-spacing:0.5px;display:flex;align-items:center;gap:6px;">
    <span style="width:7px;height:7px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981;"></span>
    CampusMind AI
  </span>
  <a href="index.html" style="${archStyle}text-decoration:none;padding:5px 12px;border-radius:999px;transition:all .2s;">🏗️ Runtime Arch</a>
  <a href="voice-sequence.html" style="${voiceStyle}text-decoration:none;padding:5px 12px;border-radius:999px;transition:all .2s;">🎙️ Voice Sequence</a>
  <a href="attendance-workflow.html" style="${attStyle}text-decoration:none;padding:5px 12px;border-radius:999px;transition:all .2s;">📋 Attendance Workflow</a>
  <a href="https://github.com/Dhanaji005/CampusMind-AI" target="_blank" rel="noopener noreferrer" style="color:#38bdf8;text-decoration:none;padding:5px 12px;border-radius:999px;font-weight:600;display:flex;align-items:center;gap:4px;border:1px solid rgba(56,189,248,0.25);">
    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
    CampusMind Repo ↗
  </a>
</div>
<!-- /CAMPUSMIND LIVE NAVIGATION BAR -->
`;

  html = html.replace('</body>', navHtml + '\n</body>');
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Injected navbar into ${p.file}`);
}
