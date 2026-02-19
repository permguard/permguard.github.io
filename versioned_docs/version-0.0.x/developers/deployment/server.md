---
id: deployment-server
title: Server
sidebar_label: Server
sidebar_position: 10301
description: Overview of the Server component in the Permguard project.
---

**Permguard** is composed of several internal components that together form the **Server**.

The `Server` can run in an `all-in-one` configuration, where all components operate within a single instance, or it can be deployed in a distributed setup where each instance takes on a specific role such as `control-plane`, `data-plane`, or both.

:::note
Services can be configured using either environment variables or [configuration options](/developers/deployment/deployment-server-profiles). Each CLI option has a corresponding environment variable named `PERMGUARD_<OPTION_NAME>`. For example, the `--debug` option maps to the `PERMGUARD_DEBUG` environment variable.
:::
