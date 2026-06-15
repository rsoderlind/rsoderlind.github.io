document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".feature-card");

    cards.forEach(card => {
        const button = card.querySelector(".btn-learn-more");

        button.addEventListener("click", (e) => {
            // Prevent event bubbling if necessary
            e.stopPropagation();

            // Toggle active status on the clicked card
            const isActive = card.classList.contains("active");
            
            if (isActive) {
                card.classList.remove("active");
                button.textContent = "Learn More";
            } else {
                card.classList.add("inactive");
                button.textContent = "Show Less";
                
                // Optional smoothness: scroll the card into view when clicked
                setTimeout(() => {
                    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
                }, 200);
            }
        });
    });
});