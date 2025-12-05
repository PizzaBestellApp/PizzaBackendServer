/* ==========================================================================
   SPEISEKARTE.JS
   Zeigt nur die Pizzen/Gerichte des gewählten Restaurants an.
   ========================================================================== */

let aktuellesGerichtId = null;

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('speisekarte-grid');
    if (!grid) return;

    // 1. URL PARAMETER AUSLESEN (?id=...)
    // Wir fragen den Browser: "Gibt es eine ID in der Adresszeile?"
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(urlParams.get('id')); // String zu Zahl machen

    // 2. DATEN FILTERN
    let produkteZumAnzeigen = [];
    let restaurantName = "Unsere Karte"; // Standard-Titel

    if (restaurantId) {
        // Wenn eine ID da ist: Filter die große Liste
        produkteZumAnzeigen = speisekarteDaten.filter(item => item.restaurantId === restaurantId);
        
        // Optional: Den Namen des Restaurants finden für die Überschrift
        const aktuellesRestaurant = restaurantDaten.find(r => r.id === restaurantId);
        if (aktuellesRestaurant) {
            restaurantName = aktuellesRestaurant.name;
        }
    } else {
        // Fallback: Keine ID? Zeige einfach alles (oder eine Fehlermeldung)
        produkteZumAnzeigen = speisekarteDaten;
    }

    // 3. ÜBERSCHRIFT ANZEIGEN (Optional, falls ihr Platz dafür habt)
    // Wir fügen dem Grid eine Überschrift voran
    const titelHTML = `<h2 style="grid-column: 1 / -1; margin-bottom: 20px;">Speisekarte von ${escapeHTML(restaurantName)}</h2>`;
    grid.innerHTML = titelHTML;


    // 4. PRODUKTE RENDERN
    if (produkteZumAnzeigen.length === 0) {
        grid.innerHTML += `<p>Dieses Restaurant hat noch keine Gerichte eingetragen.</p>`;
    } else {
        produkteZumAnzeigen.forEach(gericht => {
            const safeName = escapeHTML(gericht.name);
            const safeDesc = escapeHTML(gericht.desc);

            const html = `
                <div class="pizza-card">
                    <img src="${gericht.img}" alt="${safeName}">
                    <div class="card-content">
                        <h3>${safeName}</h3>
                        <p>${safeDesc}</p>
                        <div class="price">${gericht.preis.toFixed(2)} €</div>
                        <button onclick="openModal(${gericht.id})">Wählen</button>
                    </div>
                </div>
            `;
            grid.innerHTML += html;
        });
    }
});

/* --- MODAL LOGIK (Unverändert, aber wichtig!) --- */

window.openModal = function(id) {
    // Suche im globalen Array (damit finden wir es auch, wenn gefiltert ist)
    const gericht = speisekarteDaten.find(g => g.id === id);
    if (!gericht) return;

    aktuellesGerichtId = id;
    const modal = document.getElementById('pizza-modal');
    if (!modal) return;

    document.getElementById('modal-title').innerText = gericht.name;
    document.getElementById('modal-img').src = gericht.img;
    document.getElementById('modal-total-price').innerText = gericht.preis.toFixed(2);
    
    const addBtn = document.getElementById('modal-add-btn');
    addBtn.innerText = "Hinzufügen (" + gericht.preis.toFixed(2) + " €)";
    
    const newBtn = addBtn.cloneNode(true);
    addBtn.parentNode.replaceChild(newBtn, addBtn);
    
    newBtn.addEventListener('click', () => {
        addToCartGlobal(aktuellesGerichtId);
        closeModal();
    });

    modal.style.display = 'block';
}

window.closeModal = function() {
    const modal = document.getElementById('pizza-modal');
    if (modal) modal.style.display = 'none';
}