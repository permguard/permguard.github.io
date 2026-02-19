---
id: learn-workspaces-managing-remotes
title: Managing Remotes
sidebar_label: Managing Remotes
sidebar_position: 60101
description: Learn about managing remotes in a Permguard workspace
---

A recommended **Permguard** best practice is to run a **dedicated AuthZServer** for each environment, such as:

- **Development**
- **Staging**
- **Production**

This separation ensures a secure and isolated trust model aligned with the specific needs of each environment.

## Managing multiple AuthZServers

When handling multiple **AuthZServers** and provisioning configurations, it is crucial to correctly configure **remote connections**.
This setup enables smooth communication and coordination between different **Permguard instances**.

To add a new **remote**, use the following **remote command**:

```bash
 permguard remote add origin localhost
```

and it can be removed using the remote command:

```bash
 permguard remote remove origin
```

If the AuthZServer ports differ from the default values (`zap`:`9091` and `pap`:`9092`), you can specify the custom port numbers using the `--zap` and `--pap` flag:

```bash
 permguard remote add origin localhost --zap 9091 --pap 9092
```
