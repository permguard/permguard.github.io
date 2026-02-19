---
id: learn-workspaces-plan-and-apply
title: Plan and Apply
sidebar_label: Plan and Apply
sidebar_position: 60104
description: Learn about planning and applying changes in a Permguard workspace
---

The `Permguard CLI` provides several operational capabilities. Among them, it allows you to manage `schemas` and `policies`.

Provisioning involves defining and maintaining these elements and is carried out using the `plan` and `apply` commands.

## Plan

The `plan` command evaluates the configurations and determines the desired state of all objects (schemas, policies) to be created, modified, or destroyed on the server.

Essentially, this command compares the current state of the working directory with the server's state and outputs the changes that will be applied.

This command does not apply any changes to the server; it only displays the necessary changes required to achieve the desired state.

```bash
 permguard plan
```

## Apply

The `apply` command performs a plan, similar to the `plan` command, but it also applies the changes to the server.

By default, apply performs a `fresh plan` right before applying changes. However, it is possible to apply an existing plan by providing the state file.

```bash
 permguard apply
```
