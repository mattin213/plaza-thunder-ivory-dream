import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  Banknote,
  CakeSlice,
  Check,
  ChevronRight,
  CreditCard,
  CupSoda,
  Leaf,
  Minus,
  Nfc,
  Plus,
  Sandwich,
  Smartphone,
  Trash2,
  Utensils,
  Wallet,
  X,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { copy, LANGS } from "@/lib/i18n";
import {
  CATEGORIES,
  DOUBLE_MEAT,
  EXTRA_CHEESE,
  formatEUR,
  MEATS,
  productById,
  PRODUCTS,
  SAUCES,
  unitPrice,
  type CategoryId,
  type Product,
} from "@/lib/menu";
import { useKiosk, type CartLine, type PayMethod, type Selection } from "@/lib/store";

const CATEGORY_ICON: Record<CategoryId, typeof Sandwich> = {
  doner: Sandwich,
  veggie: Leaf,
  sides: Utensils,
  drinks: CupSoda,
  desserts: CakeSlice,
};

function usePresence(open: boolean) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const frame = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(frame);
    }
    setShown(false);
    const timer = window.setTimeout(() => setMounted(false), 320);
    return () => window.clearTimeout(timer);
  }, [open]);

  return { mounted, shown };
}

function lineDetail(line: Selection, product: Product, text: ReturnType<typeof copy>) {
  if (product.flow === "simple") return "";
  const parts: string[] = [];
  if (line.meat) parts.push(text.meats[line.meat]);
  if (line.sauce) parts.push(text.sauces[line.sauce]);
  if (line.noOnion) parts.push(text.noOnion);
  if (line.extraCheese) parts.push(text.extraCheese);
  if (line.doubleMeat) parts.push(line.meat === "veggie" || product.flow === "veggie" ? text.extraPortion : text.doubleMeat);
  return parts.join(" · ");
}

export function KioskApp() {
  const lang = useKiosk((s) => s.lang);
  const screen = useKiosk((s) => s.screen);

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : lang;
  }, [lang]);

  return (
    <div className="kiosk-stage">
      <div className="kiosk-frame @container/kiosk">
        {screen === "menu" ? <MenuScreen /> : null}
        {screen === "checkout" ? <CheckoutScreen /> : null}
        {screen === "terminal" ? <TerminalScreen /> : null}
        {screen === "cash" ? <CashScreen /> : null}
        {screen === "receipt" ? <ReceiptScreen /> : null}
      </div>
    </div>
  );
}

function MenuScreen() {
  const category = useKiosk((s) => s.category);
  const toast = useKiosk((s) => s.toast);
  const lang = useKiosk((s) => s.lang);
  const text = copy(lang);
  const items = PRODUCTS.filter((item) => item.category === category);

  return (
    <div className="relative flex min-h-0 flex-1 flex-col">
      <Header />
      <div className="flex min-h-0 flex-1 flex-col @min-[800px]/kiosk:flex-row">
        <CategoryRail />
        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-4 pt-3 pb-4">
          <div key={category} className="grid grid-cols-2 gap-3 @min-[980px]/kiosk:grid-cols-3">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <CartBar />
      {toast ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-28 z-20 flex justify-center">
          <p className="toast-in rounded-full bg-cream px-4 py-2 text-sm font-semibold text-ink">{text.added}</p>
        </div>
      ) : null}
      <CustomizeSheet />
      <CartSheet />
    </div>
  );
}

function Header() {
  const lang = useKiosk((s) => s.lang);
  const setLang = useKiosk((s) => s.setLang);
  const text = copy(lang);

  return (
    <header className="shrink-0 px-4 pt-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-3xl leading-none tracking-tight text-cream">RIVOLI</p>
          <p className="mt-1 text-xs font-semibold tracking-[0.32em] text-gold">KEBAB</p>
        </div>
        <div className="flex rounded-full bg-panel p-1 ring-1 ring-line" role="group" aria-label="Language">
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={cn(
                "press min-h-11 min-w-11 rounded-full px-3 text-sm font-semibold tracking-wide",
                lang === code ? "bg-gold text-on-gold" : "text-cream-dim",
              )}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 mb-3 flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-4 text-center text-sm font-semibold text-on-gold">
        <Nfc className="size-4 shrink-0" aria-hidden />
        <span>{text.banner}</span>
      </p>
    </header>
  );
}

function CategoryRail() {
  const lang = useKiosk((s) => s.lang);
  const category = useKiosk((s) => s.category);
  const setCategory = useKiosk((s) => s.setCategory);
  const text = copy(lang);

  return (
    <nav
      aria-label={text.categories.doner}
      className="no-scrollbar flex shrink-0 gap-2 overflow-x-auto px-4 pb-1 @min-[800px]/kiosk:w-60 @min-[800px]/kiosk:flex-col @min-[800px]/kiosk:overflow-y-auto @min-[800px]/kiosk:px-3 @min-[800px]/kiosk:py-1"
    >
      {CATEGORIES.map((item) => {
        const Icon = CATEGORY_ICON[item.id];
        const active = category === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => setCategory(item.id)}
            aria-pressed={active}
            className={cn(
              "press flex min-h-14 shrink-0 items-center gap-3 rounded-2xl px-4 text-left ring-1 @min-[800px]/kiosk:min-h-20 @min-[800px]/kiosk:w-full",
              active ? "bg-gold text-on-gold ring-gold" : "bg-panel text-cream ring-line",
            )}
          >
            <Icon className="size-6 shrink-0" aria-hidden />
            <span className="font-display text-base leading-tight @min-[800px]/kiosk:text-lg">
              {text.categories[item.id]}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

function ProductCard({ product }: { product: Product }) {
  const lang = useKiosk((s) => s.lang);
  const openProduct = useKiosk((s) => s.openProduct);
  const text = copy(lang);
  const name = text.products[product.id as keyof typeof text.products].name;
  const desc = text.products[product.id as keyof typeof text.products].desc;

  return (
    <button
      type="button"
      onClick={() => openProduct(product.id)}
      className="food-card card-in press flex flex-col overflow-hidden rounded-kiosk bg-card text-left ring-1 ring-line"
    >
      <span className="relative block aspect-[4/3] overflow-hidden bg-lift">
        <img src={product.image} alt="" className="h-full w-full object-cover" />
        {product.popular ? (
          <span className="absolute top-2.5 left-2.5 rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-on-gold">
            {text.popular}
          </span>
        ) : null}
      </span>
      <span className="flex flex-1 flex-col gap-1.5 p-3 @min-[800px]/kiosk:p-4">
        <span className="font-display text-base leading-tight text-cream @min-[800px]/kiosk:text-xl">{name}</span>
        <span className="line-clamp-2 text-sm leading-snug text-mute">{desc}</span>
        <span className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-lg text-gold @min-[800px]/kiosk:text-2xl">{formatEUR(product.price)}</span>
          <span className="grid size-11 place-items-center rounded-full bg-gold text-on-gold" aria-hidden>
            <Plus className="size-5" />
          </span>
        </span>
      </span>
    </button>
  );
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

  return (
    <footer className="shrink-0 border-t border-line bg-panel px-4 py-3">
      <div className="flex flex-col gap-3 @min-[520px]/kiosk:flex-row @min-[520px]/kiosk:items-center">
        <button
          type="button"
          onClick={() => count > 0 && setCartOpen(true)}
          disabled={count === 0}
          className="press flex min-h-12 flex-1 items-center justify-between rounded-2xl px-1 text-left disabled:opacity-70"
        >
          <span className="text-sm text-cream-dim">{count === 0 ? text.emptyCart : text.cart}</span>
          <span className="font-display text-lg text-cream">
            {count === 0 ? formatEUR(0) : `${count} ${label}  |  ${formatEUR(total)}`}
          </span>
        </button>
        <button
          type="button"
          onClick={goCheckout}
          disabled={count === 0}
          className="press flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-pay px-5 text-sm font-bold tracking-wide text-on-pay uppercase disabled:bg-lift disabled:text-mute @min-[520px]/kiosk:min-w-64"
        >
          {text.checkout}
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </footer>
  );
}

function CustomizeSheet() {
  const open = useKiosk((s) => s.sheet);
  const { mounted, shown } = usePresence(open);
  const productId = useKiosk((s) => s.productId);
  const selection = useKiosk((s) => s.selection);
  const patch = useKiosk((s) => s.patchSelection);
  const close = useKiosk((s) => s.closeProduct);
  const addCurrent = useKiosk((s) => s.addCurrent);
  const lang = useKiosk((s) => s.lang);
  const text = copy(lang);
  const product = productId ? productById(productId) : undefined;

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!mounted || !product) return null;
  const name = text.products[product.id as keyof typeof text.products].name;
  const desc = text.products[product.id as keyof typeof text.products].desc;
  const total = unitPrice(product, selection) * selection.qty;
  const portionLabel = selection.meat === "veggie" || product.flow === "veggie" ? text.extraPortion : text.doubleMeat;

  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-end">
      <button
        type="button"
        aria-label={text.close}
        className={cn("sheet-backdrop absolute inset-0", shown && "show")}
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="customize-title"
        className={cn(
          "sheet-panel relative z-10 flex max-h-[92%] flex-col rounded-t-kiosk bg-ink ring-1 ring-line",
          shown && "show",
        )}
      >
        <div className="relative h-40 shrink-0 overflow-hidden rounded-t-kiosk @min-[800px]/kiosk:h-52">
          <img src={product.image} alt="" className="h-full w-full object-cover" />
          <button
            type="button"
            onClick={close}
            aria-label={text.close}
            className="press absolute top-3 right-3 grid size-11 place-items-center rounded-full bg-ink/80 text-cream ring-1 ring-line"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-4 pt-4 pb-3">
          <h2 id="customize-title" className="font-display text-3xl leading-none text-cream">
            {name}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-mute">{desc}</p>

          {product.flow === "kebab" ? (
            <OptionGroup step="01" title={text.meatTitle}>
              {MEATS.map((meat) => (
                <Choice
                  key={meat}
                  selected={selection.meat === meat}
                  label={text.meats[meat]}
                  onClick={() => patch({ meat })}
                />
              ))}
            </OptionGroup>
          ) : null}

          {product.flow !== "simple" ? (
            <OptionGroup step={product.flow === "kebab" ? "02" : "01"} title={text.sauceTitle}>
              {SAUCES.map((sauce) => (
                <Choice
                  key={sauce}
                  selected={selection.sauce === sauce}
                  label={text.sauces[sauce]}
                  onClick={() => patch({ sauce })}
                />
              ))}
            </OptionGroup>
          ) : null}

          {product.flow !== "simple" ? (
            <OptionGroup step={product.flow === "kebab" ? "03" : "02"} title={text.extrasTitle}>
              <ToggleRow
                checked={selection.noOnion}
                label={text.noOnion}
                price={text.free}
                onClick={() => patch({ noOnion: !selection.noOnion })}
              />
              <ToggleRow
                checked={selection.extraCheese}
                label={text.extraCheese}
                price={`+ ${formatEUR(EXTRA_CHEESE)}`}
                onClick={() => patch({ extraCheese: !selection.extraCheese })}
              />
              <ToggleRow
                checked={selection.doubleMeat}
                label={portionLabel}
                price={`+ ${formatEUR(DOUBLE_MEAT)}`}
                onClick={() => patch({ doubleMeat: !selection.doubleMeat })}
              />
            </OptionGroup>
          ) : null}

          <div className="mt-5 flex items-center justify-between">
            <p className="text-sm font-semibold tracking-wide text-mute uppercase">{text.qty}</p>
            <QtyControl qty={selection.qty} onChange={(qty) => patch({ qty })} />
          </div>
        </div>
        <div className="shrink-0 border-t border-line p-4">
          <button
            type="button"
            onClick={addCurrent}
            className="press flex min-h-16 w-full items-center justify-between gap-3 rounded-2xl bg-gold px-5 text-on-gold"
          >
            <span className="text-left text-base font-bold leading-tight">{text.add}</span>
            <span className="font-display text-xl">{formatEUR(total)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function OptionGroup({ step, title, children }: { step: string; title: string; children: ReactNode }) {
  return (
    <section className="mt-5">
      <h3 className="mb-2 flex items-baseline gap-2 font-display text-lg text-cream">
        <span className="text-sm text-gold">{step}</span>
        {title}
      </h3>
      <div className="grid gap-2">{children}</div>
    </section>
  );
}

function Choice({ selected, label, onClick }: { selected: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "press flex min-h-14 items-center justify-between rounded-2xl px-4 text-left ring-1",
        selected ? "bg-gold/15 text-cream ring-gold" : "bg-panel text-cream-dim ring-line",
      )}
    >
      <span className="text-base font-semibold">{label}</span>
      {selected ? <Check className="size-5 text-gold" aria-hidden /> : null}
    </button>
  );
}

function ToggleRow({
  checked,
  label,
  price,
  onClick,
}: {
  checked: boolean;
  label: string;
  price: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onClick}
      className={cn(
        "press flex min-h-14 items-center justify-between gap-3 rounded-2xl px-4 text-left ring-1",
        checked ? "bg-gold/15 text-cream ring-gold" : "bg-panel text-cream-dim ring-line",
      )}
    >
      <span className="flex items-center gap-3">
        <span
          className={cn(
            "grid size-6 place-items-center rounded-md ring-1",
            checked ? "bg-gold text-on-gold ring-gold" : "ring-line",
          )}
          aria-hidden
        >
          {checked ? <Check className="size-4" /> : null}
        </span>
        <span className="text-base font-semibold">{label}</span>
      </span>
      <span className="text-sm text-gold-soft">{price}</span>
    </button>
  );
}

function QtyControl({ qty, onChange }: { qty: number; onChange: (qty: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label="−"
        disabled={qty <= 1}
        onClick={() => onChange(qty - 1)}
        className="press grid size-12 place-items-center rounded-full bg-panel text-cream ring-1 ring-line disabled:opacity-40"
      >
        <Minus className="size-5" />
      </button>
      <span className="w-8 text-center font-display text-2xl text-cream">{qty}</span>
      <button
        type="button"
        aria-label="+"
        disabled={qty >= 9}
        onClick={() => onChange(qty + 1)}
        className="press grid size-12 place-items-center rounded-full bg-panel text-cream ring-1 ring-line disabled:opacity-40"
      >
        <Plus className="size-5" />
      </button>
    </div>
  );
}

function CartSheet() {
  const open = useKiosk((s) => s.cartOpen);
  const { mounted, shown } = usePresence(open);
  const close = useKiosk((s) => s.setCartOpen);
  const cart = useKiosk((s) => s.cart);
  const updateQty = useKiosk((s) => s.updateQty);
  const removeLine = useKiosk((s) => s.removeLine);
  const goCheckout = useKiosk((s) => s.goCheckout);
  const lang = useKiosk((s) => s.lang);
  const text = copy(lang);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
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

  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-end">
      <button
        type="button"
        aria-label={text.close}
        className={cn("sheet-backdrop absolute inset-0", shown && "show")}
        onClick={() => close(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className={cn(
          "sheet-panel relative z-10 flex max-h-[86%] flex-col rounded-t-kiosk bg-ink ring-1 ring-line",
          shown && "show",
        )}
      >
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <h2 id="cart-title" className="font-display text-2xl text-cream">
            {text.cart}
          </h2>
          <button
            type="button"
            onClick={() => close(false)}
            aria-label={text.close}
            className="press grid size-11 place-items-center rounded-full bg-panel text-cream ring-1 ring-line"
          >
            <X className="size-5" />
          </button>
        </div>
        <ul className="scroll-thin min-h-0 flex-1 overflow-y-auto px-4 pb-3">
          {cart.map((line) => (
            <CartRow key={line.id} line={line} onQty={updateQty} onRemove={removeLine} />
          ))}
        </ul>
        <div className="shrink-0 border-t border-line p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-mute">{text.total}</span>
            <span className="font-display text-2xl text-gold">{formatEUR(total)}</span>
          </div>
          <button
            type="button"
            onClick={goCheckout}
            className="press flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-pay text-sm font-bold tracking-wide text-on-pay uppercase"
          >
            {text.checkout}
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function CartRow({
  line,
  onQty,
  onRemove,
}: {
  line: CartLine;
  onQty: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}) {
  const lang = useKiosk((s) => s.lang);
  const text = copy(lang);
  const product = productById(line.productId);
  if (!product) return null;
  const name = text.products[product.id as keyof typeof text.products].name;
  const detail = lineDetail(line, product, text);

  return (
    <li className="flex gap-3 border-b border-line py-3">
      <img src={product.image} alt="" className="size-16 shrink-0 rounded-xl object-cover" />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="font-display text-lg leading-tight text-cream">{name}</p>
          <p className="shrink-0 font-semibold text-gold">{formatEUR(unitPrice(product, line) * line.qty)}</p>
        </div>
        {detail ? <p className="mt-1 text-xs leading-snug text-mute">{detail}</p> : null}
        <div className="mt-2 flex items-center justify-between">
          <QtyControl qty={line.qty} onChange={(qty) => onQty(line.id, qty)} />
          <button
            type="button"
            onClick={() => onRemove(line.id)}
            className="press grid size-11 place-items-center rounded-full text-mute"
            aria-label={text.remove}
          >
            <Trash2 className="size-5" />
          </button>
        </div>
      </div>
    </li>
  );
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

  const methods: { id: PayMethod; label: string; hint: string; icon: typeof CreditCard }[] = [
    { id: "card", label: text.payCard, hint: text.payCardHint, icon: CreditCard },
    { id: "apple", label: text.payApple, hint: text.payAppleHint, icon: Smartphone },
    { id: "google", label: text.payGoogle, hint: text.payGoogleHint, icon: Wallet },
    { id: "cash", label: text.payCash, hint: text.payCashHint, icon: Banknote },
  ];

  return (
    <div className="rise-in flex min-h-0 flex-1 flex-col">
      <ScreenHead title={text.payTitle} onBack={back} backLabel={text.back} />
      <div className="scroll-thin min-h-0 flex-1 overflow-y-auto px-4 pb-4">
        <p className="text-sm font-semibold tracking-wide text-mute uppercase">{text.yourOrder}</p>
        <ul className="mt-2 divide-y divide-line">
          {cart.map((line) => {
            const product = productById(line.productId);
            if (!product) return null;
            const name = text.products[product.id as keyof typeof text.products].name;
            const detail = lineDetail(line, product, text);
            return (
              <li key={line.id} className="flex items-start justify-between gap-3 py-3">
                <div className="min-w-0">
                  <p className="text-base font-semibold text-cream">
                    {line.qty}× {name}
                  </p>
                  {detail ? <p className="mt-0.5 text-xs text-mute">{detail}</p> : null}
                </div>
                <p className="shrink-0 text-cream-dim">{formatEUR(unitPrice(product, line) * line.qty)}</p>
              </li>
            );
          })}
        </ul>
        <div className="mt-2 flex items-center justify-between border-t border-line pt-3">
          <span className="text-mute">{text.total}</span>
          <span className="font-display text-3xl text-gold">{formatEUR(total)}</span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {methods.map((method) => {
            const Icon = method.icon;
            return (
              <button
                key={method.id}
                type="button"
                onClick={() => pay(method.id)}
                className="press flex min-h-32 flex-col items-start justify-between rounded-kiosk bg-card p-4 text-left ring-1 ring-line"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-lift text-gold">
                  <Icon className="size-6" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-lg leading-tight text-cream">{method.label}</span>
                  <span className="mt-1 block text-xs text-mute">{method.hint}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TerminalScreen() {
  const lang = useKiosk((s) => s.lang);
  const cancel = useKiosk((s) => s.cancelPay);
  const complete = useKiosk((s) => s.completePay);
  const text = copy(lang);

  useEffect(() => {
    const timer = window.setTimeout(complete, 2700);
    return () => window.clearTimeout(timer);
  }, [complete]);

  return (
    <div className="rise-in flex min-h-0 flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="relative grid size-36 place-items-center">
        <span className="nfc-ring" />
        <span className="nfc-ring nfc-ring-2" />
        <span className="nfc-ring nfc-ring-3" />
        <span className="relative grid size-20 place-items-center rounded-full bg-gold text-on-gold">
          <Nfc className="size-9" aria-hidden />
        </span>
      </div>
      <h2 className="mt-8 max-w-xs font-display text-3xl leading-tight text-cream">{text.holdCard}</h2>
      <p className="mt-2 text-sm tracking-wide text-gold uppercase">{text.holdSub}</p>
      <div className="mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-lift">
        <div className="pay-fill h-full w-full bg-gold" />
      </div>
      <button
        type="button"
        onClick={cancel}
        className="press mt-10 min-h-12 rounded-full px-6 text-sm font-semibold text-mute"
      >
        {text.cancel}
      </button>
    </div>
  );
}

function CashScreen() {
  const lang = useKiosk((s) => s.lang);
  const cancel = useKiosk((s) => s.cancelPay);
  const complete = useKiosk((s) => s.completePay);
  const text = copy(lang);

  return (
    <div className="rise-in flex min-h-0 flex-1 flex-col items-center justify-center px-6 text-center">
      <span className="grid size-20 place-items-center rounded-full bg-lift text-gold ring-1 ring-line">
        <Banknote className="size-9" aria-hidden />
      </span>
      <h2 className="mt-6 max-w-xs font-display text-3xl leading-tight text-cream">{text.cashTitle}</h2>
      <p className="mt-3 max-w-xs text-base leading-relaxed text-cream-dim">{text.cashBody}</p>
      <button
        type="button"
        onClick={complete}
        className="press mt-8 flex min-h-14 w-full max-w-xs items-center justify-center rounded-2xl bg-gold text-base font-bold text-on-gold"
      >
        {text.toReceipt}
      </button>
      <button type="button" onClick={cancel} className="press mt-3 min-h-12 text-sm font-semibold text-mute">
        {text.cancel}
      </button>
    </div>
  );
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
  const methodLabel =
    payMethod === "apple"
      ? text.payApple
      : payMethod === "google"
        ? text.payGoogle
        : payMethod === "cash"
          ? text.payCash
          : text.payCard;

  return (
    <div className="rise-in flex min-h-0 flex-1 flex-col px-5 pt-8 pb-5">
      <div className="check-pop mx-auto grid size-16 place-items-center rounded-full bg-pay text-on-pay">
        <Check className="size-8" aria-hidden />
      </div>
      <p className="mt-4 text-center font-display text-3xl text-cream">{text.thanks}</p>
      <p className="mt-1 text-center text-sm tracking-wide text-mute uppercase">{text.orderNo}</p>
      <p className="text-center font-display text-5xl tracking-tight text-gold">#{orderNumber}</p>
      <div className="scroll-thin mt-5 min-h-0 flex-1 overflow-y-auto rounded-kiosk bg-card px-4 py-2 ring-1 ring-line">
        <ul className="divide-y divide-line">
          {cart.map((line) => {
            const product = productById(line.productId);
            if (!product) return null;
            const name = text.products[product.id as keyof typeof text.products].name;
            return (
              <li key={line.id} className="flex items-baseline justify-between gap-3 py-2.5 text-sm">
                <span className="text-cream">
                  {line.qty}× {name}
                </span>
                <span className="text-cream-dim">{formatEUR(unitPrice(product, line) * line.qty)}</span>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-between border-t border-dashed border-line py-3">
          <span className="text-mute">{methodLabel}</span>
          <span className="font-display text-2xl text-cream">{formatEUR(total)}</span>
        </div>
      </div>
      <p className="mt-4 text-center text-sm leading-relaxed text-cream-dim">{paid ? text.paidNote : text.cashNote}</p>
      <button
        type="button"
        onClick={newOrder}
        className="press mt-4 flex min-h-14 w-full items-center justify-center rounded-2xl bg-pay text-sm font-bold tracking-wide text-on-pay uppercase"
      >
        {text.newOrder}
      </button>
    </div>
  );
}

function ScreenHead({ title, onBack, backLabel }: { title: string; onBack: () => void; backLabel: string }) {
  return (
    <div className="shrink-0 px-4 pt-4 pb-3">
      <button
        type="button"
        onClick={onBack}
        className="press mb-3 inline-flex min-h-11 items-center gap-1 rounded-full pr-3 text-sm font-semibold text-cream-dim"
      >
        <ArrowLeft className="size-5" aria-hidden />
        {backLabel}
      </button>
      <h1 className="font-display text-3xl leading-tight text-cream">{title}</h1>
    </div>
  );
}
