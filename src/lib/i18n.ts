import type { CategoryId, Meat, ProductId, Sauce } from "@/lib/menu";

export type Lang = "de" | "en" | "tr";

export const LANGS: Lang[] = ["de", "en", "tr"];

type ProductCopy = Record<ProductId, { name: string; desc: string }>;

export type Copy = {
  banner: string;
  categories: Record<CategoryId, string>;
  meats: Record<Meat, string>;
  sauces: Record<Sauce, string>;
  meatTitle: string;
  sauceTitle: string;
  extrasTitle: string;
  noOnion: string;
  extraCheese: string;
  doubleMeat: string;
  extraPortion: string;
  add: string;
  qty: string;
  popular: string;
  itemsOne: string;
  itemsMany: string;
  emptyCart: string;
  checkout: string;
  cart: string;
  close: string;
  back: string;
  remove: string;
  total: string;
  yourOrder: string;
  payTitle: string;
  payCard: string;
  payApple: string;
  payGoogle: string;
  payCash: string;
  payCardHint: string;
  payAppleHint: string;
  payGoogleHint: string;
  payCashHint: string;
  holdCard: string;
  holdSub: string;
  cancel: string;
  cashTitle: string;
  cashBody: string;
  toReceipt: string;
  orderNo: string;
  thanks: string;
  paidNote: string;
  cashNote: string;
  newOrder: string;
  added: string;
  free: string;
  products: ProductCopy;
};

const de: Copy = {
  banner: "Hier bestellen & kontaktlos bezahlen",
  categories: {
    doner: "Döner & Dürüm",
    veggie: "Falafel & Veggie",
    sides: "Beilagen & Snacks",
    drinks: "Getränke",
    desserts: "Desserts",
  },
  meats: { chicken: "Hähnchen", veal: "Kalb", veggie: "Veggie" },
  sauces: { garlic: "Knoblauch", herbs: "Kräuter", spicy: "Scharf" },
  meatTitle: "Fleischwahl",
  sauceTitle: "Soße wählen",
  extrasTitle: "Extrawünsche",
  noOnion: "Ohne Zwiebeln",
  extraCheese: "Extra Käse",
  doubleMeat: "Doppelt Fleisch",
  extraPortion: "Extra Portion",
  add: "Zum Warenkorb hinzufügen",
  qty: "Menge",
  popular: "Beliebt",
  itemsOne: "Artikel",
  itemsMany: "Artikel",
  emptyCart: "Noch nichts gewählt",
  checkout: "Bestellung abschließen",
  cart: "Warenkorb",
  close: "Schließen",
  back: "Zurück",
  remove: "Entfernen",
  total: "Summe",
  yourOrder: "Deine Bestellung",
  payTitle: "Bitte wähle deine Zahlungsart",
  payCard: "Karte",
  payApple: "Apple Pay",
  payGoogle: "Google Pay",
  payCash: "Bar an der Theke",
  payCardHint: "Kontaktlos oder Chip",
  payAppleHint: "Mit dem iPhone",
  payGoogleHint: "Mit dem Android",
  payCashHint: "Zahlung an der Kasse",
  holdCard: "Bitte Karte an das Terminal halten…",
  holdSub: "Kontaktlos · NFC",
  cancel: "Abbrechen",
  cashTitle: "Barzahlung an der Theke",
  cashBody: "Bitte den Bon an der Kasse vorzeigen und dort bezahlen.",
  toReceipt: "Bon anzeigen",
  orderNo: "Bestellnummer",
  thanks: "Guten Appetit",
  paidNote: "Zahlung erfolgreich. Bitte den Bon an der Ausgabe vorzeigen.",
  cashNote: "Noch offen. Bitte an der Theke bezahlen.",
  newOrder: "Neue Bestellung",
  added: "Hinzugefügt",
  free: "inklusive",
  products: {
    doner: {
      name: "Döner Kebab",
      desc: "Saftiges Kalbfleisch, frischer Salat und Haussoße im Fladenbrot.",
    },
    chicken: {
      name: "Hähnchen Döner",
      desc: "Zartes Hähnchen, knackiger Salat und Kräuterjoghurt.",
    },
    durum: {
      name: "Dürüm Klassik",
      desc: "Warm gerolltes Fladenbrot mit Fleisch, Salat und Soße.",
    },
    plate: {
      name: "Döner Teller",
      desc: "Fleisch mit Reis, Salat und warmer Soße, auf dem Teller.",
    },
    box: {
      name: "Döner Box",
      desc: "Fleisch, Pommes und Salat, fertig für unterwegs.",
    },
    falafel: {
      name: "Falafel Döner",
      desc: "Knusprige Falafel, Kräuter und Tahin im Brot.",
    },
    halloumi: {
      name: "Halloumi Dürüm",
      desc: "Gegrillter Halloumi, Salat und Minzjoghurt.",
    },
    fries: {
      name: "Pommes Frites",
      desc: "Goldgelb, knusprig, leicht gesalzen.",
    },
    sweetfries: {
      name: "Süßkartoffelpommes",
      desc: "Süß, knusprig, mit einer Prise Salz.",
    },
    ayran: {
      name: "Ayran",
      desc: "Eiskalt, cremig, leicht salzig.",
    },
    cola: {
      name: "Cola",
      desc: "Gekühlt, mit Eis.",
    },
    tea: {
      name: "Çay",
      desc: "Schwarzer Tee im klassischen Glas.",
    },
    baklava: {
      name: "Baklava",
      desc: "Blätterteig, Pistazie und Honigsirup.",
    },
    kunefe: {
      name: "Künefe",
      desc: "Warmer Kadaif, Käse und Pistazie.",
    },
  },
};

const en: Copy = {
  banner: "Order here & pay contactless",
  categories: {
    doner: "Doner & dürüm",
    veggie: "Falafel & veggie",
    sides: "Sides & snacks",
    drinks: "Drinks",
    desserts: "Desserts",
  },
  meats: { chicken: "Chicken", veal: "Veal", veggie: "Veggie" },
  sauces: { garlic: "Garlic", herbs: "Herbs", spicy: "Hot" },
  meatTitle: "Choose meat",
  sauceTitle: "Choose sauce",
  extrasTitle: "Extras",
  noOnion: "No onions",
  extraCheese: "Extra cheese",
  doubleMeat: "Double meat",
  extraPortion: "Extra portion",
  add: "Add to basket",
  qty: "Quantity",
  popular: "Popular",
  itemsOne: "item",
  itemsMany: "items",
  emptyCart: "Nothing selected yet",
  checkout: "Complete order",
  cart: "Basket",
  close: "Close",
  back: "Back",
  remove: "Remove",
  total: "Total",
  yourOrder: "Your order",
  payTitle: "Choose how you’d like to pay",
  payCard: "Card",
  payApple: "Apple Pay",
  payGoogle: "Google Pay",
  payCash: "Cash at the counter",
  payCardHint: "Contactless or chip",
  payAppleHint: "With your iPhone",
  payGoogleHint: "With your Android",
  payCashHint: "Pay at the till",
  holdCard: "Hold your card to the terminal…",
  holdSub: "Contactless · NFC",
  cancel: "Cancel",
  cashTitle: "Cash at the counter",
  cashBody: "Show this receipt at the till and pay there.",
  toReceipt: "Show receipt",
  orderNo: "Order number",
  thanks: "Enjoy your meal",
  paidNote: "Payment successful. Show the receipt at the counter.",
  cashNote: "Still open. Please pay at the counter.",
  newOrder: "New order",
  added: "Added",
  free: "included",
  products: {
    doner: {
      name: "Doner kebab",
      desc: "Juicy veal, fresh salad and house sauce in flatbread.",
    },
    chicken: {
      name: "Chicken doner",
      desc: "Tender chicken, crisp salad and herb yogurt.",
    },
    durum: {
      name: "Classic dürüm",
      desc: "Warm flatbread rolled around meat, salad and sauce.",
    },
    plate: {
      name: "Doner plate",
      desc: "Meat with rice, salad and warm sauce.",
    },
    box: {
      name: "Doner box",
      desc: "Meat, fries and salad, ready to go.",
    },
    falafel: {
      name: "Falafel doner",
      desc: "Crisp falafel, herbs and tahini in bread.",
    },
    halloumi: {
      name: "Halloumi dürüm",
      desc: "Grilled halloumi, salad and mint yogurt.",
    },
    fries: {
      name: "Fries",
      desc: "Golden, crisp, lightly salted.",
    },
    sweetfries: {
      name: "Sweet potato fries",
      desc: "Sweet, crisp, a pinch of salt.",
    },
    ayran: {
      name: "Ayran",
      desc: "Ice-cold, creamy, lightly salted.",
    },
    cola: {
      name: "Cola",
      desc: "Chilled, over ice.",
    },
    tea: {
      name: "Turkish tea",
      desc: "Black tea in the classic tulip glass.",
    },
    baklava: {
      name: "Baklava",
      desc: "Filo, pistachio and honey syrup.",
    },
    kunefe: {
      name: "Künefe",
      desc: "Warm kadayıf, cheese and pistachio.",
    },
  },
};

const tr: Copy = {
  banner: "Buradan sipariş ver & temassız öde",
  categories: {
    doner: "Döner & dürüm",
    veggie: "Falafel & vejetaryen",
    sides: "Yanlar & atıştırmalık",
    drinks: "İçecekler",
    desserts: "Tatlılar",
  },
  meats: { chicken: "Tavuk", veal: "Dana", veggie: "Vejetaryen" },
  sauces: { garlic: "Sarımsak", herbs: "Otlu", spicy: "Acılı" },
  meatTitle: "Et seçimi",
  sauceTitle: "Sos seç",
  extrasTitle: "Ek istekler",
  noOnion: "Soğansız",
  extraCheese: "Ekstra peynir",
  doubleMeat: "Çift et",
  extraPortion: "Ekstra porsiyon",
  add: "Sepete ekle",
  qty: "Adet",
  popular: "Popüler",
  itemsOne: "ürün",
  itemsMany: "ürün",
  emptyCart: "Henüz bir şey seçilmedi",
  checkout: "Siparişi tamamla",
  cart: "Sepet",
  close: "Kapat",
  back: "Geri",
  remove: "Kaldır",
  total: "Toplam",
  yourOrder: "Siparişin",
  payTitle: "Lütfen ödeme yöntemini seç",
  payCard: "Kart",
  payApple: "Apple Pay",
  payGoogle: "Google Pay",
  payCash: "Kasada nakit",
  payCardHint: "Temassız veya çipli",
  payAppleHint: "iPhone ile",
  payGoogleHint: "Android ile",
  payCashHint: "Kasada öde",
  holdCard: "Lütfen kartı terminale tutun…",
  holdSub: "Temassız · NFC",
  cancel: "Vazgeç",
  cashTitle: "Kasada nakit",
  cashBody: "Lütfen fişi kasada gösterip orada ödeyin.",
  toReceipt: "Fişi göster",
  orderNo: "Sipariş no",
  thanks: "Afiyet olsun",
  paidNote: "Ödeme başarılı. Fişi teslimatta gösterin.",
  cashNote: "Henüz ödenmedi. Lütfen kasada ödeyin.",
  newOrder: "Yeni sipariş",
  added: "Eklendi",
  free: "dahil",
  products: {
    doner: {
      name: "Döner kebap",
      desc: "Sulu dana eti, taze salata ve ev sosu, lavaşta.",
    },
    chicken: {
      name: "Tavuk döner",
      desc: "Yumuşak tavuk, kıtır salata ve otlu yoğurt.",
    },
    durum: {
      name: "Klasik dürüm",
      desc: "Sıcak lavaşta et, salata ve sos.",
    },
    plate: {
      name: "Döner tabak",
      desc: "Et, pilav, salata ve sıcak sos.",
    },
    box: {
      name: "Döner kutu",
      desc: "Et, patates ve salata, yola hazır.",
    },
    falafel: {
      name: "Falafel döner",
      desc: "Çıtır falafel, otlar ve tahin, ekmekte.",
    },
    halloumi: {
      name: "Hellim dürüm",
      desc: "Izgara hellim, salata ve naneli yoğurt.",
    },
    fries: {
      name: "Patates kızartması",
      desc: "Altın rengi, çıtır, hafif tuzlu.",
    },
    sweetfries: {
      name: "Tatlı patates",
      desc: "Tatlı, çıtır, bir tutam tuz.",
    },
    ayran: {
      name: "Ayran",
      desc: "Buz gibi, kıvamlı, hafif tuzlu.",
    },
    cola: {
      name: "Kola",
      desc: "Soğuk, buzlu.",
    },
    tea: {
      name: "Çay",
      desc: "İnce belli bardakta demli çay.",
    },
    baklava: {
      name: "Baklava",
      desc: "Yufka, fıstık ve bal şerbeti.",
    },
    kunefe: {
      name: "Künefe",
      desc: "Sıcak kadayıf, peynir ve fıstık.",
    },
  },
};

const COPY: Record<Lang, Copy> = { de, en, tr };

export function copy(lang: Lang) {
  return COPY[lang];
}
