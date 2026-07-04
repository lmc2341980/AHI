# AHI AI Layer

**Document ID:** AI-20260704-000

---

# Purpose

The `ai/` directory contains all machine-readable resources used by AI systems collaborating within the AHI ecosystem.

Unlike the `help/` directory, which is intended for humans, the `ai/` directory is designed for automated processing by AI systems.

---

# Objectives

- Standardize AI collaboration.
- Reduce inconsistencies between AI platforms.
- Enable automatic validation.
- Improve long-term maintainability.
- Preserve knowledge across AI providers.

---

# Directory Structure

```
ai/

    rules/

    validators/

    reviewers/

    prompts/

    templates/
```

---

# Responsibilities

## rules/

Defines mandatory rules that every AI must follow.

---

## validators/

Programs that automatically verify repositories, documents and outputs.

---

## reviewers/

Automated review policies before accepting changes.

---

## prompts/

Standard prompt templates.

---

## templates/

Reusable markdown and code templates.

---

# Multi-AI Philosophy

AHI never depends on a single AI provider.

GitHub is the Source of Truth.

Every AI acts as a processing engine.

Current supported AI platforms include:

- ChatGPT
- Gemini
- Claude
- Grok

Additional AI systems may join in the future.

---

# Long-term Vision

Enable every AHI instance to verify, review and improve itself automatically before human approval.
