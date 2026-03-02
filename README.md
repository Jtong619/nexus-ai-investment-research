# Nexus AI Investment Research System
Nexus is an institutional-grade AI investment research platform that automates the collection, validation, analysis, and delivery of equity research across the full S&P 500 universe. Built on a custom 4-agent architecture, the system ingests financial data from multiple sources, normalises it to standard calendar quarters using day-weighted proration, applies a rigorous 35-check data quality audit, and delivers actionable investment analysis through a Telegram-based research assistant — all at approximately 0.4% the cost of a Bloomberg Terminal.
## Key Metrics
| Metric | Value |
|---|---|
| Companies tracked | 504 (full S&P 500 via iShares IVV ETF) |
| Calendarized financial records | 176,045 |
| Raw financial data points | 174,977 |
| Calendarized estimate records | 40,208 |
| Automated quality checks | 35 (3-layer audit framework) |
| Monthly operating cost | ~$60 |
## Architecture
AGENT 1 (Data Collector) AGENT 2 (Analyst)

5 sub-collectors/ticker - Nexus Score (0-100)
FMP API + web search - DCF fair value models
Full citation tracking - Multi-factor trade setup
| ^
v |
[ PostgreSQL ]------>---------+-------+
^ |
| |
AGENT 3 (Scheduler) AGENT 4 (Research Intelligence)
Weekly full refresh - 35-check data quality audit
Daily incremental update - LLM-assisted anomaly review
Telegram broadcasting - Institutional tone enforcement
## Technology Stack
| Component | Technology |
|---|---|
| Frontend | React 18, TypeScript, Tailwind CSS, shadcn/ui |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL with Drizzle ORM |
| AI / LLM | OpenAI GPT-5-mini |
| Vector Search | pgvector (HNSW, cosine similarity) |
| Messaging | Telegram Bot API |
| Data Sources | FMP API, iShares IVV ETF, DuckDuckGo/Bing |
## How to Explore
- **Full architecture document**: See [`docs/Nexus-Architecture-Data-Quality-Framework.pdf`](docs/Nexus-Architecture-Data-Quality-Framework.pdf) for the complete system specification including all 35 audit checks, calendarization methodology, agent responsibilities, and interview preparation materials.
- **Interview pack**: See [`docs/Nexus-Interview-Pack.pdf`](docs/Nexus-Interview-Pack.pdf) for sample answers, cheat sheet, and practice script.
- **Demo screenshots**: See the [`screenshots/`](screenshots/) folder for live Telegram interactions showing analysis output, data quality reports, and system status.
## Status
MVP phase — all core functionality live and running daily on Replit. Production migration (LangGraph orchestration + enterprise data platform) planned as next phase.
---
*Built March 2026*
