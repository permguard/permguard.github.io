---
id: learn-workspaces-managing-ledgers
title: Managing Ledgers
sidebar_label: Managing Ledgers
sidebar_position: 60102
description: Learn about managing ledgers in a Permguard workspace
---

**Permguard** supports multiple **ledgers** for each **remote**, allowing flexible management of both **coding** and **provisioning** tasks.

When making changes, it is important to **specify the remote** where these changes will be pushed.

## Checking out a Ledger

To ensure that changes are provisioned correctly, you must first **check out** the appropriate **ledger**.

To check out a ledger, use the **`checkout`** command:

```bash
 permguard checkout origin/273165098782/pharmagovflow
```

In this command, the first parameter is the **remote**, followed by the **zone ID**, and finally the **ledger identifier**. The format used is `<remote>/<zone-id>/<ledger-name>`.
