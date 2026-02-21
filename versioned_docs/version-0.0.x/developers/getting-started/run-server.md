---
id: run-server
title: Run the Permguard Server
sidebar_label: Run the Server
sidebar_position: 3
description: This section provides instructions for running the Permguard Server.
---

The **Permguard Server** comprises the `control-plane` and the `data-plane`.

By default, the Permguard Server handles **governance** — policy management and enforcement. The `trust-plane` (PIC authority continuity) is a separate component and is deployed independently following its own [deployment guide](../../trust-plane/deployment/options).

## Default: Control Plane + Data Plane

In its simplest form, the Permguard Server runs in an `all-in-one` configuration, where a single instance acts as both the `control-plane` and the `data-plane`:

- **Control Plane** — manages policies, configuration, and governance rules. Provides a unified interface for defining and distributing authorization intent.
- **Data Plane** — evaluates incoming authorization requests and enforces permit/deny decisions locally.

The default container image runs in `all-in-one` mode, making it ideal for development, testing, or simple environments.

In production, enforcement can be distributed, with dedicated data-plane instances deployed near workloads — inside applications, `sidecars`, `gateways`, or `edge` components.

:::info
The **Trust Plane** is not included in the default Permguard Server image. It is deployed separately to enforce PIC invariants (origin immutability, monotonic restriction, causal binding). See the [Trust Plane deployment guide](../../trust-plane/deployment/options) for details.
:::

## Starting the Permguard Server

To start the Permguard Server using the latest container image:

```bash
docker pull permguard/all-in-one:latest
docker run --rm -it \
  -p 9091:9091 \
  -p 9092:9092 \
  -p 9094:9094 \
  permguard/all-in-one:latest
```

When running the Permguard Server from its `Docker image`, configuration options are supplied through environment variables, allowing runtime behavior to be customized without modifying the image itself.

The full list of available configuration options is documented in the [Server Options](../../developers/deployment/options).

## Debug Mode

Example with debugging enabled:

```bash
docker pull permguard/all-in-one:latest
docker run --rm -it \
  -p 9091:9091 \
  -p 9092:9092 \
  -p 9094:9094 \
  -e PERMGUARD_DEBUG="TRUE" \
  permguard/all-in-one:latest
```

When `PERMGUARD_DEBUG` is set to `TRUE`, the Permguard Server operates in debug mode, providing verbose logging and diagnostic output suitable for development and troubleshooting scenarios.

## Persistent Storage

It is also possible to access the local SQLite database used by the Permguard Server by mounting a host directory into the container.

This allows direct inspection or interaction with the database files from the host system.

```bash
docker pull permguard/all-in-one:latest
docker run --rm -it \
  -v ./local:/opt/permguard/volume \
  -p 9091:9091 \
  -p 9092:9092 \
  -p 9094:9094 \
  -e PERMGUARD_DEBUG="TRUE" \
  permguard/all-in-one:latest
```

In this setup, the `SQLite` database will be accessible on the host under the mounted path `./local`.
