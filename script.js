document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".feature-card");

    cards.forEach(card => {
        const inactiveBtn = card.querySelector(".inactive-btn");
        const activeBtn = card.querySelector(".active-btn");

        const toggleCard = (e) => {
            e.preventDefault();
            card.classList.toggle("active");
        };

        if (inactiveBtn) inactiveBtn.addEventListener("click", toggleCard);
        if (activeBtn) activeBtn.addEventListener("click", toggleCard);
    });
});