/* ==========================================================================
   LOGIN.JS
   Zuständig für: login.html
   Funktionen:
   1. Login simulieren (Umschalten der Ansicht)
   2. Adresse automatisch ausfüllen (Auto-Fill)
   3. Bestellung abschließen und Warenkorb leeren
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // Wir holen uns die wichtigen Buttons
    const loginBtn = document.getElementById('login-btn');
    const checkoutBtn = document.getElementById('checkout-btn');

    /* --- TEIL 1: LOGIN LOGIK --- */
    if (loginBtn) {
        loginBtn.addEventListener('click', (event) => {
            // Verhindert, dass die Seite neu lädt (falls es ein <form> ist)
            event.preventDefault();

            console.log("Login Button geklickt - Simuliere Login...");

            // 1. Login-Box verstecken
            const loginBox = document.getElementById('login-box');
            if (loginBox) {
                loginBox.style.display = 'none';
            }

            // 2. Adress-Formular anzeigen
            const addressForm = document.getElementById('address-form');
            if (addressForm) {
                addressForm.style.display = 'block';

                // 3. Komfort-Funktion: Mock-Daten automatisch eintragen
                // Das hilft Team 5 beim Testen ungemein!
                fillField('input-vorname', 'Max');
                fillField('input-nachname', 'Mustermann');
                fillField('input-strasse', 'Pizza-Weg 1');
                fillField('input-plz', '12345');
                fillField('input-ort', 'Berlin');
            }
        });
    }

    /* --- TEIL 2: CHECKOUT / BESTELLUNG ABSCHICKEN --- */
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', (event) => {
            event.preventDefault();

            // Sicherheitscheck: Ist überhaupt was im Warenkorb?
            // "warenkorb" kommt aus der global.js
            if (warenkorb.length === 0) {
                alert("Dein Warenkorb ist leer! Bitte wähle erst Gerichte aus.");
                // Optional: Zur Speisekarte leiten
                // window.location.href = "restaurants.html";
                return;
            }

            // Hier würde normalerweise der API-Call an den Server gehen (Team 4)
            console.log("Bestellung wird gesendet:", warenkorb);

            // Erfolgsmeldung an den User
            alert("Vielen Dank, " + document.getElementById('input-vorname').value + "!\nDeine Bestellung ist unterwegs. 🍕🛵");

            // Warenkorb leeren und speichern
            warenkorb = [];
            saveCart(); // Funktion aus global.js

            // Zurück zur Startseite leiten
            window.location.href = "index.html";
        });
    }
});

/* --- HILFSFUNKTION --- */
// Füllt ein Input-Feld nur aus, wenn es existiert (vermeidet Fehler im Code)
function fillField(id, text) {
    const field = document.getElementById(id);
    if (field) {
        field.value = text;
    } else {
        console.warn("Feld nicht gefunden: " + id);
    }
}