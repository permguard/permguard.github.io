---
id: command-line-workspace-pull
title: Pull
sidebar_label: Pull
sidebar_position: 306
description: Command reference for the `pull` command of the Permguard CLI.
---

Using the `pull` command, it is possible to fetch the latest changes from the remote ledger and construct the remote state.

```text
Usage:
  permguard pull [flags]

Flags:
  -h, --help   help for pull

Global Flags:
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

## Pull a ledger

The `permguard pull` command allows you to fetch the latest changes from the remote ledger and construct the remote state.

```bash
permguard pull
```

output:

```bash
The local workspace is already fully up to date with the remote ledger.
Pull process completed successfully.
Your workspace is synchronized with the remote ledger: head/273165098782/9b3de5272b0447f2a8d1024937bdef11.
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard pull --output json
```

output:

```json
{
  "code_entries": [
    {
      "code_id": "schema",
      "code_type": "schema",
      "lanaguage_version": "*",
      "language_type": "schema",
      "language": "cedar-json",
      "oid": "007867724d1aa801216d92d8d08ed2269a55e495575aceb1f46cded8594159ee",
      "oname": "schema",
      "type": "blob"
    },
    {
      "code_id": "assign-role-branch",
      "code_type": "policy",
      "lanaguage_version": "*",
      "language_type": "policy",
      "language": "cedar-json",
      "oid": "2597a54653b09188bf613a24e6a64100a1b14612ffed3bd8558dfc24dd63a34f",
      "oname": "assign-role-branch",
      "type": "blob"
    },
    {
      "code_id": "view-branch-inventory-auditors",
      "code_type": "policy",
      "lanaguage_version": "*",
      "language_type": "policy",
      "language": "cedar-json",
      "oid": "553e9dd55b0591930ec043bc89c1a9410d737536e9433c80845bea996d7ca169",
      "oname": "view-branch-inventory-auditors",
      "type": "blob"
    }
  ],
  "local_commit_id": "a73798ba0dc671eac05c1df947e5c5873109117fe149ea9fc84755492e351a47",
  "local_commits_count": 1,
  "remote_commit_id": "a73798ba0dc671eac05c1df947e5c5873109117fe149ea9fc84755492e351a47",
  "remote_commits_count": 1
}
```

</details>
