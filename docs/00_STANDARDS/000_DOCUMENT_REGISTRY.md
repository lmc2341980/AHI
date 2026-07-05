# AHI Document Registry

**Document ID:** STD-20260705-000

**Version:** 1.0 Draft

**Status:** Draft

**Repository:** AHI

**Path:** docs/00_STANDARDS/000_DOCUMENT_REGISTRY.md

**Author:** AHI Secretary

**Architecture Authority:** Lê Minh Công (Founder)

**Created:** 2026-07-05

**Last Updated:** 2026-07-05

---

# Purpose

This document defines the master registry for all official documents within the AHI ecosystem.

The Document Registry acts as the entry point for humans, AI systems and future AHI instances to discover, validate and navigate all standardized documentation.

GitHub remains the Source of Truth.

The Document Registry is the Source of Navigation.

---

# Objectives

The registry ensures that:

- Every official document has a unique identifier.
- No duplicated documents exist.
- Every document has a clear lifecycle.
- AI systems can automatically locate documents.
- Humans can easily search and maintain documentation.

---

# Document Lifecycle

Every document shall progress through the following lifecycle:

Idea

↓

Meeting Minutes

↓

Draft

↓

Decision

↓

Standard / Architecture

↓

Implementation

↓

Product

↓

Archive

---

# Registry Fields

Every registered document shall contain the following information.

| Field | Description |
|--------|-------------|
| Document ID | Unique identifier |
| Title | Official document title |
| Repository | GitHub repository |
| Folder | Document folder |
| File | File name |
| Version | Current version |
| Status | Draft / Active / Deprecated / Archived |
| Owner | Responsible Team Leader |
| Last Updated | Last modification date |
| Related Documents | Cross references |

---

# Status Definitions

Draft

Work in progress.

---

Active

Official document approved for use.

---

Deprecated

Replaced by another document.

---

Archived

Historical reference only.

---

# Team Responsibility

Each major folder shall have one Team Leader responsible for maintaining document quality.

Example:

| Folder | Team Leader |
|----------|-------------|
| 00_STANDARDS | Standards Team |
| 10_ARCHITECTURE | Architecture Team |
| 20_ENTITIES | Entity Team |
| 30_GOVERNANCE | Governance Team |
| 40_APPLICATIONS | Application Team |
| 98_MEETING_MINUTES | Secretary Team |
| 99_DRAFTS | Assistant Team |

---

# Naming Convention

Document IDs shall follow:

TYPE-YYYYMMDD-NNN

Examples:

DOC-20260704-000

STD-20260705-000

ARCH-20260705-020

RULE-20260705-001

DECISION-20260705-001

---

# Registry Maintenance

The AHI Secretary is responsible for updating the registry whenever:

- A new document is created.
- A document changes status.
- A document changes version.
- A document is archived.

---

# Guiding Principle

If a document is not registered, it does not officially exist within the AHI ecosystem.

The Document Registry is the authoritative catalogue of all official AHI documentation.
