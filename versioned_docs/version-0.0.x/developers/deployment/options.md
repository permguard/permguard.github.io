---
id: options
title: Options
sidebar_label: Options
sidebar_position: 2
description: Overview of the deployment options.
---

Permguard can be configured using either environment variables or CLI options. Each CLI option has a corresponding environment variable named `PERMGUARD_<OPTION_NAME>`. For example, `--debug` maps to `PERMGUARD_DEBUG`.

## General

These options apply to all components.

| Option | Default | Description |
|--------|---------|-------------|
| `--debug` | `false` | Enables debug mode |
| `--log-level` | `INFO` | Log level: `DEBUG`, `INFO`, `WARN`, `ERROR`, `DPANIC`, `PANIC`, `FATAL` |
| `--server-appdata` | `./` | Directory used as application data |
| `--storage-engine-central` | `SQLITE` | Storage engine for central data |

<details>
  <summary>Log Levels</summary>

| Level | Description |
|-------|-------------|
| `DEBUG` | Verbose, typically disabled in production |
| `INFO` | Default logging priority |
| `WARN` | More important than Info, no individual review needed |
| `ERROR` | High-priority, should not appear in smooth operation |
| `DPANIC` | Important errors, panics in development |
| `PANIC` | Logs then panics |
| `FATAL` | Logs then calls `os.Exit(1)` |

</details>

<details>
  <summary>SQLite Options</summary>

| Option | Default | Description |
|--------|---------|-------------|
| `--storage-engine-sqlite-dbname` | `permguard` | SQLite database name |

</details>

## Control Plane

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

## Data Plane

### PIP — Policy Information Point

| Option | Default | Description |
|--------|---------|-------------|
| `--storage-pip-engine-central` | `SQLITE` | Storage engine (overrides `--storage-engine-central`) |
| `--server-pip-data-fetch-maxpagesize` | `10000` | Max items per request |
| `--server-pip-grpc-port` | `9093` | gRPC port |

### PDP — Policy Decision Point

| Option | Default | Description |
|--------|---------|-------------|
| `--storage-pdp-engine-central` | `SQLITE` | Storage engine (overrides `--storage-engine-central`) |
| `--server-pdp-data-fetch-maxpagesize` | `10000` | Max items per request |
| `--server-pdp-grpc-port` | `9094` | gRPC port |
| `--server-pdp-decision-log` | `NONE` | Decision log output: `NONE`, `STDOUT`, `FILE` |

## Provisioners

| Option | Default | Description |
|--------|---------|-------------|
| `--debug` | `false` | Enables debug mode |
| `--log-level` | `INFO` | Log level |
| `--storage-engine-sqlite-filepath` | `.` | SQLite database file path |