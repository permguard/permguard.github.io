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

## Transport Security (TLS)

These options configure TLS for gRPC communication. See the [Transport Security](../../learn/transport-security) guide for usage examples.

| Option | Default | Description |
|--------|---------|-------------|
| `--server-tls-mode` | `none` | TLS mode: `none`, `tls`, `mtls`, `external`, `spiffe` |
| `--server-tls-cert-file` | — | Path to server TLS certificate (PEM) |
| `--server-tls-key-file` | — | Path to server TLS private key (PEM) |
| `--server-tls-ca-file` | — | Path to CA certificate for client verification in mTLS (PEM) |
| `--server-tls-auto-cert-dir` | `{appdata}/certs/` | Directory for auto-generated certificates (mode=tls only) |
| `--server-tls-spiffe-socket-path` | — | SPIFFE Workload API socket path (mode=spiffe only, defaults to `SPIFFE_ENDPOINT_SOCKET` env) |

<details>
  <summary>TLS Modes</summary>

| Mode | Description |
|------|-------------|
| `none` | No encryption. Default for local development. |
| `tls` | Server-side TLS. The server presents a certificate. If no cert is provided, one is auto-generated. |
| `mtls` | Mutual TLS. Both server and client present and verify certificates. |
| `external` | Mutual TLS using certificates provisioned by infrastructure (e.g., SPIRE, Vault, cert-manager). Requires `cert-file`, `key-file`, and `ca-file`. |
| `spiffe` | Native SPIFFE mTLS via the Workload API. No certificate files needed — the server connects directly to the SPIRE agent. |

</details>
