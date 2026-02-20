---
id: concepts-authn-authz
title: AuthN vs AuthZ
sidebar_label: AuthN vs AuthZ
sidebar_position: 1
description: Understanding the differences between Authentication (AuthN) and Authorization (AuthZ).
---

**Authentication (`AuthN`)** and **Authorization (`AuthZ`)** are two distinct but interconnected security functions.
They often appear together in a workflow, but they solve different problems.

- **`Authentication`** verifies the identity of a person, service, or device, ensuring that the requester is genuine. Common authentication methods include:
  - Username and Password
  - Multi-Factor Authentication (MFA)
  - Biometric Authentication
  - Public Key Certificates

  Authentication establishes **who** is initiating the request.

:::note
Identity Management: **Permguard** follows a **Bring Your Own Identity (BYOI)** model for `AuthN`, supporting any identity source.
:::

- **`Authorization`** determines **what** the authenticated entity is allowed to do.
It governs access to resources, actions, or operations and can be role-based or policy-based.
Authorization decisions are typically dynamic and context-dependent, especially in distributed and Zero Trust architectures.

Authentication and authorization work together: authorization has no meaning without a verified identity.

:::tip
**Identity Models:**
Modern systems use different identity models:

- **Centralized IdPs** (e.g., OAuth/OIDC providers) for human identity
- **Self-Sovereign Identity (SSI)** for decentralized, user-controlled credentials
- **Machine Identity** like [WIMSE](https://datatracker.ietf.org/group/wimse/documents/) for Workload Identity in Multi System Environments.

Permguard is designed to interoperate with all of them.
:::
