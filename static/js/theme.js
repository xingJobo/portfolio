// @ts-check

const STORAGE_KEY = "theme";
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

/** @returns {"light" | "dark"} */
function getEffectiveTheme() {
    const stored = root.getAttribute("data-theme");
    if (stored === "light" || stored === "dark") {
        return stored;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
}

/** @param {"light" | "dark"} theme */
function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    try {
        localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        // Private browsing or blocked storage — theme still applies for this visit.
    }

    updateToggle(theme);
}

/** @param {"light" | "dark"} theme */
function updateToggle(theme) {
    if (!toggle) {
        return;
    }

    const isLight = theme === "light";
    toggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme",
    );
    toggle.setAttribute("aria-pressed", isLight ? "true" : "false");
    toggle.dataset.theme = theme;
}

function onToggleClick() {
    applyTheme(getEffectiveTheme() === "light" ? "dark" : "light");
}

if (toggle) {
    updateToggle(getEffectiveTheme());
    toggle.addEventListener("click", onToggleClick);
}
