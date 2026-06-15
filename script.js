document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".feature-card");

    cards.forEach(card => {
        // Find both buttons inside this specific card
        const inactiveBtn = card.querySelector(".inactive-btn");
        const activeBtn = card.querySelector(".active-btn");

        // Helper function to toggle the state
        const toggleCard = (e) => {
            e.preventDefault();
            card.classList.toggle("active");
        };

        // Attach listeners to both elements
        if (inactiveBtn) inactiveBtn.addEventListener("click", toggleCard);
        if (activeBtn) activeBtn.addEventListener("click", toggleCard);
    });
});