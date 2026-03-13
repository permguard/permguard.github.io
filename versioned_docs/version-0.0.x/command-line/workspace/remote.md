---
id: remote
title: Remote
sidebar_label: Remote
sidebar_position: 2
description: Command reference for the `remote` command of the Permguard CLI.
---

Using the `remote` command, it is possible to manage remote servers.

```text
Usage:
  permguard remote [flags]
  permguard remote [command]

Available Commands:
  add         add a new remote ledger to track and interact with
  remove      remove a remote ledger from the configuration

Flags:
  -h, --help   help for remote

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

Use "permguard remote [command] --help" for more information about a command.
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Create a Remote

The `permguard remote add` command allows to add a remote server.

```bash
permguard remote add origin localhost
```

output:

```bash
Remote origin has been added.
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard remote add origin localhost --output json
```

output:

```json
{
  "remotes": [
    {
      "zap_port": 9091,
      "zap_server": "localhost",
      "pap_port": 9092,
      "pap_server": "localhost",
      "remote": "origin"
    }
  ]
}
```

</details>

## Get All Remotes

The `permguard remote` command allows for the retrieval of all remote servers.

```bash
permguard remote
```

output:

```bash
Your workspace configured remotes:
  - origin
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard remote --output json
```

output:

```json
{
  "remotes": [
    {
      "zap_port": 9091,
      "zap_server": "localhost",
      "pap_port": 9092,
      "pap_server": "localhost",
      "remote": "origin"
    }
  ]
}
```

</details>
