"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Gorilla Classic Polo",
    category: "Polo",
    price: 35000,
    image: "/images/gorilla-polo.jpg",
  },
  {
    id: 2,
    name: "Gorilla Vintage T-Shirt",
    category: "T-Shirt",
    price: 30000,
    image: "/images/gorilla-tshirt.jpg",
  },
  {
    id: 3,
    name: "Gorilla Street Shorts",
    category: "Shorts",
    price: 28000,
    image: "/images/gorilla-shorts.jpg",
  },
  {
    id: 4,
    name: "Gorilla Cargo Trousers",
    category: "Trousers",
    price: 40000,
    image: "/images/gorilla-trousers.jpg",
  },
  {
    id: 5,
    name: "Gorilla Classic Pants",
    category: "Pants",
    price: 42000,
    image: "/images/gorilla-pants.jpg",
  },
  {
    id: 6,
    name: "Gorilla Gym Top",
    category: "Gym Wear",
    price: 32000,
    image: "/images/gorilla-gym-top.jpg",
  },
  {
    id: 7,
    name: "Gorilla Gym Shorts",
    category: "Gym Wear",
    price: 28000,
    image: "/images/gorilla-gym-shorts.jpg",
  },
  {
    id: 8,
    name: "Gorilla Head Band",
    category: "Accessories",
    price: 15000,
    image: "/images/gorilla-headband.jpg",
  },
  {
    id: 9,
    name: "Gorilla Jersey",
    category: "Jersey",
    price: 40000,
    image: "/images/gorilla-jersey.jpg",
  },
];

const categories = [
  "All",
  "Polo",
  "T-Shirt",
  "Shorts",
  "Trousers",
  "Pants",
  "Gym Wear",
  "Jersey",
  "Accessories",
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<Product[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce((total, product) => total + product.price, 0);

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center text-3xl font-black tracking-[0.08em] text-white">
              G
              <div className="mx-[-2px] flex h-9 w-9 items-center justify-center">
                <div className="text-3xl">🦍</div>
              </div>
              RILLA
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-semibold uppercase tracking-widest text-white hover:text-zinc-400"
            >
              Home
            </a>

            <a
              href="#shop"
              className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white"
            >
              Shop
            </a>

            <a
              href="#collections"
              className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white"
            >
              Collections
            </a>

            <a
              href="#about"
              className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-xl transition hover:scale-110"
            >
              ⌕
            </button>

            <button className="hidden text-xl transition hover:scale-110 sm:block">
              ♙
            </button>

            <button
              className="relative text-xl transition hover:scale-110"
              onClick={() =>
                document
                  .getElementById("cart")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              🛒
              {cart.length > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-black">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* SEARCH BAR */}
        {searchOpen && (
          <div className="border-t border-white/10 bg-[#111] px-5 py-4">
            <div className="mx-auto max-w-3xl">
              <input
                type="text"
                placeholder="Search Gorilla clothing..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
                className="w-full rounded-full border border-white/20 bg-black px-5 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-white"
              />
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[650px] overflow-hidden border-b border-white/10"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,#303030_0%,#111_35%,#050505_75%)]" />

        <div className="absolute right-[-100px] top-[-100px] text-[420px] opacity-[0.04]">
          🦍
        </div>

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center px-5 py-20 md:grid-cols-2 md:px-8">
          
          {/* HERO TEXT */}
          <div className="z-10">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.5em] text-zinc-400">
              Premium Streetwear
            </p>

            <h1 className="text-7xl font-black uppercase leading-[0.85] tracking-[-0.04em] md:text-[120px]">
              G
              <span className="inline-block">🦍</span>
              RILLA
            </h1>

            <div className="mt-8 h-[2px] w-32 bg-white" />

            <h2 className="mt-6 text-2xl font-black uppercase tracking-[0.3em] md:text-4xl">
              Wear The Strength
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-zinc-400">
              Premium clothing built for people who move different.
              Vintage attitude. Modern streetwear. Unapologetic strength.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:bg-zinc-300"
              >
                Shop Now →
              </a>

              <a
                href="#collections"
                className="rounded-full border border-white/30 px-8 py-4 text-sm font-black uppercase tracking-widest transition hover:bg-white hover:text-black"
              >
                Explore
              </a>
            </div>
          </div>

          {/* HERO MODEL / BRAND ART */}
          <div className="relative mt-12 flex min-h-[400px] items-center justify-center md:mt-0">
            <div className="absolute h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-3xl" />

            <div className="relative text-center">
              <div className="text-[180px] leading-none grayscale opacity-90 md:text-[260px]">
                🦍
              </div>

              <div className="mt-[-30px]">
                <p className="text-4xl font-black tracking-[0.25em] text-white">
                  GORILLA
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.5em] text-zinc-500">
                  Built Different
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <Feature icon="✦" title="Premium Quality" />
          <Feature icon="◈" title="Vintage Design" />
          <Feature icon="♜" title="Built To Last" />
          <Feature icon="⚡" title="Fast Delivery" />
        </div>
      </section>

      {/* COLLECTIONS */}
      <section
        id="collections"
        className="mx-auto max-w-7xl px-5 py-24 md:px-8"
      >
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-500">
            Shop The Collection
          </p>

          <h2 className="mt-3 text-5xl font-black uppercase tracking-tight md:text-7xl">
            Gorilla Wear
          </h2>

          <div className="mx-auto mt-5 h-[2px] w-20 bg-white" />
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="mb-10 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-widest transition ${
                selectedCategory === category
                  ? "border-white bg-white text-black"
                  : "border-white/20 text-zinc-400 hover:border-white hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div
          id="shop"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={() => addToCart(product)}
              formatPrice={formatPrice}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl font-bold uppercase">
              No Gorilla products found
            </p>
            <p className="mt-2 text-zinc-500">
              Try another search or category.
            </p>
          </div>
        )}
      </section>

      {/* PROMO BANNER */}
      <section className="border-y border-white/10 bg-[#111]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="flex min-h-[450px] flex-col justify-center px-6 py-16 md:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-500">
              Gorilla Lifestyle
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase leading-none md:text-7xl">
              More Than
              <br />
              A Brand.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-zinc-400">
              Gorilla represents strength, confidence, discipline and
              individuality. Every piece is designed to make a statement.
            </p>

            <a
              href="#shop"
              className="mt-8 w-fit rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-widest text-black"
            >
              Explore Gorilla →
            </a>
          </div>

          <div className="relative min-h-[450px] overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[300px] opacity-20 grayscale">🦍</div>
            </div>

            <div className="absolute bottom-8 left-8">
              <p className="text-6xl font-black uppercase tracking-tighter">
                GORILLA
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.4em] text-zinc-400">
                Strength Never Goes Out Of Style
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-500">
              The Gorilla Story
            </p>

            <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
              Made For
              <br />
              The Bold.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-zinc-400">
              Gorilla is a streetwear brand built around strength,
              individuality and confidence. From everyday T-shirts and polos
              to gym wear, jerseys and accessories, our pieces are designed
              for people who refuse to blend in.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              Our signature gorilla mark represents power, resilience and the
              mentality of always pushing forward.
            </p>
          </div>
        </div>
      </section>

      {/* CART */}
      <section id="cart" className="border-t border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.5em] text-zinc-500">
                Your Selection
              </p>

              <h2 className="mt-2 text-5xl font-black uppercase">
                Shopping Cart
              </h2>
            </div>

            <p className="text-zinc-500">
              {cart.length} item{cart.length !== 1 ? "s" : ""}
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-white/10 bg-black p-10 text-center">
              <div className="text-6xl">🛒</div>
              <h3 className="mt-4 text-xl font-black uppercase">
                Your cart is empty
              </h3>
              <p className="mt-2 text-sm text-zinc-500">
                Add some Gorilla pieces to get started.
              </p>
              <a
                href="#shop"
                className="mt-6 inline-block rounded-full bg-white px-7 py-3 text-xs font-black uppercase tracking-widest text-black"
              >
                Start Shopping
              </a>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_350px]">
              <div className="space-y-3">
                {cart.map((product, index) => (
                  <div
                    key={`${product.id}-${index}`}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-black p-4"
                  >
                    <div>
                      <p className="font-bold uppercase">{product.name}</p>
                      <p className="mt-1 text-sm text-zinc-500">
                        {formatPrice(product.price)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-xs font-bold uppercase text-zinc-500 hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/10 bg-black p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Order Total
                </p>

                <p className="mt-3 text-4xl font-black">
                  {formatPrice(cartTotal)}
                </p>

                <button className="mt-6 w-full rounded-full bg-white py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-zinc-300">
                  Proceed To Checkout →
                </button>

                <p className="mt-4 text-center text-xs text-zinc-600">
                  Secure checkout • Nationwide delivery
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
          <div className="grid gap-10 md:grid-cols-4">
            
            <div className="md:col-span-2">
              <div className="text-4xl font-black tracking-widest">
                G<span>🦍</span>RILLA
              </div>

              <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-500">
                Premium streetwear for people who move different.
                Strength, style and confidence in every piece.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-widest">
                Shop
              </h3>

              <div className="mt-5 space-y-3 text-sm text-zinc-500">
                <a href="#shop" className="block hover:text-white">
                  T-Shirts
                </a>
                <a href="#shop" className="block hover:text-white">
                  Polos
                </a>
                <a href="#shop" className="block hover:text-white">
                  Gym Wear
                </a>
                <a href="#shop" className="block hover:text-white">
                  Jerseys
                </a>
                <a href="#shop" className="block hover:text-white">
                  Accessories
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-widest">
                Contact
              </h3>

              <div className="mt-5 space-y-3 text-sm text-zinc-500">
                <p>📍 Nigeria</p>
                <p>📞 +234 XXX XXX XXXX</p>
                <p>✉️ hello@gorilla.com</p>
                <p>🚚 Nationwide Delivery</p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-zinc-600 md:flex-row">
            <p>© 2026 GORILLA. All Rights Reserved.</p>

            <div className="flex gap-5">
              <a href="#" className="hover:text-white">
                Instagram
              </a>
              <a href="#" className="hover:text-white">
                TikTok
              </a>
              <a href="#" className="hover:text-white">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* PRODUCT CARD */
function ProductCard({
  product,
  onAdd,
  formatPrice,
}: {
  product: Product;
  onAdd: () => void;
  formatPrice: (price: number) => string;
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-[#111] transition duration-300 hover:-translate-y-1 hover:border-white/30">
      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden bg-[#181818]">
        <img
          src={product.image}
          alt={`${product.name} - Gorilla clothing`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest">
          {product.category}
        </div>

        <div className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1.5 text-[10px] font-black text-black">
          GORILLA
        </div>
      </div>

      {/* DETAILS */}
      <div className="p-5">
        <h3 className="font-black uppercase tracking-wide">
          {product.name}
        </h3>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-lg font-black">{formatPrice(product.price)}</p>

          <button
            onClick={onAdd}
            className="rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-wider text-black transition hover:bg-zinc-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </article>
  );
}

/* FEATURE */
function Feature({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 border-white/10 px-5 py-7 md:border-r">
      <span className="text-2xl">{icon}</span>

      <div>
        <p className="text-xs font-black uppercase tracking-widest">
          {title}
        </p>

        <p className="mt-1 text-xs text-zinc-600">
          Gorilla quality
        </p>
      </div>
    </div>
  );
}