/* global.js - Daten, State & Sicherheit für ALLE Seiten */

// --- 1. MOCK-DATEN ---
const restaurantDaten = [
    { id: 1, name: "Pizza Blitz", küche: "Italienisch", img: "https://placehold.co/300x150", link: "speisekarte.html" },
    { id: 2, name: "Burger King", küche: "Amerikanisch", img: "https://placehold.co/300x150", link: "speisekarte.html" },
    { id: 3, name: "Sushi Meister", küche: "Asiatisch", img: "https://placehold.co/300x150", link: "speisekarte.html" }
];

const speisekarteDaten = [
    { id: 101, name: "Pizza Salami", preis: 9.50, img: "https://placehold.co/200", desc: "Würzig und lecker" },
    { id: 102, name: "Pizza Margherita", preis: 8.00, img: "https://placehold.co/200", desc: "Der Klassiker" },
    { id: 103, name: "Pasta Napoli", preis: 9.00, img: "https://placehold.co/200", desc: "Tomatensoße pur" },
    { id: 104, name: "Tiramisu", preis: 5.50, img: "https://placehold.co/200", desc: "Hausgemacht" }
];

// --- 2. WARENKORB LOGIK ---
let warenkorb = JSON.parse(localStorage.getItem('warenkorb')) || [];

function saveCart() {
    localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
}

function addToCartGlobal(gerichtId) {
    const gericht = speisekarteDaten.find(item => item.id === gerichtId);
    if (gericht) {
        warenkorb.push(gericht);
        saveCart();
        alert(escapeHTML(gericht.name) + " wurde hinzugefügt!");
    }
}

// --- 3. SICHERHEIT (XSS Schutz) ---
// Diese Funktion nutzen wir ab jetzt überall, um Text zu "säubern"
function escapeHTML(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}