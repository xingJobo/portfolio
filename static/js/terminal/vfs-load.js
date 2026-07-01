// @ts-check

import { normalizeTerminalContent } from "./vfs.js";

/**
 * @param {string} text
 * @returns {import("./commands.js").TerminalVfs}
 */
export function parseVfsJson(text) {
  const vfs = JSON.parse(text);

  if (!vfs.files || typeof vfs.files !== "object") {
    throw new Error("Invalid terminal VFS payload");
  }

  for (const file of Object.values(vfs.files)) {
    file.content = normalizeTerminalContent(file.content);
  }

  return vfs;
}

/**
 * @param {string} url
 * @returns {Promise<import("./commands.js").TerminalVfs>}
 */
export async function fetchVfs(url) {
  if (!url) {
    throw new Error("Missing terminal VFS URL");
  }

  const response = await fetch(url, {
    credentials: "same-origin",
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Failed to load terminal data (${response.status})`);
  }

  const text = (await response.text()).trim();
  return parseVfsJson(text);
}
