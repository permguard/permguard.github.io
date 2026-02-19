---
id: command-line-workspace-checkout
title: Checkout
sidebar_label: Checkout
sidebar_position: 20203
description: Command reference for the `checkout` command of the Permguard CLI.
---

Using the `checkout` command, it is possible to checkout out a remote ledger locally.

```text
Usage:
  permguard checkout [flags]

Flags:
  -h, --help   help for checkout

Global Flags:
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Check out a ledger

The `permguard checkout` command allows you to check out a remote ledger locally.

```bash
permguard checkout origin/273165098782/pharmagovflow
```

output:

```bash
Ledger pharmagovflow has been added.
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard checkout origin/273165098782/pharmagovflow --output json
```

output:

```json
{
  "ledgers": [
    {
      "is_head": true,
      "ref": "refs/remotes/origin/273165098782/fd1ac44e4afa4fc4beec622494d3175a",
      "ledger_id": "fd1ac44e4afa4fc4beec622494d3175a",
      "ledger_uri": "origin/273165098782/branches"
    }
  ]
}
```

</details>
