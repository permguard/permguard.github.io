---
id: command-line-workspace-objects
title: Objects
sidebar_label: Objects
sidebar_position: 20208
description: Command reference for the `objects` command of the Permguard CLI.
---

Using the `objects` command, it is possible to manage the object store.

```text
Usage:
  permguard objects [flags]
  permguard objects [command]

Available Commands:
  cat         Cat the object content

Flags:
      --all       all object types
      --blob      objects of the blob type
      --code      include objects from the code store
      --commit    objects of the commit type
  -h, --help      help for objects
      --objects   include objects from the object store
      --tree      objects of the tree type

Global Flags:
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")

Use "permguard objects [command] --help" for more information about a command.
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Get All Objects

The `permguard objects` command allows for the retrieval of all object store items.

```bash
permguard objects --all
```

output:

```bash
Your workspace objects:

  - 007867724d1aa801216d92d8d08ed2269a55e495575aceb1f46cded8594159ee blob schema
  - 06e28881c876e9b08c3afb6430b18e85bb2491bf567a40607bd8a57befe82e99 commit
  - 2597a54653b09188bf613a24e6a64100a1b14612ffed3bd8558dfc24dd63a34f blob assign-role-branch
  - 77a0af3b0189a2bc6e650aa6b0e6ea079b3e96a42290622b608267ca9d57249e commit
  - 8a169320102ba429b4f7c0a5a9cde6e9bf2ace6335af3b57b11970718c05aa80 blob view-branch-inventory-auditor
  - b68cc9766a0fa2568ffe9dfd90e8704bfdadd8ef03207a105d515a4c25d3f4e4 blob assign-role-branch
  - c4107182d88b021fcc36245535e3fdf6a7610374acdcb5b588395912389de5b5 tree
  - c813fc8680f0bfc2dc721b383152e163b1afbe5566ef73e1cf6c79862f5e1367 commit
  - d8a1946ee2c6d16e6b30a16e761d766c46f7ad77a90db2d2522394905184198a tree

total 9, commit 3, tree 2, blob 4
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard objects --all --output json
```

output:

```json
{
  "objects": [
    {
      "oid": "007867724d1aa801216d92d8d08ed2269a55e495575aceb1f46cded8594159ee",
      "oname": "schema",
      "osize": 2364,
      "otype": "blob"
    },
    {
      "oid": "06e28881c876e9b08c3afb6430b18e85bb2491bf567a40607bd8a57befe82e99",
      "osize": 248,
      "otype": "commit"
    },
    {
      "oid": "2597a54653b09188bf613a24e6a64100a1b14612ffed3bd8558dfc24dd63a34f",
      "oname": "assign-role-branch",
      "osize": 777,
      "otype": "blob"
    },
    {
      "oid": "77a0af3b0189a2bc6e650aa6b0e6ea079b3e96a42290622b608267ca9d57249e",
      "osize": 248,
      "otype": "commit"
    },
    {
      "oid": "8a169320102ba429b4f7c0a5a9cde6e9bf2ace6335af3b57b11970718c05aa80",
      "oname": "view-branch-inventory-auditor",
      "osize": 372,
      "otype": "blob"
    },
    {
      "oid": "b68cc9766a0fa2568ffe9dfd90e8704bfdadd8ef03207a105d515a4c25d3f4e4",
      "oname": "assign-role-branch",
      "osize": 778,
      "otype": "blob"
    },
    {
      "oid": "c4107182d88b021fcc36245535e3fdf6a7610374acdcb5b588395912389de5b5",
      "osize": 411,
      "otype": "tree"
    },
    {
      "oid": "c813fc8680f0bfc2dc721b383152e163b1afbe5566ef73e1cf6c79862f5e1367",
      "osize": 248,
      "otype": "commit"
    },
    {
      "oid": "d8a1946ee2c6d16e6b30a16e761d766c46f7ad77a90db2d2522394905184198a",
      "osize": 411,
      "otype": "tree"
    }
  ]
}
```

</details>
