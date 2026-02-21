---
id: enforcement
title: Enforcement
sidebar_label: Enforcement
sidebar_position: 5
description: Understanding the concept of Enforcement in Permguard.
---

In **Permguard**, enforcement is handled by the **Policy Enforcement Point (PEP)**.
Its role is to verify whether an `identity` has permission to perform specific `actions` on `resources` within a given `namespace`.

:::note
In the [PharmaGovFlow base example](../../../learn/learn-pharma-govflow/), the application enforces different types of permission checks.
:::

## Enforcement

To enforce access control, the **PEP** queries the **Policy Decision Point (PDP)** for a decision.

```json
{
  "authorization_model": {
    "zone_id": 273165098782,
    "policy_store": {
      "kind": "ledger",
      "id": "fd1ac44e4afa4fc4beec622494d3175a"
    },
    "principal": {
      "type": "user",
      "id": "amy.smith@acmecorp.com",
      "source": "keycloak"
    },
    "entities": {
      "schema": "cedar",
      "items": [
        {
          "uid": {
            "type": "PharmaGovFlow::Platform::Subscription",
            "id": "e3a786fd07e24bfa95ba4341d3695ae8"
          },
          "attrs": {
            "active": true
          },
          "parents": []
        }
      ]
    }
  },
  "subject": {
    "type": "user",
    "id": "amy.smith@acmecorp.com",
    "source": "keycloak",
    "properties": {
      "isSuperUser": true
    }
  },
  "resource": {
    "type": "PharmaGovFlow::Platform::Subscription",
    "id": "e3a786fd07e24bfa95ba4341d3695ae8",
    "properties": {}
  },
  "context": {
    "time": "2025-01-23T16:17:46+00:00"
  },
  "evaluations": [
    {
      "action": {
        "name": "PharmaGovFlow::Platform::Action::create",
        "properties": {}
      }
    },
    {
      "action": {
        "name": "PharmaGovFlow::Platform::Action::delete",
        "properties": {}
      }
    }
  ]
}
```
