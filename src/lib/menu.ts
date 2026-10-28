export type CategoryId = "doner" | "veggie" | "sides" | "drinks" | "desserts";
export type Flow = "kebab" | "veggie" | "simple";
export type Meat = "chicken" | "veal" | "veggie";
export type Sauce = "garlic" | "herbs" | "spicy";

export type Product = {
  id: string;
  category: CategoryId;
  price: number;
  image: string;
  flow: Flow;
  popular?: boolean;
  defaultMeat: Meat | null;
  defaultSauce: Sauce | null;
};

export const CATEGORIES: { id: CategoryId }[] = [
  { id: "doner" },
  { id: "veggie" },
  { id: "sides" },
  { id: "drinks" },
  { id: "desserts" },
];

export const MEATS: Meat[] = ["chicken", "veal", "veggie"];
export const SAUCES: Sauce[] = ["garlic", "herbs", "spicy"];

export const EXTRA_CHEESE = 1;
export const DOUBLE_MEAT = 2.5;

export const PRODUCTS: Product[] = [
  {
    id: "doner",
    category: "doner",
    price: 7.5,
    image: "/menu/doner.jpg",
    flow: "kebab",
    popular: true,
    defaultMeat: "veal",
    defaultSauce: "garlic",
  },
  {
    id: "chicken",
    category: "doner",
    price: 7.9,
    image: "/menu/chicken.jpg",
    flow: "kebab",
    defaultMeat: "chicken",
    defaultSauce: "herbs",
  },
  {
    id: "durum",
    category: "doner",
    price: 8.5,
    image: "/menu/durum.jpg",
    flow: "kebab",
    popular: true,
    defaultMeat: "veal",
    defaultSauce: "garlic",
  },
  {
    id: "plate",
    category: "doner",
    price: 11.9,
    image: "/menu/plate.jpg",
    flow: "kebab",
    defaultMeat: "veal",
    defaultSauce: "garlic",
  },
  {
    id: "box",
    category: "doner",
    price: 9.9,
    image: "/menu/box.jpg",
    flow: "kebab",
    defaultMeat: "veal",
    defaultSauce: "garlic",
  },
  {
    id: "falafel",
    category: "veggie",
    price: 7,
    image: "/menu/falafel.jpg",
    flow: "veggie",
    popular: true,
    defaultMeat: null,
    defaultSauce: "herbs",
  },
  {
    id: "halloumi",
    category: "veggie",
    price: 8.9,
    image: "/menu/halloumi.jpg",
    flow: "veggie",
    defaultMeat: null,
    defaultSauce: "herbs",
  },
  {
    id: "fries",
    category: "sides",
    price: 3.5,
    image: "/menu/fries.jpg",
    flow: "simple",
    defaultMeat: null,
    defaultSauce: null,
  },
  {
    id: "sweetfries",
    category: "sides",
    price: 4.2,
    image: "/menu/sweet-fries.jpg",
    flow: "simple",
    defaultMeat: null,
    defaultSauce: null,
  },
  {
    id: "ayran",
    category: "drinks",
    price: 2,
    image: "/menu/ayran.jpg",
    flow: "simple",
    popular: true,
    defaultMeat: null,
    defaultSauce: null,
  },
  {
    id: "cola",
    category: "drinks",
    price: 2.5,
    image: "/menu/cola.jpg",
    flow: "simple",
    defaultMeat: null,
    defaultSauce: null,
  },
  {
    id: "tea",
    category: "drinks",
    price: 1.5,
    image: "/menu/tea.jpg",
    flow: "simple",
    defaultMeat: null,
    defaultSauce: null,
  },
  {
    id: "baklava",
    category: "desserts",
    price: 3.9,
    image: "/menu/baklava.jpg",
    flow: "simple",
    defaultMeat: null,
    defaultSauce: null,
  },
  {
    id: "kunefe",
    category: "desserts",
    price: 4.5,
    image: "/menu/kunefe.jpg",
    flow: "simple",
    popular: true,
    defaultMeat: null,
    defaultSauce: null,
  },
];

export type ProductId = (typeof PRODUCTS)[number]["id"];

export function productById(id: string) {
  return PRODUCTS.find((item) => item.id === id);
}

export type PricedSelection = {
  extraCheese: boolean;
  doubleMeat: boolean;
};

export function unitPrice(product: Product, selection: PricedSelection) {
  let price = product.price;
  if (product.flow !== "simple" && selection.extraCheese) price += EXTRA_CHEESE;
  if (product.flow !== "simple" && selection.doubleMeat) price += DOUBLE_MEAT;
  return price;
}

export function formatEUR(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}
