---
id: command-line
title: Use the Permguard CLI
sidebar_label: Use the Permguard CLI
sidebar_position: 1
description: Command-Line interface reference for version 0.0.x
---

The **Permguard CLI** provides a robust toolset for interacting with Servers.

The CLI is designed for two primary scenarios.

- In the context of **Server Administration**: it enables the management of `zones` and `ledgers` directly on the remote server. This allows administrators to maintain and configure the system efficiently.
- For developers, the CLI supports a complete **Policy-as-Code Workspace**. It facilitates the local development of configuration artifacts such as `schemas`, `namespaces`, `resources`, `policies`, and `permissions`, integrating the essential toolchain required for the development lifecycle. These locally created artifacts can then be seamlessly applied to the remote server, ensuring a consistent and scalable approach to policy deployment across environments.

To view a list of commands available in the current Permguard version, users can run the **permguard** command without any additional arguments.

```txt
Usage:
  permguard [flags]
  permguard [command]

Available Commands:
  apply       Apply the plan to the remote ledger
  zone        Manage zones on the remote server
  authz       Manage ledgers on the remote server
  checkout    Check out the contents of a remote ledger to the local permguard workspace
  clone       Clone a remote ledger to the local permguard workspace
  completion  Generate the autocompletion script for the specified shell
  config      Configure the command line settings
  help        Help about any command
  history     Show the history
  init        Initialize a permguard workspace
  ledger      Manage the ledger
  objects     Manage the object store
  plan        Generate a plan of changes to apply to the remote ledger based on the differences between the local and remote states
  pull        Fetch the latest changes from the remote ledger and constructs the remote state.
  refresh     Scan source files in the current workspace and synchronizes the local state
  remote      Manage remote server for tracking and interaction
  validate    Validate the local state for consistency and correctness

Flags:
  -h, --help                   help for permguard
  -o, --output string          output format (default "terminal")
      --spiffe-enabled           enable native SPIFFE mTLS via Workload API
      --spiffe-endpoint string   SPIFFE Workload API socket path (defaults to SPIFFE_ENDPOINT_SOCKET env)
      --tls-ca-file string       path to CA certificate for server verification (PEM)
      --tls-cert-file string   path to client certificate for mTLS (PEM)
      --tls-key-file string    path to client private key for mTLS (PEM)
      --tls-skip-verify        skip server certificate verification (insecure, dev only)
  -v, --verbose                true for verbose output
  -w, --workdir string         workdir (default ".")

Use "permguard [command] --help" for more information about a command.
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

To obtain detailed help for a specific command, users can utilize the --help option alongside the relevant subcommand.
For instance, to access help information about the `zones` subcommand, users can execute the following command:

```bash
permguard zones --help
```

It's important to note that the output of the command line can be either in the default `TERMINAL` or `JSON` format by setting the output flag.

For instance to list all zones in the default terminal format, users can execute the following command:

```bash
permguard zones list
```

To list all zones in JSON format, users can execute the following command:

```bash
permguard zones list --output json
```

## Transport Security

The Permguard Server supports five **TLS modes** to secure gRPC communication between the CLI and the server. The transport security mode is configured on the **server side** and determines how clients must connect.

| Mode | Description |
|------|-------------|
| `none` | Plaintext communication with no encryption. Suitable for local development. The CLI connects using the `grpc://` scheme. |
| `tls` | Server-side TLS. The server presents a certificate and encrypts all traffic. The CLI connects using the `grpcs://` scheme. For self-signed or auto-generated certificates, use `--tls-skip-verify`. |
| `mtls` | Mutual TLS. Both server and client present certificates. The CLI connects using `grpcs://` and must provide `--tls-cert-file` and `--tls-key-file`. |
| `external` | Mutual TLS using certificates provisioned by an external authority (e.g., SPIRE/SPIFFE, HashiCorp Vault, cert-manager). The server requires `cert-file`, `key-file`, and `ca-file` — but these are automatically managed by the infrastructure. The CLI connects using `grpcs://`. |
| `spiffe` | Native SPIFFE mTLS via the Workload API. The server connects directly to the SPIRE agent — no certificate files or sidecar needed. The CLI connects using `grpcs://` with `--spiffe-enabled`. |

### Connecting to a Server with TLS Disabled (none)

When the server runs with `--server-tls-mode=none` (the default), no encryption is applied. The CLI connects using the `grpc://` scheme:

```bash
permguard config set zap-endpoint grpc://localhost:9091
permguard zones list
```

### Connecting to a Server with TLS Enabled (tls)

When the server runs with `--server-tls-mode=tls`, traffic is encrypted. The CLI must use the `grpcs://` scheme.

For servers using **auto-generated or self-signed certificates**, add `--tls-skip-verify`:

```bash
permguard config set zap-endpoint grpcs://localhost:9091
permguard zones list --tls-skip-verify
```

For servers using **CA-signed certificates**, provide the CA file:

```bash
permguard zones list --tls-ca-file /path/to/ca.pem
```

### Connecting to a Server with mTLS Enabled (mtls)

When the server runs with `--server-tls-mode=mtls`, both sides must authenticate. The CLI provides its client certificate and key:

```bash
permguard config set zap-endpoint grpcs://localhost:9091
permguard zones list \
  --tls-cert-file /path/to/client-cert.pem \
  --tls-key-file /path/to/client-key.pem \
  --tls-ca-file /path/to/ca.pem
```

### Connecting to a Server with External TLS (external)

When the server runs with `--server-tls-mode=external`, it performs mutual TLS using certificates provisioned by an external authority (e.g., SPIRE SVIDs, Vault-injected certs). The server requires `cert-file`, `key-file`, and `ca-file`, but the infrastructure manages them. The CLI connects using `grpcs://` and provides the trust bundle:

```bash
permguard config set zap-endpoint grpcs://permguard.example.com:9091
permguard zones list \
  --tls-cert-file /path/to/client-svid.pem \
  --tls-key-file /path/to/client-svid-key.pem \
  --tls-ca-file /path/to/bundle.pem
```

### Connecting to a Server with Native SPIFFE (spiffe)

When the server runs with `--server-tls-mode=spiffe`, it performs mutual TLS natively via the SPIFFE Workload API. From inside a pod with a SPIFFE identity:

```bash
permguard config set zap-endpoint grpcs://permguard-spiffe:9091
permguard zones list --spiffe-enabled
```

No certificate files are needed — the CLI obtains its X.509 SVID automatically from the Workload API.

:::info
If you see an error like `connection reset by peer` or `error reading server preface`, it usually means you are connecting with `grpc://` to a TLS-enabled server. Switch to `grpcs://` and, if needed, add `--tls-skip-verify`.
:::
