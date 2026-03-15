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

<!-- updated: added notp-max-packet-size and otel flags to match source code -->
| Option                          | Default          | Description                                      |
|---------------------------------|------------------|--------------------------------------------------|
| `--server-appdata`              | `./`             | Directory used as application data               |
| `--storage-engine-central`      | `SQLITE`         | Storage engine for central data                  |
| `--server-notp-max-packet-size` | `16777216`       | NOTP maximum packet size in bytes (16MB)         |
| `--server-otel-enabled`         | `false`          | Enable OpenTelemetry tracing and metrics         |
| `--server-otel-endpoint`        | `localhost:4317` | OpenTelemetry collector gRPC endpoint            |
| `--server-otel-sample-rate`     | `0.1`            | OpenTelemetry trace sample rate (0.0 to 1.0)     |

<details>
  <summary>SQLite Options</summary>

| Option                          | Default     | Description          |
|---------------------------------|-------------|----------------------|
| `--storage-engine-sqlite-dbname`| `permguard` | SQLite database name |

</details>

### ZAP — Zone Administration Point

| Option                                      | Default   | Description                                          |
|---------------------------------------------|-----------|------------------------------------------------------|
| `--storage-zap-engine-central`              | `SQLITE`  | Storage engine (overrides `--storage-engine-central`)|
| `--server-zap-data-fetch-maxpagesize`       | `10000`   | Max items per request                                |
| `--server-zap-data-enable-default-creation` | `false`   | Enables default entity creation                      |
| `--server-zap-grpc-port`                    | `9091`    | gRPC port                                            |

### PAP — Policy Administration Point

| Option                                 | Default   | Description                                                                                                                                                         |
|----------------------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--storage-pap-engine-central`         | `SQLITE`  | Storage engine (overrides `--storage-engine-central`)                                                                                                               |
| `--server-pap-data-fetch-maxpagesize`  | `10000`   | Max items per request                                                                                                                                               |
| `--server-pap-authstar-max-object-size`| `5242880` | Authstar max object size in bytes for push/pull (5MB)                                                                                                               |
| `--server-pap-grpc-port`               | `9092`    | gRPC port                                                                                                                                                           |
| `--server-pap-tx-cleanup-enabled`      | `true`    | Enable background cleanup of stale transactions. When enabled, a background job periodically removes pending transactions that have exceeded their maximum lifetime |
| `--server-pap-tx-cleanup-interval`     | `5m`      | How often the transaction cleanup job runs (e.g. `5m`, `10m`, `1h`)                                                                                                 |
| `--server-pap-tx-max-lifetime`         | `5m`      | Maximum lifetime for a pending transaction before it is considered stale and cleaned up (e.g. `5m`, `10m`, `1h`)                                                    |

## Provisioners

| Option                               | Default | Description               |
|--------------------------------------|---------|---------------------------|
| `--debug`                            | `false` | Enables debug mode        |
| `--log-level`                        | `INFO`  | Log level                 |
| `--storage-engine-sqlite-filepath`   | `.`     | SQLite database file path |
