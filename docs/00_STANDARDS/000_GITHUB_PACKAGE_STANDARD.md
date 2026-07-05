# GitHub Package Standard

**Document ID:** STD-20260705-000A

**Version:** 1.1

**Status:** Approved

**Repository:** AHI

**Path:** docs/00_STANDARDS/000_GITHUB_PACKAGE_STANDARD.md

---

# Purpose

This document defines the standard output format that every AI participating in the AHI ecosystem shall follow.

The objective is to transform every approved discussion into reusable GitHub assets.

GitHub is the Source of Truth.

---

# Standard Output

Every implementation response shall contain exactly one GitHub Package.

A GitHub Package shall contain:

1. Repository

2. Folder

3. File

4. Document ID

5. Commit Message

6. One complete Markdown document

7. DONE Template

---

# One Package Rule

One response

↓

One GitHub Package

↓

One Markdown

↓

One Commit

↓

One DONE

---

# Update Rule

When a document already exists,

the Assistant shall generate an UPDATE package,

instead of creating another document.

The UPDATE package shall always regenerate the complete document.

Partial updates, patches or manual merge instructions are not allowed.

---

# Markdown Rule

The Markdown content shall not be interrupted.

Users should be able to copy the complete document with one action.

Official GitHub documents shall never be split into multiple independent Markdown fragments.

---

# Large Document Rule

If a document exceeds the maximum response size supported by the current AI platform, the Assistant shall generate the complete document as a downloadable Markdown (*.md*) file.

The Assistant shall never require the user to manually merge multiple responses.

The official GitHub document shall always remain a single complete file.

---

# Single File Principle

Every official GitHub document shall exist as one complete file.

The Assistant shall always regenerate the complete document instead of asking the user to insert or replace individual sections.

---

# GitHub Workflow

The standard GitHub workflow is:

1. Generate one complete document.
2. Copy or download the complete document.
3. Replace the existing GitHub file.
4. Commit the changes.
5. Return to the AI session.
6. Reply with the DONE command.

---

# User Experience Principle

The AI shall always minimize user effort.

Whenever multiple implementation methods are possible, the Assistant shall choose the method requiring the fewest user actions while minimizing mistakes and cognitive load.

The AI shall adapt to the user.

The user shall never be required to adapt to the AI.

---

# Platform Independence

This standard applies to every AI platform participating in the AHI ecosystem.

Examples include:

- ChatGPT
- Claude
- Gemini
- Grok
- Future AHI applications

Platform limitations shall never change the official document structure.

Only the delivery method may change.

---

# DONE Rule

After GitHub Commit,

the user replies only:

DONE:

<Document ID>

The Assistant shall continue automatically.

---

# AI Responsibility

PM (Project Manager)

Defines priorities and approves implementation direction.

P (Professor)

Provides expertise, architecture and technical review.

L (Team Leader)

Reviews repository implementation and ensures repository consistency.

S (Secretary)

Standardizes documentation, meeting records and document quality.

A (Assistant)

Integrates all approved opinions and generates complete GitHub Packages.

The Assistant is responsible for minimizing user effort and ensuring every package is ready for direct use.

---

# Guiding Principle

Every discussion shall become a GitHub Package.

Every GitHub Package shall become reusable knowledge.

Every approved GitHub Package shall become part of the long-term knowledge base of the AHI ecosystem.

---

# Future Evolution

Future versions may automatically determine the optimal delivery method according to:

- Document size
- AI platform limitations
- User preferences
- Repository policies
- AHI-Factory capabilities

This optimization shall always remain transparent to the user.
