const FALLBACK_MS = 10_000;

function markStuckTerminals() {
    document
        .querySelectorAll(".fauxsh.fauxsh--activating:not(.fauxsh--ready)")
        .forEach((el) => {
            el.classList.add("fauxsh--fallback");
        });
}

window.setTimeout(markStuckTerminals, FALLBACK_MS);

window.addEventListener("load", () => {
    if (typeof Alpine === "undefined") {
        document.querySelectorAll(".fauxsh:not(.fauxsh--ready)").forEach((el) => {
            el.classList.add("fauxsh--fallback");
        });
    }
});
