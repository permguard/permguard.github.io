---
id: manifest
title: Manifest
sidebar_label: Manifest
sidebar_position: 2
description: This section provides instructions for using the Manifest.
---

The **Manifest** is used to define the `AuthZ` trust models.

Below is an example of an `AuthZManifest`:

```json
{
    "metadata": {
        "kind": "authz",
        "name": "playground-cedar",
        "description": "A Permguard project using the Cedar language.",
        "author": "Nitro Agility S.r.l.",
        "license": "Apache-2.0"
    },
    "runtimes": {
        "cedar": {
            "language": {
                "name": "cedar",
                "version": ">=0.0.0"
            },
            "engine": {
                "name": "permguard",
                "version": ">=0.0.0",
                "distribution": "community"
            }
        }
    },
    "biz_policies": [
        {
            "partitions": {
                "/": {
                    "runtime": "cedar",
                    "schema": false
                }
            }
        }
    ]
}
```

## **Metadata**

This section defines the metadata of the **authorization model**.

## **Runtimes**

This section defines the available runtimes required by the **authorization model**.
Each runtime is identified by an arbitrary key — for example `cedar` — and is associated with a specific language and engine.

Version constraints follow **semver range** semantics:

| Constraint          | Meaning                          | Matches                      | Does Not Match          |
|---------------------|----------------------------------|------------------------------|-------------------------|
| `>=0.0.0`           | Any version from 0.0.0 upward    | `0.1.0`, `1.0.0`, `2.3.1`    | —                       |
| `>=1.0.0`           | Any version from 1.0.0 upward    | `1.0.0`, `1.5.2`, `2.0.0`    | `0.9.9`                 |
| `>=1.0.0 <2.0.0`    | Any version in the 1.x range     | `1.0.0`, `1.9.9`             | `0.9.9`, `2.0.0`        |
| `1.2.3`             | Exactly version 1.2.3            | `1.2.3`                      | `1.2.4`, `1.3.0`        |

Both `language` and `engine` carry an independent version constraint. This allows a runtime entry to express compatibility requirements for both the policy language and the execution engine separately.

## **Biz Policies**

This section defines the business policies of the **authorization model**. Each entry contains a set of partitions that group policies by runtime and schema configuration.

## **Partitions**

This section defines the partitions within a policy entry and mandates the presence of a `root` partition (`/`). Each partition references a runtime key defined in the `runtimes` section and specifies whether a schema is required.

The partition key is the path — `/` is the root partition and is always required. Additional partitions can be defined under distinct paths, each potentially referencing a different runtime.
