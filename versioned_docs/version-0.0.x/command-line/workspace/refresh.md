---
id: command-line-workspace-refresh
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
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")
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
