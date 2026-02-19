---
id: concepts-permissions-ledgers
title: Ledgers
sidebar_label: Ledgers
sidebar_position: 10221
description: Understanding the concept of Ledgers in Permguard.
---

In **Permguard**, multiple zones can be created, and each zone can have multiple **ledgers**.
This provides a structured way to manage `authz` models which include **manifests, schemas, policies, and permissions**.

:::note
In the [PharmaGovFlow base example](/docs/0.0.x/getting-started/hands-on-base-example/), the `pharmagovflow` ledger is one of the example ledgers created in the sample.
:::

## Policy Ledger

A **Policy Ledger** is a logical structure used to organize `authz models`.

```json
{
  "name": "pharmagovflow",
}
```
