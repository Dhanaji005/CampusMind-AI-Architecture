import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Check Archify CLI location
const archifyPaths = [
  path.resolve(rootDir, '../archify/archify/bin/archify.mjs'),
  path.resolve(process.env.USERPROFILE || 'C:/Users/Admin', '.agents/skills/archify/bin/archify.mjs')
];

let archifyBin = archifyPaths.find(p => fs.existsSync(p));
if (!archifyBin) {
  console.error("Could not locate Archify CLI in .agents/skills/archify or sibling directory.");
  process.exit(1);
}

console.log(`Using Archify CLI at: ${archifyBin}`);

const jobs = [
  {
    type: 'architecture',
    spec: path.join(rootDir, 'diagrams/campusmind.architecture.json'),
    output: path.join(rootDir, 'index.html')
  },
  {
    type: 'sequence',
    spec: path.join(rootDir, 'diagrams/campusmind-voice.sequence.json'),
    output: path.join(rootDir, 'voice-sequence.html')
  },
  {
    type: 'workflow',
    spec: path.join(rootDir, 'diagrams/campusmind-attendance.workflow.json'),
    output: path.join(rootDir, 'attendance-workflow.html')
  }
];

for (const job of jobs) {
  console.log(`Building ${job.type} diagram from ${path.basename(job.spec)}...`);
  const cmd = `node "${archifyBin}" deliver ${job.type} "${job.spec}" "${job.output}" --quality showcase --json`;
  try {
    const res = execSync(cmd, { encoding: 'utf8' });
    const parsed = JSON.parse(res);
    console.log(`[OK] Generated ${path.basename(job.output)} (${parsed.artifact?.bytes} bytes, 0 errors)`);
  } catch (err) {
    console.error(`Error building ${job.spec}:`, err.stdout || err.message);
    process.exit(1);
  }
}

// Inject nav bar
console.log('Injecting navigation bar into HTML pages...');
execSync(`node "${path.join(__dirname, 'inject-navbar.js')}"`, { stdio: 'inherit' });

console.log('\nAll CampusMind AI diagrams successfully built and ready for live deployment!');
