import React from "react";
import { useDocsVersion } from "@docusaurus/plugin-content-docs/client";

export default function DocVersionBadge(): React.ReactElement {
  const version = useDocsVersion();
  return (
    <span className="badge theme-doc-version-badge">v{version.label}</span>
  );
}
