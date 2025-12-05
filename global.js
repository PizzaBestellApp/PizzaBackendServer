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
        zeit: "30–45 Min.", 
        img: "https://placehold.co/600x400/orange/white?text=Pizza+Blitz",
        link: "speisekarte.html"
    },
    { 
        id: 2, 
        name: "Burger King", 
        kategorie: "Amerikanisch • Burger", 
        zeit: "15–25 Min.", 
        img: "https://placehold.co/600x400/red/white?text=Burger+King", 
        link: "speisekarte.html"
    },
    { 
        id: 3, 
        name: "Sushi Meister", 
        kategorie: "Japanisch • Sushi", 
        zeit: "40–60 Min.", 
        img: "https://placehold.co/600x400/000000/ffffff?text=Sushi+Meister", 
        link: "speisekarte.html"
    },

    // Neue Restaurants
    { 
        id: 4, 
        name: "Pasta Palazzo", 
        kategorie: "Italienisch • Pasta", 
        zeit: "25–35 Min.", 
        img: "https://placehold.co/600x400/9966ff/ffffff?text=Pasta+Palazzo", 
        link: "speisekarte.html"
    },
    { 
        id: 5, 
        name: "Döner Eck", 
        kategorie: "Türkisch • Döner", 
        zeit: "20–30 Min.", 
        img: "https://placehold.co/600x400/brown/ffffff?text=Doener+Eck", 
        link: "speisekarte.html"
    },
    { 
        id: 6, 
        name: "Vegan Garden", 
        kategorie: "Vegan • Bowls", 
        zeit: "30–40 Min.", 
        img: "https://placehold.co/600x400/00aa66/ffffff?text=Vegan+Garden", 
        link: "speisekarte.html"
    },
    { 
        id: 7, 
        name: "Asia Wok", 
        kategorie: "Asiatisch • Wok", 
        zeit: "25–35 Min.", 
        img: "https://placehold.co/600x400/ff9966/ffffff?text=Asia+Wok", 
        link: "speisekarte.html"
    },
    { 
        id: 8, 
        name: "Taco Fiesta", 
        kategorie: "Mexikanisch • Tacos", 
        zeit: "20–30 Min.", 
        img: "https://placehold.co/600x400/ffcc00/000000?text=Taco+Fiesta", 
        link: "speisekarte.html"
    },
    { 
        id: 9, 
        name: "Curry House", 
        kategorie: "Indisch • Curry", 
        zeit: "35–50 Min.", 
        img: "https://placehold.co/600x400/663300/ffffff?text=Curry+House", 
        link: "speisekarte.html"
    },
    { 
        id: 10, 
        name: "Steak Palace", 
        kategorie: "Steakhouse • Grill", 
        zeit: "40–60 Min.", 
        img: "https://placehold.co/600x400/333333/ffffff?text=Steak+Palace", 
        link: "speisekarte.html"
    },
    { 
        id: 11, 
        name: "Falafel King", 
        kategorie: "Orientalisch • Falafel", 
        zeit: "20–30 Min.", 
        img: "https://placehold.co/600x400/009999/ffffff?text=Falafel+King", 
        link: "speisekarte.html"
    },
    { 
        id: 12, 
        name: "Thai Street Food", 
        kategorie: "Thailändisch • Street Food", 
        zeit: "30–45 Min.", 
        img: "https://placehold.co/600x400/cc6699/ffffff?text=Thai+Street+Food", 
        link: "speisekarte.html"
    },
    { 
        id: 13, 
        name: "Bäckerei Sonnenschein", 
        kategorie: "Bäckerei • Snacks", 
        zeit: "10–20 Min.", 
        img: "https://placehold.co/600x400/ffdddd/333333?text=Baeckerei+Sonnenschein", 
        link: "speisekarte.html"
    }
];

// Daten für die Speisekarte (speisekarte.html)
const speisekarteDaten = [
    /* -------- Pizza Blitz (restaurantId: 1) ------------------------- */
    { 
        id: 101, 
        restaurantId: 1,
        name: "Pizza Margherita", 
        preis: 8.00, 
        img: "https://placehold.co/400x300?text=Margherita", 
        desc: "Tomatensoße, Mozzarella, Basilikum" 
    },
    { 
        id: 102, 
        restaurantId: 1,
        name: "Pizza Salami", 
        preis: 9.50, 
        img: "https://placehold.co/400x300?text=Salami", 
        desc: "Klassisch mit würziger Salami und Käse" 
    },
    { 
        id: 103, 
        restaurantId: 1,
        name: "Pizza Funghi", 
        preis: 10.50, 
        img: "https://placehold.co/400x300?text=Funghi", 
        desc: "Mit frischen Champignons" 
    },
    { 
        id: 104, 
        restaurantId: 1,
        name: "Pizza Prosciutto", 
        preis: 10.90, 
        img: "https://placehold.co/400x300?text=Prosciutto", 
        desc: "Mit Schinken und extra Käse" 
    },
    { 
        id: 105, 
        restaurantId: 1,
        name: "Pizza Diavola", 
        preis: 11.50, 
        img: "https://placehold.co/400x300?text=Diavola", 
        desc: "Scharfe Salami, Peperoni und Käse" 
    },
    { 
        id: 106, 
        restaurantId: 1,
        name: "Pizza Quattro Formaggi", 
        preis: 11.90, 
        img: "https://placehold.co/400x300?text=4+Formaggi", 
        desc: "Vier Käsesorten auf knusprigem Boden" 
    },
    { 
        id: 107, 
        restaurantId: 1,
        name: "Pasta Napoli", 
        preis: 9.00, 
        img: "https://placehold.co/400x300?text=Pasta+Napoli", 
        desc: "Pasta mit fruchtiger Tomatensoße" 
    },
    { 
        id: 108, 
        restaurantId: 1,
        name: "Tiramisu", 
        preis: 5.50, 
        img: "https://placehold.co/400x300?text=Tiramisu", 
        desc: "Hausgemachtes italienisches Dessert" 
    },

    /* -------- Burger King (restaurantId: 2) ------------------------- */
    { 
        id: 201, 
        restaurantId: 2,
        name: "Hamburger", 
        preis: 4.50, 
        img: "https://placehold.co/400x300?text=Hamburger", 
        desc: "Klassischer Burger mit Rindfleisch und Gurken" 
    },
    { 
        id: 202, 
        restaurantId: 2,
        name: "Cheeseburger", 
        preis: 4.90, 
        img: "https://placehold.co/400x300?text=Cheeseburger", 
        desc: "Saftiger Burger mit geschmolzenem Käse" 
    },
    { 
        id: 203, 
        restaurantId: 2,
        name: "Doppel Whopper", 
        preis: 7.90, 
        img: "https://placehold.co/400x300?text=Doppel+Whopper", 
        desc: "Zwei Rindfleisch-Patties mit Salat und Tomaten" 
    },
    { 
        id: 204, 
        restaurantId: 2,
        name: "Chicken Burger", 
        preis: 5.50, 
        img: "https://placehold.co/400x300?text=Chicken+Burger", 
        desc: "Knuspriges Hähnchenfilet im Bun" 
    },
    { 
        id: 205, 
        restaurantId: 2,
        name: "Veggie Burger", 
        preis: 5.20, 
        img: "https://placehold.co/400x300?text=Veggie+Burger", 
        desc: "Vegetarischer Burger mit Gemüse-Patty" 
    },
    { 
        id: 206, 
        restaurantId: 2,
        name: "Pommes klein", 
        preis: 2.50, 
        img: "https://placehold.co/400x300?text=Pommes+klein", 
        desc: "Kleine Portion knusprige Pommes" 
    },
    { 
        id: 207, 
        restaurantId: 2,
        name: "Pommes groß", 
        preis: 3.50, 
        img: "https://placehold.co/400x300?text=Pommes+gross", 
        desc: "Große Portion knusprige Pommes" 
    },
    { 
        id: 208, 
        restaurantId: 2,
        name: "Onion Rings", 
        preis: 3.90, 
        img: "https://placehold.co/400x300?text=Onion+Rings", 
        desc: "Panierte und frittierte Zwiebelringe" 
    },

    /* -------- Sushi Meister (restaurantId: 3) ------------------------ */
    { 
        id: 301, 
        restaurantId: 3,
        name: "Sushi Mix Box", 
        preis: 14.90, 
        img: "https://placehold.co/400x300?text=Sushi+Mix", 
        desc: "Gemischte Box mit Nigiri und Maki" 
    },
    { 
        id: 302, 
        restaurantId: 3,
        name: "Lachs Maki", 
        preis: 9.50, 
        img: "https://placehold.co/400x300?text=Lachs+Maki", 
        desc: "8 Stück Maki mit frischem Lachs" 
    },
    { 
        id: 303, 
        restaurantId: 3,
        name: "Thunfisch Nigiri", 
        preis: 10.50, 
        img: "https://placehold.co/400x300?text=Thunfisch+Nigiri", 
        desc: "6 Stück Nigiri mit Thunfisch" 
    },
    { 
        id: 304, 
        restaurantId: 3,
        name: "California Roll", 
        preis: 11.90, 
        img: "https://placehold.co/400x300?text=California+Roll", 
        desc: "Inside-Out-Rollen mit Surimi und Avocado" 
    },
    { 
        id: 305, 
        restaurantId: 3,
        name: "Avocado Maki", 
        preis: 8.50, 
        img: "https://placehold.co/400x300?text=Avocado+Maki", 
        desc: "8 Stück vegane Maki mit Avocado" 
    },
    { 
        id: 306, 
        restaurantId: 3,
        name: "Tempura Roll", 
        preis: 12.50, 
        img: "https://placehold.co/400x300?text=Tempura+Roll", 
        desc: "Rollen mit knusprigem Tempura" 
    },
    { 
        id: 307, 
        restaurantId: 3,
        name: "Inside-Out Lachs", 
        preis: 11.50, 
        img: "https://placehold.co/400x300?text=Inside+Out+Lachs", 
        desc: "Inside-Out-Rollen mit Lachs und Frischkäse" 
    },
    { 
        id: 308, 
        restaurantId: 3,
        name: "Misosuppe", 
        preis: 3.90, 
        img: "https://placehold.co/400x300?text=Misosuppe", 
        desc: "Japanische Suppe mit Miso und Tofu" 
    },

    /* -------- Pasta Palazzo (restaurantId: 4) ------------------------ */
    { 
        id: 401, 
        restaurantId: 4,
        name: "Spaghetti Bolognese", 
        preis: 9.90, 
        img: "https://placehold.co/400x300?text=Bolognese", 
        desc: "Spaghetti mit herzhafter Fleischsoße" 
    },
    { 
        id: 402, 
        restaurantId: 4,
        name: "Spaghetti Carbonara", 
        preis: 10.50, 
        img: "https://placehold.co/400x300?text=Carbonara", 
        desc: "Mit Speck, Ei und Parmesan" 
    },
    { 
        id: 403, 
        restaurantId: 4,
        name: "Penne Arrabbiata", 
        preis: 9.50, 
        img: "https://placehold.co/400x300?text=Arrabbiata", 
        desc: "Scharfe Tomatensoße mit Knoblauch" 
    },
    { 
        id: 404, 
        restaurantId: 4,
        name: "Lasagne al Forno", 
        preis: 11.90, 
        img: "https://placehold.co/400x300?text=Lasagne", 
        desc: "Hausgemachte Lasagne aus dem Ofen" 
    },
    { 
        id: 405, 
        restaurantId: 4,
        name: "Gnocchi Pesto", 
        preis: 10.90, 
        img: "https://placehold.co/400x300?text=Gnocchi+Pesto", 
        desc: "Gnocchi mit Basilikum-Pesto" 
    },
    { 
        id: 406, 
        restaurantId: 4,
        name: "Tagliatelle Funghi", 
        preis: 11.50, 
        img: "https://placehold.co/400x300?text=Tagliatelle+Funghi", 
        desc: "Bandnudeln mit Pilzrahmsoße" 
    },
    { 
        id: 407, 
        restaurantId: 4,
        name: "Rigatoni al Forno", 
        preis: 11.90, 
        img: "https://placehold.co/400x300?text=Rigatoni+al+Forno", 
        desc: "Überbackene Rigatoni mit Käse" 
    },
    { 
        id: 408, 
        restaurantId: 4,
        name: "Tiramisu della Casa", 
        preis: 5.90, 
        img: "https://placehold.co/400x300?text=Tiramisu", 
        desc: "Hausgemachtes Tiramisu" 
    },

    /* -------- Döner Eck (restaurantId: 5) ---------------------------- */
    { 
        id: 501, 
        restaurantId: 5,
        name: "Döner Tasche", 
        preis: 6.00, 
        img: "https://placehold.co/400x300?text=Doener+Tasche", 
        desc: "Fladenbrot mit Fleisch, Salat und Soße" 
    },
    { 
        id: 502, 
        restaurantId: 5,
        name: "Döner Teller", 
        preis: 8.50, 
        img: "https://placehold.co/400x300?text=Doener+Teller", 
        desc: "Fleisch mit Beilagen und Salat" 
    },
    { 
        id: 503, 
        restaurantId: 5,
        name: "Dürüm Döner", 
        preis: 6.50, 
        img: "https://placehold.co/400x300?text=Duereum", 
        desc: "Gerolltes Fladenbrot mit Dönerfleisch" 
    },
    { 
        id: 504, 
        restaurantId: 5,
        name: "Lahmacun", 
        preis: 5.50, 
        img: "https://placehold.co/400x300?text=Lahmacun", 
        desc: "Türkische Pizza mit Hackfleisch" 
    },
    { 
        id: 505, 
        restaurantId: 5,
        name: "Pommes", 
        preis: 3.00, 
        img: "https://placehold.co/400x300?text=Pommes", 
        desc: "Frische Pommes als Beilage" 
    },
    { 
        id: 506, 
        restaurantId: 5,
        name: "Döner Box", 
        preis: 6.90, 
        img: "https://placehold.co/400x300?text=Doener+Box", 
        desc: "Fleisch mit Pommes in der Box" 
    },
    { 
        id: 507, 
        restaurantId: 5,
        name: "Falafel Teller", 
        preis: 7.50, 
        img: "https://placehold.co/400x300?text=Falafel+Teller", 
        desc: "Falafel mit Salat und Soße" 
    },
    { 
        id: 508, 
        restaurantId: 5,
        name: "Ayran", 
        preis: 2.00, 
        img: "https://placehold.co/400x300?text=Ayran", 
        desc: "Erfrischungsgetränk auf Joghurtbasis" 
    },

    /* -------- Vegan Garden (restaurantId: 6) ------------------------- */
    { 
        id: 601, 
        restaurantId: 6,
        name: "Vegane Bowl Classic", 
        preis: 10.50, 
        img: "https://placehold.co/400x300?text=Vegane+Bowl", 
        desc: "Bunte Bowl mit Gemüse und Kichererbsen" 
    },
    { 
        id: 602, 
        restaurantId: 6,
        name: "Quinoa Salat", 
        preis: 9.50, 
        img: "https://placehold.co/400x300?text=Quinoa+Salat", 
        desc: "Leichter Salat mit Quinoa und Gemüse" 
    },
    { 
        id: 603, 
        restaurantId: 6,
        name: "Veganer Burger", 
        preis: 9.90, 
        img: "https://placehold.co/400x300?text=Veganer+Burger", 
        desc: "Pflanzlicher Burger mit Salat" 
    },
    { 
        id: 604, 
        restaurantId: 6,
        name: "Hummus Platte", 
        preis: 8.50, 
        img: "https://placehold.co/400x300?text=Hummus", 
        desc: "Hummus mit Gemüsesticks und Brot" 
    },
    { 
        id: 605, 
        restaurantId: 6,
        name: "Süßkartoffel Pommes", 
        preis: 4.50, 
        img: "https://placehold.co/400x300?text=Suesskartoffel+Pommes", 
        desc: "Knusprige Süßkartoffel-Pommes" 
    },
    { 
        id: 606, 
        restaurantId: 6,
        name: "Vegane Pizza", 
        preis: 11.90, 
        img: "https://placehold.co/400x300?text=Vegane+Pizza", 
        desc: "Pizza mit Gemüse und veganem Käse" 
    },
    { 
        id: 607, 
        restaurantId: 6,
        name: "Chia-Pudding", 
        preis: 4.90, 
        img: "https://placehold.co/400x300?text=Chia+Pudding", 
        desc: "Dessert mit Chiasamen und Früchten" 
    },
    { 
        id: 608, 
        restaurantId: 6,
        name: "Grüner Smoothie", 
        preis: 4.50, 
        img: "https://placehold.co/400x300?text=Gruener+Smoothie", 
        desc: "Frischer Smoothie mit Spinat und Obst" 
    },

    /* -------- Asia Wok (restaurantId: 7) ----------------------------- */
    { 
        id: 701, 
        restaurantId: 7,
        name: "Hähnchen Chop Suey", 
        preis: 10.50, 
        img: "https://placehold.co/400x300?text=Chop+Suey", 
        desc: "Gebratenes Gemüse mit Hähnchen" 
    },
    { 
        id: 702, 
        restaurantId: 7,
        name: "Gebratene Nudeln", 
        preis: 9.00, 
        img: "https://placehold.co/400x300?text=Gebratene+Nudeln", 
        desc: "Mit Gemüse und Sojasoße" 
    },
    { 
        id: 703, 
        restaurantId: 7,
        name: "Gebratener Reis", 
        preis: 9.00, 
        img: "https://placehold.co/400x300?text=Gebratener+Reis", 
        desc: "Mit Ei, Gemüse und Sojasoße" 
    },
    { 
        id: 704, 
        restaurantId: 7,
        name: "Ente Süß-Sauer", 
        preis: 12.50, 
        img: "https://placehold.co/400x300?text=Ente+Suess-Sauer", 
        desc: "Knusprige Ente mit süß-saurer Soße" 
    },
    { 
        id: 705, 
        restaurantId: 7,
        name: "Gemüse Wok", 
        preis: 9.50, 
        img: "https://placehold.co/400x300?text=Gemuese+Wok", 
        desc: "Gebratenes Gemüse aus dem Wok" 
    },
    { 
        id: 706, 
        restaurantId: 7,
        name: "Frühlingsrollen", 
        preis: 4.50, 
        img: "https://placehold.co/400x300?text=Fruehlingsrollen", 
        desc: "Knusprige Rollen mit Gemüsefüllung" 
    },
    { 
        id: 707, 
        restaurantId: 7,
        name: "Hähnchen Curry", 
        preis: 10.90, 
        img: "https://placehold.co/400x300?text=Haehnchen+Curry", 
        desc: "Hähnchen in würziger Currysauce" 
    },
    { 
        id: 708, 
        restaurantId: 7,
        name: "Wan Tan Suppe", 
        preis: 4.90, 
        img: "https://placehold.co/400x300?text=Wan+Tan+Suppe", 
        desc: "Leichte Suppe mit Wan Tan" 
    },

    /* -------- Taco Fiesta (restaurantId: 8) -------------------------- */
    { 
        id: 801, 
        restaurantId: 8,
        name: "Taco Rindfleisch", 
        preis: 3.90, 
        img: "https://placehold.co/400x300?text=Taco+Beef", 
        desc: "Tortilla mit Rindfleischfüllung" 
    },
    { 
        id: 802, 
        restaurantId: 8,
        name: "Taco Hähnchen", 
        preis: 3.90, 
        img: "https://placehold.co/400x300?text=Taco+Chicken", 
        desc: "Tortilla mit Hähnchenfüllung" 
    },
    { 
        id: 803, 
        restaurantId: 8,
        name: "Taco Veggie", 
        preis: 3.70, 
        img: "https://placehold.co/400x300?text=Taco+Veggie", 
        desc: "Vegetarischer Taco mit Gemüse" 
    },
    { 
        id: 804, 
        restaurantId: 8,
        name: "Nachos Käse", 
        preis: 4.50, 
        img: "https://placehold.co/400x300?text=Nachos+Kaese", 
        desc: "Nachos mit Käsesauce" 
    },
    { 
        id: 805, 
        restaurantId: 8,
        name: "Burrito Rind", 
        preis: 8.50, 
        img: "https://placehold.co/400x300?text=Burrito+Beef", 
        desc: "Gefüllte Weizentortilla mit Rind" 
    },
    { 
        id: 806, 
        restaurantId: 8,
        name: "Burrito Hähnchen", 
        preis: 8.50, 
        img: "https://placehold.co/400x300?text=Burrito+Chicken", 
        desc: "Gefüllte Weizentortilla mit Hähnchen" 
    },
    { 
        id: 807, 
        restaurantId: 8,
        name: "Quesadilla Käse", 
        preis: 7.50, 
        img: "https://placehold.co/400x300?text=Quesadilla+Kaese", 
        desc: "Überbackene Tortilla mit Käse" 
    },
    { 
        id: 808, 
        restaurantId: 8,
        name: "Chili con Carne", 
        preis: 9.00, 
        img: "https://placehold.co/400x300?text=Chili+con+Carne", 
        desc: "Schmorgericht mit Rindfleisch und Bohnen" 
    },

    /* -------- Curry House (restaurantId: 9) -------------------------- */
    { 
        id: 901, 
        restaurantId: 9,
        name: "Chicken Curry", 
        preis: 11.50, 
        img: "https://placehold.co/400x300?text=Chicken+Curry", 
        desc: "Hähnchen in würziger Currysauce" 
    },
    { 
        id: 902, 
        restaurantId: 9,
        name: "Lamm Curry", 
        preis: 12.50, 
        img: "https://placehold.co/400x300?text=Lamm+Curry", 
        desc: "Lammfleisch in aromatischer Sauce" 
    },
    { 
        id: 903, 
        restaurantId: 9,
        name: "Gemüse Curry", 
        preis: 10.50, 
        img: "https://placehold.co/400x300?text=Gemuese+Curry", 
        desc: "Cremiges Curry mit Gemüse" 
    },
    { 
        id: 904, 
        restaurantId: 9,
        name: "Butter Chicken", 
        preis: 12.90, 
        img: "https://placehold.co/400x300?text=Butter+Chicken", 
        desc: "Mildes Currygericht mit Butter und Sahne" 
    },
    { 
        id: 905, 
        restaurantId: 9,
        name: "Tandoori Hähnchen", 
        preis: 13.50, 
        img: "https://placehold.co/400x300?text=Tandoori+Chicken", 
        desc: "Im Tandoor-Ofen gegrilltes Hähnchen" 
    },
    { 
        id: 906, 
        restaurantId: 9,
        name: "Naan Brot", 
        preis: 3.00, 
        img: "https://placehold.co/400x300?text=Naan", 
        desc: "Frisches Fladenbrot aus dem Ofen" 
    },
    { 
        id: 907, 
        restaurantId: 9,
        name: "Linsen Dal", 
        preis: 9.50, 
        img: "https://placehold.co/400x300?text=Dal", 
        desc: "Indisches Linsengericht" 
    },
    { 
        id: 908, 
        restaurantId: 9,
        name: "Mango Lassi", 
        preis: 3.90, 
        img: "https://placehold.co/400x300?text=Mango+Lassi", 
        desc: "Joghurtgetränk mit Mango" 
    },

    /* -------- Steak Palace (restaurantId: 10) ------------------------ */
    { 
        id: 1001, 
        restaurantId: 10,
        name: "Rumpsteak", 
        preis: 19.90, 
        img: "https://placehold.co/400x300?text=Rumpsteak", 
        desc: "Gegrilltes Rumpsteak mit Kräuterbutter" 
    },
    { 
        id: 1002, 
        restaurantId: 10,
        name: "Ribeye Steak", 
        preis: 22.50, 
        img: "https://placehold.co/400x300?text=Ribeye", 
        desc: "Saftiges Ribeye vom Grill" 
    },
    { 
        id: 1003, 
        restaurantId: 10,
        name: "Filetsteak", 
        preis: 24.90, 
        img: "https://placehold.co/400x300?text=Filetsteak", 
        desc: "Zartes Rinderfilet" 
    },
    { 
        id: 1004, 
        restaurantId: 10,
        name: "Grillgemüse", 
        preis: 6.50, 
        img: "https://placehold.co/400x300?text=Grillgemuese", 
        desc: "Gemischtes Gemüse vom Grill" 
    },
    { 
        id: 1005, 
        restaurantId: 10,
        name: "Ofenkartoffel", 
        preis: 4.50, 
        img: "https://placehold.co/400x300?text=Ofenkartoffel", 
        desc: "Große Ofenkartoffel mit Sour Cream" 
    },
    { 
        id: 1006, 
        restaurantId: 10,
        name: "BBQ Rippchen", 
        preis: 17.90, 
        img: "https://placehold.co/400x300?text=BBQ+Ribs", 
        desc: "Schweinerippchen mit BBQ-Sauce" 
    },
    { 
        id: 1007, 
        restaurantId: 10,
        name: "Caesar Salat", 
        preis: 8.90, 
        img: "https://placehold.co/400x300?text=Caesar+Salat", 
        desc: "Klassischer Salat mit Croutons und Parmesan" 
    },
    { 
        id: 1008, 
        restaurantId: 10,
        name: "Schokokuchen", 
        preis: 5.50, 
        img: "https://placehold.co/400x300?text=Schokokuchen", 
        desc: "Warmer Schokokuchen mit Eis" 
    },

    /* -------- Falafel King (restaurantId: 11) ------------------------ */
    { 
        id: 1101, 
        restaurantId: 11,
        name: "Falafel Teller", 
        preis: 8.50, 
        img: "https://placehold.co/400x300?text=Falafel+Teller", 
        desc: "Falafel mit Salat und Hummus" 
    },
    { 
        id: 1102, 
        restaurantId: 11,
        name: "Falafel Wrap", 
        preis: 6.50, 
        img: "https://placehold.co/400x300?text=Falafel+Wrap", 
        desc: "Gerolltes Fladenbrot mit Falafel" 
    },
    { 
        id: 1103, 
        restaurantId: 11,
        name: "Hummus", 
        preis: 4.50, 
        img: "https://placehold.co/400x300?text=Hummus", 
        desc: "Kichererbsencreme mit Olivenöl" 
    },
    { 
        id: 1104, 
        restaurantId: 11,
        name: "Baba Ghanoush", 
        preis: 4.90, 
        img: "https://placehold.co/400x300?text=Baba+Ghanoush", 
        desc: "Auberginen-Dip mit Sesam" 
    },
    { 
        id: 1105, 
        restaurantId: 11,
        name: "Tabouleh Salat", 
        preis: 5.90, 
        img: "https://placehold.co/400x300?text=Tabouleh", 
        desc: "Petersilien-Bulgur-Salat" 
    },
    { 
        id: 1106, 
        restaurantId: 11,
        name: "Halloumi Teller", 
        preis: 9.50, 
        img: "https://placehold.co/400x300?text=Halloumi", 
        desc: "Gegrillter Halloumi mit Beilagen" 
    },
    { 
        id: 1107, 
        restaurantId: 11,
        name: "Falafel Box", 
        preis: 7.50, 
        img: "https://placehold.co/400x300?text=Falafel+Box", 
        desc: "Falafel mit Pommes in der Box" 
    },
    { 
        id: 1108, 
        restaurantId: 11,
        name: "Baklava", 
        preis: 3.50, 
        img: "https://placehold.co/400x300?text=Baklava", 
        desc: "Süßes Blätterteiggebäck mit Nüssen" 
    },

    /* -------- Thai Street Food (restaurantId: 12) -------------------- */
    { 
        id: 1201, 
        restaurantId: 12,
        name: "Pad Thai Hähnchen", 
        preis: 11.50, 
        img: "https://placehold.co/400x300?text=Pad+Thai+Chicken", 
        desc: "Gebratene Reisnudeln mit Hähnchen" 
    },
    { 
        id: 1202, 
        restaurantId: 12,
        name: "Pad Thai Veggie", 
        preis: 10.90, 
        img: "https://placehold.co/400x300?text=Pad+Thai+Veggie", 
        desc: "Gebratene Reisnudeln mit Gemüse" 
    },
    { 
        id: 1203, 
        restaurantId: 12,
        name: "Rotes Curry", 
        preis: 11.90, 
        img: "https://placehold.co/400x300?text=Rotes+Curry", 
        desc: "Rotes Thai-Curry mit Kokosmilch" 
    },
    { 
        id: 1204, 
        restaurantId: 12,
        name: "Grünes Curry", 
        preis: 11.90, 
        img: "https://placehold.co/400x300?text=Gruenes+Curry", 
        desc: "Grünes Thai-Curry mit Gemüse" 
    },
    { 
        id: 1205, 
        restaurantId: 12,
        name: "Tom Kha Gai", 
        preis: 8.90, 
        img: "https://placehold.co/400x300?text=Tom+Kha+Gai", 
        desc: "Kokosmilchsuppe mit Hähnchen" 
    },
    { 
        id: 1206, 
        restaurantId: 12,
        name: "Sommerrollen", 
        preis: 6.50, 
        img: "https://placehold.co/400x300?text=Sommerrollen", 
        desc: "Frische Rollen mit Gemüsefüllung" 
    },
    { 
        id: 1207, 
        restaurantId: 12,
        name: "Gebratener Reis Thai", 
        preis: 9.50, 
        img: "https://placehold.co/400x300?text=Thai+Fried+Rice", 
        desc: "Gebratener Reis auf Thai-Art" 
    },
    { 
        id: 1208, 
        restaurantId: 12,
        name: "Mango Sticky Rice", 
        preis: 6.50, 
        img: "https://placehold.co/400x300?text=Mango+Sticky+Rice", 
        desc: "Klebreis mit Mango und Kokosmilch" 
    },

    /* -------- Bäckerei Sonnenschein (restaurantId: 13) --------------- */
    { 
        id: 1301, 
        restaurantId: 13,
        name: "Buttercroissant", 
        preis: 2.20, 
        img: "https://placehold.co/400x300?text=Buttercroissant", 
        desc: "Frisches Croissant mit Butter" 
    },
    { 
        id: 1302, 
        restaurantId: 13,
        name: "Vollkornbrötchen", 
        preis: 0.90, 
        img: "https://placehold.co/400x300?text=Vollkornbroetchen", 
        desc: "Knuspriges Vollkornbrötchen" 
    },
    { 
        id: 1303, 
        restaurantId: 13,
        name: "Laugenbrezel", 
        preis: 1.50, 
        img: "https://placehold.co/400x300?text=Laugenbrezel", 
        desc: "Frische Brezel mit Salz" 
    },
    { 
        id: 1304, 
        restaurantId: 13,
        name: "Käsekuchen", 
        preis: 3.20, 
        img: "https://placehold.co/400x300?text=Kaesekuchen", 
        desc: "Klassischer Käsekuchen vom Blech" 
    },
    { 
        id: 1305, 
        restaurantId: 13,
        name: "Apfelstrudel", 
        preis: 3.20, 
        img: "https://placehold.co/400x300?text=Apfelstrudel", 
        desc: "Warmer Strudel mit Apfelfüllung" 
    },
    { 
        id: 1306, 
        restaurantId: 13,
        name: "Belegtes Brötchen Käse", 
        preis: 3.50, 
        img: "https://placehold.co/400x300?text=Broetchen+Kaese", 
        desc: "Brötchen mit Käse belegt" 
    },
    { 
        id: 1307, 
        restaurantId: 13,
        name: "Belegtes Brötchen Schinken", 
        preis: 3.50, 
        img: "https://placehold.co/400x300?text=Broetchen+Schinken", 
        desc: "Brötchen mit Schinken belegt" 
    },
    { 
        id: 1308, 
        restaurantId: 13,
        name: "Kaffee to go", 
        preis: 2.50, 
        img: "https://placehold.co/400x300?text=Kaffee", 
        desc: "Frisch gebrühter Kaffee zum Mitnehmen" 
    }
];

/**
 * Tagesangebote (für angebote.html)
 * - gerichtId verweist auf ein Gericht aus speisekarteDaten
 * - optional: restaurantId, falls später pro Restaurant gefiltert werden soll
 */
const tagesangebotDaten = [
    {
        id: 1,
        restaurantId: 1,          // Pizza Blitz
        gerichtId: 105,           // z. B. Pizza Diavola
        titel: "Pizza des Tages",
        hinweis: "Nur heute besonders günstig!"
    },
    {
        id: 2,
        restaurantId: 2,          // Burger King
        gerichtId: 203,           // Doppel Whopper
        titel: "Burger des Tages",
        hinweis: "Mit extra Käse und Pommes."
    },
    {
        id: 3,
        restaurantId: 3,          // Sushi Meister
        gerichtId: 301,           // Sushi Mix Box
        titel: "Sushi Angebot",
        hinweis: "Perfekt zum Teilen."
    },
    {
        id: 4,
        restaurantId: 6,          // Vegan Garden
        gerichtId: 601,           // Vegane Bowl
        titel: "Vegane Bowl Aktion",
        hinweis: "Frisch, gesund und bunt."
    },
    {
        id: 5,
        restaurantId: 9,          // Curry House
        gerichtId: 901,           // Chicken Curry
        titel: "Curry Spezial",
        hinweis: "Mit Basmatireis und Naan."
    }
];

/* --- 2. WARENKORB-LOGIK (State Management) --- */

// Initialisierung: Versuche den Warenkorb aus dem Speicher zu laden.
// Wenn keiner da ist (erster Besuch), erstelle ein leeres Array [].
let warenkorb = JSON.parse(localStorage.getItem("warenkorb")) || [];

console.log(
    "global.js geladen. Aktueller Warenkorb-Inhalt:",
    warenkorb.length,
    "Items"
);

/**
 * Speichert den aktuellen Zustand des Warenkorbs im Browser.
 * Muss immer aufgerufen werden, wenn sich am Warenkorb etwas ändert.
 */
function saveCart() {
    localStorage.setItem("warenkorb", JSON.stringify(warenkorb));
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
    const badge = document.getElementById("cart-count");
    if (badge) {
        badge.innerText = warenkorb.length;
        badge.style.display = warenkorb.length > 0 ? "inline-block" : "none";
    }
    // --------------------------------------------------------------------------
// AKTIVER NAVI-LINK IM SIDEBAR
// Markiert automatisch den Link zur aktuellen Seite in der Sidebar
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".sidebar nav a");
    if (!links.length) return;

    // Dateiname der aktuellen Seite, z.B. "speisekarte.html"
    const aktuelleSeite = location.pathname.split("/").pop();

    links.forEach(link => {
        const ziel = link.getAttribute("href");
        if (ziel === aktuelleSeite) {
            link.classList.add("active");
        }
    });
});
}