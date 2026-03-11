---
id: init
title: Init
sidebar_label: Init
sidebar_position: 1
description: Command reference for the `init` command of the Permguard CLI.
---

Using the `init` command, it is possible to initialize a new permguard workspace.

```text
Usage:
  permguard init [flags]

Flags:
      --language string   specify the authz language of the workspace to initialize
      --authz-template string   specify the authz template of the workspace to initialize
  -h, --help                    help for init
      --ledger-id string        specify the ledger id
      --manifest                create a manifest file for the workspace
      --name string             specify the name of the workspace to initialize
      --zone-id int             specify the zone id

Global Flags:
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Initialize a Workspace

The `permguard init` command initializes a new permguard workspace.

```bash
permguard init
```

output:

```bash
Initialized empty permguard ledger in '.'.
```

## Initialize with a Name

```bash
permguard init --name myworkspace
```

## Initialize with Zone and Ledger

```bash
permguard init --zone-id 273165098782 --ledger-id 04921d7814134921916972693bb3351f
```

## Initialize with AuthZ Language and Template

```bash
permguard init --language cedar --authz-template default
```

## Initialize with Manifest

When `--manifest` is provided, a manifest file is created in the workspace.

```bash
permguard init --manifest
```

If `--manifest` is not provided, no manifest file is created.

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