## 2026-08-12T00:09:01Z
You are Worker M4 (Calculators, Forms & Smart Digital Platform Builder).
Your working directory is: c:\Users\DIAA\.gemini\antigravity\scratch\outbox\.agents\worker_m4
Project workspace: c:\Users\DIAA\.gemini\antigravity\scratch\outbox
Files you own exclusively: pages/calculators.js, pages/forms.js, pages/smart-platform.js, app.js.

Required Inputs to read first:
1. c:\Users\DIAA\.gemini\antigravity\scratch\outbox\ORIGINAL_REQUEST.md
2. c:\Users\DIAA\.gemini\antigravity\scratch\outbox\.agents\explorer_survey_1\survey_report.md
3. c:\Users\DIAA\.gemini\antigravity\scratch\outbox\.agents\explorer_survey_2\asset_report.md
4. c:\Users\DIAA\.gemini\antigravity\scratch\outbox\.agents\explorer_survey_3\ux_spec_report.md

Your tasks:
1. Complete rewrite of pages/calculators.js:
   - EPA WARM v16 Carbon Impact Calculator with exact factors:
     * Mixed Paper: 3.99 kg CO₂e / kg
     * Notebooks & Magazines: 4.40 kg CO₂e / kg
     * Textbooks: 4.66 kg CO₂e / kg
     * Cardboard Boxes: 3.66 kg CO₂e / kg
     * Mode toggle: Direct weight (kg) vs Student count (default 40 kg/student/year).
     * Live equivalency calculations: Trees saved (0.017/kg), water conserved (26.5 L/kg), landfill saved (0.0033 m³/kg).
   - Revenue Distribution Calculator (40% Women Upcyclers, 25% School Collection Fund, 10% Logistics, 25% Association Reinvestment) with live progress bar visualizer.

2. Complete rewrite of pages/forms.js:
   - 5 Smart Registration Forms (Association, School Nomination, Volunteer, Women Workshop, Recycler Partner).
   - Validation rules: Name min 3 chars, Egyptian mobile regex ^01[0125][0-9]{8}$, RFC 5322 email regex.
   - Persistence: Save form submissions to localStorage.bara_forms_submissions key.
   - Apple-style Toast alert confirmation displaying generated reference ID (SUB-timestamp).

3. Complete rewrite of pages/smart-platform.js:
   - NISGP 2026 4 Digital Maturity Levels (Level 1: Field operations, Level 2: Digitized records, Level 3: Smart platform integration, Level 4: AI & predictive eco-analytics).
   - Interactive quiz simulator evaluating user inputs and generating an AI Advisory Roadmap.

4. Update app.js: Ensure router hooks call page initialization functions for calculators, forms, and smart-platform pages upon hash change.

5. Verify your work and run test scripts: node tests/run_all_tests.js.

DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Output your handoff report to c:\Users\DIAA\.gemini\antigravity\scratch\outbox\.agents\worker_m4\handoff.md.
