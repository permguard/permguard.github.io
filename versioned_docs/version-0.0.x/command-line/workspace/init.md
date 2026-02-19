---
id: command-line-workspace-init
title: Init
sidebar_label: Init
sidebar_position: 301
description: Command reference for the `ledgers` command of the Permguard CLI.
---

Using the `init` command, it is possible to initialize a new permguard workspace.

```text
Usage:
  permguard init [flags]

Flags:
  -h, --help   help for init

Global Flags:
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Initialize a workspace

The `permguard init` command initializes a new permguard workspace.

```bash
permguard init
```

output:

```bash
Initialized empty permguard ledger in '.'.
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard init --output json
```

output:

```json
{
  "workspace": {
    "policy_engine": {
      "language": "cedar"
    },
    "root": "/Users/nicolagallo/source/nitro/permguard-workspace/ledgers/playground-cedar"
  }
}
```

</details>
