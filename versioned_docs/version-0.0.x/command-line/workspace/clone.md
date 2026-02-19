---
id: command-line-workspace-clone
title: Clone
sidebar_label: Clone
sidebar_position: 20205
description: Command reference for the `clone` command of the Permguard CLI.
---

Using the `clone` command, it is possible to clone a remote ledger locally.

```text
Usage:
  permguard clone localhost[flags]

Flags:
      --zap int   zap port (default 9091)
  -h, --help      help for clone
      --pap int   pap port (default 9092)

Global Flags:
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Clone a ledger

The `permguard clone` command allows you to clone a remote ledger locally.

```bash
permguard clone localhost/273165098782/pharmaauthzflow
```

output:

```bash
Initialized empty permguard ledger in 'pharmaauthzflow'.
Remote origin has been added.
Ledger pharmaauthzflow has been added.
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard clone localhost/273165098782/pharmaauthzflow --output json
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
