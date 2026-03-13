---
id: refresh
title: Refresh
sidebar_label: Refresh
sidebar_position: 9
description: Command reference for the `refresh` command of the Permguard CLI.
---

Using the `refresh` command, it is possible to scan source files in the current workspace and synchronize the local state.

```text
Usage:
  permguard refresh [flags]

Flags:
  -h, --help   help for refresh

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
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Refresh the workspace state

The `permguard refresh` command allows you to scan source files in the current workspace and synchronize the local state.

```bash
permguard refresh
```

output:

```bash
Your workspace has errors.
Please validate and fix the errors to proceed.
Failed to refresh the current workspace.
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard refresh --output json
```

output:

```json
{
  "error": "cli: validation errors found in code files within the workspace. please check the logs for more details\ncli: failed to validate the workspace",
  "validation_errors": {
    "platform/platform-policies.cedar": {
      "1": {
        "path": "platform/platform-policies.cedar",
        "section": "parser error: parse error at <input>:15:5 \"n\": exact got whe want ;"
      }
    }
  }
}
```

</details>
