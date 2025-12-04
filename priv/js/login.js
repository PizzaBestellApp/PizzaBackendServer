/* login.js - Checkout Prozess */

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById('login-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('login-box').style.display = 'none';
            document.getElementById('address-form').style.display = 'block';
            
            // Auto-Fill
            document.getElementById('input-vorname').value = "Max";
            document.getElementById('input-nachname').value = "Mustermann";
            document.getElementById('input-strasse').value = "Musterstraße 1";
            document.getElementById('input-plz').value = "12345";
            document.getElementById('input-ort').value = "Berlin";
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (warenkorb.length === 0) {
                alert("Warenkorb ist leer!");
                return;
            }
            alert("Bestellung erfolgreich! 🍕");
            warenkorb = [];
            saveCart();
            window.location.href = "index.html";
        });
    }
});