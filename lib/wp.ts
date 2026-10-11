// Cliente minimo para la WP REST API (headless).
export const WP_URL = process.env.WP_URL ?? 'https://example.com';

export type WPPost = { id: number; slug: string; title: { rendered: string }; excerpt: { rendered: string } };

export async function fetchPosts(perPage = 10): Promise<WPPost[]> {
  const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts?per_page=${perPage}`, {
    next: { revalidate: 600 },
  });
  if (!res.ok) throw new Error(`WP REST ${res.status}`);
  return (await res.json()) as WPPost[];
}
