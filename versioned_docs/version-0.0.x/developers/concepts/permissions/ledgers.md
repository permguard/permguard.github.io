---
id: concepts-permissions-ledgers
title: Ledgers
sidebar_label: Ledgers
sidebar_position: 1
description: Understanding the concept of Ledgers in Permguard.
---

In **Permguard**, multiple zones can be created, and each zone can have multiple **ledgers**.
This provides a structured way to manage `authz` models which include **manifests, schemas, policies, and permissions**.

:::note
In the [PharmaGovFlow base example](../../../learn/learn-pharma-govflow/), the `pharmagovflow` ledger is one of the example ledgers created in the sample.
:::

## Policy Ledger

A **Policy Ledger** is a logical structure used to organize `authz models`.

```json
{
  "name": "pharmagovflow",
}
```
