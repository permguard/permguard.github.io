---
id: plan
title: Plan
sidebar_label: Plan
sidebar_position: 11
description: Command reference for the `plan` command of the Permguard CLI.
---

Using the `plan` command, it is possible to  generate a plan of changes to apply to the remote ledger based on the differences between the local and remote states.

```text
Usage:
  permguard plan [flags]

Flags:
  -h, --help   help for plan

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
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

<!-- updated: OID example values changed from hex SHA256 to CIDv1 (dag-cbor, sha2-256) format -->

## Plan the local state

The `permguard plan` command allows you to generate a plan of changes to apply to the remote ledger based on the differences between the local and remote states.

```bash
permguard plan
```

output:

```bash
Initiating the planning process for ledger head/273165098782/fd1ac44e4afa4fc4beec622494d3175a.
Planning process completed successfully.
The following changes have been identified and are ready to be applied:

  + bafyreiekc2jsaebluqu3j56auwu43zxjx4vm4yzvv45vpmizobyyybnkqa view-branch-inventory-auditor
  + bafyreibfs6sumu5qsgel6yj2ettkmqiaugyumex75u55qvmn7qsn2y5dj4 assign-role-branch
  + bafyreiaapbtxeti2vaasc3ms3dii5urgtjk6jfkxllhld5dm33mfsqkz5y schema

unchanged 0, created 3, modified 0, deleted 0

Run the 'apply' command to apply the changes.
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard plan --output json
```

output:

```json
{
  "plan": {
    "create": [
      {
        "oname": "view-branch-inventory-auditor",
        "otype": "blob",
        "oid": "bafyreiekc2jsaebluqu3j56auwu43zxjx4vm4yzvv45vpmizobyyybnkqa",
        "codeid": "view-branch-inventory-auditor",
        "codetype": "policy",
        "language": "cedar-json",
        "languagetype": "policy",
        "languageversion": "*",
        "state": "create"
      },
      {
        "oname": "assign-role-branch",
        "otype": "blob",
        "oid": "bafyreibfs6sumu5qsgel6yj2ettkmqiaugyumex75u55qvmn7qsn2y5dj4",
        "codeid": "assign-role-branch",
        "codetype": "policy",
        "language": "cedar-json",
        "languagetype": "policy",
        "languageversion": "*",
        "state": "create"
      },
      {
        "oname": "schema",
        "otype": "blob",
        "oid": "bafyreiaapbtxeti2vaasc3ms3dii5urgtjk6jfkxllhld5dm33mfsqkz5y",
        "codeid": "schema",
        "codetype": "schema",
        "language": "cedar-json",
        "languagetype": "schema",
        "languageversion": "*",
        "state": "create"
      }
    ],
    "delete": [],
    "modify": [],
    "unchanged": []
  }
}
```

</details>
