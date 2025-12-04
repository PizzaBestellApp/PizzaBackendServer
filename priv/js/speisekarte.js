/* speisekarte.js - Pizzen & Modal */

let aktuellesGerichtId = null;

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById('speisekarte-grid');
    if (!grid) return;

    grid.innerHTML = '';
    speisekarteDaten.forEach(gericht => {
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
});

window.openModal = function(id) {
    const gericht = speisekarteDaten.find(g => g.id === id);
    if (!gericht) return;

    aktuellesGerichtId = id;
    const modal = document.getElementById('pizza-modal');

    // Sicherer Text für das Modal
    document.getElementById('modal-title').innerText = gericht.name; // innerText ist automatisch sicher!
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