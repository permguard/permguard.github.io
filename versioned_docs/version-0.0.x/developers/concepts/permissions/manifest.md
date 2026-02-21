---
id: manifest
title: Manifests
sidebar_label: Manifests
sidebar_position: 2
description: Understanding the concept of Manifest in Permguard.
---

A **Permguard** ledger must be associated with a manifest.

:::note
The manifest file is created automatically when a new workspace is initialized.
:::

This **manifest**  is a mandatory element to define the following:

- **metadata**: Information about the authorization model
- **authz**
  - **runtime**: A runtime represents a specific environment that can be used to build and evaluate the authorization model.
  - **partition**: A partition defines a specific section of the authorization model, enabling a modular approach to its design.
