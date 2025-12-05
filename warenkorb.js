/* ==========================================================================
   WARENKORB.JS
   Zweck:
   - Liest den Warenkorb aus global.js
   - Rendert die Artikel-Liste auf warenkorb.html
   - Zeigt die Gesamtsumme an
   - Ermöglicht das Entfernen von Artikeln
   ========================================================================== */

   document.addEventListener("DOMContentLoaded", () => {
    const listeElement = document.getElementById("warenkorb-liste");
    const sumElement = document.getElementById("gesamtsumme");

    // Falls wir nicht auf warenkorb.html sind, einfach nichts tun
    if (!listeElement || !sumElement) {
        return;
    }

    renderWarenkorb(listeElement, sumElement);
});

/**
 * Rendert alle Artikel im Warenkorb.
 */
function renderWarenkorb(listeElement, sumElement) {
    listeElement.innerHTML = "";

    if (!Array.isArray(warenkorb) || warenkorb.length === 0) {
        listeElement.innerHTML = "<p>Dein Warenkorb ist noch leer.</p>";
        sumElement.textContent = "0.00 €";
        return;
    }

    let summe = 0;

    warenkorb.forEach((artikel, index) => {
        summe += artikel.preis;

        const zeile = document.createElement("div");
        zeile.className = "cart-item";
        zeile.innerHTML = `
            <span>${artikel.name}</span>
            <span>${artikel.preis.toFixed(2)} €</span>
            <button type="button" class="btn-remove" data-index="${index}">
                Entfernen
            </button>
        `;

        listeElement.appendChild(zeile);
    });

    sumElement.textContent = summe.toFixed(2) + " €";

    // Klick-Handler für Entfernen-Buttons (Event-Delegation)
    listeElement.onclick = (ereignis) => {
        const ziel = ereignis.target;
        if (ziel.classList.contains("btn-remove")) {
            const index = Number(ziel.getAttribute("data-index"));
            if (!Number.isNaN(index)) {
                warenkorb.splice(index, 1);
                saveCart();
                renderWarenkorb(listeElement, sumElement);
            }
        }
    };
}
