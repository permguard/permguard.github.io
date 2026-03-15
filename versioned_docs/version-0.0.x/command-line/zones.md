---
id: zones
title: Zones
sidebar_label: Zones
sidebar_position: 3
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
  -o, --output string          output format (default "terminal")
      --spiffe-enabled           enable native SPIFFE mTLS via Workload API
      --spiffe-endpoint string   SPIFFE Workload API socket path (defaults to SPIFFE_ENDPOINT_SOCKET env)
      --tls-ca-file string       path to CA certificate for server verification (PEM)
      --tls-cert-file string   path to client certificate for mTLS (PEM)
      --tls-key-file string    path to client private key for mTLS (PEM)
      --tls-skip-verify        skip server certificate verification (insecure, dev only)
  -v, --verbose                true for verbose output
  -w, --workdir string         workdir (default ".")

Use "permguard zones [command] --help" for more information about a command.
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Create a zone

The `permguard zones create` command allows to create a zone for the input name.

```bash
permguard zones create platform-admin-zone
```

output:

```bash
 273165098782: platform-admin-zone
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard zones create platform-admin-zone --output json
```

output:

```json
{
  "zones": [
    {
      "zone_id": 273165098782,
      "created_at": "2024-08-25T14:07:59.634Z",
      "updated_at": "2024-08-25T14:07:59.634Z",
      "name": "platform-admin-zone"
    }
  ]
}
```

</details>

## Delete a Zone

The `permguard zones delete` command allows to delete an existing zone.
The `--zone-id` flag is **required**: the command does not accept positional arguments.

```bash
permguard zones delete --zone-id 273165098782
```

output:

```bash
 273165098782: platform-admin-zone
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard zones delete --zone-id 273165098782 --output json
```

output:

```json
{
  "zones": [
    {
      "zone_id": 273165098782,
      "created_at": "2024-08-25T14:07:59.634Z",
      "updated_at": "2024-08-25T14:07:59.634Z",
      "name": "platform-admin-zone"
    }
  ]
}
```

</details>

## Update a Zone

The `permguard zones update` command allows to update the name of an existing zone.
The `--zone-id` flag is **required**.

```bash
permguard zones update --zone-id 273165098782 platform-admin-zone-v2
```

output:

```bash
 273165098782: platform-admin-zone-v2
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard zones update --zone-id 273165098782 platform-admin-zone-v2 --output json
```

output:

```json
{
  "zones": [
    {
      "zone_id": 273165098782,
      "created_at": "2024-08-25T14:07:59.634Z",
      "updated_at": "2024-08-25T14:10:12.301Z",
      "name": "platform-admin-zone-v2"
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
273165098782: platform-admin-zone
534434453770: root-uat
627303999986: root-prod
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
      "name": "platform-admin-zone"
    },
    {
      "zone_id": 534434453770,
      "created_at": "2024-08-25T14:07:59.634Z",
      "updated_at": "2024-08-25T14:07:59.634Z",
      "name": "root-uat"
    },
    {
      "zone_id": 627303999986,
      "created_at": "2024-08-25T14:08:58.619Z",
      "updated_at": "2024-08-25T14:08:58.619Z",
      "name": "root-prod"
    }
  ]
}
```

</details>
