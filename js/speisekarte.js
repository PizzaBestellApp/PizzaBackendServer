/* ==========================================================================
   SPEISEKARTE.JS
   Zuständig für: speisekarte.html
   Funktionen: 
   1. Pizzen rendern (anzeigen)
   2. Modal (Pop-up) öffnen und schließen
   3. Verbindung zum Warenkorb herstellen
   ========================================================================== */

// Wir warten, bis das HTML komplett geladen ist
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CONTAINER SUCHEN
    // Wir suchen den leeren Kasten, den Team 1 gebaut hat
    const grid = document.getElementById('speisekarte-grid');
    
    // Sicherheitscheck: Wenn wir nicht auf der Speisekarte sind, abbrechen
    if (!grid) return;

    console.log("Speisekarte wird geladen...");

    // 2. GRID RENDERN
    // Wir leeren den Container zuerst, damit nichts doppelt ist
    grid.innerHTML = '';

    // Wir gehen durch die Liste aller Pizzen (kommt aus global.js)
    speisekarteDaten.forEach(gericht => {
        
        // Hier bauen wir das HTML für jede einzelne Pizza-Karte
        // Info an Team 1: Sie müssen die Klasse .pizza-card stylen
        const kartenHTML = `
            <div class="pizza-card">
                <img src="${gericht.img}" alt="${gericht.name}">
                
                <div class="card-content">
                    <h3>${gericht.name}</h3>
                    <p class="desc">${gericht.desc}</p>
                    <div class="price">${gericht.preis.toFixed(2)} €</div>
                    
                    <button class="select-btn" onclick="openModal(${gericht.id})">
                        Wählen
                    </button>
                </div>
            </div>
        `;

        // Die fertige Karte in das Grid einfügen
        grid.innerHTML += kartenHTML;
    });

    // Event Listener für Klick außerhalb des Modals (zum Schließen)
    window.onclick = function(event) {
        const modal = document.getElementById('pizza-modal');
        if (event.target == modal) {
            closeModal();
        }
    }
});


/* ==========================================================================
   MODAL LOGIK (Das Pop-up Fenster)
   ========================================================================== */

// Diese Variable merkt sich, welche Pizza gerade im Modal angezeigt wird
let aktuellePizzaId = null;

// Funktion zum ÖFFNEN des Modals
// Muss "window.openModal" heißen, damit das HTML (onclick) sie findet
window.openModal = function(id) {
    
    // 1. Das Modal-Element im HTML finden
    const modal = document.getElementById('pizza-modal');
    
    if (!modal) {
        console.error("FEHLER: Das <div id='pizza-modal'> fehlt in speisekarte.html!");
        alert("Fehler: Das Modal wurde nicht gefunden. Bitte Team 1 fragen.");
        return;
    }

    // 2. Die Daten der angeklickten Pizza suchen
    const gericht = speisekarteDaten.find(item => item.id === id);
    
    // Falls ID nicht gefunden (sollte nicht passieren)
    if (!gericht) return;

    // ID merken für den Warenkorb-Button später
    aktuellePizzaId = id;

    // 3. Den Inhalt des Modals austauschen (Texte und Bilder)
    // Wir nutzen die IDs, die Team 1 festgelegt hat
    const titleEl = document.getElementById('modal-title');
    const imgEl = document.getElementById('modal-img');
    const priceEl = document.getElementById('modal-total-price');
    const addBtn = document.getElementById('modal-add-btn');

    // Sicherheitscheck: Existieren die Elemente im Modal?
    if(titleEl) titleEl.innerText = gericht.name;
    if(imgEl) imgEl.src = gericht.img;
    if(priceEl) priceEl.innerText = gericht.preis.toFixed(2);

    // 4. Den "Hinzufügen"-Button scharf schalten
    if (addBtn) {
        // Text aktualisieren
        addBtn.innerText = `In den Warenkorb (${gericht.preis.toFixed(2)} €)`;
        
        // TRICK 17: Button klonen, um alte Klick-Events zu löschen
        // Sonst legt er beim 2. Mal Pizza auswählen ZWEI Pizzen in den Korb
        const neuerButton = addBtn.cloneNode(true);
        addBtn.parentNode.replaceChild(neuerButton, addBtn);

        // Neuen Klick-Event hinzufügen
        neuerButton.addEventListener('click', () => {
            // Funktion aus global.js aufrufen
            addToCartGlobal(aktuellePizzaId);
            // Modal schließen
            closeModal();
        });
    }

    // 5. Modal sichtbar machen
    modal.style.display = 'block';
};

// Funktion zum SCHLIESSEN des Modals
window.closeModal = function() {
    const modal = document.getElementById('pizza-modal');
    if (modal) {
        modal.style.display = 'none';
    }
};