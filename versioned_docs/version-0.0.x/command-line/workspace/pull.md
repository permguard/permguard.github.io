---
id: pull
title: Pull
sidebar_label: Pull
sidebar_position: 6
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

<!-- updated: OID example values changed from hex SHA256 to CIDv1 (dag-cbor, sha2-256) format -->

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
      "language_version": "*",
      "language_type": "schema",
      "language": "cedar-json",
      "oid": "bafyreiaapbtxeti2vaasc3ms3dii5urgtjk6jfkxllhld5dm33mfsqkz5y",
      "oname": "schema",
      "type": "blob"
    },
    {
      "code_id": "assign-role-branch",
      "code_type": "policy",
      "language_version": "*",
      "language_type": "policy",
      "language": "cedar-json",
      "oid": "bafyreibfs6sumu5qsgel6yj2ettkmqiaugyumex75u55qvmn7qsn2y5dj4",
      "oname": "assign-role-branch",
      "type": "blob"
    },
    {
      "code_id": "view-branch-inventory-auditors",
      "code_type": "policy",
      "language_version": "*",
      "language_type": "policy",
      "language": "cedar-json",
      "oid": "bafyreicvh2o5kwyfsgjq5qcdxse4dkkbbvzxknxjim6ibbc35kmw27fbne",
      "oname": "view-branch-inventory-auditors",
      "type": "blob"
    }
  ],
  "local_commit_id": "bafyreifhg6mludogohvmaxa57fd6lrmhgeerc77bjhvj7schkves4ni2i4",
  "local_commits_count": 1,
  "remote_commit_id": "bafyreifhg6mludogohvmaxa57fd6lrmhgeerc77bjhvj7schkves4ni2i4",
  "remote_commits_count": 1
}
```

</details>
