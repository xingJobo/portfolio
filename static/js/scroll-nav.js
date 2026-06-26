const links = [...document.querySelectorAll(".scroll-nav__link")];

if (links.length) {
    const sections = links
        .map((link) => {
            const id = link.getAttribute("href").slice(1);
            const section = document.getElementById(id);
            return section ? { id, section } : null;
        })
        .filter(Boolean);

    const setActive = (id) => {
        links.forEach((link) => {
            link.classList.toggle(
                "scroll-nav__link--active",
                link.getAttribute("href") === `#${id}`,
            );
        });
    };

    // Section activates when its top crosses this line (matches prior observer intent).
    const activationOffset = () => window.innerHeight * 0.35;

    const updateActiveSection = () => {
        const offset = activationOffset();
        let activeId = sections[0].id;

        for (const { id, section } of sections) {
            if (section.getBoundingClientRect().top <= offset) {
                activeId = id;
            }
        }

        const atBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 2;

        if (atBottom) {
            activeId = sections[sections.length - 1].id;
        }

        setActive(activeId);
    };

    let ticking = false;
    const onScroll = () => {
        if (ticking) {
            return;
        }

        ticking = true;
        requestAnimationFrame(() => {
            updateActiveSection();
            ticking = false;
        });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateActiveSection();
}
