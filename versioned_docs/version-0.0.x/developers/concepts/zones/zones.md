---
id: zones
title: Zones
sidebar_label: Zones
sidebar_position: 1
description: Understanding the concept of Zones in Permguard.
---

**Permguard** supports a `multi-zone` architecture, enabling the creation of multiple **zones**.

Each `zone` segments a distinct `trust model` and maintains its own ledgers, manifests, schemas, policies, and permissions.

:::note
In the [PharmaGovFlow sample](../../../learn/learn-pharma-govflow/), the `platform-admin-zone` is created as one of the example segments.
:::

Each zone is uniquely identified by a `name`.

```json
{
  "zone_id": 273165098782,
  "name": "pharmagovflow-dev"
}
```
