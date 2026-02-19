---
id: deployment-server-profiles
title: Server Profiles
sidebar_label: Server Profiles
sidebar_position: 10303
description: Overview of the Server Profiles in the Permguard project.
---

The `Server` binary can be run in different distributions, each providing its own configuration profile.

:::note
Services can be configured using either environment variables or [configuration options](/developers/deployment/deployment-server-profiles). Each CLI option has a corresponding environment variable named `PERMGUARD_<OPTION_NAME>`. For example, the `--debug` option maps to the `PERMGUARD_DEBUG` environment variable.
:::

## Servers

Regardless of the chosen distribution, the binary accepts the following options:

---
**\--debug**: *enables debug mode (default `false`).*

---
**\--log-level**: *specifies the log level (default `INFO`, options `DEBUG`, `INFO`, `WARN`, `ERROR`, `DPANIC`, `PANIC`, `FATAL`).*

<details>
  <summary>Options</summary>

| LEVEL     | MEANING                                                                                                          |
|-----------|------------------------------------------------------------------------------------------------------------------|
| DEBUG     | Debug logs are typically voluminous, and are usually disabled in production.                                     |
| INFO      | Info is the default logging priority.                                                                            |
| WARN      | Warn logs are more important than Info, but don't need individual human review.                                  |
| ERROR     | Error logs are high-priority. If an application is running smoothly, it shouldn't generate any error-level logs. |
| DPANIC    | DPanic logs are particularly important errors. In development the logger panics after writing the message.       |
| PANIC     | Panic logs a message, then panics.                                                                               |
| FATAL     | Fatal logs a message, then calls os.Exit(1).                                                                     |

</details>

---

**\--storage-engine-central**: *data storage engine to be used for central data (default `SQLITE`).*

---

**Storage Engines**: storage engine options are used to configure the storage engine responsible for data persistence in the services.

<details>
  <summary>SQLite</summary>

**\--storage-engine-sqlite-dbname**: *sqlite database name (default **permguard**).*

---

</details>

---

**\--server-appdata**: *directory to be used as application data (default `./`).*

---

### server-zap

Zone Administration Point.

**\--storage-zap-engine-central**: *data storage engine to be used for the ZAP central data. This overrides the `--storage-engine-central` option. Default: `SQLITE`.*

---

**\--server-zap-data-fetch-maxpagesize int**: *maximum number of items to fetch per request. (default `10000`).*

---

**\--server-zap-data-enable-default-creation bool**: *enables the creation of default entities during data creation. (default `false`).*

---

**\--server-zap-grpc-port int**: *port to be used for exposing the zap grpc services. (default `9091`).*

---

### server-pap

Policy Administration Point.

**\--storage-pap-engine-central**: *data storage engine to be used for the PAP central data. This overrides the `--storage-engine-central` option. Default: `SQLITE`.*

---

**\--server-pap-data-fetch-maxpagesize int**: *maximum number of items to fetch per request. (default `10000`).*

---

**\--server-pap-grpc-port int**: *port to be used for exposing the pap grpc services. (default `9092`).*

---

### server-pip

Policy Information Point.

**\--storage-pip-engine-central**: *data storage engine to be used for the PIP central data. This overrides the `--storage-engine-central` option. Default: `SQLITE`.*

---

**\--server-pip-data-fetch-maxpagesize int**: *maximum number of items to fetch per request. (default `10000`).*

---

**\--server-pip-grpc-port int**: *port to be used for exposing the pip grpc services. (default `9093`).*

---

### server-pdp

Policy Decision Point.

**\--storage-pdp-engine-central**: *data storage engine to be used for the PDP central data. This overrides the `--storage-engine-central` option. Default: `SQLITE`.*

---

**\--server-pdp-data-fetch-maxpagesize int**: *maximum number of items to fetch per request. (default `10000`).*

---

**\--server-pdp-grpc-port int**: *port to be used for exposing the pdp grpc services. (default `9094`).*

---

**\--server-pdp-decision-log**: *specifies where to send decision logs (default `NONE`, options `NONE`, `STDOUT`, `FILE`).*

<details>
  <summary>Options</summary>

| OPTION   | MEANING                                                                                     |
|----------|---------------------------------------------------------------------------------------------|
| `NONE`   | Disables decision logging entirely.                                                         |
| `STDOUT` | Writes decision logs to standard output, useful for debugging or container environments.    |
| `FILE`   | Persists decision logs to a file on disk (log file location is configurable separately).    |

</details>

## Provisioners

Regardless of the chosen distribution, the binary accepts the following options:

---
**\--debug**: *enables debug mode (default `false`).*

---
**\--log-level**: *specifies log level (default `INFO`, options `DEBUG`, `INFO`, `WARN`, `ERROR`, `DPANIC`, `PANIC`, `FATAL`).*

<details>
  <summary>Options</summary>

| LEVEL     | MEANING                                                                                                          |
|-----------|------------------------------------------------------------------------------------------------------------------|
| DEBUG     | Debug logs are typically voluminous, and are usually disabled in production.                                     |
| INFO      | Info is the default logging priority.                                                                            |
| WARN      | Warn logs are more important than Info, but don't need individual human review.                                  |
| ERROR     | Error logs are high-priority. If an application is running smoothly, it shouldn't generate any error-level logs. |
| DPANIC    | DPanic logs are particularly important errors. In development the logger panics after writing the message.       |
| PANIC     | Panic logs a message, then panics.                                                                               |
| FATAL     | Fatal logs a message, then calls os.Exit(1).                                                                     |

</details>

---

<details>
  <summary>SQLite</summary>

**\--storage-engine-sqlite-filepath**: *sqlite database file path (default `.`).*

---

</details>
