---
id: coding
title: Coding
sidebar_label: Coding
sidebar_position: 4
description: Learn about coding in a Permguard workspace
---

Permguard adopts a code-first approach to managing schemas, policies and permissions. This approach ensures that all configurations are defined in code, allowing them to be versioned, reviewed, and tested.

To enhance coding efficiency and comfort, Permguard provides several key commands:

- `refresh`: Generates the local state
- `validate`: Validates the configurations in the working directory
- `pull`: Fetches the remote changes and build a remote state
- `object`: Managed the object model.

## Refresh

The `refresh` command updates the local workspace by cleaning up temporary files, regenerating necessary configurations, and ensuring that the local source code is in sync with the expected state. This command focuses solely on the local workspace and the source code, without interacting with any remote ledgers.

```bash
permguard refresh
```

## Validate

The `validate` command checks the configurations in the working directory for syntax errors and ensures that they are valid. This command is useful for identifying issues before applying changes to the server. This command focuses solely on the local workspace and the source code, without interacting with any remote ledgers.

```bash
 permguard validate
```

## Pull

The `pull` command fetches the state from the `control-plane` and stores it locally and finally build a remote state.

```bash
 permguard pull
```

## Objects

The `objects` command manages the object store, allowing users to display the contents of an object.
This command focuses solely on the local workspace and the source code, without interacting with any remote ledgers.

```bash
 permguard objects
```
