---
id: language
title: Cedar Language
sidebar_label: Cedar Language
sidebar_position: 3
description: This section provides instructions for using the Cedar Language.
---

**Permguard** integrates `Cedar` as policy language. Here you can find the <a href="https://www.cedarpolicy.com/" target="_blank" rel="noopener noreferrer">official documentation</a>.

Policies are written using the `Cedar Policy Language`.

:::danger
Permguard mandates the use of the @id annotation in Cedar policies. This is required to uniquely identify each policy.
:::

Below is an example directory structure with a schema file and sample policy files:

```plaintext
.
├── .permguard
├── schema.json
├── staff_policies.cedar
```

Here is an example of cedar policy.

```cedar  {title="pharmacy.cedar"}
@id("platform-creator")
permit(
  principal == Permguard::Identity::Attribute::"role/platform-creator",
  action == PharmaAuthZFlow::Platform::Action::"create",
  resource is PharmaAuthZFlow::Platform::Subscription
)
when {
  context.isSubscriptionActive == true
    && action.isEnabled == true && resource.isEnabled == true
}
unless {
  principal.isSuperUser == false
};
```
