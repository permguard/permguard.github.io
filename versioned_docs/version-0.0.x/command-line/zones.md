---
id: command-line-zones
title: Zones
sidebar_label: Zones
sidebar_position: 20003
description: Command reference for the `zones` command of the Permguard CLI.
---

Using the `zones` command, it is possible to manage Zones on the remote server.

```text
This command manages zones.

Usage:
  permguard zones [flags]
  permguard zones [command]

Available Commands:
  create      Create a zone
  delete      Delete a zone
  list        List zones
  update      Update a zone

Flags:
  -h, --help   help for zones

Global Flags:
  -o, --output string   output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")

Use "Permguard zones [command] --help" for more information about a command.
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Create a zone

The `permguard zones create` command allows to create a zone for the input name.

```bash
permguard zones create --name pharmagovflow-dev
```

output:

```bash
 273165098782: pharmagovflow-dev
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard zones create --name pharmagovflow-dev --output json
```

output:

```json
{
  "zones": [
    {
      "zone_id": 273165098782,
      "created_at": "2024-08-25T14:07:59.634Z",
      "updated_at": "2024-08-25T14:07:59.634Z",
      "name": "pharmagovflow-dev"
    }
  ]
}
```

</details>

## Fetch Zones

The `permguard zones list` command allows for the retrieval of all zones.

```bash
permguard zones list
```

output:

```bash
273165098782: pharmagovflow-dev
534434453770: pharmagovflow-uat
627303999986: pharmagovflow-prod
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard zones list --output json
```

output:

```json
{
  "zones": [
    {
      "zone_id": 273165098782,
      "created_at": "2024-08-25T14:07:07.04Z",
      "updated_at": "2024-08-25T14:07:07.04Z",
      "name": "pharmagovflow-dev"
    },
    {
      "zone_id": 534434453770,
      "created_at": "2024-08-25T14:07:59.634Z",
      "updated_at": "2024-08-25T14:07:59.634Z",
      "name": "pharmagovflow-uat"
    },
    {
      "zone_id": 627303999986,
      "created_at": "2024-08-25T14:08:58.619Z",
      "updated_at": "2024-08-25T14:08:58.619Z",
      "name": "pharmagovflow-prod"
    }
  ]
}
```

</details>
