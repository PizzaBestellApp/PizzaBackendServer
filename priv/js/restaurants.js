/* restaurants.js - Übersicht */

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('restaurants-grid');
    if (!container) return;

    container.innerHTML = ''; 

    restaurantDaten.forEach(rest => {
        // Wir sichern die Namen ab, falls aus der Datenbank mal "böser" Code kommt
        const safeName = escapeHTML(rest.name);
        const safeKueche = escapeHTML(rest.küche);

        const html = `
            <a href="${rest.link}" class="restaurant-card-link">
                <div class="restaurant-card">
                    <img src="${rest.img}" alt="${safeName}">
                    <div class="rest-info">
                        <h3>${safeName}</h3>
                        <p class="meta">${safeKueche}</p>
                        <span class="badge">30-40 Min</span>
                    </div>
                </div>
            </a>
        `;
        container.innerHTML += html;
    });
});