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
  permguard config [flags]
  permguard config [command]

Available Commands:
  get         Get configuration items
  reset       Reset the cli config settings
  set         Set configuration items
  show        Show current CLI configuration

Flags:
  -h, --help   help for config

Global Flags:
  -o, --output string          output format (default "terminal")
      --spiffe-enabled           enable native SPIFFE mTLS via Workload API
      --spiffe-endpoint string   SPIFFE Workload API socket path (defaults to SPIFFE_ENDPOINT_SOCKET env)
      --tls-ca-file string       path to CA certificate for server verification (PEM)
      --tls-cert-file string   path to client certificate for mTLS (PEM)
      --tls-key-file string    path to client private key for mTLS (PEM)
      --tls-skip-verify        skip server certificate verification (insecure, dev only)
  -v, --verbose                true for verbose output
  -w, --workdir string         workdir (default ".")

Use "permguard config [command] --help" for more information about a command.
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

<!-- updated: added notp.max-packet-size to match source code config show output -->
```bash
endpoints.zap: grpc://localhost:9091
endpoints.pap: grpc://localhost:9092
endpoints.pdp: grpc://localhost:9094
language: cedar
authstar.max-object-size: 5242880
notp.max-packet-size: 16777216
```

<details>
  <summary>JSON Output</summary>

```bash
permguard config show --output json
```

output:

<!-- updated: added notp section to JSON output -->
```json
{
  "endpoints": {
    "zap": "grpc://localhost:9091",
    "pap": "grpc://localhost:9092",
    "pdp": "grpc://localhost:9094"
  },
  "language": "cedar",
  "authstar": {
    "max_object_size": 5242880
  },
  "notp": {
    "max_packet_size": 16777216
  }
}
```

</details>

## Endpoints

Endpoints define the connection address for each Permguard service. The endpoint value must include a **scheme prefix** followed by `hostname:port`.

The supported schemes are:

| Scheme | Transport | When to use |
|--------|-----------|-------------|
| `grpc://` | Plaintext gRPC | Server running with `--server-tls-mode=none` (default) |
| `grpcs://` | TLS-encrypted gRPC | Server running with `--server-tls-mode=tls`, `mtls`, or when TLS is terminated externally |
| `http://` | Plaintext HTTP | HTTP gateway, no encryption |
| `https://` | TLS-encrypted HTTP | HTTP gateway with TLS |

:::tip
When the server has TLS enabled, switch all endpoints from `grpc://` to `grpcs://`. If you see errors like `connection reset by peer`, it typically means the scheme does not match the server's TLS configuration.
:::

### Set Endpoints

Endpoints can be set using the following commands.

**Plaintext (default, no TLS):**

```bash
permguard config set zap-endpoint grpc://localhost:9091
```

```bash
permguard config set pap-endpoint grpc://localhost:9092
```

```bash
permguard config set pdp-endpoint grpc://localhost:9094
```

**TLS-enabled server:**

```bash
permguard config set zap-endpoint grpcs://localhost:9091
```

```bash
permguard config set pap-endpoint grpcs://localhost:9092
```

```bash
permguard config set pdp-endpoint grpcs://localhost:9094
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

## Authstar Max Object Size

The `authstar-max-object-size` setting defines the maximum allowed size in bytes for objects in the authstar storage (commits, trees, blobs). The default value is `5242880` (5MB).

### Set Authstar Max Object Size

```bash
permguard config set authstar-max-object-size 10485760
```

### Get Authstar Max Object Size

```bash
permguard config get authstar-max-object-size
```

<details>
  <summary>JSON Output</summary>

```bash
permguard config get authstar-max-object-size -o json
```

output:

```json
{"authstar_max_object_size":5242880}
```

</details>

<!-- updated: added NOTP Max Packet Size section to match source code -->
## NOTP Max Packet Size

The `notp-max-packet-size` setting defines the maximum allowed packet size in bytes for the NOTP (Network Object Transfer Protocol) transport layer. The default value is `16777216` (16MB).

### Set NOTP Max Packet Size

```bash
permguard config set notp-max-packet-size 16777216
```

### Get NOTP Max Packet Size

```bash
permguard config get notp-max-packet-size
```

<details>
  <summary>JSON Output</summary>

```bash
permguard config get notp-max-packet-size -o json
```

output:

```json
{"notp_max_packet_size":16777216}
```

</details>
