// @ts-check

const STORAGE_KEY = "theme";
const root = document.documentElement;
const toggles = document.querySelectorAll(".theme-toggle");

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

/**
 * @param {"light" | "dark"} theme
 * @param {Element} toggle
 */
function updateToggle(theme, toggle) {
    const isLight = theme === "light";
    toggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme",
    );
    toggle.setAttribute("aria-pressed", isLight ? "true" : "false");
    toggle.dataset.theme = theme;
}

/** @param {"light" | "dark"} theme */
function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    try {
        localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        // Private browsing or blocked storage — theme still applies for this visit.
    }

    toggles.forEach((toggle) => {
        updateToggle(theme, toggle);
    });
}

function onToggleClick() {
    applyTheme(getEffectiveTheme() === "light" ? "dark" : "light");
}

if (toggles.length) {
    const theme = getEffectiveTheme();
    toggles.forEach((toggle) => {
        updateToggle(theme, toggle);
        toggle.addEventListener("click", onToggleClick);
    });
}
