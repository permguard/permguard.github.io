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
