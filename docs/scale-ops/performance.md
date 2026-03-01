---
title: Performance
description: Capacity planning, cost management, and performance optimisation for Microsoft Power Platform.
tags:
  - scale-ops
  - performance
  - capacity
  - cost
  - optimisation
---

# P — Performance & Capacity

*How platforms remain healthy as they grow*

Power Platform's licensing and capacity model is nuanced, and operational management of cost and capacity requires deliberate attention. The good news: the Admin Center and CoE tooling provide most of what you need if configured correctly.

---

## Power Platform Implementation

### Capacity and Cost Management

- **Power Platform Admin Center — Capacity page** — Displays Dataverse database, file, and log storage consumption per environment. Set up storage alerts before environments approach limits; storage overages incur additional cost and can block solution imports.
- **Licensing inventory** — Maintain a current inventory of Power Apps per-app, per-user, and Microsoft 365-included licences. The CoE Starter Kit's licence management components surface which users have which licences and where premium licences are in use.
- **Pay-as-you-go (PAYG) metering** — For environments with unpredictable usage, consider linking environments to an Azure subscription for PAYG licensing. This provides cost transparency and prevents licence constraint from blocking legitimate usage.
- **AI Builder credits** — Track AI Builder credit consumption via the Admin Center. AI Builder is credit-based and can be depleted unexpectedly if flows using AI models are widely shared.
- **Dataverse for Teams vs. full Dataverse** — Be deliberate about which environments use full Dataverse vs. Dataverse for Teams. The latter has capacity limits and feature restrictions that can create migration costs later.

### Performance and Forecasting

- Use Admin Center analytics and Application Insights data to establish performance baselines for critical applications (load time, flow execution duration, API call volumes)
- Model capacity growth: as adoption increases, storage and API call volumes grow. Build this into your annual capacity planning cycle
- For high-volume flows (thousands of runs per day), monitor Power Automate throughput against your licence tier's daily limits. Cloud flows have per-user and per-flow run limits that can cause throttling at scale

---

## Key Signals to Monitor

| Signal | Tool | Action Threshold |
|--------|------|-----------------|
| Dataverse storage | Admin Center — Capacity | Alert at 80% of allocated storage |
| API call volumes | Admin Center — Analytics | Review when approaching daily limits |
| Flow run failures | Flow run history / App Insights | Alert on failure rate > defined threshold |
| AI Builder credits | Admin Center | Alert at 70% of monthly allocation |
| Inactive premium licences | CoE Starter Kit | Monthly review and reallocation |

---

## Getting Started

1. Baseline storage consumption per environment in the Admin Center
2. Deploy the CoE Starter Kit licence management components for visibility of licence usage
3. Enable Application Insights for production apps to capture performance metrics
4. Set up capacity alerts in the Admin Center before environments approach limits
5. Include capacity forecasting in your annual planning cycle
