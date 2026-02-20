---
id: command-line-workspace-ledger
title: Ledger
sidebar_label: Ledger
sidebar_position: 4
description: Command reference for the `ledger` command of the Permguard CLI.
---

Using the `ledgers` command, it is possible to manage locally checked out ledgers.

```text
Usage:
  permguard ledgers [flags]

Flags:
  -h, --help   help for ledger

Global Flags:
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Get All Ledgers

The `permguard ledgers` command allows for the retrieval of all locally checked out ledgers.

```bash
permguard ledgers
```

output:

```bash
Your workspace configured ledgers:

  - *origin/273165098782/pharmagovflow

```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard ledgers --output json
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
