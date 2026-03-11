---
id: history
title: History
sidebar_label: History
sidebar_position: 7
description: Command reference for the `history` command of the Permguard CLI.
---

Using the `history` command, it is possible to show the history of the current checked out ledger.

```text
Usage:
  permguard history [flags]

Flags:
  -h, --help   help for history

Global Flags:
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Show the History

The `permguard history` command allows you to show the history of the current checked out ledger.

```bash
permguard history
```

output:

```bash
Your workspace history head/273165098782/fd1ac44e4afa4fc4beec622494d3175a:

commit c813fc8680f0bfc2dc721b383152e163b1afbe5566ef73e1cf6c79862f5e1367:
  - tree: c4107182d88b021fcc36245535e3fdf6a7610374acdcb5b588395912389de5b5
  - Committer date: 2024-12-24 16:51:57 +0100 CET
  - Author date: 2024-12-24 16:51:57 +0100 CET
commit 77a0af3b0189a2bc6e650aa6b0e6ea079b3e96a42290622b608267ca9d57249e:
  - tree: d8a1946ee2c6d16e6b30a16e761d766c46f7ad77a90db2d2522394905184198a
  - Committer date: 2024-12-24 16:50:04 +0100 CET
  - Author date: 2024-12-24 16:50:04 +0100 CET
commit 06e28881c876e9b08c3afb6430b18e85bb2491bf567a40607bd8a57befe82e99:
  - tree: c4107182d88b021fcc36245535e3fdf6a7610374acdcb5b588395912389de5b5
  - Committer date: 2024-12-24 16:48:58 +0100 CET
  - Author date: 2024-12-24 16:48:58 +0100 CET

total 3
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard history --output json
```

output:

```json
{
  "commits": [
    {
      "author": "unknown",
      "author_timestamp": "2024-12-24T16:51:57+01:00",
      "committer": "unknown",
      "committer_timestamp": "2024-12-24T16:51:57+01:00",
      "message": "cli commit",
      "oid": "c813fc8680f0bfc2dc721b383152e163b1afbe5566ef73e1cf6c79862f5e1367",
      "parent": "77a0af3b0189a2bc6e650aa6b0e6ea079b3e96a42290622b608267ca9d57249e",
      "tree": "c4107182d88b021fcc36245535e3fdf6a7610374acdcb5b588395912389de5b5"
    },
    {
      "author": "unknown",
      "author_timestamp": "2024-12-24T16:50:04+01:00",
      "committer": "unknown",
      "committer_timestamp": "2024-12-24T16:50:04+01:00",
      "message": "cli commit",
      "oid": "77a0af3b0189a2bc6e650aa6b0e6ea079b3e96a42290622b608267ca9d57249e",
      "parent": "06e28881c876e9b08c3afb6430b18e85bb2491bf567a40607bd8a57befe82e99",
      "tree": "d8a1946ee2c6d16e6b30a16e761d766c46f7ad77a90db2d2522394905184198a"
    },
    {
      "author": "unknown",
      "author_timestamp": "2024-12-24T16:48:58+01:00",
      "committer": "unknown",
      "committer_timestamp": "2024-12-24T16:48:58+01:00",
      "message": "cli commit",
      "oid": "06e28881c876e9b08c3afb6430b18e85bb2491bf567a40607bd8a57befe82e99",
      "parent": "0000000000000000000000000000000000000000000000000000000000000000",
      "tree": "c4107182d88b021fcc36245535e3fdf6a7610374acdcb5b588395912389de5b5"
    }
  ]
}
```

</details>
