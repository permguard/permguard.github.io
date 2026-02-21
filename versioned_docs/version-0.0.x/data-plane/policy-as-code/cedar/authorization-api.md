---
id: authorization-api
title: Cedar Authorization API
sidebar_label: Cedar Authorization API
sidebar_position: 1
description: This section provides instructions for using the Cedar Authorization API.
---

This section specifies the **Cedar** `AuthZApi Model` override.

> If no specific override is provided, the generic `AuthZApi Model` specification applies.

:::caution
Properties must conform to the JSON structure defined for the <a href="https://docs.cedarpolicy.com/auth/entities-syntax.html#attrs" target="_blank" rel="noopener noreferrer">entities attributes object</a>,
whereas the Context must adhere to the JSON structure specified for the <a href="https://docs.cedarpolicy.com/auth/entities-syntax.html#context" target="_blank" rel="noopener noreferrer">context object</a>.
:::

## Entities

The `Entities` object is a `set of attributes` that represent policy's entities.

```json
{
  "authorization_model": {
    "entities": {
      "schema": "cedar",
      "items": [
        {
          "uid": {
            "type": "PharmaAuthZFlow::Platform::Subscription",
            "id": "e3a786fd07e24bfa95ba4341d3695ae8"
          },
          "attrs": {
            "active": true
          },
          "parents": []
        }
      ]
    }
  }
}
```

---
**authorization_model/entities/schema**: *the schema type (default `CEDAR`, options `CEDAR`).*

---
**authorization_model/entities/items**: *items has to match the `CEDAR` entities structure.*

---

## Subject

The `Subject` is mapped to the internal `Permguard`  subject structure for the `Cedar` policy.

| TYPE       | CEDAR TYPE                           |
|------------|--------------------------------------|
| USER       | Permguard::Identity::User            |
| WORKLOAD   | Permguard::Identity::Workload        |
| ATTRIBUTE  | Permguard::Identity::Attribute        |

The `CEDAR TYPE` must be used in the `Cedar` policy.

```cedar
@id("platform-auditor")
permit(
  principal == Permguard::Identity::Attribute::"role/platform-auditor"
);
```

## Resource

The `Resource` has to satisfy the `Cedar` resource structure.

```cedar
@id("platform-auditor")
permit(
  resource is PharmaAuthZFlow::Platform::Subscription
);
```

## Action

The `Action` has to satisfy the `Cedar` action structure.

```cedar
@id("platform-auditor")
permit(
  action == PharmaAuthZFlow::Platform::Action::"view",
);
```
