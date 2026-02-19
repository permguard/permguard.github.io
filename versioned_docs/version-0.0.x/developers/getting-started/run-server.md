---
id: developers-run-server
title: Run the Server
sidebar_label: Run the Server
sidebar_position: 10103
description: This section provides instructions for running the Server.
---

The **`Server`** can operate as both the `control-plane` and the `data-plane` for `Permguard`.

In its simplest form, it runs in an `all-in-one` configuration, where a single instance acts as both the `control-plane` and the `data-plane`:

- When acting as the `control-plane`, the `Server` manages policies, trust configuration, and governance rules, providing a unified interface for defining and distributing authorization intent, or
- When acting as the `data-plane`, it evaluates incoming authorization requests and enforces the resulting decisions.

The default container image runs in `all-in-one` mode, making it ideal for development, testing, or simple environments.

In production, enforcement can be distributed, with dedicated data-plane instances deployed near workloads—inside applications, `sidecars`, `gateways`, or `edge` components.

To start the server using the latest container image:

```bash
docker pull permguard/all-in-one:latest
docker run --rm -it \
  -p 9091:9091 \
  -p 9092:9092 \
  -p 9094:9094 \
  permguard/all-in-one:latest
```

When running `Permguard` from its `Docker image`, configuration options are supplied through environment variables, allowing runtime behavior to be customized without modifying the image itself.

The full list of available configuration options is documented in the [Server Profiles](/docs/0.0.x/devops/server/server-profiles/).

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

When `PERMGUARD_DEBUG` is set to `TRUE`, the `Server` operates in debug mode, providing verbose logging and diagnostic output suitable for development and troubleshooting scenarios.

It is also possible to access the local SQLite database used by the `Server` by mounting a host directory into the container.

This allows direct inspection or interaction with the database files from the host system.

```bash
docker pull permguard/all-in-one:latest
docker run --rm -it \
  -v ./local:/opt/permguard/volume
  -p 9091:9091 \
  -p 9092:9092 \
  -p 9094:9094 \
  -e PERMGUARD_DEBUG="TRUE" \
  permguard/all-in-one:latest
```

In this setup, the `SQLite` database will be accessible on the host under the mounted path `./local`.
