/* warenkorb.js - Anzeige */

document.addEventListener("DOMContentLoaded", () => {
    const liste = document.getElementById('warenkorb-liste');
    if (!liste) return;
    renderWarenkorb();
});

function renderWarenkorb() {
    const liste = document.getElementById('warenkorb-liste');
    const summeFeld = document.getElementById('gesamtsumme');
    
    liste.innerHTML = '';
    let total = 0;

    if (warenkorb.length === 0) {
        liste.innerHTML = '<p>Dein Warenkorb ist leer.</p>';
    } else {
        warenkorb.forEach((item, index) => {
            total += item.preis;
            // Wir nutzen die globale escapeHTML Funktion
            const safeName = escapeHTML(item.name);

            liste.innerHTML += `
                <div class="cart-item">
                    <span>${safeName}</span>
                    <span>${item.preis.toFixed(2)} €</span>
                    <button onclick="removeItem(${index})" style="color:red;">X</button>
                </div>
            `;
        });
    }

    if (summeFeld) summeFeld.innerText = total.toFixed(2) + " €";
}

window.removeItem = function(index) {
    warenkorb.splice(index, 1);
    saveCart();
    renderWarenkorb();
}