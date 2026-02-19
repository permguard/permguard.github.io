---
id: command-line-authz-check
title: Check
sidebar_label: Check
sidebar_position: 20101
description: Command reference for the `check` command of the Permguard CLI.
---

Using the `check` command, it is possible to check authz requests.

```text
Usage:
  permguard authz check [flags]

Flags:
      --zone-id int    zone id
  -h, --help          help for check

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
