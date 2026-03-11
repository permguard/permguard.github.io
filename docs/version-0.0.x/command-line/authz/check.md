---
id: check
title: Check
sidebar_label: Check
sidebar_position: 1
description: Command reference for the `check` command of the Permguard CLI.
---

Using the `check` command, it is possible to check authz requests.

```text
Usage:
  permguard authz check [flags]

Flags:
      --current-workspace        resolve zone-id and policy-store-id from the current workspace
  -h, --help                     help for check
      --policy-store-id string   override authorization_model.policy_store.id
      --zone-id int              override authorization_model.zone_id

Global Flags:
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Check an Authorization Request

The `permguard authz check` command allows to check an authorization request.

```bash
permguard authz check --zone-id 273165098782 /path/to/authorization_request.json
```

Below are other methods to pass the input:

```bash
permguard authz check --zone-id 273165098782 < /path/to/authorization_request.json
```

```bash
cat /path/to/authorization_request.json | permguard authz check --zone-id 273165098782
```

output:

```bash
Authorization check response: true
```

## Override Authorization Model

The `--zone-id` and `--policy-store-id` flags allow to override the values defined in the authorization request file.

```bash
permguard authz check --zone-id 273165098782 --policy-store-id 04921d7814134921916972693bb3351f /path/to/authorization_request.json
```

## Use Current Workspace

The `--current-workspace` flag resolves `zone-id` and `policy-store-id` from the current workspace, overriding the values defined in the authorization request file.

```bash
permguard authz check --current-workspace /path/to/authorization_request.json
```

The explicit `--zone-id` and `--policy-store-id` flags take precedence over `--current-workspace` if both are provided.

```bash
permguard authz check --current-workspace --zone-id 273165098782 /path/to/authorization_request.json
```

The priority order is:

```text
file → --current-workspace → --zone-id / --policy-store-id
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
  permguard authz check --zone-id 273165098782 /path/to/authorization_request.json -o json
```

  output:

```json
  {
    "authorization_check": {
      "decision": true,
      "context": {},
      "evaluations": [
        {
          "decision": true,
          "context": {}
        }
      ]
    }
  }
```

</details>
