import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Banknote, a as Trash2, c as Plus, d as Leaf, f as CupSoda, g as CakeSlice, h as Check, l as Nfc, m as ChevronRight, n as Wallet, o as Smartphone, p as CreditCard, r as Utensils, s as Sandwich, t as X, u as Minus, v as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ccgjakzt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var LANGS = [
	"de",
	"en",
	"tr"
];
var COPY = {
	de: {
		banner: "Hier bestellen & kontaktlos bezahlen",
		categories: {
			doner: "Döner & Dürüm",
			veggie: "Falafel & Veggie",
			sides: "Beilagen & Snacks",
			drinks: "Getränke",
			desserts: "Desserts"
		},
		meats: {
			chicken: "Hähnchen",
			veal: "Kalb",
			veggie: "Veggie"
		},
		sauces: {
			garlic: "Knoblauch",
			herbs: "Kräuter",
			spicy: "Scharf"
		},
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
				desc: "Saftiges Kalbfleisch, frischer Salat und Haussoße im Fladenbrot."
			},
			chicken: {
				name: "Hähnchen Döner",
				desc: "Zartes Hähnchen, knackiger Salat und Kräuterjoghurt."
			},
			durum: {
				name: "Dürüm Klassik",
				desc: "Warm gerolltes Fladenbrot mit Fleisch, Salat und Soße."
			},
			plate: {
				name: "Döner Teller",
				desc: "Fleisch mit Reis, Salat und warmer Soße, auf dem Teller."
			},
			box: {
				name: "Döner Box",
				desc: "Fleisch, Pommes und Salat, fertig für unterwegs."
			},
			falafel: {
				name: "Falafel Döner",
				desc: "Knusprige Falafel, Kräuter und Tahin im Brot."
			},
			halloumi: {
				name: "Halloumi Dürüm",
				desc: "Gegrillter Halloumi, Salat und Minzjoghurt."
			},
			fries: {
				name: "Pommes Frites",
				desc: "Goldgelb, knusprig, leicht gesalzen."
			},
			sweetfries: {
				name: "Süßkartoffelpommes",
				desc: "Süß, knusprig, mit einer Prise Salz."
			},
			ayran: {
				name: "Ayran",
				desc: "Eiskalt, cremig, leicht salzig."
			},
			cola: {
				name: "Cola",
				desc: "Gekühlt, mit Eis."
			},
			tea: {
				name: "Çay",
				desc: "Schwarzer Tee im klassischen Glas."
			},
			baklava: {
				name: "Baklava",
				desc: "Blätterteig, Pistazie und Honigsirup."
			},
			kunefe: {
				name: "Künefe",
				desc: "Warmer Kadaif, Käse und Pistazie."
			}
		}
	},
	en: {
		banner: "Order here & pay contactless",
		categories: {
			doner: "Doner & dürüm",
			veggie: "Falafel & veggie",
			sides: "Sides & snacks",
			drinks: "Drinks",
			desserts: "Desserts"
		},
		meats: {
			chicken: "Chicken",
			veal: "Veal",
			veggie: "Veggie"
		},
		sauces: {
			garlic: "Garlic",
			herbs: "Herbs",
			spicy: "Hot"
		},
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
				desc: "Juicy veal, fresh salad and house sauce in flatbread."
			},
			chicken: {
				name: "Chicken doner",
				desc: "Tender chicken, crisp salad and herb yogurt."
			},
			durum: {
				name: "Classic dürüm",
				desc: "Warm flatbread rolled around meat, salad and sauce."
			},
			plate: {
				name: "Doner plate",
				desc: "Meat with rice, salad and warm sauce."
			},
			box: {
				name: "Doner box",
				desc: "Meat, fries and salad, ready to go."
			},
			falafel: {
				name: "Falafel doner",
				desc: "Crisp falafel, herbs and tahini in bread."
			},
			halloumi: {
				name: "Halloumi dürüm",
				desc: "Grilled halloumi, salad and mint yogurt."
			},
			fries: {
				name: "Fries",
				desc: "Golden, crisp, lightly salted."
			},
			sweetfries: {
				name: "Sweet potato fries",
				desc: "Sweet, crisp, a pinch of salt."
			},
			ayran: {
				name: "Ayran",
				desc: "Ice-cold, creamy, lightly salted."
			},
			cola: {
				name: "Cola",
				desc: "Chilled, over ice."
			},
			tea: {
				name: "Turkish tea",
				desc: "Black tea in the classic tulip glass."
			},
			baklava: {
				name: "Baklava",
				desc: "Filo, pistachio and honey syrup."
			},
			kunefe: {
				name: "Künefe",
				desc: "Warm kadayıf, cheese and pistachio."
			}
		}
	},
	tr: {
		banner: "Buradan sipariş ver & temassız öde",
		categories: {
			doner: "Döner & dürüm",
			veggie: "Falafel & vejetaryen",
			sides: "Yanlar & atıştırmalık",
			drinks: "İçecekler",
			desserts: "Tatlılar"
		},
		meats: {
			chicken: "Tavuk",
			veal: "Dana",
			veggie: "Vejetaryen"
		},
		sauces: {
			garlic: "Sarımsak",
			herbs: "Otlu",
			spicy: "Acılı"
		},
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
				desc: "Sulu dana eti, taze salata ve ev sosu, lavaşta."
			},
			chicken: {
				name: "Tavuk döner",
				desc: "Yumuşak tavuk, kıtır salata ve otlu yoğurt."
			},
			durum: {
				name: "Klasik dürüm",
				desc: "Sıcak lavaşta et, salata ve sos."
			},
			plate: {
				name: "Döner tabak",
				desc: "Et, pilav, salata ve sıcak sos."
			},
			box: {
				name: "Döner kutu",
				desc: "Et, patates ve salata, yola hazır."
			},
			falafel: {
				name: "Falafel döner",
				desc: "Çıtır falafel, otlar ve tahin, ekmekte."
			},
			halloumi: {
				name: "Hellim dürüm",
				desc: "Izgara hellim, salata ve naneli yoğurt."
			},
			fries: {
				name: "Patates kızartması",
				desc: "Altın rengi, çıtır, hafif tuzlu."
			},
			sweetfries: {
				name: "Tatlı patates",
				desc: "Tatlı, çıtır, bir tutam tuz."
			},
			ayran: {
				name: "Ayran",
				desc: "Buz gibi, kıvamlı, hafif tuzlu."
			},
			cola: {
				name: "Kola",
				desc: "Soğuk, buzlu."
			},
			tea: {
				name: "Çay",
				desc: "İnce belli bardakta demli çay."
			},
			baklava: {
				name: "Baklava",
				desc: "Yufka, fıstık ve bal şerbeti."
			},
			kunefe: {
				name: "Künefe",
				desc: "Sıcak kadayıf, peynir ve fıstık."
			}
		}
	}
};
function copy(lang) {
	return COPY[lang];
}
var CATEGORIES = [
	{ id: "doner" },
	{ id: "veggie" },
	{ id: "sides" },
	{ id: "drinks" },
	{ id: "desserts" }
];
var MEATS = [
	"chicken",
	"veal",
	"veggie"
];
var SAUCES = [
	"garlic",
	"herbs",
	"spicy"
];
var DOUBLE_MEAT = 2.5;
var PRODUCTS = [
	{
		id: "doner",
		category: "doner",
		price: 7.5,
		image: "/menu/doner.jpg",
		flow: "kebab",
		popular: true,
		defaultMeat: "veal",
		defaultSauce: "garlic"
	},
	{
		id: "chicken",
		category: "doner",
		price: 7.9,
		image: "/menu/chicken.jpg",
		flow: "kebab",
		defaultMeat: "chicken",
		defaultSauce: "herbs"
	},
	{
		id: "durum",
		category: "doner",
		price: 8.5,
		image: "/menu/durum.jpg",
		flow: "kebab",
		popular: true,
		defaultMeat: "veal",
		defaultSauce: "garlic"
	},
	{
		id: "plate",
		category: "doner",
		price: 11.9,
		image: "/menu/plate.jpg",
		flow: "kebab",
		defaultMeat: "veal",
		defaultSauce: "garlic"
	},
	{
		id: "box",
		category: "doner",
		price: 9.9,
		image: "/menu/box.jpg",
		flow: "kebab",
		defaultMeat: "veal",
		defaultSauce: "garlic"
	},
	{
		id: "falafel",
		category: "veggie",
		price: 7,
		image: "/menu/falafel.jpg",
		flow: "veggie",
		popular: true,
		defaultMeat: null,
		defaultSauce: "herbs"
	},
	{
		id: "halloumi",
		category: "veggie",
		price: 8.9,
		image: "/menu/halloumi.jpg",
		flow: "veggie",
		defaultMeat: null,
		defaultSauce: "herbs"
	},
	{
		id: "fries",
		category: "sides",
		price: 3.5,
		image: "/menu/fries.jpg",
		flow: "simple",
		defaultMeat: null,
		defaultSauce: null
	},
	{
		id: "sweetfries",
		category: "sides",
		price: 4.2,
		image: "/menu/sweet-fries.jpg",
		flow: "simple",
		defaultMeat: null,
		defaultSauce: null
	},
	{
		id: "ayran",
		category: "drinks",
		price: 2,
		image: "/menu/ayran.jpg",
		flow: "simple",
		popular: true,
		defaultMeat: null,
		defaultSauce: null
	},
	{
		id: "cola",
		category: "drinks",
		price: 2.5,
		image: "/menu/cola.jpg",
		flow: "simple",
		defaultMeat: null,
		defaultSauce: null
	},
	{
		id: "tea",
		category: "drinks",
		price: 1.5,
		image: "/menu/tea.jpg",
		flow: "simple",
		defaultMeat: null,
		defaultSauce: null
	},
	{
		id: "baklava",
		category: "desserts",
		price: 3.9,
		image: "/menu/baklava.jpg",
		flow: "simple",
		defaultMeat: null,
		defaultSauce: null
	},
	{
		id: "kunefe",
		category: "desserts",
		price: 4.5,
		image: "/menu/kunefe.jpg",
		flow: "simple",
		popular: true,
		defaultMeat: null,
		defaultSauce: null
	}
];
function productById(id) {
	return PRODUCTS.find((item) => item.id === id);
}
function unitPrice(product, selection) {
	let price = product.price;
	if (product.flow !== "simple" && selection.extraCheese) price += 1;
	if (product.flow !== "simple" && selection.doubleMeat) price += DOUBLE_MEAT;
	return price;
}
function formatEUR(value) {
	return new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "EUR"
	}).format(value);
}
var EMPTY_SELECTION = {
	meat: null,
	sauce: null,
	noOnion: false,
	extraCheese: false,
	doubleMeat: false,
	qty: 1
};
function signature(line) {
	return [
		line.productId,
		line.meat ?? "",
		line.sauce ?? "",
		line.noOnion ? "1" : "0",
		line.extraCheese ? "1" : "0",
		line.doubleMeat ? "1" : "0"
	].join("|");
}
var toastTimer = 0;
var useKiosk = create((set, get) => ({
	lang: "de",
	category: "doner",
	cart: [],
	productId: null,
	selection: EMPTY_SELECTION,
	sheet: false,
	cartOpen: false,
	screen: "menu",
	payMethod: null,
	orderNumber: 104,
	nextNumber: 104,
	toast: null,
	setLang: (lang) => set({ lang }),
	setCategory: (category) => set({ category }),
	openProduct: (id) => {
		const product = productById(id);
		if (!product) return;
		set({
			productId: id,
			cartOpen: false,
			sheet: true,
			selection: {
				meat: product.defaultMeat,
				sauce: product.defaultSauce,
				noOnion: false,
				extraCheese: false,
				doubleMeat: false,
				qty: 1
			}
		});
	},
	closeProduct: () => set({ sheet: false }),
	patchSelection: (patch) => set((state) => ({ selection: {
		...state.selection,
		...patch
	} })),
	addCurrent: () => {
		const { productId, selection, cart } = get();
		if (!productId) return;
		const draft = {
			productId,
			...selection,
			qty: Math.min(9, Math.max(1, selection.qty))
		};
		const key = signature(draft);
		const existing = cart.find((line) => signature(line) === key);
		const next = existing ? cart.map((line) => line.id === existing.id ? {
			...line,
			qty: Math.min(9, line.qty + draft.qty)
		} : line) : [...cart, {
			...draft,
			id: crypto.randomUUID()
		}];
		window.clearTimeout(toastTimer);
		set({
			cart: next,
			sheet: false,
			toast: "added"
		});
		toastTimer = window.setTimeout(() => {
			if (get().toast === "added") set({ toast: null });
		}, 1400);
	},
	setCartOpen: (cartOpen) => set({
		cartOpen,
		sheet: cartOpen ? false : get().sheet
	}),
	updateQty: (id, qty) => set((state) => ({ cart: qty <= 0 ? state.cart.filter((line) => line.id !== id) : state.cart.map((line) => line.id === id ? {
		...line,
		qty: Math.min(9, qty)
	} : line) })),
	removeLine: (id) => set((state) => ({ cart: state.cart.filter((line) => line.id !== id) })),
	goCheckout: () => {
		if (get().cart.length === 0) return;
		set({
			screen: "checkout",
			sheet: false,
			cartOpen: false,
			toast: null
		});
	},
	backToMenu: () => set({ screen: "menu" }),
	pay: (method) => set({
		payMethod: method,
		screen: method === "cash" ? "cash" : "terminal"
	}),
	cancelPay: () => set({
		screen: "checkout",
		payMethod: null
	}),
	completePay: () => {
		const { nextNumber, screen } = get();
		if (screen !== "terminal" && screen !== "cash") return;
		set({
			screen: "receipt",
			orderNumber: nextNumber,
			nextNumber: nextNumber + 1
		});
	},
	newOrder: () => set({
		cart: [],
		screen: "menu",
		sheet: false,
		cartOpen: false,
		payMethod: null,
		productId: null,
		toast: null,
		category: "doner"
	})
}));
var CATEGORY_ICON = {
	doner: Sandwich,
	veggie: Leaf,
	sides: Utensils,
	drinks: CupSoda,
	desserts: CakeSlice
};
function usePresence(open) {
	const [mounted, setMounted] = (0, import_react.useState)(open);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (open) {
			setMounted(true);
			const frame = requestAnimationFrame(() => setShown(true));
			return () => cancelAnimationFrame(frame);
		}
		setShown(false);
		const timer = window.setTimeout(() => setMounted(false), 320);
		return () => window.clearTimeout(timer);
	}, [open]);
	return {
		mounted,
		shown
	};
}
function lineDetail(line, product, text) {
	if (product.flow === "simple") return "";
	const parts = [];
	if (line.meat) parts.push(text.meats[line.meat]);
	if (line.sauce) parts.push(text.sauces[line.sauce]);
	if (line.noOnion) parts.push(text.noOnion);
	if (line.extraCheese) parts.push(text.extraCheese);
	if (line.doubleMeat) parts.push(line.meat === "veggie" || product.flow === "veggie" ? text.extraPortion : text.doubleMeat);
	return parts.join(" · ");
}
function KioskApp() {
	const lang = useKiosk((s) => s.lang);
	const screen = useKiosk((s) => s.screen);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang === "en" ? "en" : lang;
	}, [lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "kiosk-stage",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "kiosk-frame @container/kiosk",
			children: [
				screen === "menu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuScreen, {}) : null,
				screen === "checkout" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutScreen, {}) : null,
				screen === "terminal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalScreen, {}) : null,
				screen === "cash" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CashScreen, {}) : null,
				screen === "receipt" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReceiptScreen, {}) : null
			]
		})
	});
}
function MenuScreen() {
	const category = useKiosk((s) => s.category);
	const toast = useKiosk((s) => s.toast);
	const text = copy(useKiosk((s) => s.lang));
	const items = PRODUCTS.filter((item) => item.category === category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-0 flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 flex-col @min-[800px]/kiosk:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryRail, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "scroll-thin min-h-0 flex-1 overflow-y-auto px-4 pt-3 pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 @min-[980px]/kiosk:grid-cols-3",
						children: items.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
					}, category)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartBar, {}),
			toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-28 z-20 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "toast-in rounded-full bg-cream px-4 py-2 text-sm font-semibold text-ink",
					children: text.added
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomizeSheet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartSheet, {})
		]
	});
}
function Header() {
	const lang = useKiosk((s) => s.lang);
	const setLang = useKiosk((s) => s.setLang);
	const text = copy(lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "shrink-0 px-4 pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl leading-none tracking-tight text-cream",
				children: "RIVOLI"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs font-semibold tracking-[0.32em] text-gold",
				children: "KEBAB"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex rounded-full bg-panel p-1 ring-1 ring-line",
				role: "group",
				"aria-label": "Language",
				children: LANGS.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setLang(code),
					"aria-pressed": lang === code,
					className: cn("press min-h-11 min-w-11 rounded-full px-3 text-sm font-semibold tracking-wide", lang === code ? "bg-gold text-on-gold" : "text-cream-dim"),
					children: code.toUpperCase()
				}, code))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 mb-3 flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-4 text-center text-sm font-semibold text-on-gold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nfc, {
				className: "size-4 shrink-0",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text.banner })]
		})]
	});
}
function CategoryRail() {
	const lang = useKiosk((s) => s.lang);
	const category = useKiosk((s) => s.category);
	const setCategory = useKiosk((s) => s.setCategory);
	const text = copy(lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": text.categories.doner,
		className: "no-scrollbar flex shrink-0 gap-2 overflow-x-auto px-4 pb-1 @min-[800px]/kiosk:w-60 @min-[800px]/kiosk:flex-col @min-[800px]/kiosk:overflow-y-auto @min-[800px]/kiosk:px-3 @min-[800px]/kiosk:py-1",
		children: CATEGORIES.map((item) => {
			const Icon = CATEGORY_ICON[item.id];
			const active = category === item.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setCategory(item.id),
				"aria-pressed": active,
				className: cn("press flex min-h-14 shrink-0 items-center gap-3 rounded-2xl px-4 text-left ring-1 @min-[800px]/kiosk:min-h-20 @min-[800px]/kiosk:w-full", active ? "bg-gold text-on-gold ring-gold" : "bg-panel text-cream ring-line"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-6 shrink-0",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-base leading-tight @min-[800px]/kiosk:text-lg",
					children: text.categories[item.id]
				})]
			}, item.id);
		})
	});
}
function ProductCard({ product }) {
	const lang = useKiosk((s) => s.lang);
	const openProduct = useKiosk((s) => s.openProduct);
	const text = copy(lang);
	const name = text.products[product.id].name;
	const desc = text.products[product.id].desc;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => openProduct(product.id),
		className: "food-card card-in press flex flex-col overflow-hidden rounded-kiosk bg-card text-left ring-1 ring-line",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative block aspect-[4/3] overflow-hidden bg-lift",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: "",
				className: "h-full w-full object-cover"
			}), product.popular ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-2.5 left-2.5 rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-on-gold",
				children: text.popular
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-1 flex-col gap-1.5 p-3 @min-[800px]/kiosk:p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-base leading-tight text-cream @min-[800px]/kiosk:text-xl",
					children: name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "line-clamp-2 text-sm leading-snug text-mute",
					children: desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mt-auto flex items-center justify-between pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg text-gold @min-[800px]/kiosk:text-2xl",
						children: formatEUR(product.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-11 place-items-center rounded-full bg-gold text-on-gold",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" })
					})]
				})
			]
		})]
	});
}
function CartBar() {
	const lang = useKiosk((s) => s.lang);
	const cart = useKiosk((s) => s.cart);
	const setCartOpen = useKiosk((s) => s.setCartOpen);
	const goCheckout = useKiosk((s) => s.goCheckout);
	const text = copy(lang);
	const count = cart.reduce((sum, line) => sum + line.qty, 0);
	const total = cart.reduce((sum, line) => {
		const product = productById(line.productId);
		return product ? sum + unitPrice(product, line) * line.qty : sum;
	}, 0);
	const label = count === 1 ? text.itemsOne : text.itemsMany;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "shrink-0 border-t border-line bg-panel px-4 py-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 @min-[520px]/kiosk:flex-row @min-[520px]/kiosk:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => count > 0 && setCartOpen(true),
				disabled: count === 0,
				className: "press flex min-h-12 flex-1 items-center justify-between rounded-2xl px-1 text-left disabled:opacity-70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-cream-dim",
					children: count === 0 ? text.emptyCart : text.cart
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg text-cream",
					children: count === 0 ? formatEUR(0) : `${count} ${label}  |  ${formatEUR(total)}`
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: goCheckout,
				disabled: count === 0,
				className: "press flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-pay px-5 text-sm font-bold tracking-wide text-on-pay uppercase disabled:bg-lift disabled:text-mute @min-[520px]/kiosk:min-w-64",
				children: [text.checkout, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
					className: "size-5",
					"aria-hidden": true
				})]
			})]
		})
	});
}
function CustomizeSheet() {
	const open = useKiosk((s) => s.sheet);
	const { mounted, shown } = usePresence(open);
	const productId = useKiosk((s) => s.productId);
	const selection = useKiosk((s) => s.selection);
	const patch = useKiosk((s) => s.patchSelection);
	const close = useKiosk((s) => s.closeProduct);
	const addCurrent = useKiosk((s) => s.addCurrent);
	const text = copy(useKiosk((s) => s.lang));
	const product = productId ? productById(productId) : void 0;
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") close();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, close]);
	if (!mounted || !product) return null;
	const name = text.products[product.id].name;
	const desc = text.products[product.id].desc;
	const total = unitPrice(product, selection) * selection.qty;
	const portionLabel = selection.meat === "veggie" || product.flow === "veggie" ? text.extraPortion : text.doubleMeat;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-30 flex flex-col justify-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": text.close,
			className: cn("sheet-backdrop absolute inset-0", shown && "show"),
			onClick: close
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "customize-title",
			className: cn("sheet-panel relative z-10 flex max-h-[92%] flex-col rounded-t-kiosk bg-ink ring-1 ring-line", shown && "show"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-40 shrink-0 overflow-hidden rounded-t-kiosk @min-[800px]/kiosk:h-52",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: "",
						className: "h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: close,
						"aria-label": text.close,
						className: "press absolute top-3 right-3 grid size-11 place-items-center rounded-full bg-ink/80 text-cream ring-1 ring-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "scroll-thin min-h-0 flex-1 overflow-y-auto px-4 pt-4 pb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "customize-title",
							className: "font-display text-3xl leading-none text-cream",
							children: name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-mute",
							children: desc
						}),
						product.flow === "kebab" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionGroup, {
							step: "01",
							title: text.meatTitle,
							children: MEATS.map((meat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
								selected: selection.meat === meat,
								label: text.meats[meat],
								onClick: () => patch({ meat })
							}, meat))
						}) : null,
						product.flow !== "simple" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionGroup, {
							step: product.flow === "kebab" ? "02" : "01",
							title: text.sauceTitle,
							children: SAUCES.map((sauce) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
								selected: selection.sauce === sauce,
								label: text.sauces[sauce],
								onClick: () => patch({ sauce })
							}, sauce))
						}) : null,
						product.flow !== "simple" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OptionGroup, {
							step: product.flow === "kebab" ? "03" : "02",
							title: text.extrasTitle,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
									checked: selection.noOnion,
									label: text.noOnion,
									price: text.free,
									onClick: () => patch({ noOnion: !selection.noOnion })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
									checked: selection.extraCheese,
									label: text.extraCheese,
									price: `+ ${formatEUR(1)}`,
									onClick: () => patch({ extraCheese: !selection.extraCheese })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
									checked: selection.doubleMeat,
									label: portionLabel,
									price: `+ ${formatEUR(DOUBLE_MEAT)}`,
									onClick: () => patch({ doubleMeat: !selection.doubleMeat })
								})
							]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-wide text-mute uppercase",
								children: text.qty
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyControl, {
								qty: selection.qty,
								onChange: (qty) => patch({ qty })
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "shrink-0 border-t border-line p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: addCurrent,
						className: "press flex min-h-16 w-full items-center justify-between gap-3 rounded-2xl bg-gold px-5 text-on-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-left text-base font-bold leading-tight",
							children: text.add
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl",
							children: formatEUR(total)
						})]
					})
				})
			]
		})]
	});
}
function OptionGroup({ step, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "mb-2 flex items-baseline gap-2 font-display text-lg text-cream",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-gold",
				children: step
			}), title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-2",
			children
		})]
	});
}
function Choice({ selected, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		"aria-pressed": selected,
		className: cn("press flex min-h-14 items-center justify-between rounded-2xl px-4 text-left ring-1", selected ? "bg-gold/15 text-cream ring-gold" : "bg-panel text-cream-dim ring-line"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-base font-semibold",
			children: label
		}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "size-5 text-gold",
			"aria-hidden": true
		}) : null]
	});
}
function ToggleRow({ checked, label, price, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "checkbox",
		"aria-checked": checked,
		onClick,
		className: cn("press flex min-h-14 items-center justify-between gap-3 rounded-2xl px-4 text-left ring-1", checked ? "bg-gold/15 text-cream ring-gold" : "bg-panel text-cream-dim ring-line"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid size-6 place-items-center rounded-md ring-1", checked ? "bg-gold text-on-gold ring-gold" : "ring-line"),
				"aria-hidden": true,
				children: checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : null
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-base font-semibold",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-gold-soft",
			children: price
		})]
	});
}
function QtyControl({ qty, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "−",
				disabled: qty <= 1,
				onClick: () => onChange(qty - 1),
				className: "press grid size-12 place-items-center rounded-full bg-panel text-cream ring-1 ring-line disabled:opacity-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-8 text-center font-display text-2xl text-cream",
				children: qty
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "+",
				disabled: qty >= 9,
				onClick: () => onChange(qty + 1),
				className: "press grid size-12 place-items-center rounded-full bg-panel text-cream ring-1 ring-line disabled:opacity-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-5" })
			})
		]
	});
}
function CartSheet() {
	const open = useKiosk((s) => s.cartOpen);
	const { mounted, shown } = usePresence(open);
	const close = useKiosk((s) => s.setCartOpen);
	const cart = useKiosk((s) => s.cart);
	const updateQty = useKiosk((s) => s.updateQty);
	const removeLine = useKiosk((s) => s.removeLine);
	const goCheckout = useKiosk((s) => s.goCheckout);
	const text = copy(useKiosk((s) => s.lang));
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") close(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, close]);
	if (!mounted) return null;
	const total = cart.reduce((sum, line) => {
		const product = productById(line.productId);
		return product ? sum + unitPrice(product, line) * line.qty : sum;
	}, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-30 flex flex-col justify-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": text.close,
			className: cn("sheet-backdrop absolute inset-0", shown && "show"),
			onClick: () => close(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "cart-title",
			className: cn("sheet-panel relative z-10 flex max-h-[86%] flex-col rounded-t-kiosk bg-ink ring-1 ring-line", shown && "show"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 pt-4 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "cart-title",
						className: "font-display text-2xl text-cream",
						children: text.cart
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => close(false),
						"aria-label": text.close,
						className: "press grid size-11 place-items-center rounded-full bg-panel text-cream ring-1 ring-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "scroll-thin min-h-0 flex-1 overflow-y-auto px-4 pb-3",
					children: cart.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartRow, {
						line,
						onQty: updateQty,
						onRemove: removeLine
					}, line.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shrink-0 border-t border-line p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-mute",
							children: text.total
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl text-gold",
							children: formatEUR(total)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: goCheckout,
						className: "press flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-pay text-sm font-bold tracking-wide text-on-pay uppercase",
						children: [text.checkout, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })]
					})]
				})
			]
		})]
	});
}
function CartRow({ line, onQty, onRemove }) {
	const text = copy(useKiosk((s) => s.lang));
	const product = productById(line.productId);
	if (!product) return null;
	const name = text.products[product.id].name;
	const detail = lineDetail(line, product, text);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-3 border-b border-line py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: product.image,
			alt: "",
			className: "size-16 shrink-0 rounded-xl object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg leading-tight text-cream",
						children: name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "shrink-0 font-semibold text-gold",
						children: formatEUR(unitPrice(product, line) * line.qty)
					})]
				}),
				detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs leading-snug text-mute",
					children: detail
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyControl, {
						qty: line.qty,
						onChange: (qty) => onQty(line.id, qty)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onRemove(line.id),
						className: "press grid size-11 place-items-center rounded-full text-mute",
						"aria-label": text.remove,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-5" })
					})]
				})
			]
		})]
	});
}
function CheckoutScreen() {
	const lang = useKiosk((s) => s.lang);
	const cart = useKiosk((s) => s.cart);
	const back = useKiosk((s) => s.backToMenu);
	const pay = useKiosk((s) => s.pay);
	const text = copy(lang);
	const total = cart.reduce((sum, line) => {
		const product = productById(line.productId);
		return product ? sum + unitPrice(product, line) * line.qty : sum;
	}, 0);
	const methods = [
		{
			id: "card",
			label: text.payCard,
			hint: text.payCardHint,
			icon: CreditCard
		},
		{
			id: "apple",
			label: text.payApple,
			hint: text.payAppleHint,
			icon: Smartphone
		},
		{
			id: "google",
			label: text.payGoogle,
			hint: text.payGoogleHint,
			icon: Wallet
		},
		{
			id: "cash",
			label: text.payCash,
			hint: text.payCashHint,
			icon: Banknote
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise-in flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScreenHead, {
			title: text.payTitle,
			onBack: back,
			backLabel: text.back
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "scroll-thin min-h-0 flex-1 overflow-y-auto px-4 pb-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold tracking-wide text-mute uppercase",
					children: text.yourOrder
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 divide-y divide-line",
					children: cart.map((line) => {
						const product = productById(line.productId);
						if (!product) return null;
						const name = text.products[product.id].name;
						const detail = lineDetail(line, product, text);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start justify-between gap-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-base font-semibold text-cream",
									children: [
										line.qty,
										"× ",
										name
									]
								}), detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-mute",
									children: detail
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "shrink-0 text-cream-dim",
								children: formatEUR(unitPrice(product, line) * line.qty)
							})]
						}, line.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center justify-between border-t border-line pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-mute",
						children: text.total
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-3xl text-gold",
						children: formatEUR(total)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-2 gap-3",
					children: methods.map((method) => {
						const Icon = method.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => pay(method.id),
							className: "press flex min-h-32 flex-col items-start justify-between rounded-kiosk bg-card p-4 text-left ring-1 ring-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-12 place-items-center rounded-2xl bg-lift text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-6",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-lg leading-tight text-cream",
								children: method.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-xs text-mute",
								children: method.hint
							})] })]
						}, method.id);
					})
				})
			]
		})]
	});
}
function TerminalScreen() {
	const lang = useKiosk((s) => s.lang);
	const cancel = useKiosk((s) => s.cancelPay);
	const complete = useKiosk((s) => s.completePay);
	const text = copy(lang);
	(0, import_react.useEffect)(() => {
		const timer = window.setTimeout(complete, 2700);
		return () => window.clearTimeout(timer);
	}, [complete]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise-in flex min-h-0 flex-1 flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid size-36 place-items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nfc-ring" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nfc-ring nfc-ring-2" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "nfc-ring nfc-ring-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "relative grid size-20 place-items-center rounded-full bg-gold text-on-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nfc, {
							className: "size-9",
							"aria-hidden": true
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 max-w-xs font-display text-3xl leading-tight text-cream",
				children: text.holdCard
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm tracking-wide text-gold uppercase",
				children: text.holdSub
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-lift",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pay-fill h-full w-full bg-gold" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: cancel,
				className: "press mt-10 min-h-12 rounded-full px-6 text-sm font-semibold text-mute",
				children: text.cancel
			})
		]
	});
}
function CashScreen() {
	const lang = useKiosk((s) => s.lang);
	const cancel = useKiosk((s) => s.cancelPay);
	const complete = useKiosk((s) => s.completePay);
	const text = copy(lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise-in flex min-h-0 flex-1 flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-20 place-items-center rounded-full bg-lift text-gold ring-1 ring-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Banknote, {
					className: "size-9",
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 max-w-xs font-display text-3xl leading-tight text-cream",
				children: text.cashTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xs text-base leading-relaxed text-cream-dim",
				children: text.cashBody
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: complete,
				className: "press mt-8 flex min-h-14 w-full max-w-xs items-center justify-center rounded-2xl bg-gold text-base font-bold text-on-gold",
				children: text.toReceipt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: cancel,
				className: "press mt-3 min-h-12 text-sm font-semibold text-mute",
				children: text.cancel
			})
		]
	});
}
function ReceiptScreen() {
	const lang = useKiosk((s) => s.lang);
	const cart = useKiosk((s) => s.cart);
	const orderNumber = useKiosk((s) => s.orderNumber);
	const payMethod = useKiosk((s) => s.payMethod);
	const newOrder = useKiosk((s) => s.newOrder);
	const text = copy(lang);
	const total = cart.reduce((sum, line) => {
		const product = productById(line.productId);
		return product ? sum + unitPrice(product, line) * line.qty : sum;
	}, 0);
	const paid = payMethod !== "cash";
	const methodLabel = payMethod === "apple" ? text.payApple : payMethod === "google" ? text.payGoogle : payMethod === "cash" ? text.payCash : text.payCard;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise-in flex min-h-0 flex-1 flex-col px-5 pt-8 pb-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "check-pop mx-auto grid size-16 place-items-center rounded-full bg-pay text-on-pay",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "size-8",
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center font-display text-3xl text-cream",
				children: text.thanks
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-center text-sm tracking-wide text-mute uppercase",
				children: text.orderNo
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center font-display text-5xl tracking-tight text-gold",
				children: ["#", orderNumber]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "scroll-thin mt-5 min-h-0 flex-1 overflow-y-auto rounded-kiosk bg-card px-4 py-2 ring-1 ring-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-line",
					children: cart.map((line) => {
						const product = productById(line.productId);
						if (!product) return null;
						const name = text.products[product.id].name;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-3 py-2.5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-cream",
								children: [
									line.qty,
									"× ",
									name
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cream-dim",
								children: formatEUR(unitPrice(product, line) * line.qty)
							})]
						}, line.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-t border-dashed border-line py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-mute",
						children: methodLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl text-cream",
						children: formatEUR(total)
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center text-sm leading-relaxed text-cream-dim",
				children: paid ? text.paidNote : text.cashNote
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: newOrder,
				className: "press mt-4 flex min-h-14 w-full items-center justify-center rounded-2xl bg-pay text-sm font-bold tracking-wide text-on-pay uppercase",
				children: text.newOrder
			})
		]
	});
}
function ScreenHead({ title, onBack, backLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "shrink-0 px-4 pt-4 pb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onBack,
			className: "press mb-3 inline-flex min-h-11 items-center gap-1 rounded-full pr-3 text-sm font-semibold text-cream-dim",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
				className: "size-5",
				"aria-hidden": true
			}), backLabel]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl leading-tight text-cream",
			children: title
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KioskApp, {});
}
//#endregion
export { Home as component };
