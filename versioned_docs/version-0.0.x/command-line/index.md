---
id: command-line
title: Use the Permguard CLI
sidebar_label: Command-Line
sidebar_position: 1
description: Command-Line interface reference for version 0.0.x
---

The **Permguard CLI** provides a robust toolset for interacting with AuthZServers.

The CLI is designed for two primary scenarios.

- In the context of **AuthZServer Administration**: it enables the management of `zones` and `ledgers` directly on the remote server. This allows administrators to maintain and configure the system efficiently.
- For developers, the CLI supports a complete **Policy-as-Code Workspace**. It facilitates the local development of configuration artifacts such as `schemas`, `namespaces`, `resources`, `policies`, and `permissions`, integrating the essential toolchain required for the development lifecycle. These locally created artifacts can then be seamlessly applied to the remote server, ensuring a consistent and scalable approach to policy deployment across environments.

To view a list of commands available in the current Permguard version, users can run the **permguard** command without any additional arguments.

```txt
Usage:
  permguard [flags]
  permguard [command]

Available Commands:
  apply       Apply the plan to the remote ledger
  zone        Manage zones on the remote server
  authz       Manage ledgers on the remote server
  checkout    Check out the contents of a remote ledger to the local permguard workspace
  clone       Clone a remote ledger to the local permguard workspace
  completion  Generate the autocompletion script for the specified shell
  config      Configure the command line settings
  help        Help about any command
  history     Show the history
  init        Initialize a permguard workspace
  ledger      Manage the ledger
  objects     Manage the object store
  plan        Generate a plan of changes to apply to the remote ledger based on the differences between the local and remote states
  pull        Fetch the latest changes from the remote ledger and constructs the remote state.
  refresh     Scan source files in the current workspace and synchronizes the local state
  remote      Manage remote server for tracking and interaction
  validate    Validate the local state for consistency and correctness

Flags:
  -h, --help             help for permguard
  -o, --output string    output format (default "terminal")
  -v, --verbose          true for verbose output
  -w, --workdir string   workdir (default ".")

Use "permguard [command] --help" for more information about a command.
```

:::caution
The output from your current version of Permguard may differ from the example provided on this page.
:::

To obtain detailed help for a specific command, users can utilize the --help option alongside the relevant subcommand.
For instance, to access help information about the `zones` subcommand, users can execute the following command:

```bash
permguard zones --help
```

It's important to note that the output of the command line can be either in the default `TERMINAL` or `JSON` format by setting the output flag.

For instance to list all zones in the default terminal format, users can execute the following command:

```bash
permguard zones list
```

To list all zones in JSON format, users can execute the following command:

```bash
permguard zones list --output json
```
