import { create } from "zustand";
import type { Copy, Lang } from "@/lib/i18n";
import {
  productById,
  type CategoryId,
  type Meat,
  type Sauce,
} from "@/lib/menu";

export type PayMethod = "card" | "apple" | "google" | "cash";
export type Screen = "menu" | "checkout" | "terminal" | "cash" | "receipt";

export type Selection = {
  meat: Meat | null;
  sauce: Sauce | null;
  noOnion: boolean;
  extraCheese: boolean;
  doubleMeat: boolean;
  qty: number;
};

export type CartLine = Selection & {
  id: string;
  productId: string;
};

const EMPTY_SELECTION: Selection = {
  meat: null,
  sauce: null,
  noOnion: false,
  extraCheese: false,
  doubleMeat: false,
  qty: 1,
};

function signature(line: { productId: string } & Selection) {
  return [
    line.productId,
    line.meat ?? "",
    line.sauce ?? "",
    line.noOnion ? "1" : "0",
    line.extraCheese ? "1" : "0",
    line.doubleMeat ? "1" : "0",
  ].join("|");
}

type KioskState = {
  lang: Lang;
  category: CategoryId;
  cart: CartLine[];
  productId: string | null;
  selection: Selection;
  sheet: boolean;
  cartOpen: boolean;
  screen: Screen;
  payMethod: PayMethod | null;
  orderNumber: number;
  nextNumber: number;
  toast: keyof Pick<Copy, "added"> | null;
  setLang: (lang: Lang) => void;
  setCategory: (category: CategoryId) => void;
  openProduct: (id: string) => void;
  closeProduct: () => void;
  patchSelection: (patch: Partial<Selection>) => void;
  addCurrent: () => void;
  setCartOpen: (open: boolean) => void;
  updateQty: (id: string, qty: number) => void;
  removeLine: (id: string) => void;
  goCheckout: () => void;
  backToMenu: () => void;
  pay: (method: PayMethod) => void;
  cancelPay: () => void;
  completePay: () => void;
  newOrder: () => void;
};

let toastTimer = 0;

export const useKiosk = create<KioskState>((set, get) => ({
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
        qty: 1,
      },
    });
  },
  closeProduct: () => set({ sheet: false }),
  patchSelection: (patch) =>
    set((state) => ({ selection: { ...state.selection, ...patch } })),
  addCurrent: () => {
    const { productId, selection, cart } = get();
    if (!productId) return;
    const draft = { productId, ...selection, qty: Math.min(9, Math.max(1, selection.qty)) };
    const key = signature(draft);
    const existing = cart.find((line) => signature(line) === key);
    const next = existing
      ? cart.map((line) =>
          line.id === existing.id
            ? { ...line, qty: Math.min(9, line.qty + draft.qty) }
            : line,
        )
      : [...cart, { ...draft, id: crypto.randomUUID() }];
    window.clearTimeout(toastTimer);
    set({ cart: next, sheet: false, toast: "added" });
    toastTimer = window.setTimeout(() => {
      if (get().toast === "added") set({ toast: null });
    }, 1400);
  },
  setCartOpen: (cartOpen) => set({ cartOpen, sheet: cartOpen ? false : get().sheet }),
  updateQty: (id, qty) =>
    set((state) => ({
      cart:
        qty <= 0
          ? state.cart.filter((line) => line.id !== id)
          : state.cart.map((line) =>
              line.id === id ? { ...line, qty: Math.min(9, qty) } : line,
            ),
    })),
  removeLine: (id) => set((state) => ({ cart: state.cart.filter((line) => line.id !== id) })),
  goCheckout: () => {
    if (get().cart.length === 0) return;
    set({ screen: "checkout", sheet: false, cartOpen: false, toast: null });
  },
  backToMenu: () => set({ screen: "menu" }),
  pay: (method) =>
    set({
      payMethod: method,
      screen: method === "cash" ? "cash" : "terminal",
    }),
  cancelPay: () => set({ screen: "checkout", payMethod: null }),
  completePay: () => {
    const { nextNumber, screen } = get();
    if (screen !== "terminal" && screen !== "cash") return;
    set({ screen: "receipt", orderNumber: nextNumber, nextNumber: nextNumber + 1 });
  },
  newOrder: () =>
    set({
      cart: [],
      screen: "menu",
      sheet: false,
      cartOpen: false,
      payMethod: null,
      productId: null,
      toast: null,
      category: "doner",
    }),
}));
