---
title: Automation
description: Pipeline automation, change flow, and policy enforcement for Microsoft Power Platform.
tags:
  - scale-ops
  - automation
  - pipelines
  - alm
  - devops
---

# A — Automation & Change Flow

*How changes move safely and quickly*

Speed without structure can create fragility over time.

Automation and change flow ensure:

- Predictable promotion across environments
- Risk-appropriate approval gates
- Traceability, rollback, and auditability

This is where engineering discipline meets governance requirements—enabling teams to move quickly while maintaining auditable control.

---

## Power Platform Implementation

Power Platform offers two complementary paths for change flow automation, and mature organisations typically use both depending on solution complexity.

### Path 1: Power Platform Pipelines (In-Product ALM)

Pipelines is the native, low-configuration ALM capability built directly into Power Platform. It is the right starting point for most teams.

- Configure pipelines in a dedicated *host environment* that manages deployment across development, test, and production environments
- Define deployment stages with optional pre- and post-deployment approvals (via Power Automate)
- All deployments are logged with who triggered them, when, and what solution version was deployed
- Solutions are the unit of deployment—structured, version-controlled packages of apps, flows, tables, and configuration
- Pipelines support both maker-initiated deployments (with approvals) and automated deployments triggered from CI/CD

### Path 2: Azure DevOps / GitHub with Power Platform Build Tools

For complex solutions, regulated environments, or teams with existing DevOps maturity, the Power Platform Build Tools for Azure DevOps (and equivalent GitHub Actions) provide full pipeline control.

- **Power Platform Build Tools** — Microsoft-maintained tasks for export, import, solution check, publish, and environment management
- **Solution versioning** — Export solutions as unpacked source files into Git for version history, branching strategies, and pull request reviews
- **Automated solution checker** — Integrate the Power Apps Checker as a pipeline gate; block deployments that fail above a defined severity threshold
- **Environment variables** — Use environment variables within solutions to manage configuration differences (API endpoints, SharePoint site IDs, etc.) between Dev, Test, and Production without modifying solution content
- **Connection references** — Decouple connector credentials from solution logic so connections can be updated per environment without re-importing the solution

---

## Approval Gates

| Deployment Stage | Recommended Gate | Tooling |
|-----------------|-----------------|---------|
| Dev → Test | Solution Checker pass | Automated (Build Tools / Pipelines) |
| Test → Production | Manual approval + UAT sign-off | Power Automate approval / DevOps gate |
| Hotfix to Production | Emergency change approval | Documented exception process |

---

## Rollback

Pipelines and DevOps both support rollback by redeploying a prior solution version. Ensure previous solution versions are retained in source control or the pipeline host environment.

---

## Getting Started

1. Adopt solutions as the unit of deployment — avoid unmanaged changes directly in production
2. Start with Power Platform Pipelines for a low-overhead, in-product ALM setup
3. Add Azure DevOps Build Tools as complexity grows or regulated environments require full auditability
4. Implement Solution Checker as an automated gate before every promotion to Test
5. Use environment variables and connection references to eliminate environment-specific hardcoding
