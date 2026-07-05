# Data Storage Architecture

**Document ID:** ARCH-20260705-012

Version: 1.0 Draft

Status: Draft

---

# Purpose

Define the storage architecture of AHI.

---

# Polyglot Persistence

Different data requires different databases.

AHI adopts Polyglot Persistence.

---

# Storage Layers

L0

Context Cache

(RAM)

---

L1

Distributed Cache

Redis

---

L2

Vector Database

Knowledge

Memory

Prompt

Hybrid Search

---

L3

Relational Database

Identity

Permission

Governance

Audit

Business

Transaction

---

L4

Object Storage

Images

Audio

Video

Documents

Models

Backup

---

L5

GitHub

Source of Truth

Standards

Architecture

Source Code

Documentation

Meeting Minutes

---

L6

AHI-Omniverse

Planetary Intelligence

Civilisation Memory

Knowledge Evolution

---

# Secret Space

SS

is stored

as

Encrypted Vault.

SS never exists

in plaintext

outside

authorized execution.

---

# Storage Rule

Public

Protected

Private

Secret Space

Each storage class

has different

security policies.

---

# Search Rule

Relational Query

+

Semantic Search

+

Vector Search

+

Hybrid Search

=

AHI Search Engine

---

# Guiding Principle

Use

the right database

for

the right knowledge.
