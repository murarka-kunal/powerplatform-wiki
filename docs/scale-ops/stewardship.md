---
title: Stewardship
description: Ownership, accountability, and governance roles for Microsoft Power Platform at enterprise scale.
tags:
  - scale-ops
  - stewardship
  - governance
  - roles
---

# S — Stewardship & Ownership

*Who owns, decides, and is accountable*

Platforms can struggle when ownership remains implicit rather than explicit.

Stewardship establishes:

- Clear ownership of platforms, environments, and solutions
- Explicit decision rights
- Defined escalation paths for exceptions and disputes

This is where RACI lives—not as documentation in a drawer, but as an operational backbone that enables decisions to move predictably. When stewardship is clear, governance conversations progress rather than stall.

---

## Power Platform Implementation

Power Platform provides a tiered role model that directly supports stewardship—but it only works if roles are assigned intentionally, not by default.

### Role Structure

| Role | Power Platform Equivalent | Responsibility |
|------|--------------------------|----------------|
| Platform Owner | Power Platform Administrator (tenant-level) | Tenant-wide policy, licensing, environment strategy |
| Environment Owner | Environment Admin | Environment-level decisions, DLP exceptions |
| Solution Owner | System Administrator (per environment) | Solution health, promotion approvals |
| Maker / Builder | Environment Maker | Solution development within guardrails |

### Tooling That Enables Stewardship

- **Power Platform Admin Center** — Central hub for environment inventory, role assignments, and tenant settings. Every environment should have a named owner recorded here.
- **CoE Starter Kit (Admin - Apps & Flows components)** — Provides an inventory of all environments, apps, flows, and connectors with ownership metadata. The *Admin | Apps* and *Admin | Flows* apps surface who built what and who is responsible for it.
- **CoE Starter Kit — Power BI Dashboard** — Gives the platform owner a single-pane view of adoption, ownership gaps, and inactive resources across the tenant.
- **Microsoft Entra ID (Azure AD) Security Groups** — Use security groups to manage Environment Maker, Environment Admin, and System Administrator access at scale. Avoid direct user assignments where possible.
- **Power Platform Centre of Excellence (CoE) governance model** — Formalise the CoE as the governing body with defined escalation paths. Document which decisions sit with the CoE versus individual environment owners versus the tenant admin.

---

## What Implicit Ownership Looks Like

Warning signs that stewardship is missing:

- Environments provisioned without a named owner
- The Default Environment used for production workloads
- Apps built by users who have since left the organisation
- Flows running under personal (non-service) accounts

The CoE Starter Kit's orphaned resource reports surface all of these.

---

## Getting Started

1. Define your RACI — identify the Platform Owner, Environment Admins, and Solution Owners
2. Assign named owners to every environment in the Admin Center
3. Deploy the CoE Starter Kit core components to surface ownership gaps
4. Establish a policy that no environment is created without a named owner and business justification
