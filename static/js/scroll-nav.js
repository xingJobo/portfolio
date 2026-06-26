const links = [...document.querySelectorAll(".scroll-nav__link")];
if (links.length) {
    const sections = links
        .map((link) => document.getElementById(link.getAttribute("href").slice(1)))
        .filter(Boolean);

    const setActive = (id) => {
        links.forEach((link) => {
            link.classList.toggle(
                "scroll-nav__link--active",
                link.getAttribute("href") === `#${id}`,
            );
        });
    };

    const observer = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visible[0]) {
                setActive(visible[0].target.id);
            }
        },
        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: [0, 0.15, 0.35, 0.55],
        },
    );

    sections.forEach((section) => observer.observe(section));
}
