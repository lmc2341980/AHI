# AHI Document Standard (DOCS)

**Document ID:** DOC-20260704-000

**Status:** Draft v0.1

**Repository Owner:** AHI

**Layer:** L0

**Version:** 0.1

**Last Updated:** 2026-07-04

---

# 1. Purpose

This document defines the standard format for all Markdown documents in the AHI ecosystem.

Every document created inside AHI MUST comply with this standard.

This document is the highest priority specification for documentation.

---

# 2. Naming Convention

Every Markdown file shall follow:

```
NNN_DOCUMENT_NAME.md
```

Example

```
000_DOCUMENT_STANDARD.md

005_REPOSITORY_INFORMATION_ARCHITECTURE.md

010_ENTITY_MODEL.md

020_MULTI_AI_ARCHITECTURE.md
```

---

# 3. Document Header

Every document MUST begin with:

```markdown
# Title

Document ID:

Status:

Repository Owner:

Layer:

Version:

Last Updated:
```

---

# 4. Document ID Standard

Every document receives one unique identifier.

Format

```
TYPE-YYYYMMDD-NNN
```

Examples

```
DOC-20260704-000

ARCH-20260704-001

GUIDE-20260704-001

DEC-20260704-001

TASK-20260704-001

IDEA-20260704-001

CHAT-20260704-001
```

Document IDs are permanent.

---

# 5. Status

Allowed values

```
Draft

Review

Approved

Released

Archived
```

The status is managed by AHI, not GitHub.

---

# 6. Version

Examples

```
0.1

0.2

0.5

1.0

1.1

2.0
```

Major version

Breaking changes.

Minor version

Additional content.

---

# 7. Repository Owner

Every document has exactly one owner repository.

Example

```
AHI

AHI-Core

AHI-Studio

AHI-Governance
```

Other repositories reference the document instead of duplicating it.

---

# 8. Layer

AHI organizes information into cache layers.

```
L0

L1

L2

...

Ln
```

L0 contains governance and core specifications.

---

# 9. Commit Message Standard

Every Commit Message shall begin with the repository name.

Examples

```
AHI:

AHI-Core:

AHI-Studio:

MEW:
```

Examples

```
AHI: Define Document Standard

AHI: Add Multi-AI Architecture

AHI-Studio: Create Prompt Registry

MEW: Add Translation Workflow
```

---

# 10. Language

Official governance documents are written in English.

Additional translated versions may be created later.

---

# 11. Source of Truth

GitHub is the official long-term memory of AHI.

Chats are temporary working memory.

Only committed documents become official knowledge.

---

# 12. AI Collaboration

AI systems assist in creating and maintaining documents.

Final approval always belongs to the human owner.

---

# 13. Change Management

Any modification to this document requires:

- Review
- Approval
- Version update
- Commit to GitHub

---

# 14. Future Extension

This document will evolve together with the AHI ecosystem.

All future documentation standards must remain compatible with this specification.
