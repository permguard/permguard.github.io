---
id: options
title: Options
sidebar_label: Options
sidebar_position: 1
description: Overview of the deployment options.
---

Permguard can be configured using either environment variables or CLI options. Each CLI option has a corresponding environment variable named `PERMGUARD_<OPTION_NAME>`. For example, `--debug` maps to `PERMGUARD_DEBUG`.

For general options, see [General Options](../../developers/deployment/options.md).

## Control Plane

These options apply to the control plane.

| Option | Default | Description |
|--------|---------|-------------|
| `--server-appdata` | `./` | Directory used as application data |
| `--storage-engine-central` | `SQLITE` | Storage engine for central data |

<details>
  <summary>SQLite Options</summary>

| Option | Default | Description |
|--------|---------|-------------|
| `--storage-engine-sqlite-dbname` | `permguard` | SQLite database name |

</details>

### ZAP — Zone Administration Point

| Option | Default | Description |
|--------|---------|-------------|
| `--storage-zap-engine-central` | `SQLITE` | Storage engine (overrides `--storage-engine-central`) |
| `--server-zap-data-fetch-maxpagesize` | `10000` | Max items per request |
| `--server-zap-data-enable-default-creation` | `false` | Enables default entity creation |
| `--server-zap-grpc-port` | `9091` | gRPC port |

### PAP — Policy Administration Point

| Option | Default | Description |
|--------|---------|-------------|
| `--storage-pap-engine-central` | `SQLITE` | Storage engine (overrides `--storage-engine-central`) |
| `--server-pap-data-fetch-maxpagesize` | `10000` | Max items per request |
| `--server-pap-grpc-port` | `9092` | gRPC port |

## Provisioners

| Option | Default | Description |
|--------|---------|-------------|
| `--debug` | `false` | Enables debug mode |
| `--log-level` | `INFO` | Log level |
| `--storage-engine-sqlite-filepath` | `.` | SQLite database file path |
