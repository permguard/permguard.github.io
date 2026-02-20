---
id: dataplane-manifest
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
        "description": "A Permguard playground using the Cedar language.",
        "author": "Nitro Agility S.r.l.",
        "license": "Apache-2.0"
    },
    "runtimes": {
        "cedar[0.0+]": {
            "language": {
                "name": "cedar",
                "version": "0.0+"
            },
            "engine": {
                "name": "permguard",
                "version": "0.0+",
                "distribution": "community"
            }
        }
    },
    "partitions": {
        "/": {
            "runtime": "cedar[0.0+]",
            "schema": false
        }
    }
}
```

## **Metadata**

This section defines the metadata of the **authorization model**.

## **Runtime**

This section defines the available runtimes required by the **authorization model**.
Each of these runtimes is associated with a specific language and engine.

Both of them have a version, and the **+** means from that version to any other version. Without it, the version is fixed.

## **Partitions**

This section defines the partitions of the **authorization model** and mandates the presence of a `root` partition. Each partition is associated with a specific runtime and allows specifying if a schema is required.
Along with this, it is required to specify the location, which has a path and a mode (`file` or `directory`).
