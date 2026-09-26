# 🏛️ CampusMind AI — Live Interactive Architecture Hub

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-success?style=for-the-badge&logo=githubpages&logoColor=white)](https://dhanaji005.github.io/CampusMind-AI-Architecture/)
[![Archify Showcase](https://img.shields.io/badge/Archify-Showcase%20Verified-blueviolet?style=for-the-badge&logo=diagram-next)](https://github.com/tt-a1i/archify)
[![SPPU Compliance](https://img.shields.io/badge/Compliance-SPPU%20Ordinance%200.60-orange?style=for-the-badge)](http://www.unipune.ac.in/)
[![Main Repo](https://img.shields.io/badge/Main%20Project-CampusMind--AI-38bdf8?style=for-the-badge&logo=github)](https://github.com/Dhanaji005/CampusMind-AI)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> Interactive, animated, source-backed runtime system architecture and verified workflow models for **[CampusMind AI](https://github.com/Dhanaji005/CampusMind-AI)** — an Intelligent Autonomous Campus Operating System & 3D Academic Companion built for **Vidya Pratishthan's Commerce and Science College, Indapur (VPCSC Indapur)** under **Savitribai Phule Pune University (SPPU)**.

Generated using **[Archify](https://github.com/tt-a1i/archify)**.

---

## 🌐 Live Interactive Demos

| Diagram | Description | Direct Live Link |
| :--- | :--- | :--- |
| 🏗️ **Runtime Architecture** | Complete system topology (Client tier, JWT RBAC, Flask API, VPCSC RAG, SQLite WAL, Cloud AI) | [**Open Diagram ↗**](https://dhanaji005.github.io/CampusMind-AI-Architecture/index.html) |
| 🎙️ **3D Voice & RAG Sequence** | 'Hey Campus' wake-word detection, RAG retrieval, OpenRouter LLM, ElevenLabs TTS & viseme lip-sync | [**Open Sequence ↗**](https://dhanaji005.github.io/CampusMind-AI-Architecture/voice-sequence.html) |
| 📋 **SPPU 75% Attendance Engine** | Automated HOD CSV ingestion, Ordinance 0.60 classification & exam hall ticket locks | [**Open Workflow ↗**](https://dhanaji005.github.io/CampusMind-AI-Architecture/attendance-workflow.html) |
| 🚀 **Showcase Portal** | Unified Hub embedding all diagrams with tech specs and role-based credential explorer | [**Open Portal ↗**](https://dhanaji005.github.io/CampusMind-AI-Architecture/portal.html) |

---

## 🎮 Interactive Controls & Keyboard Shortcuts

Every generated diagram is a **100% self-contained, offline-compatible reactive viewer**. Open any `.html` file directly in any browser:

| Key | Action | Feature Description |
| :---: | :--- | :--- |
| **`?`** | **Help Guide** | Opens full shortcut reference and gesture guide |
| **`/`** | **Component Search** | Jump to any node, service, or connection instantly |
| **`P`** | **Play Guided Story** | Plays step-by-step curated walkthrough chapters |
| **`R`** | **Trace Route** | Traces upstream & downstream paths for focused components |
| **`T`** | **Toggle Theme** | Seamlessly switches between Dark and Light mode |
| **`E`** | **Export Diagram** | Exports high-resolution PNG, SVG, or social share cards (1200×630) |
| **`F`** | **Presentation Mode** | Fullscreen distraction-free presenter view |

---

## 📐 Architecture Breakdown

### 1. 🏗️ High-Level Runtime Architecture (`index.html`)

```
Campus Users (Students / Faculty / HODs)
       │
       ├──► Web Portal UI (Glassmorphism Role Cockpits)
       └──► 3D Avatar Engine (Three.js WebGL + Ready Player Me)
                 │
                 ▼
       Security Gateway (JWT Role-Based Access Control & CORS)
                 │
                 ▼
       Flask App Server (REST API Controller Core)
       ┌─────────┼─────────────────────────┐
       ▼         ▼                         ▼
Campus RAG   Attendance Engine      Voice Coordinator
(VPCSC DB)   (SPPU Ordinance 0.60)  (Phoneme Extraction)
       │         │                         │
       ▼         ▼                         ▼
OpenRouter   SQLite Database       ElevenLabs Neural TTS
(Nemotron)   (WAL Mode ACID)       (Flash v2.5 Audio)
```

- **Client Boundary**: Browser client running role-specific dashboards (Student, Faculty, HOD, Principal, Admin) and WebGL 3D animated companion.
- **Application Core**: Flask REST backend secured with signed JWTs (`pbkdf2:sha256`) and role authorization middleware.
- **Campus RAG Engine**: Grounded directly on the official VPCSC Indapur curriculum, staff directory, and administrative counter manual, with offline TF-IDF fallback.
- **Attendance Compliance**: Enforces SPPU Ordinance 0.60 with automatic classification into Good ($\ge 75\%$), Warning ($60\% - 74.9\%$), and Critical Defaulter ($< 60\%$).
- **Storage Tier**: Ultra-fast SQLite in Write-Ahead Logging (WAL) mode with cloud Supabase synchronization.

---

### 2. 🎙️ 3D Voice Assistant & RAG Sequence (`voice-sequence.html`)

```
Student             Avatar UI           Flask API           RAG Engine         OpenRouter LLM       ElevenLabs TTS
   │                    │                   │                   │                    │                   │
   │── "Hey Campus" ───►│                   │                   │                    │                   │
   │                    │── POST /chat ────►│                   │                    │                   │
   │                    │                   │── Query Context ─►│                    │                   │
   │                    │                   │◄─ VPCSC Chunks ───│                    │                   │
   │                    │                   │── Augmented Prompt ───────────────────►│                   │
   │                    │                   │◄─ Grounded Answer ─────────────────────│                   │
   │                    │                   │── Synthesize Speech ──────────────────────────────────────►│
   │                    │                   │◄─ MP3 Stream + Viseme Timestamps ──────────────────────────│
   │                    │◄─ Return Data ────│                   │                    │                   │
   │◄─ 3D Lip-Sync ─────│                   │                   │                    │                   │
```

- Zero desynchronization between speech audio and 3D facial morph targets powered by `TalkingHead.js`.
- Sub-second round-trip latency through ElevenLabs Flash v2.5 and streaming JSON responses.

---

### 3. 📋 SPPU 75% Attendance & Defaulter Engine (`attendance-workflow.html`)

```
[HOD Portal: CSV Upload]
           │
           ▼
     [CSV Parser]
           │
           ▼
  [SPPU 75% Calculator]
           │
     ┌─────┴─────────────────────────┐
     ▼                               ▼
[>= 75% Good Standing]     [< 60% Critical Defaulter]
     │                               │
     ▼                               ▼
[Exam Hall Ticket Approved]  [Exam Hall Ticket Withheld]
     │                               │
     ▼                               ▼
[Academic Records Store]     [Automated Guardian SMS / Notice]
```

---

## 🚀 How to Deploy This Repository Live (GitHub Pages)

### Option 1: Automatic 1-Click Deployment (Recommended)

1. Push this repository to GitHub under your account:
   ```bash
   git remote add origin https://github.com/Dhanaji005/CampusMind-AI-Architecture.git
   git branch -M main
   git push -u origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** → **Pages**
   - Under **Build and deployment** → **Source**, select **GitHub Actions**
3. The included workflow (`.github/workflows/deploy.yml`) will automatically trigger, build, and deploy your live site to:
   ```
   https://<your-username>.github.io/CampusMind-AI-Architecture/
   ```

### Option 2: Run Locally in Any Browser

No server or database setup required. Just double-click or run:
```bash
start index.html
# or open portal
start portal.html
```

---

## 🛠️ Rebuilding or Modifying Diagrams with Archify

This project uses the official **Archify agent skill** (`tt-a1i/archify`):

```bash
# 1. Run the build script to recompile all diagrams
npm run build

# 2. Or validate any diagram specification directly with Archify CLI:
node path/to/archify.mjs validate architecture diagrams/campusmind.architecture.json --quality showcase --json
```

All diagram specs adhere to Archify's strict **Showcase Quality Profile** (9/9 automated artifact checks passing with 0 errors and 0 warnings).

---

## 🔗 Related Repositories

- **Main Application**: [Dhanaji005/CampusMind-AI](https://github.com/Dhanaji005/CampusMind-AI)
- **Archify Tooling**: [tt-a1i/archify](https://github.com/tt-a1i/archify)

---

## 📜 License

This architecture documentation and showcase is licensed under the [MIT License](LICENSE).
