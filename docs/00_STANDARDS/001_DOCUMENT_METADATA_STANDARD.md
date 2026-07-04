# AHI Document Metadata Standard

**Document ID:** STD-20260704-001

**Version:** 1.0

**Status:** Approved

**Repository:** AHI

**Path:** docs/00_STANDARDS/001_DOCUMENT_METADATA_STANDARD.md

**Author:** AHI Secretary

**Architecture Authority:** Lê Minh Công (Founder)

**Approver:** Lê Minh Công (Founder)

**Created:** 2026-07-04

**Last Updated:** 2026-07-04

**Lifecycle:** Standard

---

# Purpose

This document defines the mandatory metadata header for every Markdown document within the AHI ecosystem.

The objective is to ensure consistency, traceability, governance, and interoperability across all repositories.

---

# Principle

Every Markdown document SHALL begin with a standardized metadata section immediately after the main title.

This metadata enables:

- Human readability.
- AI readability.
- Automatic indexing.
- Version control.
- Governance tracking.
- Future AHI compatibility.

---

# Standard Metadata

Every document SHALL include the following fields.

```markdown
# Document Title

**Document ID:**

**Version:**

**Status:**

**Repository:**

**Path:**

**Author:**

**Architecture Authority:**

**Approver:**

**Created:**

**Last Updated:**

**Lifecycle:**

**Related Documents:**
```

---

# Field Definitions

## Document ID

Globally unique identifier.

Example:

DOC-20260704-001

RULE-20260704-001

CONST-20260704-005

---

## Version

Current document version.

Example:

0.1 Draft

1.0

1.1

2.0

---

## Status

Allowed values:

- Draft
- Review
- Approved
- Deprecated
- Archived

---

## Repository

GitHub repository name.

Example:

AHI

AHI-Core

AHI-Studio

AHI-Lang

---

## Path

Relative path inside the repository.

---

## Author

Creator of the document.

May be:

- Human
- AI
- AHI

---

## Architecture Authority

Entity responsible for architectural governance.

Initially:

Lê Minh Công (Founder)

This authority may change according to the AHI Constitution.

---

## Approver

Person or governing body approving the document.

---

## Created

Original creation date.

ISO format.

YYYY-MM-DD

---

## Last Updated

Latest modification date.

ISO format.

---

## Lifecycle

Current lifecycle stage.

Allowed values:

- Draft
- Review
- Approved
- Deprecated
- Archived

---

## Related Documents

List of connected standards, rules or specifications.

---

# Mandatory Rule

No document shall be considered an official AHI document unless it follows this metadata standard.

---

# Automatic Validation

Future versions of AHI Studio SHALL automatically verify compliance with this standard before allowing commits or publication.

---

# Future Compatibility

This standard applies equally to:

- Humans
- AI Assistants
- AHI Personal
- AHI Organization
- AHI Government
- Future AHI systems

All participants SHALL follow this specification.
