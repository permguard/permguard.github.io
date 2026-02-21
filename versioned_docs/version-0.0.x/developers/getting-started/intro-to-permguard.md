---
id: intro-to-permguard
title: Intro to Permguard
sidebar_label: Intro to Permguard
sidebar_position: 1
description: This section provides an introduction to Permguard.
---

## What is Permguard?

**Permguard** is a distributed authorization platform that combines **governance** and **authority** in a single system, built on `Zero Trust` principles.

- **Governance** — policy-based authorization: who can do what on which resources
- **Authority** — [PIC-compliant](https://www.pic-protocol.org) authority continuity: causal, origin-bound, monotonically restricted execution chains

Permguard can be used for governance alone, or composed with authority continuity for full PIC enforcement.

<div style={{textAlign: "center"}}>
  <img alt="Permguard" src="/images/diagrams/d14.webp"/>
</div>

## Three Planes

Permguard is organized around three planes, each with a distinct responsibility:

| Plane | Responsibility | What it does |
|-------|---------------|--------------|
| **[Control Plane](../../control-plane/)** | Configuration | Manages, versions, and distributes policies and settings |
| **[Data Plane](../../data-plane/)** | Policy decisions | Evaluates permit/deny locally at the workload boundary |
| **[Trust Plane](../../trust-plane/)** | Authority continuity | Enforces PIC invariants: origin immutability, monotonic restriction, causal binding |

The **Control Plane** and **Data Plane** handle governance. The **Trust Plane** handles authority.

- Governance decides **what is currently permitted**
- Authority ensures **execution is a valid continuation from the origin**

When composed, governance becomes an inherently authority-reducing layer — it can restrict, never expand authority.

## What Permguard Enforces

**every incoming request must be validated before the application processes it**.

This applies uniformly across all interaction types — synchronous APIs, asynchronous messages, event streams, WebSocket frames, and cross-service calls — ensuring consistent enforcement at both the network layer and the application layer.

Beyond the input boundary, Permguard also governs **in-code authorization policies**, allowing applications to perform fine-grained checks at critical points:

- before calling a domain service
- before executing a sensitive command
- before accessing or mutating data

<div style={{textAlign: "center"}}>
  <img alt="Permguard Policies" src="/images/diagrams/d1.webp"/>
</div>
<br/>

Authorization remains:

- **governed in intent** — rules are collaboratively reviewed, versioned, and managed
- **decentralized in enforcement** — decisions occur close to where actions happen
- **auditable and explainable** — full end-to-end visibility across the authorization path

## Centralized Interface, Evolving Toward Decentralized Consensus

Policies are accessed through a unified control-plane interface, but this does **not** imply a centralized trust model.

- The current implementation runs through a single, centralized access point for operational simplicity.
- However, the underlying architecture and algorithms are already designed to be extended with **decentralized consensus** behind that interface.

Enforcement remains fully distributed, while the control-plane provides a consistent place to define, review, update, and audit policies — even as the system evolves toward decentralized trust models.

:::tip
**Permguard** offers strong Zero Trust governance with a simple integration path — define authorization intent once and enforce it everywhere.
:::

## Bring Your Own Identity (BYOI)

Permguard is **identity-agnostic** on the authentication side.
It follows a `Bring Your Own Identity (BYOI)` approach.

:::info
The main goal of **Permguard** is to provide strong authorization governance, not authentication. Identity establishes the origin of authority — Permguard governs what that authority permits.
:::

## Where Authorization Runs

Authorization can be triggered by either:

- **Network Layer**
  e.g., service mesh, sidecar proxy, gateway, or edge component.

- **Application Layer**
  via SDKs or native APIs.

In both cases, the request is always evaluated **before** performing any action.

The **data-plane** receives the full request context (identities, attestations, network metadata, application attributes) and evaluates it locally using policies obtained from the **control-plane**.

- The **control-plane** manages and distributes policies
- The **data-plane** enforces permit/deny decisions at the workload boundary
- The **trust-plane** validates authority continuity (PIC invariants)

This creates a consistent and decentralized Zero Trust model for both synchronous and asynchronous workflows.

---

Designed for `cloud-native`, `edge`, and `multi-tenant` environments, Permguard enables updating policies without changing application code.

---

## Policy Languages

Permguard is `language-agnostic` and supports multiple policy languages, starting with **Cedar**:

<div style={{textAlign: "center"}}>
  <img alt="Permguard" src="/images/diagrams/d18.webp"/>
</div>

Each language is implemented through a thin abstraction layer that keeps the core model stable while requiring only a minimal common keyword set.

## Deployment Flexibility

Permguard can run in:

- `on-premises`, `private`, or `public` cloud environments
- `Kubernetes` and `serverless` platforms
- `edge` and `IoT` ecosystems, including `partially connected` or `disconnected` scenarios

The architecture consists of three main components:

- `Control Plane`
  Manages, versions, and distributes policies and configuration.
  Must be reachable at the network level. Can run on `edge` components or distributed infrastructure.

- `Data Planes`
  Enforce permit/deny decisions locally.
  Can be deployed anywhere — inside applications, gateways, edge devices, remote regions, or disconnected environments.

- `Trust Plane`
  Validates PIC authority continuity: origin immutability, monotonic restriction, and causal binding.
  Can be embedded, sidecar, or centralized depending on the deployment model.

<div style={{textAlign: "center"}}>
  <img alt="Permguard" src="/images/diagrams/d13.webp"/>
</div>

## Integrating with Permguard

Applications can enforce authorization using:

- the official **SDKs**, or
- Permguard's native **APIs**

<div style={{textAlign: "center"}}>
  <img alt="Permguard" src="/images/diagrams/d19.webp"/>
</div>

:::info
SDKs are available for **Go**, **Rust**, **Java**, **.NET Core**, **Node.js**, and **Python**, with more in development.
:::
