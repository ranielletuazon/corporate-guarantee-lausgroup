import newsData from "./news.json";

export interface NewsPost {
    id: number;
    slug: string;
    category: string;
    title: string;
    images: string[]; // bare filenames only, e.g. "cebu-branch-1.jpg"
    description: string;
    status: "published" | "draft";
    published_date: string | null;
    created_date: string;
}

const allPosts = newsData as NewsPost[];

// Base path where news images are served from (public/news/)
const NEWS_IMAGE_BASE = "/news/";

/**
 * Resolve a bare filename from JSON to its public URL path.
 */
export function resolveImage(filename: string): string {
    return `${NEWS_IMAGE_BASE}${filename}`;
}

export function getPublishedNews(): NewsPost[] {
    return allPosts
        .filter((post) => post.status === "published" && post.published_date)
        .sort(
            (a, b) =>
                new Date(b.published_date as string).getTime() -
                new Date(a.published_date as string).getTime(),
        );
}

export function getLatestNews(limit: number): NewsPost[] {
    return getPublishedNews().slice(0, limit);
}

/**
 * Featured image = first image in the array, resolved to its public URL.
 * Returns null only if the post has no images at all.
 */
export function getFeaturedImage(post: NewsPost): string | null {
    if (post.images.length === 0) return null;
    return resolveImage(post.images[0]);
}

export function getNewsBySlug(slug: string): NewsPost | undefined {
    return allPosts.find(
        (post) => post.slug === slug && post.status === "published",
    );
}
