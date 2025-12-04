/* ==========================================================================
   GLOBAL.JS
   Zweck: Enthält die Datenbasis und die Warenkorb-Logik für ALLE Seiten.
   Wichtig: Muss in jeder HTML-Datei ALS ERSTES Script geladen werden!
   ========================================================================== */

/* --- 1. UNSERE MOCK-DATENBANK (Daten) --- */

// Daten für die Restaurant-Übersicht (restaurants.html)
const restaurantDaten = [
    { 
        id: 1, 
        name: "Pizza Blitz", 
        kategorie: "Italienisch • Pizza", 
        zeit: "30-45 min", 
        img: "https://placehold.co/600x400/orange/white?text=Pizza+Blitz", // Platzhalter-Bild
        link: "speisekarte.html" 
    },
    { 
        id: 2, 
        name: "Burger King", 
        kategorie: "Amerikanisch • Burger", 
        zeit: "15-25 min", 
        img: "https://placehold.co/600x400/red/white?text=Burger+King", 
        link: "speisekarte.html" 
    },
    { 
        id: 3, 
        name: "Sushi Meister", 
        kategorie: "Japanisch • Sushi", 
        zeit: "40-60 min", 
        img: "https://placehold.co/600x400/black/white?text=Sushi+Meister", 
        link: "speisekarte.html" 
    }
];

// Daten für die Speisekarte (speisekarte.html)
// Hinweis: IDs müssen eindeutig sein!
const speisekarteDaten = [
    { 
        id: 101, 
        name: "Pizza Salami", 
        preis: 9.50, 
        img: "https://placehold.co/400x300?text=Salami", 
        desc: "Klassisch mit würziger Salami und Käse" 
    },
    { 
        id: 102, 
        name: "Pizza Margherita", 
        preis: 8.00, 
        img: "https://placehold.co/400x300?text=Margherita", 
        desc: "Tomatensoße, Mozzarella, Basilikum" 
    },
    { 
        id: 103, 
        name: "Pizza Funghi", 
        preis: 11.50, 
        img: "https://placehold.co/400x300?text=Funghi", 
        desc: "Mit frischen Champignons" 
    },
    { 
        id: 104, 
        name: "Pasta Napoli", 
        preis: 9.00, 
        img: "https://placehold.co/400x300?text=Pasta", 
        desc: "Fruchtige Tomatensoße" 
    },
    { 
        id: 105, 
        name: "Tiramisu", 
        preis: 5.50, 
        img: "https://placehold.co/400x300?text=Tiramisu", 
        desc: "Hausgemachtes Dessert" 
    }
];


/* --- 2. WARENKORB LOGIK (State Management) --- */

// Initialisierung: Versuche den Warenkorb aus dem Speicher zu laden.
// Wenn keiner da ist (erster Besuch), erstelle ein leeres Array [].
let warenkorb = JSON.parse(localStorage.getItem('warenkorb')) || [];

console.log("Global.js geladen. Aktueller Warenkorb-Inhalt:", warenkorb.length, "Items");

/**
 * Speichert den aktuellen Zustand des Warenkorbs im Browser.
 * Muss immer aufgerufen werden, wenn sich am Warenkorb was ändert.
 */
function saveCart() {
    localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
    updateCartBadge(); // Optional: Falls ihr eine Anzeige im Header habt
}

/**
 * Fügt ein Gericht zum Warenkorb hinzu.
 * Kann von überall aufgerufen werden.
 * @param {number} gerichtId - Die ID des Gerichts aus speisekarteDaten
 */
function addToCartGlobal(gerichtId) {
    // 1. Finde das Gericht in den Daten
    const gericht = speisekarteDaten.find(item => item.id === gerichtId);
    
    if (gericht) {
        // 2. Zum Array hinzufügen
        warenkorb.push(gericht);
        
        // 3. Speichern
        saveCart();
        
        // 4. Feedback an User (Simpel für MVP)
        alert(gericht.name + " wurde in den Warenkorb gelegt!");
        console.log("Neuer Warenkorb:", warenkorb);
    } else {
        console.error("Fehler: Gericht mit ID " + gerichtId + " nicht gefunden!");
    }
}

/**
 * Optional: Aktualisiert eine kleine Zahl am Warenkorb-Icon (falls vorhanden)
 */
function updateCartBadge() {
    // Sucht nach einem Element mit ID "cart-count" im Header (falls Team 1 das baut)
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.innerText = warenkorb.length;
        badge.style.display = warenkorb.length > 0 ? 'inline-block' : 'none';
    }
}