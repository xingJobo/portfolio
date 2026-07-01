// @ts-check

const form = document.getElementById("contact-form");

if (form) {
    const success = document.getElementById("contact-success");
    const error = document.getElementById("contact-error");
    const submit = document.getElementById("contact-submit");
    const defaultSubmitLabel = submit?.textContent ?? "Send message";

    function showSuccess() {
        if (success) {
            success.hidden = false;
            success.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        if (error) {
            error.hidden = true;
        }
    }

    /**
     * @param {string} message
     */
    function showError(message) {
        if (error) {
            error.textContent = message;
            error.hidden = false;
            error.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        if (success) {
            success.hidden = true;
        }
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (error) {
            error.hidden = true;
        }

        const honeypot = form.querySelector('input[name="botcheck"]');
        if (honeypot instanceof HTMLInputElement && honeypot.checked) {
            showSuccess();
            form.reset();
            return;
        }

        const nameInput = form.querySelector("#contact-name");
        const emailInput = form.querySelector("#contact-email");
        const messageInput = form.querySelector("#contact-message");

        if (
            !(nameInput instanceof HTMLInputElement) ||
            !(emailInput instanceof HTMLInputElement) ||
            !(messageInput instanceof HTMLTextAreaElement)
        ) {
            return;
        }

        if (submit) {
            submit.disabled = true;
            submit.textContent = "Sending…";
        }

        fetch(form.dataset.endpoint ?? "", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                subject: form.dataset.subject,
                from_name: form.dataset.fromName,
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim(),
            }),
        })
            .then((response) =>
                response.json().then((data) => {
                    if (!response.ok || !data.success) {
                        throw new Error(
                            data.message || "Something went wrong. Please try again.",
                        );
                    }
                    showSuccess();
                    form.reset();
                }),
            )
            .catch((err) => {
                const message =
                    err instanceof Error
                        ? err.message
                        : "Could not send your message. Please email me directly.";
                showError(message);
            })
            .finally(() => {
                if (submit) {
                    submit.disabled = false;
                    submit.textContent = defaultSubmitLabel;
                }
            });
    });
}
