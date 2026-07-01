// @ts-check

const nav = document.querySelector("[data-mobile-nav]");

if (nav) {
    const toggle = nav.querySelector("[data-mobile-nav-toggle]");
    const overlay = nav.querySelector("[data-mobile-nav-overlay]");
    const drawer = nav.querySelector("[data-mobile-nav-drawer]");
    const links = nav.querySelectorAll("[data-mobile-nav-link]");

    /** @type {HTMLElement | null} */
    let lastFocused = null;

    const setOpen = (open) => {
        if (!toggle || !overlay || !drawer) {
            return;
        }

        nav.classList.toggle("mobile-nav--open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        overlay.hidden = !open;
        document.body.classList.toggle("mobile-nav-open", open);

        if (open) {
            lastFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            drawer.focus();
            return;
        }

        if (lastFocused) {
            lastFocused.focus();
            lastFocused = null;
        }
    };

    toggle?.addEventListener("click", () => {
        setOpen(!nav.classList.contains("mobile-nav--open"));
    });

    overlay?.addEventListener("click", (event) => {
        if (event.target === overlay) {
            setOpen(false);
        }
    });

    links.forEach((link) => {
        link.addEventListener("click", () => {
            setOpen(false);
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && nav.classList.contains("mobile-nav--open")) {
            setOpen(false);
        }
    });
}
