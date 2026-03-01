---
title: Enablement
description: Training, Centre of Excellence, guardrails, and citizen development programs for Microsoft Power Platform.
tags:
  - scale-ops
  - enablement
  - coe
  - training
  - citizen-development
---

# E — Enablement with Guardrails

*How innovation happens within appropriate boundaries*

Enablement is essential for platform adoption — but can be challenging without clear boundaries.

This capability focuses on:

- Role-based training (makers ≠ operators ≠ admins) and reusable templates
- Clear guidance on what is allowed, restricted, or prohibited
- Feedback loops between makers and platform teams

Ambiguity slows innovation more than guardrails do.

---

## Power Platform Implementation

Power Platform's broad accessibility — hundreds of connectors, AI capabilities, low-code development — makes clear enablement boundaries especially important. The guardrails here are primarily DLP policies and Managed Environments, but the enablement infrastructure is equally critical.

### Role-Based Training Paths

| Persona | Focus Areas | Resources |
|---------|-------------|-----------|
| Citizen Developer / Maker | Power Apps canvas basics, Power Automate fundamentals, data handling policies, what requires IT involvement | Microsoft Learn paths, internal onboarding app |
| Pro Developer | Solution architecture, ALM practices, custom connectors, PCF controls, Dataverse design | Microsoft Learn, internal CoE documentation |
| Environment Admin | Admin Center management, DLP configuration, user management, Pipelines administration | Admin-focused Learn paths, CoE Starter Kit docs |
| CoE / Platform Admin | Tenant governance, Managed Environments, CoE Starter Kit operation, licensing management | Power Platform governance documentation |

### Guardrail Mechanisms

- **DLP Policies** — The primary technical guardrail. Classify connectors into *Business*, *Non-Business*, and *Blocked* buckets. Connectors in different buckets cannot be used in the same app or flow. Publish your DLP policy rationale alongside the policy itself so makers understand why constraints exist, not just what they are.
- **Managed Environments — Sharing limits** — Restrict canvas app sharing to security groups (rather than the entire organisation) to prevent ungoverned viral spread of production applications.
- **Managed Environments — Solution checker enforcement** — Automatically block or warn on solution imports that fail quality checks. This enforces standards without requiring manual review of every solution.
- **Managed Environments — Maker welcome content** — Configure custom welcome messages for each environment that communicate the environment's purpose, applicable policies, and who to contact for help. This is underused and highly effective.
- **Reusable solution templates** — Publish approved solution templates (e.g., a starter canvas app with your organisation's branding, authentication pattern, and error handling) in a shared development environment or internal gallery. Reduce the distance between "starting from scratch" and "starting correctly."
- **Custom connector governance** — Define a formal process for requesting and approving custom connectors. Custom connectors bypass standard DLP classification and require explicit governance treatment.
- **Power Platform for Admins app** — Part of the CoE Starter Kit; allows makers to submit requests (new environments, DLP exceptions, connector approvals) through a structured process rather than ad-hoc email or Teams messages.

### Feedback Loops

- Establish a regular (monthly or quarterly) maker community call or newsletter where the CoE shares updates, policy changes, and highlights good examples
- Use the CoE Starter Kit's *Innovation Backlog* component to capture maker ideas and feature requests, creating a visible channel from the maker community to the platform team
- Track DLP exception requests as a signal: repeated requests for the same connector indicate a policy that may need recalibration

---

## Getting Started

1. Create role-based onboarding paths for makers, admins, and pro developers
2. Configure Managed Environments maker welcome content for every environment
3. Publish your DLP policy rationale — not just the policy itself
4. Build or adopt a starter solution template so makers begin from a correct baseline
5. Establish a structured process for exception requests (environment, DLP, connector)
