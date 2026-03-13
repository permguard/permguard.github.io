---
id: objects
title: Objects
sidebar_label: Objects
sidebar_position: 8
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
  -o, --output string          output format (default "terminal")
      --spiffe-enabled           enable native SPIFFE mTLS via Workload API
      --spiffe-endpoint string   SPIFFE Workload API socket path (defaults to SPIFFE_ENDPOINT_SOCKET env)
      --tls-ca-file string       path to CA certificate for server verification (PEM)
      --tls-cert-file string   path to client certificate for mTLS (PEM)
      --tls-key-file string    path to client private key for mTLS (PEM)
      --tls-skip-verify        skip server certificate verification (insecure, dev only)
  -v, --verbose                true for verbose output
  -w, --workdir string         workdir (default ".")

Use "permguard objects [command] --help" for more information about a command.
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

<!-- updated: OID example values changed from hex SHA256 to CIDv1 (dag-cbor, sha2-256) format -->

## Get All Objects

The `permguard objects` command allows for the retrieval of all object store items.

```bash
permguard objects --all
```

output:

```bash
Your workspace objects:

  - bafyreiaapbtxeti2vaasc3ms3dii5urgtjk6jfkxllhld5dm33mfsqkz5y blob schema
  - bafyreiag4keidsdw5gyiyox3mqylddufxmsjdp2wpjaga66yuv5672bote commit
  - bafyreibfs6sumu5qsgel6yj2ettkmqiaugyumex75u55qvmn7qsn2y5dj4 blob assign-role-branch
  - bafyreidxucxtwamjuk6g4ziku2yon2qhtm7jnjbcsbrcwyecm7fj2vzety commit
  - bafyreiekc2jsaebluqu3j56auwu43zxjx4vm4yzvv45vpmizobyyybnkqa blob view-branch-inventory-auditor
  - bafyreifwrtexm2qpujli77u57wioq4cl7ww5r3ydeb5baxkrljgclu7u4q blob assign-role-branch
  - bafyreigecbyyfwelaip4ynreku26h7pwu5qqg5fm3s23lcbzlejdrhpfwu tree
  - bafyreigicp6inahqx7bny4q3hayvfyldwgx34vlg55z6dt3mpgdc6xqtm4 commit
  - bafyreigyugkg5ywg2fxgwmfbnz3b25tmi332255jbwzneurdssifdbazri tree

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
      "oid": "bafyreiaapbtxeti2vaasc3ms3dii5urgtjk6jfkxllhld5dm33mfsqkz5y",
      "oname": "schema",
      "osize": 2364,
      "otype": "blob"
    },
    {
      "oid": "bafyreiag4keidsdw5gyiyox3mqylddufxmsjdp2wpjaga66yuv5672bote",
      "osize": 248,
      "otype": "commit"
    },
    {
      "oid": "bafyreibfs6sumu5qsgel6yj2ettkmqiaugyumex75u55qvmn7qsn2y5dj4",
      "oname": "assign-role-branch",
      "osize": 777,
      "otype": "blob"
    },
    {
      "oid": "bafyreidxucxtwamjuk6g4ziku2yon2qhtm7jnjbcsbrcwyecm7fj2vzety",
      "osize": 248,
      "otype": "commit"
    },
    {
      "oid": "bafyreiekc2jsaebluqu3j56auwu43zxjx4vm4yzvv45vpmizobyyybnkqa",
      "oname": "view-branch-inventory-auditor",
      "osize": 372,
      "otype": "blob"
    },
    {
      "oid": "bafyreifwrtexm2qpujli77u57wioq4cl7ww5r3ydeb5baxkrljgclu7u4q",
      "oname": "assign-role-branch",
      "osize": 778,
      "otype": "blob"
    },
    {
      "oid": "bafyreigecbyyfwelaip4ynreku26h7pwu5qqg5fm3s23lcbzlejdrhpfwu",
      "osize": 411,
      "otype": "tree"
    },
    {
      "oid": "bafyreigicp6inahqx7bny4q3hayvfyldwgx34vlg55z6dt3mpgdc6xqtm4",
      "osize": 248,
      "otype": "commit"
    },
    {
      "oid": "bafyreigyugkg5ywg2fxgwmfbnz3b25tmi332255jbwzneurdssifdbazri",
      "osize": 411,
      "otype": "tree"
    }
  ]
}
```

</details>
