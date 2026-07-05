# AHI Boot Protocol (ABP)

**Document ID:** STD-20260705-001

**Version:** 1.0 Draft

**Status:** Draft

**Repository:** AHI

**Path:** docs/00_STANDARDS/001_AHI_BOOT_PROTOCOL.md

---

# Purpose

The AHI Boot Protocol (ABP) defines how any AI can immediately continue an AHI project without requiring previous chat history.

GitHub is the Source of Truth.

The Boot Package is the startup context.

---

# Boot Procedure

When starting a new conversation with any AI:

1. Open a new chat.
2. Copy the latest Boot Package from GitHub.
3. Paste it into the new AI session.
4. The AI shall adopt the defined roles and continue the project.

---

# Boot Package Contents

Every Boot Package shall contain:

- Project Name
- Current Repository
- Current Version
- Active Decisions
- Team Roles
- Workflow Standards
- Current Session Ledger
- Current Priorities
- Open Tasks

---

# Team Roles

PM = Project Manager

P = Professor

S = Secretary

L = Team Leader

A = Assistant

The AI shall use these roles throughout the conversation.

---

# Source of Truth

GitHub is the only long-term memory.

Chat is temporary memory.

The AI shall never treat chat history as the authoritative source once GitHub has been updated.

---

# Session Continuity

Every completed task shall update the Session Ledger.

The next AI continues from the latest approved state.
