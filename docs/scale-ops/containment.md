---
title: Containment
description: Environment isolation, tenant boundaries, and risk-based containment for Microsoft Power Platform.
tags:
  - scale-ops
  - containment
  - environments
  - dlp
---

# C — Containment & Environments

*Where workloads live and how risk is isolated*

Not all workloads carry the same risk. Platforms that scale successfully recognise this early.

Containment defines:

- Purpose-driven environment strategies (sandbox, test, production, restricted)
- Risk-based isolation
- Clear boundaries between experimentation and mission-critical workloads

This capability helps prevent blast-radius failures and allows innovation to happen safely, without destabilising production systems.

---

## Power Platform Implementation

Power Platform has a native environment architecture designed for exactly this purpose—but its effectiveness depends entirely on how deliberately it is applied.

### Recommended Environment Strategy

| Environment Type | Power Platform Type | Purpose |
|-----------------|---------------------|---------|
| Personal / Experimentation | Developer | Individual maker exploration; no DLP exceptions; isolated |
| Shared Development | Sandbox | Collaborative build; team-level; solution-based development |
| Test / UAT | Sandbox | Pre-production validation; mirrors production DLP and config |
| Production | Production | Live workloads; restricted maker access; Managed Environments |
| Restricted / Sensitive | Production | High-risk or regulated workloads; tightest DLP; separate admin group |

### Critical Containment Controls

- **Managed Environments** — The single most important containment lever at the tenant level. Enables usage insights, maker onboarding policies, solution checker enforcement, sharing limits, and IP firewall. Apply Managed Environments to all non-developer environments.
- **Data Loss Prevention (DLP) Policies** — Define which connectors can be used together and in which environments. Tier your DLP: permissive in Developer environments, progressively restrictive toward Production. Block premium and custom connectors in the Default Environment.
- **Default Environment strategy** — The Default Environment is open to all licensed users and cannot be deleted. Treat it as a sandbox-only zone: apply a restrictive DLP policy, monitor it closely via CoE tooling, and establish a clear policy that no production workloads run there.
- **Environment routing** — Use Admin Center environment routing to automatically direct new makers to a personal Developer environment rather than the Default Environment, reducing Default Environment sprawl.
- **Dataverse security model** — Within production environments, apply business unit structure, security roles, and column-level security to isolate data access within the environment itself.
- **Azure Virtual Network (VNet) integration** — For regulated workloads, Power Platform supports VNet integration to keep traffic off the public internet and within your network perimeter.

---

## The Blast-Radius Principle

A DLP misconfiguration in a Developer environment is a learning moment. The same misconfiguration in a shared Production environment serving 500 users is an incident.

Containment makes that distinction structural, not accidental.

---

## Getting Started

1. Define your environment strategy before the first production workload goes live
2. Enable Managed Environments on all non-developer environments immediately
3. Apply a restrictive DLP policy to the Default Environment — block premium connectors
4. Enable environment routing to redirect new makers away from the Default Environment
5. Record environment purpose and owner in the Admin Center for every environment
