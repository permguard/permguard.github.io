---
id: apply
title: Apply
sidebar_label: Apply
sidebar_position: 2
description: Command reference for the `apply` command of the Permguard CLI.
---

Using the `apply` command, it is possible to apply the plan to the remote ledger.

```text
Usage:
  permguard apply [flags]

Flags:
  -h, --help   help for apply

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

## Apply the local state

The `permguard apply` command allows you to apply the plan to the remote ledger.

```bash
permguard apply
```

output:

```bash
Initiating the planning process for ledger head/273165098782/fd1ac44e4afa4fc4beec622494d3175a.
Planning process completed successfully.
The following changes have been identified and are ready to be applied:

  + bafyreicvh2o5kwyfsgjq5qcdxse4dkkbbvzxknxjim6ibbc35kmw27fbne view-branch-inventory-auditors
  = bafyreide5rsd2b3vocfji4sw5di6xkeyugcotteee74yibev4x27aopgia assign-role-branch
  = bafyreiaapbtxeti2vaasc3ms3dii5urgtjk6jfkxllhld5dm33mfsqkz5y schema
  - bafyreiekc2jsaebluqu3j56auwu43zxjx4vm4yzvv45vpmizobyyybnkqa view-branch-inventory-auditor

unchanged 2, created 1, modified 0, deleted 1

Initiating the apply process for ledger head/273165098782/fd1ac44e4afa4fc4beec622494d3175a.
Apply process completed successfully.
Your workspace is synchronized with the remote ledger: head/273165098782/fd1ac44e4afa4fc4beec622494d3175a.
```

<details>
  <summary>
    JSON Output
  </summary>

```bash
permguard apply --output json
```

output:

```json
{
  "plan": {
    "create": [],
    "delete": [],
    "modify": [
      {
        "oname": "assign-role-branch",
        "otype": "blob",
        "oid": "bafyreibfs6sumu5qsgel6yj2ettkmqiaugyumex75u55qvmn7qsn2y5dj4",
        "codeid": "assign-role-branch",
        "codetype": "policy",
        "language": "cedar-json",
        "languagetype": "policy",
        "languageversion": "*",
        "state": "modify"
      }
    ],
    "unchanged": [
      {
        "oname": "view-branch-inventory-auditors",
        "otype": "blob",
        "oid": "bafyreicvh2o5kwyfsgjq5qcdxse4dkkbbvzxknxjim6ibbc35kmw27fbne",
        "codeid": "view-branch-inventory-auditors",
        "codetype": "policy",
        "language": "cedar-json",
        "languagetype": "policy",
        "languageversion": "*",
        "state": "unchanged"
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
        "state": "unchanged"
      }
    ]
  }
}
```

</details>
