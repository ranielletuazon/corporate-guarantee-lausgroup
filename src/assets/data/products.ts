import productsData from "./products.json";

export interface CoverageItem {
    name: string;
    desc: string;
}

export interface Coverage {
    name: string;
    desc: string | null; // null when the coverage only has nested items
    items?: CoverageItem[]; // optional nested sub-coverages
}

export interface Product {
    id: number;
    label: string;
    slug: string;
    image: string;
    logo: string;
    desc: string;
    tags: string[];
    moreCount: number | null;
    path: string;
    intro: string;
    coverages: Coverage[];
    hidden?: boolean;
}

const allProducts = productsData as Product[];

// Eagerly map all product images from src/assets/images/
const imageModules = import.meta.glob<string>(
    "../../assets/images/*.{jpg,jpeg,png,webp}",
    { eager: true, import: "default" },
);

// Eagerly map all product logos from src/assets/logos/
const logoModules = import.meta.glob<string>(
    "../../assets/logos/*.{jpg,jpeg,png,webp}",
    { eager: true, import: "default" },
);

// Build filename → bundled URL lookup maps
function buildMap(modules: Record<string, string>): Record<string, string> {
    const map: Record<string, string> = {};
    for (const path in modules) {
        const filename = path.split("/").pop()!;
        map[filename] = modules[path];
    }
    return map;
}

const imageMap = buildMap(imageModules);
const logoMap = buildMap(logoModules);

// Resolve a bare image filename to its Vite-bundled URL.
// Returns null if the file doesn't exist in the glob scan.
export function getProductImage(filename: string): string | null {
    return imageMap[filename] ?? null;
}

// Resolve a bare logo filename to its Vite-bundled URL.
// Returns null if the file doesn't exist in the glob scan.
export function getProductLogo(filename: string): string | null {
    return logoMap[filename] ?? null;
}

// All products in their defined JSON order (Motor → Bonds). Includes hidden ones —
// use only for direct lookups, never for rendering a list/grid.
export function getAllProducts(): Product[] {
    return allProducts;
}

// Products meant for public listings — Home grid, Products page grid,
// "Other Products" sidebar. Excludes anything marked hidden.
export function getVisibleProducts(): Product[] {
    return allProducts.filter((p) => !p.hidden);
}

// Single product lookup by slug — for individual product pages.
// Returns undefined for hidden products too, so a direct/guessed URL
// to a hidden product's slug still resolves to NotFound rather than
// rendering it through the generic ProductsView layout.
export function getProductBySlug(slug: string): Product | undefined {
    return allProducts.find((p) => p.slug === slug && !p.hidden);
}
