---
id: config
title: Config
sidebar_label: Config
sidebar_position: 2
description: Command reference for the `config` command of the Permguard CLI.
---

Using the `config` command, it is possible to manage the CLI configurations.

The configuration file is stored in `~/.permguard/config.toml`.

```text
Usage:
  permguard config get [flags]
  permguard config get [command]

Available Commands:
  pap-endpoint Get the pap endpoint
  pdp-endpoint Get the pdp endpoint
  zap-endpoint Get the zap endpoint

Flags:
  -h, --help   help for get

Global Flags:
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")

Use "permguard config get [command] --help" for more information about a command.
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Reset the Config

The `permguard config reset` command allows to reset the CLI configurations.

```bash
permguard config reset
```

output:

```bash
 The cli config file ~/.permguard/config.toml has been reset.
```

<details>
  <summary>JSON Output</summary>

```bash
permguard config reset --output json
```

output:

```json
{
  "cli": {
    "config_file": "~/.permguard/config.toml"
  }
}
```

</details>

## Show Current Configuration

The `permguard config show` command displays all current CLI configuration settings.

```bash
permguard config show
```

output:

```bash
zap-endpoint: grpc://localhost:9091
pap-endpoint: grpc://localhost:9092
pdp-endpoint: grpc://localhost:9094
```

<details>
  <summary>JSON Output</summary>

```bash
permguard config show --output json
```

output:

```json
{
  "zap_endpoint": "grpc://localhost:9091",
  "pap_endpoint": "grpc://localhost:9092",
  "pdp_endpoint": "grpc://localhost:9094"
}
```

</details>

## Endpoints

Endpoints define the connection address for each Permguard service. The endpoint value must include a scheme prefix (`grpc://`, `http://`, or `https://`) followed by `hostname:port`.

### Set Endpoints

Endpoints can be set using the following commands:

```bash
permguard config set zap-endpoint grpc://localhost:9091
```

```bash
permguard config set pap-endpoint grpc://localhost:9092
```

```bash
permguard config set pdp-endpoint grpc://localhost:9094
```

### Get Endpoints

The endpoints can be retrieved using the following commands:

```bash
permguard config get zap-endpoint
```

```bash
permguard config get pap-endpoint
```

```bash
permguard config get pdp-endpoint
```

<details>
  <summary>JSON Output</summary>

```bash
permguard config get pdp-endpoint -o json
```

output:

```json
{"pdp_endpoint":"grpc://localhost:9094"}
```

</details>
