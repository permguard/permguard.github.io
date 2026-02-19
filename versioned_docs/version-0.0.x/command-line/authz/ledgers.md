---
id: command-line-authz-ledgers
title: Ledgers
sidebar_label: Ledgers
sidebar_position: 20102
description: Command reference for the `ledgers` command of the Permguard CLI.
---

Using the `ledgers` command, it is possible to manage Ledgers on the remote server.

```text
Usage:
  permguard authz ledgers [flags]
  permguard authz ledgers [command]

Available Commands:
  create      Create a ledger
  delete      Delete a ledger
  list        List ledgers
  update      Update a ledger

Flags:
      --zone-id int    zone id
  -h, --help          help for ledgers

Global Flags:
  -o, --output string   output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")
  -v, --verbose         true for verbose output

Use "Permguard authz ledgers [command] --help" for more information about a command.
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Create an Ledger

The `permguard authz ledgers create` command allows to create a ledger for the mandatory input zone and name.

```bash
permguard authz ledgers create --zone-id 273165098782 --name pharmaauthzflow
```

output:

```bash
668f3771eacf4094ba8a80942ea5fd3f: pharmaauthzflow
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard authz ledgers create --zone-id 273165098782 --name pharmaauthzflow --output json
```

output:

```json
{
  "ledgers": [
    {
      "ledger_id": "668f3771eacf4094ba8a80942ea5fd3f",
      "created_at": "2024-08-25T14:50:38.003Z",
      "updated_at": "2024-08-25T14:50:38.003Z",
      "zone_id": 273165098782,
      "name": "pharmaauthzflow"
    }
  ]
}
```

</details>

## Get All Ledgers

The `permguard authz ledgers list` command allows for the retrieval of all ledgers.

```bash
permguard authz ledgers list --zone-id 273165098782
```

output:

```bash
d02af7e50a7b462cb496aa6ddeb4275e: pharmaauthzflow
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard authz ledgers list --zone-id 273165098782 --output json
```

output:

```json
{
  "ledgers": [
    {
      "ledger_id": "d02af7e50a7b462cb496aa6ddeb4275e",
      "created_at": "2024-12-25T08:49:14.467Z",
      "updated_at": "2024-12-25T08:49:14.467Z",
      "zone_id": 727373447775,
      "name": "727373447775",
      "kind": "policy",
      "ref": "0000000000000000000000000000000000000000000000000000000000000000"
    }
  ]
}
```

</details>
