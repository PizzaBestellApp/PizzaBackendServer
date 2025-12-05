/* ==========================================================================
   WARENKORB.JS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const listeElement = document.getElementById("warenkorb-liste");
    const sumElement = document.getElementById("gesamtsumme");

    if (!listeElement || !sumElement) return;

    renderWarenkorb(listeElement, sumElement);
});

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
        
        // SICHERHEIT: Namen bereinigen
        const sichererName = escapeHTML(artikel.name);

        const zeile = document.createElement("div");
        zeile.className = "cart-item";
        zeile.innerHTML = `
            <span>${sichererName}</span>
            <span>${artikel.preis.toFixed(2)} €</span>
            <button type="button" class="btn-remove" data-index="${index}">
                Entfernen
            </button>
        `;

        listeElement.appendChild(zeile);
    });

    sumElement.textContent = summe.toFixed(2) + " €";

    // Event Delegation für Buttons
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