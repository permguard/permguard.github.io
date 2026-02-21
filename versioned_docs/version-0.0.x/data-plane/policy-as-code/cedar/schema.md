---
id: schema
title: Cedar Schema
sidebar_label: Cedar Schema
sidebar_position: 4
description: This section provides instructions for using the Cedar Schema.
---

The **schema** follows the official `JSON Schema` specification, available in the <a href="https://docs.cedarpolicy.com/schema/json-schema.html" target="_blank" rel="noopener noreferrer">official documentation</a>.

Permguard allow the creation of a schema file to be named `schema.json` and placed in the root of the workspace.

Below is an example of a directory structure that includes the schema file:

```plaintext
.
├── .permguard
├── schema.json
```

Below is a sample schema:

```yaml
{
    "PharmaAuthZFlow::Platform": {
      "entityTypes": {
        "Branch": {
          "shape": {
            "type": "Record",
            "attributes": {
              "city": {
                "type": "String"
              }
            }
          },
          "memberOfTypes": [
            "Account"
          ]
        },
        "Account": {
          "shape": {
            "type": "Record",
            "attributes": {
              "active": {
                "type": "Boolean"
              }
            }
          },
          "memberOfTypes": []
        }
      },
      "actions": {
        "create": {
          "appliesTo": {
            "principalTypes": [
              "Permguard::Identity::User",
              "Permguard::Identity::Workload",
              "Permguard::Identity::Attribute"
            ],
            "resourceTypes": [
              "Account",
              "Branch"
            ]
          }
        },
        "update": {
          "appliesTo": {
            "principalTypes": [
              "Permguard::Identity::User",
              "Permguard::Identity::Workload",
              "Permguard::Identity::Attribute"
            ],
            "resourceTypes": [
              "Account",
              "Branch"
            ]
          }
        },
        "delete": {
          "appliesTo": {
            "principalTypes": [
              "Permguard::Identity::User",
              "Permguard::Identity::Workload",
              "Permguard::Identity::Attribute"
            ],
            "resourceTypes": [
              "Account",
              "Branch"
            ]
          }
        },
        "view": {
          "appliesTo": {
            "principalTypes": [
              "Permguard::Identity::User",
              "Permguard::Identity::Workload",
              "Permguard::Identity::Attribute"
            ],
            "resourceTypes": [
              "Account",
              "Branch"
            ],
            "context": {
              "type": "Record",
              "attributes": {
                "isSuperUser": {
                  "type": "Boolean",
                  "required": true
                }
              }
            }
          }
        }
      }
    }
  }
```
