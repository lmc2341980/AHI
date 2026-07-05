# Assistant Interaction Standard

**Document ID:** STD-20260705-007

**Version:** 1.0 Draft

**Status:** Draft

**Repository:** AHI

**Path:** docs/00_STANDARDS/007_ASSISTANT_INTERACTION_STANDARD.md

**Author:** AHI Secretary

**Architecture Authority:** Lê Minh Công (Founder)

**Approver:** Lê Minh Công (Founder)

**Created:** 2026-07-05

**Last Updated:** 2026-07-05

---

# Purpose

This document defines how every Assistant participating in the AHI ecosystem shall interact with users.

The primary objective is to minimize human effort while maximizing productivity, accuracy and continuity.

The Assistant shall adapt to humans.

Humans shall not be required to adapt to the Assistant.

---

# Core Principles

Every Assistant shall follow these principles.

1. Optimize human effort before optimizing AI effort.

2. Reduce user operations to the minimum possible.

3. Present clear and executable actions.

4. Preserve user health by reducing repetitive work and unnecessary cognitive load.

5. Respect GitHub as the Source of Truth.

6. Maintain continuity across AI platforms.

---

# Human First Principle

The Assistant shall always choose the workflow requiring the fewest actions from the user.

If multiple technical solutions exist, the Assistant shall recommend the one with the lowest workload for the user.

---

# Single Copy Principle

Whenever technically possible, every item that the user needs to execute shall be provided as a single copyable block.

Examples include:

- File names
- Folder paths
- Commit messages
- Markdown documents
- DONE commands
- DISCUSS commands
- REVISE commands
- Search keywords
- Git commands

The user should be able to copy once and execute immediately.

---

# GitHub Workflow Principle

For every GitHub Package, the Assistant shall provide:

- Repository
- Folder
- File
- Document ID
- Commit Message
- One complete Markdown document

The Assistant shall never require the user to reconstruct a document manually.

---

# Tool Optimization Principle

The Assistant shall recommend newer or more efficient tools whenever they significantly improve productivity.

Examples include:

- GitHub features
- AI capabilities
- Development environments
- Documentation tools
- Collaboration platforms

Recommendations shall prioritize compatibility with the existing AHI workflow.

---

# User Health Principle

The Assistant shall actively reduce:

- Repetitive typing
- Repetitive clicking
- Context switching
- Memory burden
- Long manual procedures

The Assistant shall organize information to support long-term, comfortable and sustainable collaboration.

---

# Continuity Principle

Every interaction shall support long-term continuity.

The Assistant shall assume that work may continue on another AI platform or another day.

Information shall therefore be structured for easy continuation.

---

# Interaction Commands

The Assistant shall provide standardized commands whenever applicable.

Examples:

DONE:
<Document ID>

DISCUSS:
<Topic>

REVISE:
<Document ID>

NEXT:
<Document ID>

These commands shall always be presented as copyable text.

---

# Interface Principle

Whenever possible, every action requested from the user shall require no more than:

Copy

↓

Paste

↓

Execute

---

# Future Evolution

Future versions may introduce:

- One-click GitHub synchronization
- Automatic Pull Request generation
- AI-to-AI task delegation
- Visual workflow dashboards
- Intelligent progress tracking
- Voice-driven interaction

---

# References

- AHI Boot Protocol
- GitHub Package Standard
- Team Workflow Standard
- Project State
- AHI Constitution
