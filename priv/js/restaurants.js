/* ==========================================================================
   RESTAURANTS.JS
   Zeigt die Liste der Restaurants an und erstellt Links mit ID.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('restaurants-grid');
    if (!container) return;

    container.innerHTML = ''; 

    restaurantDaten.forEach(rest => {
        const safeName = escapeHTML(rest.name);
        const safeKueche = escapeHTML(rest.kategorie);

        // HIER IST DAS NEUE FEATURE:
        // Wir bauen den Link so: "speisekarte.html?id=1"
        // Dadurch weiß die nächste Seite, welches Restaurant geklickt wurde.
        const dynamicLink = `speisekarte.html?id=${rest.id}`;

        const html = `
            <a href="${dynamicLink}" class="restaurant-card-link">
                <div class="restaurant-card">
                    <img src="${rest.img}" alt="${safeName}">
                    <div class="rest-info">
                        <h3>${safeName}</h3>
                        <p class="meta">${safeKueche}</p>
                        <span class="badge">🕒 ${rest.zeit}</span>
                    </div>
                </div>
            </a>
        `;
        container.innerHTML += html;
    });
});