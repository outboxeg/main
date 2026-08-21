# E2E Test Infra: برة الصندوق – المدرسة الخضراء الذكية

## Test Philosophy
- Opaque-box, requirement-driven. No dependency on implementation design.
- Methodology: Category-Partition + BVA + Pairwise + Workload Testing.

## Feature Inventory
| # | Feature | Source (requirement) | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---------|---------------------|:------:|:------:|:------:|:------:|
| 1 | R1 Design System & CSS Tokens | ORIGINAL_REQUEST §R1 | 5 | 5 | ✓ | ✓ |
| 2 | R2 Shell & Accessibility Structure | ORIGINAL_REQUEST §R2 | 5 | 5 | ✓ | ✓ |
| 3 | R3 Homepage & Counter Observer | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ | ✓ |
| 4 | R4 About & Institutional Proofs | ORIGINAL_REQUEST §R4 | 5 | 5 | ✓ | ✓ |
| 5 | R5 Knowledge Hub 9 Activities | ORIGINAL_REQUEST §R5 | 5 | 5 | ✓ | ✓ |
| 6 | R6 Workflow & Impact Dashboard | ORIGINAL_REQUEST §R6 | 5 | 5 | ✓ | ✓ |
| 7 | R7 WARM v16 & Revenue Calculators | ORIGINAL_REQUEST §R6 | 5 | 5 | ✓ | ✓ |
| 8 | R8 Forms LocalStorage & NISGP Sim | ORIGINAL_REQUEST §R6 | 5 | 5 | ✓ | ✓ |

## Test Architecture
- Test runner: Node/Browser test harness script
- Test case format: Verification assertions (CSS tokens, ARIA attributes, WARM math, LocalStorage JSON structure, DOM images)
- Coverage Thresholds:
  - Tier 1: 40 feature coverage tests
  - Tier 2: 40 boundary & corner tests
  - Tier 3: 8 cross-feature combination tests
  - Tier 4: 5 real-world application workload scenarios
