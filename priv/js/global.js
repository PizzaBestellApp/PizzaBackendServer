/* ==========================================================================
   GLOBAL.JS
   Zweck: Datenbasis, Warenkorb-Logik & Sicherheit
   ========================================================================== */

/* --- 1. MOCK-DATENBANK --- */
const restaurantDaten = [
    { id: 1, name: "Pizza Blitz", kategorie: "Italienisch • Pizza", zeit: "30–45 Min.", img: "https://placehold.co/600x400/orange/white?text=Pizza+Blitz", link: "speisekarte.html" },
    { id: 2, name: "Burger King", kategorie: "Amerikanisch • Burger", zeit: "15–25 Min.", img: "https://placehold.co/600x400/red/white?text=Burger+King", link: "speisekarte.html" },
    { id: 3, name: "Sushi Meister", kategorie: "Japanisch • Sushi", zeit: "40–60 Min.", img: "https://placehold.co/600x400/000000/ffffff?text=Sushi+Meister", link: "speisekarte.html" },
    { id: 4, name: "Pasta Palazzo", kategorie: "Italienisch • Pasta", zeit: "25–35 Min.", img: "https://placehold.co/600x400/9966ff/ffffff?text=Pasta+Palazzo", link: "speisekarte.html" },
    { id: 5, name: "Döner Eck", kategorie: "Türkisch • Döner", zeit: "20–30 Min.", img: "https://placehold.co/600x400/brown/ffffff?text=Doener+Eck", link: "speisekarte.html" },
    { id: 6, name: "Vegan Garden", kategorie: "Vegan • Bowls", zeit: "30–40 Min.", img: "https://placehold.co/600x400/00aa66/ffffff?text=Vegan+Garden", link: "speisekarte.html" },
    { id: 7, name: "Asia Wok", kategorie: "Asiatisch • Wok", zeit: "25–35 Min.", img: "https://placehold.co/600x400/ff9966/ffffff?text=Asia+Wok", link: "speisekarte.html" },
    { id: 8, name: "Taco Fiesta", kategorie: "Mexikanisch • Tacos", zeit: "20–30 Min.", img: "https://placehold.co/600x400/ffcc00/000000?text=Taco+Fiesta", link: "speisekarte.html" },
    { id: 9, name: "Curry House", kategorie: "Indisch • Curry", zeit: "35–50 Min.", img: "https://placehold.co/600x400/663300/ffffff?text=Curry+House", link: "speisekarte.html" },
    { id: 10, name: "Steak Palace", kategorie: "Steakhouse • Grill", zeit: "40–60 Min.", img: "https://placehold.co/600x400/333333/ffffff?text=Steak+Palace", link: "speisekarte.html" },
    { id: 11, name: "Falafel King", kategorie: "Orientalisch • Falafel", zeit: "20–30 Min.", img: "https://placehold.co/600x400/009999/ffffff?text=Falafel+King", link: "speisekarte.html" },
    { id: 12, name: "Thai Street Food", kategorie: "Thailändisch • Street Food", zeit: "30–45 Min.", img: "https://placehold.co/600x400/cc6699/ffffff?text=Thai+Street+Food", link: "speisekarte.html" },
    { id: 13, name: "Bäckerei Sonnenschein", kategorie: "Bäckerei • Snacks", zeit: "10–20 Min.", img: "https://placehold.co/600x400/ffdddd/333333?text=Baeckerei+Sonnenschein", link: "speisekarte.html" }
];

const speisekarteDaten = [
    // Pizza Blitz
    { id: 101, restaurantId: 1, name: "Pizza Margherita", preis: 8.00, img: "https://placehold.co/400x300?text=Margherita", desc: "Tomatensoße, Mozzarella" },
    { id: 102, restaurantId: 1, name: "Pizza Salami", preis: 9.50, img: "https://placehold.co/400x300?text=Salami", desc: "Klassisch mit Salami" },
    { id: 103, restaurantId: 1, name: "Pizza Funghi", preis: 10.50, img: "https://placehold.co/400x300?text=Funghi", desc: "Frische Champignons" },
    { id: 104, restaurantId: 1, name: "Pizza Prosciutto", preis: 10.90, img: "https://placehold.co/400x300?text=Prosciutto", desc: "Schinken und Käse" },
    { id: 105, restaurantId: 1, name: "Pizza Diavola", preis: 11.50, img: "https://placehold.co/400x300?text=Diavola", desc: "Scharf!" },
    { id: 108, restaurantId: 1, name: "Tiramisu", preis: 5.50, img: "https://placehold.co/400x300?text=Tiramisu", desc: "Hausgemacht" },
    
    // Burger King
    { id: 201, restaurantId: 2, name: "Hamburger", preis: 4.50, img: "https://placehold.co/400x300?text=Hamburger", desc: "Rindfleisch pur" },
    { id: 203, restaurantId: 2, name: "Doppel Whopper", preis: 7.90, img: "https://placehold.co/400x300?text=Whopper", desc: "Double Beef" },
    
    // Sushi Meister
    { id: 301, restaurantId: 3, name: "Sushi Mix Box", preis: 14.90, img: "https://placehold.co/400x300?text=Sushi+Mix", desc: "Maki & Nigiri" },
    
    // Pasta Palazzo
    { id: 401, restaurantId: 4, name: "Spaghetti Bolognese", preis: 9.90, img: "https://placehold.co/400x300?text=Bolognese", desc: "Klassisch mit Fleisch" }
    
    // ... (Du kannst hier deine restlichen Daten aus der Datei oben einfügen, die waren super!)
];

/* --- 2. WARENKORB-LOGIK --- */
let warenkorb = JSON.parse(localStorage.getItem("warenkorb")) || [];

function saveCart() {
    localStorage.setItem("warenkorb", JSON.stringify(warenkorb));
    updateCartBadge();
}

function addToCartGlobal(gerichtId) {
    const gericht = speisekarteDaten.find(item => item.id === gerichtId);
    if (gericht) {
        warenkorb.push(gericht);
        saveCart();
        alert(escapeHTML(gericht.name) + " wurde hinzugefügt!"); // Mit Sicherheit!
    } else {
        console.error("Gericht nicht gefunden: " + gerichtId);
    }
}

function updateCartBadge() {
    const badge = document.getElementById("cart-count");
    if (badge) {
        badge.innerText = warenkorb.length;
        badge.style.display = warenkorb.length > 0 ? "inline-block" : "none";
    }
} // <--- HIER WAR DER FEHLER (DIESE KLAMMER FEHLTE)

/* --- 3. HELPER & UI --- */

// Sicherheitsfunktion (XSS Schutz)
function escapeHTML(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// Sidebar Highlight
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar nav a");
    const aktuelleSeite = location.pathname.split("/").pop();
    
    if (links.length) {
        links.forEach(link => {
            if (link.getAttribute("href") === aktuelleSeite) {
                link.classList.add("active");
            }
        });
    }
});