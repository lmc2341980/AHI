# AHI AI Index Standard

**Document ID:** STD-20260704-002

**Version:** 1.0

**Status:** Approved

**Repository:** AHI

**Path:** docs/00_STANDARDS/002_AI_INDEX_STANDARD.md

**Author:** AHI Secretary

**Architecture Authority:** Lê Minh Công (Founder)

**Approver:** Lê Minh Công (Founder)

**Created:** 2026-07-04

**Last Updated:** 2026-07-04

**Lifecycle:** Standard

**Related Documents:**
- STD-20260704-001 (Document Metadata Standard)

---

# Purpose

This document defines the standard AI Index section used by every document within the AHI ecosystem.

The AI Index enables humans, AI systems, and future AHI systems to discover, understand, classify and retrieve documents efficiently without parsing the entire document.

The AI Index serves as the semantic cache (L0) of every document.

---

# Principle

Every official AHI document SHALL contain an AI Index immediately after the Document Metadata section.

The AI Index SHALL be machine-readable, human-readable and stable across repositories.

---

# Standard Structure

```markdown
---
AI INDEX

Domain:

Category:

Entities:

Keywords:

Summary:

Related Repositories:

Dependencies:

Priority:

Maturity:

Audience:

Security Level:

Search Tags:

---
```

---

# Field Definitions

## Domain

The major knowledge domain.

Examples:

- Governance
- Architecture
- Memory
- Language
- Knowledge
- Economy
- Robotics
- Energy

---

## Category

The document category.

Examples:

- Standard
- Constitution
- Rule
- Decision
- Help
- Architecture
- Whitepaper
- API
- Design
- Workflow

---

## Entities

Core concepts defined or discussed in the document.

Examples:

- AHI
- Digital Successor
- HDSM
- AHI Body
- Governance

---

## Keywords

Important searchable words.

Keywords should remain concise and technology-independent whenever possible.

---

## Summary

A short description (maximum 100 words) explaining the document.

This summary is intended primarily for AI systems performing semantic retrieval.

---

## Related Repositories

GitHub repositories closely associated with this document.

Example:

- AHI
- AHI-Core
- AHI-Studio
- AHI-Lang

---

## Dependencies

Other documents that should be understood before reading this one.

---

## Priority

Allowed values:

- Critical
- High
- Medium
- Low

---

## Maturity

Allowed values:

- Concept
- Draft
- Pilot
- Stable
- Standard
- Deprecated

---

## Audience

Primary readers.

Examples:

- Founder
- Developer
- Researcher
- AI
- AHI
- Organization
- Government

Multiple values are allowed.

---

## Security Level

Allowed values:

- Public
- Internal
- Confidential
- Restricted

---

## Search Tags

Short lowercase tags used for semantic search.

Example:

governance

constitution

memory

digital-successor

---

# AI Processing Principle

An AI SHOULD first analyze the AI Index before reading the document body.

If the AI Index satisfies the search intent, the AI MAY postpone loading the full document.

This reduces computation, improves retrieval speed and enables scalable knowledge management.

---

# Future Compatibility

The AI Index SHALL support:

- GitHub repositories
- Local repositories
- Knowledge Graphs
- Hybrid Search
- Vector Databases
- Future AHI Memory Systems

without requiring structural modifications.

---

# Mandatory Rule

Every new AHI document SHALL include an AI Index.

Repositories without AI Index support are considered incomplete for future AHI compatibility.
